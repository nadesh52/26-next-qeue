import Title from "@/components/Title";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const UserList = () => {
  return (
    <section className="space-y-4">
        <Title>Users</Title>
      <div className="flex items-center justify-between rounded-md bg-white p-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="max-h-[50px] max-w-[50px] overflow-hidden rounded-full border border-slate-400">
            <Image
              src="/icons/7.png"
              width={100}
              height={100}
              alt="icon-profile"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="text-xl font-medium">NAME</p>
              <CheckCircleIcon className="size-5 fill-blue-500" />
            </div>
            <div className="text-sm text-slate-400">@username</div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="rounded-md bg-blue-200 p-2">good</div>
          <div className="rounded-md bg-red-200 p-2">bad</div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
