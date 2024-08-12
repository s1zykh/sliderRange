import { memo } from "react";
import { DivRefType } from "../../types";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Track.module.scss";

interface TrackProps {
  trackRef: DivRefType;
  disabled?: boolean;
}

export const Track = memo((props: TrackProps) => {
  const { trackRef, disabled } = props;

  return (
    <div
      className={classNames(cls.track, { [cls.disabled]: disabled })}
      ref={trackRef}
    ></div>
  );
});
