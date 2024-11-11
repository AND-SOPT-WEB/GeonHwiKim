import { useState } from "react";

type UseFunnelReturnType<T> = {
  currentStep: T;
  next: () => void;
  prev: () => void;
  reset: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
};

function useFunnel<T>(steps: T[]): UseFunnelReturnType<T> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < steps.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const reset = () => {
    setCurrentIndex(0);
  };

  return {
    currentStep: steps[currentIndex],
    next,
    prev,
    reset,
    isLastStep: currentIndex === steps.length - 1,
    isFirstStep: currentIndex === 0,
  };
}

export default useFunnel;
