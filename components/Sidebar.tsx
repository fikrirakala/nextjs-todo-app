import React from "react";
import AddTodoForm from "./AddTodoForm";

export default function Sidebar() {
  return (
    <div className="col-span-1 row-span-1 flex flex-col justify-between border-l border-black/5 bg-[#fffcf9] px-6 pb-7 pt-5">
      <AddTodoForm />
    </div>
  );
}
