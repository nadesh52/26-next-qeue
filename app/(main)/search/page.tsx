"use client";

import Title from "@/components/Title";
import React, { ChangeEvent, useState } from "react";
import SearchList from "./components/SearchList";
import TextInput from "@/components/TextInput";

const SearchPage = () => {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //fetch
        //setData();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <section className="rounded-md bg-white p-4 shadow-md">
      <form onSubmit={handleSubmit}>
        <Title>Search</Title>
        <TextInput type="text" onChange={handleChange} />
      </form>

      <div>
        <Title>Result for "{input}"</Title>

        <SearchList />
      </div>
    </section>
  );
};

export default SearchPage;
