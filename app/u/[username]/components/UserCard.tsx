import Image from "next/image";
import React from "react";

const UserCard = ({ name }: any) => {
  return (
    <>
      <div className="h-[100px] w-[100px] overflow-hidden rounded-full border p-2">
        <Image src="/icons/7.png" width={100} height={100} alt="icon-profile" />
      </div>
      <div className="p-2">
        <p className="text-xl font-medium">NAME</p>
        <p>{`@${name}`}</p>
      </div>
    </>
  );
};

export default UserCard;
