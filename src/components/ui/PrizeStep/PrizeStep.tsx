import React from "react";
import s from "./PrizeStep.module.scss";
import classNames from "classnames";
import { formatPrize } from "@/utils";

interface PrizeStepProps {
  step: number;
  state: "pending" | "disabled" | "active";
}

function PrizeStep({ step, state }: PrizeStepProps) {
  return (
    <span
      className={classNames(s.prizeStep__Wrapper, {
        [s.active]: state === "active",
        [s.disabled]: state === "disabled",
      })}
    >
      <span className={classNames("bodyText", s.prizeStep)}>
        <svg
          className={s.prizeStep__Border}
          viewBox="0 0 240 32"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            vectorEffect="non-scaling-stroke"
            d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z"
          />
        </svg>
        ${formatPrize(step)}
      </span>
    </span>
  );
}

export default React.memo(PrizeStep);
