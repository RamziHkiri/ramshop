import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";

const redressed = Redressed({ subsets:["latin"],weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div
      className="
        sticky
        top-0
        bg-gradient-to-r from-sky-200 to-sky-500 mb-8
        z-30
        shadow-sm"
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex
            item-center
            justify-between
            gap-3
            md:gap-0
            "
          >
            <Link className={`${redressed.className}  font-bold  text-2xl text-white`} href="/">Essouri Distribution</Link>
            <div className="hidden md:block ">Search</div>
            <div
              className="
            flex 
            items-center 
            gap-8 
            md:gap-12
            "
            >
              <CartCount />
              <UserMenu currentUser={currentUser}/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
