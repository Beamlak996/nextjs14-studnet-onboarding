"use client";
import { ConfirmForm } from "./step-forms/confirm-form";
import { EducationBackgroundForm } from "./step-forms/education-background-form";
import { PersonalInfoForm } from "./step-forms/personal-info-form";
import { PreferredProgrammingLanguage } from "./step-forms/preffered-programming-language";
import { ProgrammingExperinceForm } from "./step-forms/programming-experince-form";
import { TechnicalSkillsAssessment } from "./step-forms/technical-skills-assessment";

export default function StepForm() {
  const currentStep = 1

  function renderFormByStep(step: number) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <EducationBackgroundForm />;
    } else if (step === 3) {
      return <ProgrammingExperinceForm />;
    } else if (step === 4) {
      return <PreferredProgrammingLanguage />;
    } else if (step === 5) {
      return <TechnicalSkillsAssessment />;
    } else if (step === 6) {
      return <ConfirmForm />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
