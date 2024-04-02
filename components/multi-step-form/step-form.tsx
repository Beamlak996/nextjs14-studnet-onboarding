"use client";
import { ConfirmForm } from "./step-forms/confirm-form";
import { PersonalInfoForm } from "./step-forms/personal-info-form";
import { ShippingInfoForm } from "./step-forms/shipping-info-form";

export default function StepForm() {
  const currentStep = 1

  function renderFormByStep(step: number) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <ShippingInfoForm />;
    } else {
      return <ConfirmForm />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}
