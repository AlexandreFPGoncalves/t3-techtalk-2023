import { useNavigationStore } from "@/store";

export interface StepsController {
  id: number;
  content: React.ReactNode;
}

interface StepsControllerProps {
  steps: StepsController[];
}

export const StepsController: React.FC<StepsControllerProps> = ({ steps }) => {
  const { currentStep } = useNavigationStore();

  return <>{steps.find((step) => step.id === currentStep)?.content}</>;
};
