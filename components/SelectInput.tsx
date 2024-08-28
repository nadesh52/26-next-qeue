"use client";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SelectInput = ({ id, title, options, value }: any) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<any>();

  const handleSelect = (event: any) => {
    setSelectedValue(event.target.value);
    value(event);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${menuOpen ? "border-amber-300" : "border-slate-400 bg-white"} flex h-8 w-full cursor-pointer select-none items-center justify-between rounded-md border px-2 outline-none`}
      >
        <p>{selectedValue ? selectedValue : title}</p>
        <ChevronUpDownIcon className="size-6" />
      </div>

      <div
        className={`${menuOpen ? "block" : "hidden"} absolute left-0 top-8 z-50 w-full rounded-md bg-white shadow-md`}
      >
        <ul>
          {options.map((item: any, idx: any) => (
            <li
              key={idx}
              id={id}
              value={item.value}
              onClick={(e) => {
                handleSelect(e);
                setMenuOpen(false);
              }}
              className="cursor-pointer p-2 hover:bg-slate-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectInput;
