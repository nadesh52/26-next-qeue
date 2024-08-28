import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex cursor-pointer items-center justify-between bg-white p-2">
      <div>
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
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium">NAME</p>
              <CheckCircleIcon className="size-5 fill-blue-500" />
            </div>
            <div className="text-slate-500">@username</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="rounded-md bg-blue-200 p-2">good</div>
        <div className="rounded-md bg-red-200 p-2">bad</div>
      </div>
    </div>
  );
};

export default UserCard;
