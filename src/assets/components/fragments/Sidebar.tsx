import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { type IconType } from "react-icons";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type MenuItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type SocialItem = {
  // 3. Gunakan IconType di sini
  icon: IconType;
  label: string;
  href: string;
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialItem[] = [
    { icon: FaGithub, label: "GitHub", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
  ];

  return (
    <>
      {/* NAVBAR (mobile only) */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden backdrop-blur bg-zinc-900/80">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100 bg-orange-600 text-amber-50"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-bold text-amber-50">SilvanusWeb</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 backdrop-blur bg-zinc-900/80 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-orange-600">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 text-amber-50"
            >
              <X size={20} />
            </button>
          </div>

          {/* NAVIGATION */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-indigo-50 group"
              >
                <item.icon
                  size={20}
                  className="text-amber-50 hover:text-amber-200"
                />
                <span className="font-medium text-amber-50 group-hover:text-indigo-600">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
          {/* SOCIAL */}
          <div className="border-t border-slate-200 pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-indigo-600 flex items-center justify-center group"
                >
                  <social.icon
                    size={18}
                    className="text-slate-600 group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
