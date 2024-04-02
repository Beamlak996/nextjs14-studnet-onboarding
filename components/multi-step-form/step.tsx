"use client";
import { Step as StepProp } from "@/app/student-onboarding/page";
import React from "react";



export  function Step({ step }: any) {
  const { number, title } = step;
  const currentStep = 1
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 ">
      <div
        className={`w-8 md:w-12 h-8 md:h-12 text-slate-50 border border-slate-50 rounded-full flex items-center justify-center font-bold ${
          number === currentStep ? "bg-blue-300 border-0" : ""
        }`}
      >
        {number}
      </div>
      <div className="flex-col flex items-center justify-center">
        <h4 className="text-slate-200 text-sm uppercase ">Step {number}</h4>
        <h3 className="uppercase text-sm md:text-xl text-white font-bold">
          {title}
        </h3>
      </div>
    </div>
  );
}
