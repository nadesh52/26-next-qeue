import LinkButton from "@/components/LinkButton";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemDetailPage = () => {
  return (
    <section className="rounded-md bg-white p-4">
      <Title>Item Detail</Title>
      <div className="flex flex-col rounded-md p-2 shadow-md">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-400">
            Listed: <span>05/10/2024</span>
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
                <p>Min./Q</p>
              </div>

              <div className="h-20x flex w-20 flex-col items-center justify-center rounded-md bg-slate-100 p-2">
                <p className="text-2xl font-medium">60</p>
                <p className="text-sm">Q Before</p>
              </div>
            </div>
            <LinkButton href="">Get queue</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailPage;
