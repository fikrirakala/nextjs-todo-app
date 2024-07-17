import Image from "next/image";
import React from "react";
import LogoImage from "@/public/dots.png";

export default function Logo() {
  return <Image src={LogoImage} alt="Logo image" />;
}
