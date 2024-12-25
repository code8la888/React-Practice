import { twMerge } from "tailwind-merge";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const finalClassName = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border", {
      "bg-blue-500 border-blue-500 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-yellow-500 border-yellow-500 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-red-500": outline && danger,
      "text-yellow-500": outline && warning,
    })
  );

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
}

export default Button;
