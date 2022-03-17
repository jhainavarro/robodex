import { rem } from "polished";
import styled from "styled-components/macro";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin: 4px;
  font-size: ${rem("12px")};
  font-weight: 600;
  text-transform: uppercase;
`;

export const Input = styled.input``;

export const Error = styled.p`
  margin: 8px 0;
  color: #da4139;
  font-size: ${rem("12px")};
`;

export const Save = styled.button`
  margin-top: 20px;
`;

export const Reset = styled.button``;

export const Result = styled.p<{ success?: boolean }>`
  margin: 20px 0 0 0;
  color: ${(props) => (props.success ? "#3eb246" : "#da4139")};
`;
