import React, { FC } from "react";
import Image from "next/image";

interface WidthNavBarProps {}

export const WidthNavBar: FC<WidthNavBarProps> = ({}) => {
  return (
    <header className="flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <Image
          src="/static/logos/popper.svg"
          alt="logo"
          width={20}
          height={20}
        />
        <p className="font-semibold text-lg">Component Party</p>
      </div>
      <div></div>
    </header>
  );
};
