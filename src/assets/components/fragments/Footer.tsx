import { FaGithub, FaInstagram } from "react-icons/fa";
import Icon from "../elements/Icon";
import NavLink from "../elements/NavLink";

export default function Footer() {
  return (
    <div className="w-full h-72 bg-slate-900 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-between mb-6">
          <div className="flex space-x-5">
            <Icon href="https://github.com/Kukuh01">
              <FaGithub />
            </Icon>
            <Icon href="https://www.instagram.com/silvanuskukuhp">
              <FaInstagram />
            </Icon>
          </div>
          <div className="flex space-x-20">
            <div className="flex flex-col text-amber-50 space-y-2">
              <p className="text-2xl text-amber-50">Quick Links</p>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/articles">Articles</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <div className="flex flex-col text-amber-50 space-y-2">
              <p className="text-2xl text-amber-50">Contact Me</p>
              <NavLink href="/">Instagram</NavLink>
              <NavLink href="/contact">Linkedin</NavLink>
              <NavLink href="/product">Email</NavLink>
            </div>
          </div>
        </div>
        <hr className="text-gray-800 mb-5" />
        <p className="text-center text-xl text-gray-500">
          @ 2025 Silvanus Kukuh Prasetyo . All rights reserved
        </p>
      </div>
    </div>
  );
}
