import React, { FC, PropsWithChildren } from "react";
import { WidthNavBar, WithFooter, WithSideBar } from "@/components";

interface BaseLayoutProps extends PropsWithChildren {}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <WidthNavBar />
      <div className="flex">
        <WithSideBar />
        {children}
      </div>

      <WithFooter />
    </>
  );
};
