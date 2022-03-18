import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SaveRobotFormData,
  getDefaultFormValues,
  schema,
  getRandomAvatar,
} from "./SaveRobot.helpers";
import * as S from "./SaveRobot.styles";
import { saveRobot } from "../robots.api";
import { IRobot } from "../robots.models";
import { ReactComponent as RefreshIcon } from "Shared/icons/refresh.svg";

interface SaveRobotProps {
  robot?: IRobot;
}

export default function SaveRobot({ robot }: SaveRobotProps) {
  const [success, setSuccess] = useState<boolean | undefined>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<SaveRobotFormData>({
    defaultValues: getDefaultFormValues(robot),
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SaveRobotFormData> = (data) => {
    try {
      const bot = robot ? { ...data, guid: robot.guid } : data;

      saveRobot(bot);
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  };

  function handleReset(): void {
    reset();
    setSuccess(undefined);
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Avatar src={watch("avatarUrl")} alt="Robot avatar" />
      <S.Refresh
        type="button"
        onClick={() => setValue("avatarUrl", getRandomAvatar())}
      >
        <RefreshIcon />
      </S.Refresh>
      <S.Input type="hidden" {...register("avatarUrl")} />

      <S.Label htmlFor="name">My name is:</S.Label>
      <S.Input {...register("name")} id="name" autoComplete="off" autoFocus />
      {errors.name?.message && <S.Error>{errors.name.message}</S.Error>}

      <S.Label htmlFor="purpose">And I am built to:</S.Label>
      <S.Input {...register("purpose")} id="purpose" autoComplete="off" />
      {errors.purpose?.message && <S.Error>{errors.purpose.message}</S.Error>}

      <S.Save type="submit">Save</S.Save>
      <S.Reset type="button" onClick={handleReset}>
        Discard changes
      </S.Reset>

      <S.Result success={success}>
        {success === true && "Successfully saved bot!"}
        {success === false && "Unable to save bot. Please try again."}
      </S.Result>
    </S.Form>
  );
}
