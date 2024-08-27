"use client";

import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import React, { ChangeEvent, useState } from "react";
import UserList from "./components/UserList";

const UserPage = () => {
  const [input, setInput] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <section className="rounded-md bg-white p-4 shadow-md">
      <div>
        <Title>User</Title>
        <TextInput type="text" onChange={handleChange} />
      </div>
      <div className="mt-4">
        <UserList />
      </div>
    </section>
  );
};

export default UserPage;
