import React, { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  // TODO: `size`
  // TODO: `variant`
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
}
