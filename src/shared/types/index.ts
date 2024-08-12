import { ChangeEvent, InputHTMLAttributes, MutableRefObject } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "readOnly"
>;
export type InputRefType = MutableRefObject<HTMLInputElement | null>;
export type DivRefType = MutableRefObject<HTMLDivElement | null>;
export type ValueRangeType = [number, number];
export type RangeChangeValueType = (value: ValueRangeType) => void;
export type SingleChangeValueType = (value: number) => void;
export type SetValueType = (value: ChangeEvent<HTMLInputElement>) => void;

export interface Marks {
  value: number;
  label?: string;
}

export enum SliderSize {
  S = "mark_size_s",
  M = "mark_size_m",
  L = "mark_size_l",
  XL = "mark_size_xl",
}

enum MarkRadius {
  S = "mark_radius_s",
  M = "mark_radius_m",
  L = "mark_radius_l",
  XL = "mark_radius_xl",
}

export interface SliderProps extends HTMLInputProps {
  value?: number | ValueRangeType;
  color?: string;
  isInverted?: boolean;
  isSingle?: boolean;
  sizeSlider?: SliderSize;
  radius?: MarkRadius;
  thumbSize?: number;
  thumbChildren?: JSX.Element;
  min?: number;
  max?: number;
  step?: number;
  marks?: Array<Marks>;
  defaultValue?: number;
  label?: boolean;
  labelAlwaysOn?: boolean;
  inputRef?: InputRefType;
  tooltipRef?: DivRefType;
  trackRef?: DivRefType;
  onChangeValue?: SingleChangeValueType;
  onChangeRangeValue?: RangeChangeValueType;
  onSetValue?: SetValueType;
}
