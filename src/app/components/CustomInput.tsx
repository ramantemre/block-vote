import { twMerge } from "tailwind-merge";
import cx from "classnames";

export default function CustomInput(props: CustomInputPropType) {
  const {
    name = "",
    label = "",
    type = "text",
    placeholder = "",
    className = "",
    onChange,
    textSize,
  } = props;

  const baseClass = cx({
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6":
      true,
    "text-sm": textSize === "small",
    "text-lg": textSize === "large",
  });

  const finalClasses = twMerge(baseClass, className);

  return (
    <div className="sm:col-span-2 sm:col-start-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={finalClasses}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
