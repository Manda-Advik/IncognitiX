import { useState } from "react";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
  IconMenu2,
} from "@tabler/icons-react";

const NavbarLink = ({ icon: Icon, label, active, onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center gap-3 p-3 w-full rounded-lg transition-all group ${
        active ? "bg-primary text-white flex items-center justify-center" : ""
      }`}
    >
      <div className="w-5 h-5 flex items-center justify-center rounded-lg group-hover:bg-base-300 transition">
        <Icon size={24} stroke={1.5} />
      </div>
      {isOpen && <span>{label}</span>}
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: IconHome2, label: "Home" },
    { icon: IconGauge, label: "Dashboard" },
    { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
    { icon: IconCalendarStats, label: "Releases" },
    { icon: IconUser, label: "Account" },
    { icon: IconFingerprint, label: "Security" },
    { icon: IconSettings, label: "Settings" },
  ];

  return (
    <nav
      className={`bg-base-200 h-screen p-4 flex flex-col justify-between sticky top-0 transition-all duration-300 ${
        isOpen ? "w-64" : "w-18"
      }`}
    >
      {/* Toggle Button */}
      <button
        className="p-0 rounded-lg hover:bg-base-100 transition absolute top-14 right-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconMenu2 size={24} stroke={1.5} />
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        {links.map((link, index) => (
          <NavbarLink
            key={link.label}
            {...link}
            active={index === active}
            onClick={() => setActive(index)}
            isOpen={isOpen}
          />
        ))}
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        <NavbarLink
          icon={IconSwitchHorizontal}
          label="Change account"
          isOpen={isOpen}
        />
        <NavbarLink icon={IconLogout} label="Logout" isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
