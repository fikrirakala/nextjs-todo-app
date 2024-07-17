"use client";

import { Todo } from "@/app/page";
import { TodosContext } from "@/context/TodosContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";

export default function TodosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage("todos");

  function toggleTodo(id: number) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          id,
          content: item.content,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    setTodos(newTodos);
    setLocalStorageItem(newTodos);
  }

  function deleteTodo(id: number) {
    const newTodos = todos.filter((item) => item.id !== id);

    setTodos(newTodos);
    setLocalStorageItem(newTodos);
  }

  function addTodo(text: string) {
    const newTodos = [
      ...todos,
      { id: todos.length + 1, content: text, completed: false },
    ];

    setTodos(newTodos);
    setLocalStorageItem(newTodos);
  }

  useEffect(() => {
    const localTodos = getLocalStorageItem();

    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  return (
    <TodosContext.Provider value={{ todos, toggleTodo, deleteTodo, addTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
