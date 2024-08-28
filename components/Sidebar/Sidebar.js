import React from "react";
import SideHeader from "./SideHeader";
import SidenavItems from "./SidenavItems";
import SidebarFooter from "./SidebarFooter";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useTheme } from "next-themes";
const Sidebar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className=" w-min ">
        <div className="navbar grid  p-3 w-min bg-amber-200 dark:bg-yellow-950  rounded-3xl">
          <SideHeader />
          <SidenavItems />
          <SidebarFooter />
        </div>
        <div className="mt-4 p-4 flex justify-evenly">
          <div className="bg-black rounded-full p-3">
            <FiSettings size={40} color="yellow" />
          </div>
          <div
            className="bg-black rounded-full p-3"
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            <HiOutlineLightBulb size={40} color="yellow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
