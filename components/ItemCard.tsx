import Image from "next/image";
import React from "react";

const ItemCard = () => {
  return (
    <div className="flex flex-col rounded-md p-2 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Item ID: <span className="font-medium">345345</span>
        </p>
        <p className="text-sm text-slate-400">
          Listed: <span>05/10/2024</span>
        </p>
      </div>

      <div className="flex gap-4 bg-white">
        <div className="flex min-w-[100px] flex-col justify-between">
          <Image src="/icons/6.png" height={100} width={100} alt="item" />
        </div>

        <div className="h-[160px] w-full">
          <div className="flex justify-between gap-4">
            <div className="flex-1 rounded-md bg-slate-100 p-2">
              <p className="text-lg font-medium">
                Lorem ipsum dolor sit, elit. aliquam numquam culpa iure
              </p>
            </div>

            <div className="h-20x flex w-20 shrink flex-col items-center justify-center rounded-md bg-slate-100 p-2">
              <p className="text-4xl font-medium">15</p>
              <p>Min./Q</p>
            </div>

            <div className="h-20x flex w-20 flex-col items-center justify-center rounded-md bg-slate-100 p-2">
              <p className="text-4xl font-medium">60</p>
              <p className="text-sm">Q Before</p>
            </div>
          </div>
          <button className="mt-4 h-10 w-full rounded-md bg-amber-300 text-lg font-medium">
            Get on Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
