import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface Steps {
  id: number;
  name: string;
  isActive: boolean;
  isPast: boolean;
}

interface StepperProps {
  activeStep: { id: number; stepName?: string };
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

export const Stepper: React.FC<StepperProps> = ({ activeStep }) => {
  const [steps, setSteps] = useState<Steps[]>([
    { id: 1, name: "Hosts", isActive: false, isPast: false },
    { id: 2, name: "ReactJS", isActive: false, isPast: false },
    { id: 3, name: "Stack T3", isActive: false, isPast: false },
    {
      id: 4,
      name: activeStep.stepName ? activeStep.stepName : "NextJS",
      isActive: false,
      isPast: false,
    },
    { id: 5, name: "Partilha de Recursos", isActive: false, isPast: false },
  ]);

  steps.find((step) => {
    step.id === activeStep.id;
  });

  const updateSteps = (activeStep: number) => {
    const updatedSteps = steps.map((step) => ({
      ...step,
      isActive: step.id === activeStep,
      isPast: step.id < activeStep,
    }));
    setSteps(updatedSteps);
    console.log("###", steps);
  };

  useEffect(() => {
    updateSteps(activeStep.id);
  }, [activeStep.id]);

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
              step.isPast && "opacity-95",
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
