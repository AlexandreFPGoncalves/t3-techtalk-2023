import type { StepsController } from "@/navigation";
import { LeadingScreen } from "./leadingScreen";
import { Hosts } from "./hosts";
import { Reactjs } from "./Reactjs";

export const steps: StepsController[] = [
  { id: 0, content: <LeadingScreen /> },
  { id: 1, content: <Hosts /> },
  { id: 2, content: <Reactjs /> },
];
