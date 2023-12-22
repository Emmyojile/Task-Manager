"use client";
import { AiOutlineHome } from "react-icons/ai";
import { FaTicketAlt } from "react-icons";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Nav = async () => {
  const { data: session } = useSession();
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

        {/* <Link className="nav-links" href="/Register">
          Register
        </Link>
        <Link className="nav-links" href="/Login">
          Login
        </Link> */}
        
        {!session ? (
            <>
              <Link href="/Login" className="nav-links">
                <li>Login</li>
              </Link>
              <Link href="/Register" className="nav-links">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}

      </div>
    </nav>
  );
};

export default Nav;
