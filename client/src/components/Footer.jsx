import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
function FooterComponent() {
  return (
    <Footer className=" border border-t-8 border-sky-400 p-5 bg-[#2a4076] flex flex-col items-center sm:py-9">
      <div className="w-full sm:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 ">
        <div className="sm:flex sm:items-center">
          <Link
            to="/"
            className=" self-center whitespace-nowrap text-xl  sm:text-2xl font-semibold text-white dark:text-white"
          >
            <span className=" px-2 py-1 bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 rounded-lg text-white">
              User's
            </span>
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500">
              Blog
            </span>
          </Link>
        </div>
        <div className=" w-full mt-5 sm:mt-0 flex justify-between sm:justify-evenly  ">
          <div>
            <Footer.Title title="About Us" className=" text-white" />
            <Footer.LinkGroup col className=" text-slate-300">
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </Footer.Link>
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Owner
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Follow US" className=" text-white" />
            <Footer.LinkGroup col className=" text-slate-300">
              <Footer.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Footer.Link>
              <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                Discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className=" text-white" />
            <Footer.LinkGroup col className=" text-slate-300">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider className="sm:w-5/6 w-full" />
      <div className="sm:w-5/6 w-full flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:justify-between  ">
        <Footer.Copyright
          href="#"
          by="User's Blog"
          year={new Date().getFullYear()}
          className=" text-slate-300"
        />
        <div className="flex gap-6 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
          <Footer.Icon href="#" icon={BsDribbble} />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
