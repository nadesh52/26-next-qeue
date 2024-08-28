"use client";

import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const qtime = [
  {
    name: "1",
    value: 1,
  },
  {
    name: "2",
    value: 2,
  },
];

const type = [
  {
    name: "t1",
    value: 11,
  },
  {
    name: "t2",
    value: 22,
  },
];

const CreatePage = () => {
  const [inputs, setInputs] = useState<any>({});

  const router = useRouter()

  const handleSubmit = () => {
    console.log(inputs)
  }

  const handleValue = (event: any) => {
    const { id, value } = event.target;
    setInputs((prev: any) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-full rounded-md bg-white p-4 space-y-4">
      <div>
        <Title>Name</Title>
        <TextInput type="text" id="name" onChange={handleValue} />
      </div>

      <div>
        <Title>Type</Title>
        <SelectInput
          id="type"
          title="Select type"
          options={type}
          value={handleValue}
        />
      </div>

      <div>
        <Title>Queue duration</Title>
        <SelectInput
          id="duration"
          title="select queue duration"
          options={qtime}
          value={handleValue}
        />
      </div>
      <div className="flex gap-2">
        <button onClick={handleSubmit} className="w-fit rounded-md bg-amber-300 p-2">Create</button>
        <button onClick={() => router.push('/')} className="w-fit rounded-md bg-slate-200 p-2">Cancel</button>
      </div>
    </div>
  );
};

export default CreatePage;
