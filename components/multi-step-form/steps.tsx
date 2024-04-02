import React from "react";
import {Step} from "./step";
import { Step as StepProp } from "@/app/student-onboarding/page";



type Props = {
    steps: StepProp[]
} 

export default function Steps({ steps }: Props) {
  return (
    <div className="rounded-lg col-span-full md:col-span-4 bg-blue-600 px-6 py-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap ">
      {steps.map((step, i) => {
        return <Step key={i} step={step} />;
      })}
    </div>
  );
}
