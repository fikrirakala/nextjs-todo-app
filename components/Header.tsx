import React from "react";
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  return (
    <header className="col-span-2 row-span-1 flex items-center justify-between border-b border-black/5 bg-[#fbf5ed] px-7 py-0">
      <Logo />
      <Counter />
    </header>
  );
}
