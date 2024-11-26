import type { ButtonHTMLAttributes } from "react";
import s from "./Button.module.scss";
import classNames from "classnames";

export default function Button({
  children,
  onClick,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={classNames("btnText", s.button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
