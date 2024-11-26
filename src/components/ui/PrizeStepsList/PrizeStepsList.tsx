import s from "./PrizeStepsList.module.scss";
import PrizeStep from "../PrizeStep";

interface PrizeStepsListProps {
  steps: number[];
  currentStepIndex: number;
}

export default function PrizeStepsList({
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

  return (
    <ul className={s.prizeStepsList}>
      {steps
        .slice()
        .reverse()
        .map((step, index) => (
          <li key={index}>
            <PrizeStep
              step={step}
              state={getStepState(steps.length - index - 1)}
            />
          </li>
        ))}
    </ul>
  );
}
