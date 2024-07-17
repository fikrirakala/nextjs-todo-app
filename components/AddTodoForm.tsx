"use client";

import React, { FormEvent, useState } from "react";
import Button from "./Button";
import { useTodos } from "@/hooks/useTodos";

export default function AddTodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[16px] font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        autoFocus
        className="my-[9px] ml-[0] mr-[0] h-[45px] w-full rounded-[5px] border-[1px] border-[rgba(0,0,0,0.12)] px-[16px] py-[0] text-[14px]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
