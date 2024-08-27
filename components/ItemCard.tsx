import Image from "next/image";
import React from "react";

const ItemCard = () => {
  return (
    <div className="flex flex-col rounded-md p-2 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-slate-400">
          Item ID: <span className="font-medium">345345</span>
        </p>
        <p className="text-sm text-slate-400">
          Listed: <span>05/10/2024</span>
        </p>
      </div>
      <div className="flex gap-4 bg-white">
        <div className="min-w-[100px]">
          <Image src="/icons/6.png" height={100} width={100} alt="item" />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="flex justify-between gap-4">
            <div className="flex-1 rounded-md bg-slate-100 p-2">
              <p className="text-lg">
                Lorem ipsum dolor sit, elit. aliquam numquam culpa iure
              </p>
            </div>

            <div className="h-20x flex w-20 shrink flex-col items-center justify-center rounded-md bg-slate-100 p-2">
              <p className="text-2xl font-medium">15</p>
              <p>Min./Q</p>
            </div>

            <div className="h-20x flex w-20 flex-col items-center justify-center rounded-md bg-slate-100 p-2">
              <p className="text-2xl font-medium">60</p>
              <p className="text-sm">Q Before</p>
            </div>
          </div>

          <button className="mt-2 h-10 w-full rounded-md bg-amber-300 text-lg font-medium">
            Get on Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
