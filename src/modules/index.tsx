import type { StepsController } from "@/navigation";
import { LeadingScreen } from "./leadingScreen";
import { Hosts } from "./hosts";

export const steps: StepsController[] = [
  { id: 0, content: <LeadingScreen /> },
  { id: 1, content: <Hosts /> },
];
