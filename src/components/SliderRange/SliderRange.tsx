import { ChangeEvent, MutableRefObject, useRef, useState } from "react";

import { classNames } from "../../shared/lib/classNames/classNames";
import { Input } from "../../shared/ui/Input/Input";
import { SliderProps, ValueRangeType } from "../../shared/types";

import cls from "./SliderRange.module.scss";
import { useHover } from "../../shared/lib/useHover/useHover";
import { Track } from "../../shared/ui/Track/Track";

export const SliderRange = (props: SliderProps) => {
  const { value, disabled, onChangeRangeValue, ...otherProps } = props;

  const newValue = value as ValueRangeType;

  const [minValue, setMinValue] = useState(newValue?.[0]);
  const [maxValue, setMaxValue] = useState(newValue?.[1]);

  const minInputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const maxInputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const minTooltipRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const maxTooltipRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const trackRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const [isHover, hoverBind] = useHover();

  const handleChangeMin = (event?: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target.value);
    if (maxValue && value <= maxValue) {
      setMinValue(value);
      onChangeRangeValue?.([value, maxValue]);
    }
  };

  const handleChangeMax = (event?: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target.value);
    if (minValue && value >= minValue) {
      setMaxValue(value);
      onChangeRangeValue?.([minValue, value]);
    }
  };

  return (
    <div className={classNames(cls.slider_range)} {...hoverBind}>
      <div className="wrapper">
        <Track trackRef={trackRef} disabled={disabled} />
        <Input
          name="min"
          inputRef={minInputRef}
          value={minValue}
          onSetValue={handleChangeMin}
          trackRef={trackRef}
          tooltipRef={minTooltipRef}
          label={isHover}
          key={1}
          {...otherProps}
        />
        <Input
          name="max"
          key={2}
          isInverted
          value={maxValue}
          inputRef={maxInputRef}
          trackRef={trackRef}
          tooltipRef={maxTooltipRef}
          label={isHover}
          onSetValue={handleChangeMax}
          {...otherProps}
        />
      </div>
    </div>
  );
};
