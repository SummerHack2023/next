import NextAuth from "next-auth";
import { connectDB } from "/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        studentId: { label: "학번", type: "text" },
        password: { label: "비밀번호", type: "password" },
    },

      async authorize(credentials) {
        let db = (await connectDB).db("hack");
        let user = await db
          .collection("user_cred")
          .findOne({ studentId: credentials.studentId });
        if (!user) {
          console.log("해당 학번 없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("비번틀림");
          return null;
        }
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 하루
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.studentId = user.studentId;
        token.user.name = user.name;
        token.user.department = user.department;
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
    async redirect() {
     return '/board'
   },
  },

  adapter: MongoDBAdapter(connectDB),
  secret: process.env.NEXT_PUBLIC_JWT_PWD,
};
export default NextAuth(authOptions);
