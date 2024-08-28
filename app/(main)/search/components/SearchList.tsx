import React from "react";
import ItemCard from "@/components/ItemCard";
import Title from "@/components/Title";
import UserCard from "@/components/UserCard";

const SearchList = () => {
  return (
    <div className="space-y-4 divide-y divide-slate-600">
      <div>
        <Title>Users</Title>
        <div className="space-y-4 divide-y divide-slate-300">
          <UserCard />
          <UserCard />
        </div>
      </div>
      <div>
        <Title>Items</Title>
        <div className="space-y-4">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
