import { classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss";
import { SliderProps } from "../../types";
import { useEffect } from "react";
import { getPositionPercentage } from "../../lib/getPositionPercentage/getPositionPercentage";

interface HTMLInputProps extends SliderProps {
  classes?: Array<string>;
}
export const Input = (props: HTMLInputProps) => {
  const {
    classes,
    value,
    min = 0,
    max = 100,
    isInverted = false,
    onSetValue,
    isSingle,
    inputRef,
    trackRef,
    tooltipRef,
    label,
    disabled,
    ...otherProps
  } = props;

  const newVal = value as number;

  useEffect(() => {
    if (trackRef && trackRef.current && tooltipRef && tooltipRef.current) {
      const position = getPositionPercentage(newVal, min, max, isInverted);
      if (isInverted) {
        trackRef.current.style.right = position;
        tooltipRef.current.style.right = position;
        tooltipRef.current.style.transform = `translateX(${position})`;
      } else {
        isSingle
          ? (trackRef.current.style.width = position)
          : (trackRef.current.style.left = position);
        tooltipRef.current.style.left = position;
        tooltipRef.current.style.transform = `translateX(-${position})`;
      }
    }
  }, [value, max, min, trackRef, tooltipRef]);

  return (
    <>
      <input
        className={classNames(cls.slider_input, {}, classes)}
        type="range"
        value={newVal}
        ref={inputRef}
        onChange={(e) => onSetValue?.(e)}
        max={max}
        min={min}
        disabled={disabled}
        {...otherProps}
      />
      <div
        className={classNames(cls.slider_tooltip, {
          [cls.isHover]: label,
          [cls.disabled]: disabled,
        })}
        ref={tooltipRef}
      >
        <span className={classNames(cls.slider_tooltip_value, {})}>
          {value}
        </span>
      </div>
    </>
  );
};
