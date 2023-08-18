import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import SignInBtn from "./components/SignInBtn";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="w-full h-full flex items-center justify-center">
      {!session && (
        <div>
          <SignInBtn />
          <Link href="/signup" className="ml-2 text-[blue] ">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}
