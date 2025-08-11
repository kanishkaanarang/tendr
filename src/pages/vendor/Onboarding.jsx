import React, { useState } from "react";
import StartScreen from "../shared/StartScreen";
import PreRegisterForm from "../../components/forms/PreRegisterForm";
import VendorRegistration from "./Registration";

export default function VendorOnboarding() {
  const [step, setStep] = useState(0);
  const [initialData, setInitialData] = useState({});

  const goToNext = () => setStep((prev) => prev + 1);

  return (
    <>
      {step === 0 && <StartScreen onNext={goToNext} />}
      {step === 1 && <PreRegisterForm onSuccess={(data) => { setInitialData(data); goToNext(); }} />}
      {step === 2 && <VendorRegistration prefilled={initialData} />}
    </>
  );
}
