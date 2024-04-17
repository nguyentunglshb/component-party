"use client";

import React, { FC } from "react";
import Link from "next/link";
import { useHash } from "@/hooks";

interface WithSideBarProps {}

type Item = {
  label: string;
  to: string;
  children?: Item[];
};

export const WithSideBar: FC<WithSideBarProps> = ({}) => {
  const hash = useHash();

  return (
    <aside className="sticky top-0 border-r border-gray-700 w-[300px] overflow-y-auto pr-8 flex-shrink-0">
      <nav className="w-full text-base py-2 pl-4 pb-20">
        <ul className="space-y-6">
          {menu.map((item) => {
            return (
              <li key={item.to}>
                <Link
                  href={`/${item.to}`}
                  className={`block w-full py-1.5 px-4 text-white font-semibold opacity-90 hover:opacity-100 hover:bg-gray-800 rounded transition-opacity ${
                    hash?.includes(item.to) ? "bg-gray-800" : ""
                  }`}
                >
                  {item.label}
                </Link>
                {item?.children ? (
                  <ul>
                    {item.children.map((child) => {
                      return (
                        <li key={child.to}>
                          <Link
                            href={`/${child.to}`}
                            className={`block w-full py-1.5 px-4 text-white font-semibold hover:opacity-100 hover:bg-gray-800 rounded transition-opacity ${
                              hash?.includes(child.to)
                                ? "bg-gray-800 opacity-70"
                                : "opacity-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

const menu: Item[] = [
  {
    label: "Reactivity",
    to: "#reactivity",
    children: [
      {
        label: "Declare state",
        to: "#reactivity.declare-state",
      },
      {
        label: "Update state",
        to: "#reactivity.update-state",
      },
      {
        label: "Computed state",
        to: "#reactivity.computed-state",
      },
    ],
  },
  {
    label: "Templating",
    to: "#templating",
    children: [
      {
        label: "Minimal template",
        to: "#templating.minimal-template",
      },
      {
        label: "Styling",
        to: "#templating.styling",
      },
      {
        label: "Loop",
        to: "#templating.loop",
      },
      {
        label: "Event click",
        to: "#templating.event-click",
      },
      {
        label: "Dom ref",
        to: "#templating.dom-ref",
      },
      {
        label: "Conditional",
        to: "#templating.conditional",
      },
    ],
  },
  {
    label: "Lifecycle",
    to: "#lifecycle",
    children: [
      {
        label: "On mount",
        to: "#lifecycle.on-mount",
      },
      {
        label: "On unmount",
        to: "#lifecycle.on-unmount",
      },
    ],
  },
  {
    label: "Component composition",
    to: "#component-composition",
    children: [
      {
        label: "Props",
        to: "#component-composition.props",
      },
      {
        label: "Emit to parent",
        to: "#component-composition.emit-to-parent",
      },
      {
        label: "Slot",
        to: "#component-composition.slot",
      },
      {
        label: "Slot fallback",
        to: "#component-composition.slot-fallback",
      },
      {
        label: "Context",
        to: "#component-composition.context",
      },
    ],
  },
  {
    label: "Form input",
    to: "#form-input",
    children: [
      {
        label: "Input text",
        to: "#form-input.input-text",
      },
      {
        label: "Checkbox",
        to: "#form-input.checkbox",
      },
      {
        label: "Radio",
        to: "#form-input.radio",
      },
      {
        label: "Select",
        to: "#form-input.select",
      },
    ],
  },
  {
    label: "Webapp features",
    to: "#webapp-features",
    children: [
      {
        label: "Render app",
        to: "#webapp-features.render-app",
      },
      {
        label: "Fetch data",
        to: "#webapp-features.fetch-data",
      },
      {
        label: "Router link",
        to: "#webapp-features.router-link",
      },
      {
        label: "Routing",
        to: "#webapp-features.routing",
      },
    ],
  },
];
