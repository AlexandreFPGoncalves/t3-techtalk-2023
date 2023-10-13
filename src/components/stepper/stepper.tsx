import { useNavigationStore } from "@/store";
import React from "react";
import clsx from "clsx";

interface Steps {
  name: string;
  isActive: boolean;
  isPast: boolean;
}

const InterActionStep = () => {
  return (
    <div className="flex gap-2 until-md:flex-col">
      <div className="rounded-full bg-gradient-to-r from-blue to-purple p-[2px]">
        <div className={"h-1 w-1 bg-bg"} />
      </div>
      <div className="rounded-full bg-gradient-to-r from-blue to-purple p-[2px]">
        <div className={"h-1 w-1 bg-bg"} />
      </div>
      <div className="rounded-full bg-gradient-to-r from-blue to-purple p-[2px]">
        <div className={"h-1 w-1 bg-bg"} />
      </div>
    </div>
  );
};

export const Stepper: React.FC = () => {
  const { currentStep } = useNavigationStore();

  const steps: Steps[] = [
    { name: "React.Js", isActive: true, isPast: false },
    { name: "Inicialização de um projeto T3", isActive: false, isPast: false },
    { name: "T3Stack", isActive: false, isPast: false },
    { name: "Partilha de Recursos", isActive: false, isPast: false },
  ];

  return (
    <div className="relative top-[-2.4375rem] flex w-full flex-wrap items-center justify-center gap-4 until-md:flex-col until-lg:hidden">
      {steps.map((step, i) => (
        <>
          <div
            className={clsx(
              `rounded-full bg-grey bg-gradient-to-r p-[2px] transition-all`,
              !step.isActive
                ? "cursor-not-allowed from-grey to-blue opacity-30"
                : "from-blue to-purple shadow-purple",
              step.isPast && "opacity-100",
            )}
          >
            <div
              className={clsx(
                "rounded-full bg-bg px-6 py-2",
                !step.isActive ? "cursor-not-allowed text-grey" : "text-white",
              )}
            >
              {step.name}
            </div>
          </div>
          {i !== steps.length - 1 && <InterActionStep />}
        </>
      ))}
    </div>
  );
};
