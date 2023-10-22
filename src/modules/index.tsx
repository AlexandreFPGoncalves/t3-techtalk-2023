import type { StepsController } from "@/navigation";

import { PrismaModule } from "./prisma";
import { LeadingScreenModule } from "./leadingScreen";
import { HostsModule } from "./hosts";
import { ReactjsModule } from "./Reactjs";
import { T3StackModule } from "./t3Stack";
import { NextModule } from "./next";
import { TypeScriptModule } from "./typescript";
import { TailwindCssModule } from "./tailwindcss";
import { NextAuthModule } from "./nextAuth";
import { TRPCModule } from "./tRPC";
import { EndingScreenModule } from "./endingScreen";

export const steps: StepsController[] = [
  { id: 0, content: <LeadingScreenModule /> },
  { id: 1, content: <HostsModule /> },
  { id: 2, content: <ReactjsModule /> },
  { id: 3, content: <T3StackModule /> },
  { id: 4, content: <NextModule /> },
  { id: 5, content: <TypeScriptModule /> },
  { id: 6, content: <TailwindCssModule /> },
  { id: 7, content: <PrismaModule /> },
  { id: 8, content: <NextAuthModule /> },
  { id: 9, content: <TRPCModule /> },
  { id: 10, content: <EndingScreenModule /> },
];
