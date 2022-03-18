import React from "react";
import * as S from "./TextField.styles";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const TextField: React.ForwardRefExoticComponent<TextFieldProps> =
  React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    { className, label, errorMessage, ...props },
    ref
  ): JSX.Element {
    if (props.type === "hidden") {
      return <S.HiddenInput {...props} />;
    }

    return (
      <S.TextField className={className} hasError={!!errorMessage}>
        <S.Label htmlFor={props.name}>{label}</S.Label>

        <S.InputContainer>
          <S.Input id={props.name} autoComplete="off" ref={ref} {...props} />
        </S.InputContainer>

        <S.Error>{errorMessage}&nbsp;</S.Error>
      </S.TextField>
    );
  });

export default TextField;
