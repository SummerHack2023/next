import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SignOutBtn from '../components/SignOutBtn'
import "public/css/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar_links">
        <div className="navbar_logo">
          <Link href="/" style={{ color: "black" }}>
            Logo
          </Link>
        </div>
        <Link href="/board">게시판</Link>
        <Link href="/random">랜덤팀원구하기</Link>
      </div>
      <div className="navbar_Buttons">
        <div className="navbar_search">
          <input type="text" placeholder="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </div>
        <SignOutBtn />
      </div>
    </nav>
  );
}
