import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const UserCard = ({ name }: any) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="h-[100px] w-[100px] overflow-hidden rounded-full border p-2">
          <Image
            src="/icons/7.png"
            width={100}
            height={100}
            alt="icon-profile"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center gap-2">
            <p className="text-xl font-medium">NAME</p>
            <CheckCircleIcon className="size-5 fill-blue-500" />
          </div>
          <p>{`@${name}`}</p>
        </div>
      </div>
      
      <div>
        <div className="flex gap-2">
          <div className="rounded-md bg-blue-200 p-2">good</div>
          <div className="rounded-md bg-red-200 p-2">bad</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
