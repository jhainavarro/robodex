import { rem } from "polished";
import { Link } from "react-router-dom";
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

export const Result = styled.div``;

export const ResultSuccess = styled.p`
  color: #3eb246;
`;

export const ResetBtn = styled.button`
  padding: 8px;
  color: black;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #d3d8e0;
`;

export const Back = styled(Link)`
  padding: 8px;
  margin-left: 12px;
  color: black;
  border: 1px solid black;
  border-radius: 2px;
  background-color: #d3d8e0;
`;

export const ResultError = styled.p`
  color: #da4139;
`;
