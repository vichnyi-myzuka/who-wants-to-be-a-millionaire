import s from "./PrizeStepsList.module.scss";
import PrizeStep from "../PrizeStep";
import React, { useMemo } from "react";

interface PrizeStepsListProps {
  steps: number[];
  currentStepIndex: number;
}

const PrizeStepsList = function ({
  steps,
  currentStepIndex,
}: PrizeStepsListProps) {
  const getStepState = (index: number) => {
    if (index < currentStepIndex) {
      return "disabled";
    }
    if (index === currentStepIndex) {
      return "active";
    }
    return "pending";
  };

  const reversedSteps = useMemo(() => {
    return steps.slice().reverse();
  }, [steps]);

  return (
    <ul className={s.prizeStepsList}>
      {reversedSteps.map((step, index) => (
        <li key={index}>
          <PrizeStep
            step={step}
            state={getStepState(steps.length - index - 1)}
          />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(PrizeStepsList);
