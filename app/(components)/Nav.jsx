// "use client";
import { AiOutlineHome } from "react-icons/ai";
import { FaTicketAlt } from "react-icons";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = async () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon w-5" />
        </Link>
        <Link href="/TaskPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon w-6" />
        </Link>
      </div>
      <div className="flex gap-4 items-center pr-8">
        <p className="nav-links">John Doe</p>

        <Link className="nav-links" href="/api/auth/signout?callbackUrl=/">
          Logout
        </Link>
        <Link className="nav-links" href="/api/auth/signin">
          Login
        </Link>
        

      </div>
    </nav>
  );
};

export default Nav;
