import React, { useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AddRobotFormData,
  getDefaultFormValues,
  schema,
} from "./AddRobot.helpers";
import * as S from "./AddRobot.styles";
import { addRobot } from "./api/robots.api";

export default function AddRobot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddRobotFormData>({
    defaultValues: getDefaultFormValues(),
    resolver: yupResolver(schema),
  });

  const nameRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...registerName } = register("name");

  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: SubmitHandler<AddRobotFormData> = (data) => {
    try {
      addRobot(data);
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  };

  function handleReset(): void {
    reset();
    nameRef.current?.focus();
    setSuccess(undefined);
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Label htmlFor="name">Name</S.Label>
      <S.Input
        {...registerName}
        id="name"
        autoComplete="off"
        autoFocus
        ref={(e) => {
          ref(e);
          nameRef.current = e;
        }}
      />
      {errors.name?.message && <S.Error>{errors.name.message}</S.Error>}

      <S.Label htmlFor="purpose">Purpose</S.Label>
      <S.Input {...register("purpose")} id="purpose" autoComplete="off" />
      {errors.purpose?.message && <S.Error>{errors.purpose.message}</S.Error>}

      <S.Save type="submit">Save</S.Save>

      {success && (
        <S.Result>
          <S.ResultSuccess>Successfully added a new robot!</S.ResultSuccess>

          <S.ResetBtn type="button" onClick={handleReset}>
            Add another
          </S.ResetBtn>

          <S.Back to="/robots">View updated list of robots</S.Back>
        </S.Result>
      )}

      {success === false && (
        <S.Result>
          <S.ResultError>
            Unable to add this robot. Please try again.
          </S.ResultError>
        </S.Result>
      )}
    </S.Form>
  );
}
