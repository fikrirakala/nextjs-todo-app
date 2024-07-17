"use client";

import { useTodos } from "@/hooks/useTodos";
import React from "react";

export default function Counter() {
  const { todos } = useTodos();

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed === true).length;

  return (
    <p>
      <strong>{completedCount}</strong> / {totalCount} todos completed
    </p>
  );
}
