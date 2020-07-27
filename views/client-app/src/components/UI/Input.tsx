import React, { FC } from "react";
import "./Input.css";
interface Props {
  value: string;
  onChange: (ev: any) => void;
  type?: string;
  placeholder?: string;
}
const Input: FC<Props> = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      className="UI-input"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
