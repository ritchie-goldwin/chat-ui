import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref) => {
    return (
      <input
        ref={ref}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        className="input"
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
