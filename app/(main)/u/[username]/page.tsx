import React from "react";
import UserCard from "./components/UserCard";
import ItemList from "./components/ItemList";
import Title from "@/components/Title";
import ReviewList from "./components/ReviewList";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const UserProfile = ({ params }: { params: { username: string } }) => {
  return (
    <section className="w-full divide-y divide-slate-200 rounded-md bg-white p-4">
      <div className="mb-4">
        <UserCard name={params.username} />
      </div>

      <div>
        <Link href="" className="group flex w-fit items-center gap-2">
          <Title>Listed Items</Title>
          <ArrowTopRightOnSquareIcon className="hidden size-4 text-slate-500 group-hover:block" />
        </Link>
        <ItemList />
        <Title>Reviews</Title>
        <ReviewList />
      </div>
    </section>
  );
};

export default UserProfile;
