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
      <S.Uploader>
        <S.Avatar src={watch("avatarUrl")} alt="Robot avatar" />
        <S.Refresh
          type="button"
          onClick={() => setValue("avatarUrl", getRandomAvatar())}
        >
          <RefreshIcon />
        </S.Refresh>
      </S.Uploader>
      <S.Input type="hidden" {...register("avatarUrl")} />

      <S.Input
        {...register("name")}
        id="name"
        autoFocus
        label="Beep-boop! My name is:"
        errorMessage={errors.name?.message}
      />

      <S.Input
        {...register("purpose")}
        id="purpose"
        label="And my purpose is:"
        errorMessage={errors.purpose?.message}
      />

      <S.ActionButtons>
        <S.Save type="submit">Save</S.Save>
        <S.Reset type="button" onClick={handleReset}>
          Discard changes
        </S.Reset>
      </S.ActionButtons>

      <S.Result success={success}>
        {success === true && "Successfully saved bot!"}
        {success === false && "Unable to save bot. Please try again."}
      </S.Result>
    </S.Form>
  );
}
