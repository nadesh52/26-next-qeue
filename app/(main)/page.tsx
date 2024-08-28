import LinkButton from "@/components/LinkButton";
import Title from "@/components/Title";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full rounded-md bg-white p-4 space-y-4 divide-y divide-slate-200">
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
            <p>{`NAME`}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="rounded-md bg-blue-200 p-2">good</div>
            <div className="rounded-md bg-red-200 p-2">bad</div>
          </div>
        </div>
      </div>

      <div>
        <Title>On Going</Title>
        <div className="flex flex-col rounded-md p-2 shadow-md">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-400">
              Listed: <span>05/10/2024</span>
            </p>
            <p className="text-slate-400">
              Queue on: <span>05/10/2024</span>
            </p>
            <p className="text-slate-400">
              Listed by:{" "}
              <Link href="/u/go" className="hover:text-amber-300">
                go
              </Link>
            </p>
          </div>
          <div className="flex gap-4 bg-white">
            <div className="min-w-[100px]">
              <Image src="/icons/6.png" height={100} width={100} alt="item" />
            </div>

            <div className="flex w-full flex-col justify-between space-y-4">
              <div className="flex justify-between gap-4">
                <div className="flex-1 rounded-md bg-slate-100 p-2">
                  <p className="text-lg">
                    Lorem ipsum dolor sit, elit. aliquam numquam culpa iure
                  </p>
                </div>

                <div className="h-20x flex w-20 shrink flex-col items-center justify-center rounded-md bg-slate-100 p-2">
                  <p className="text-2xl font-medium">15</p>
                  <p>Duration</p>
                </div>

                <div className="h-20x flex w-20 flex-col items-center justify-center rounded-md bg-slate-100 p-2">
                  <p className="text-2xl font-medium">60</p>
                  <p className="text-sm">Queue left</p>
                </div>
              </div>
              <LinkButton href="">View</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
