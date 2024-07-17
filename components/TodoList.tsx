"use client";

import React from "react";
import DeleteButton from "./DeleteButton";
import { useTodos } from "@/hooks/useTodos";

export default function TodoList() {
  const {todos, toggleTodo} = useTodos();

  return (
    <ul className="relative col-span-1 row-span-1 overflow-auto bg-white [scrollbar-width:thin]">
      {todos.length === 0 ? (
        <li className="flex h-full items-center justify-center font-semibold">
          Start by adding a todo
        </li>
      ) : (
        todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex h-[50px] cursor-pointer items-center justify-between border-b border-b-[rgba(0,0,0,0.08)] px-8 text-[14px]`}
            onClick={() => toggleTodo(todo.id)}
          >
            <span
              className={`${todo.completed ? "text-[#ccc] line-through" : ""}`}
            >
              {todo.content}
            </span>

            <DeleteButton id={todo.id} />
          </li>
        ))
      )}
    </ul>
  );
}
