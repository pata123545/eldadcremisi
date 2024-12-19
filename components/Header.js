import Link from "next/link";
import Image from "next/image";

// component
import Nav from "./Nav";

    
const Header = () => {
    return (
       <header className="fixed xl:w-full flex-wrap top-0 py-8 xl:py-12 shadow-lg">
        <div className="container mx-auto  h-7 max-w-screen-xl  flex items-center justify-between">
          {/* logo */}
          <Link href="/">
          <Image 
          src="/img/logo.png" 
          alt="logo" 
          width={250} 
          height={250}
          className="float-right"
          />
          </Link>
          {/*desktop nav*/}
          <div className="hidden xl:flex items-center justify-center text-primary gap-8">
          <Nav />
          </div>
          <Link href="tel:5541251234" 
          className="text-lg bg-btn rounded-xl left-0 px-5 py-2 text-white float-left">
            (555) 412-1234
            </Link>

        </div>
        </header>
    );
};

export default Header;