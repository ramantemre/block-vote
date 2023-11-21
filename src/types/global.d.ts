import { SyntheticEvent } from "react";

export declare global {
  interface CustomInputPropType {
    name: string;
    label: string;
    type: "text" | "email" | "password";
    placeholder: string;
    className: string;
    onChange: (event: SyntheticEvent) => void;
    textSize: "small" | "large";
  }
}
