import React, { HTMLAttributes } from "react";
import * as S from "./Card.styles";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <S.Card className={className}>{children}</S.Card>;
}
