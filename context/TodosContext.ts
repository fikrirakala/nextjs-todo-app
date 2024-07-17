"use client";

import { Todo } from "@/app/page";
import { createContext } from "react";

export interface TodosContextType {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  addTodo: (text: string) => void;
}

export const TodosContext = createContext<TodosContextType | null>(null);
