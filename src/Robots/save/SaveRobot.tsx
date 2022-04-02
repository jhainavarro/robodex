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
import { Robot } from "../robots.models";
import { ReactComponent as RefreshIcon } from "Shared/icons/refresh.svg";
import { useNavigate } from "react-router-dom";
import { useSaveRobot } from "Robots/robots.api";

interface SaveRobotProps {
  robot?: Robot;
}

export default function SaveRobot({ robot }: SaveRobotProps) {
  // TODO: Loading state, error state
  const { mutate: saveRobot } = useSaveRobot();
  const navigate = useNavigate();
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
    const bot = robot ? { ...data, guid: robot.guid } : data;

    saveRobot(bot, {
      onSuccess() {
        setSuccess(true);
      },
      onError() {
        setSuccess(false);
      },
    });
  };

  function handleReset(): void {
    reset();
    setSuccess(undefined);
    setValue("avatarUrl", getRandomAvatar());
  }

  return (
    <S.Container>
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
          <S.Primary type="submit">Save</S.Primary>

          {!robot?.guid && (
            <S.Secondary onClick={handleReset}>
              {success ? "Make another" : "Discard changes"}
            </S.Secondary>
          )}

          {robot?.guid && (
            <S.Secondary onClick={() => navigate(`/${robot.guid}`)}>
              Back
            </S.Secondary>
          )}

          {success && (
            <S.Secondary onClick={() => navigate("/")}>
              Back to list
            </S.Secondary>
          )}
        </S.ActionButtons>

        <S.Result success={success}>
          {success === true && "Successfully saved bot!"}
          {success === false && "Unable to save bot. Please try again."}
        </S.Result>
      </S.Form>
    </S.Container>
  );
}
