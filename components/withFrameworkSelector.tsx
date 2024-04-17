import Image from "next/image";

export const FrameworkSelector = () => {
  return (
    <div className="flex px-6 lg:px-20 py-2 sticky top-0 z-20 w-full backdrop-blur bg-gray-900/80 border-b border-gray-700 whitespace-nowrap overflow-x-auto">
      {frameworks.map((fw) => {
        return (
          <button
            key={fw.value}
            className="text-sm border border-gray-700 border-opacity-50 px-3 py-1 rounded mr-2 opacity-70 flex items-center space-x-[5px] hover:bg-gray-800 transition-all"
          >
            <Image
              src={`/static/logos/${fw.icon}.svg`}
              width="15"
              height="15"
              alt={fw.value}
              className="size-[15px]"
            />
            <p>{fw.label}</p>
          </button>
        );
      })}
    </div>
  );
};

type Framework = {
  label: string;
  value: string;
  icon: string;
};

const frameworks: Framework[] = [
  {
    label: "Angular",
    value: "angular",
    icon: "angular",
  },
  {
    label: "Lit",
    value: "lit",
    icon: "lit",
  },
  {
    label: "Qwik",
    value: "qwik",
    icon: "qwik",
  },
  {
    label: "React",
    value: "react",
    icon: "react",
  },
  {
    label: "Solid",
    value: "solid",
    icon: "solid",
  },
  {
    label: "Svelte",
    value: "svelte",
    icon: "svelte",
  },
  {
    label: "Vue 2",
    value: "vue-2",
    icon: "vue",
  },
  {
    label: "Vue 3",
    value: "vue-3",
    icon: "vue",
  },
];
