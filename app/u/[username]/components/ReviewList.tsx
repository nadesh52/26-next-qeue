import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ReviewList = () => {
  return (
    <div className="flex flex-col rounded-md p-2 shadow-md">
      <div className="flex gap-2 items-center">
        <div className="h-[52px] w-[52px]">
          <HeartIcon className="size-10 fill-blue-600" />
        </div>

        <div className="mb-4 w-full flex flex-col">
          <p className="text-lg font-medium">subject</p>
          <p>
            bought at <span>22/09/2024</span>
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex min-w-[100px] flex-col justify-between">
          <Image src="/icons/6.png" height={100} width={100} alt="item" />
        </div>

        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          ipsam inventore nesciunt quia harum in esse accusamus quaerat
          consequatur numquam.
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
