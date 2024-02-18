import { useState } from "react";

const MenuButton = () => {
  const [active, setActive] = useState(false);
  return (
    <a
      id="menu-button"
      className="cursor-pointer flex justify-center items-center h-8 w-8 z-[12] ml-2 relative"
      onClick={() => setActive(!active)}
    >
      <span
        aria-hidden="true"
        className={`block h-[2px]  dark:bg-gray-100 w-[25px] absolute top-1/2 left-1/2 -translate-x-1/2 transform transition ease-in-out duration-500 delay-400 ${
          active
            ? "-translate-y-1/2 rotate-45 bg-white"
            : "-translate-y-[10px] bg-gray-700"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block h-[2px] w-[25px] bg-gray-700 dark:bg-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition ease-in-out duration-500 delay-400 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`block h-[2px] bg-gray-700 dark:bg-gray-100 w-[25px] absolute top-1/2 left-1/2 -translate-x-1/2 transform transition ease-in-out duration-500 delay-400 ${
          active
            ? "-translate-y-1/2 -rotate-45 bg-white"
            : "translate-y-[10px] bg-gray-700"
        }`}
      ></span>
    </a>
  );
};
export default MenuButton;
