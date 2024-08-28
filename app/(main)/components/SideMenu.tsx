import React from "react";
import ProfileCard from "./ProfileCard";
import NavMenu from "./NavMenu";
import LinkButton from "@/components/LinkButton";

const SideMenu = () => {
  return (
    <div className="fixed min-w-[250px] space-y-4">
      <NavMenu />

      <LinkButton href='/create'>Create new queue</LinkButton>

      <ProfileCard />
    </div>
  );
};

export default SideMenu;
