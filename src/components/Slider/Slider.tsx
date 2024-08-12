import { ChangeEvent, MutableRefObject, useRef } from "react";
import { SliderProps } from "../../shared/types";
import { Input } from "../../shared/ui/Input/Input";

import cls from "./Slider.module.scss";
import { useHover } from "../../shared/lib/useHover/useHover";

export const Slider = (props: SliderProps) => {
  const { value, onChangeValue, ...otherProps } = props;

  const InputRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const TooltipRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const trackRef = useRef(null) as MutableRefObject<HTMLDivElement | null>;

  const [isHover, hoverBind] = useHover();

  const newVal = value as number;

  const handleChangeValue = (event?: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target.value);
    onChangeValue?.(value);
  };

  return (
    <div className={cls.slider} {...hoverBind}>
      <div className="wrapper">
        <div className="track" ref={trackRef}></div>
        <Input
          name="slider"
          value={newVal}
          trackRef={trackRef}
          isSingle
          label={isHover}
          inputRef={InputRef}
          tooltipRef={TooltipRef}
          onSetValue={handleChangeValue}
          {...otherProps}
        />
      </div>
    </div>
  );
};
