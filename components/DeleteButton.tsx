"use client";

import { useTodos } from "@/hooks/useTodos";
import React, { MouseEvent } from "react";

export default function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodos();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    deleteTodo(id);
  }

  return <button onClick={handleClick}>❌</button>;
}
