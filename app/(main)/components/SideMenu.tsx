import React from "react";
import ProfileCard from "./ProfileCard";
import NavMenu from "./NavMenu";

const SideMenu = () => {
  return (
    <div className="fixed min-w-[250px]">
      <div className="mb-4">
        <ProfileCard />
      </div>

      <NavMenu />
    </div>
  );
};

export default SideMenu;
