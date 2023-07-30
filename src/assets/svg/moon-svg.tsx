import { colors } from "@/common/theme";
import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const SvgComponent = (props: Props) => {
  const { size = 20, color = colors.textDark } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M12.056 3.6a1 1 0 0 0-.908-1.564C6.024 2.469 2 6.764 2 12c0 5.523 4.477 10 10 10 5.236 0 9.531-4.024 9.964-9.148a1 1 0 0 0-1.564-.908A6 6 0 0 1 12.055 3.6Z"
      />
    </svg>
  );
};
export default SvgComponent;
