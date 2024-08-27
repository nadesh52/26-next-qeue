import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="rounded-md bg-white p-4 cursor-pointer group/profile">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="max-h-[50px] max-w-[50px] overflow-hidden rounded-xl border">
            <Image
              src="/icons/8.png"
              width={100}
              height={100}
              alt="icon-profile"
            />
          </div>
          <div>
            <div className="text-lg font-medium">NAME</div>
            <div className="text-slate-500">@username</div>
          </div>
        </div>
        <div>
          <ChevronRightIcon className="size-6 transition-all ease-in-out group-hover/profile:translate-x-2" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
