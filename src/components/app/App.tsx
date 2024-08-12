import { RangeChangeValueType } from "../../shared/types";
import { Slider } from "../Slider/Slider";
import { SliderRange } from "../SliderRange/SliderRange";
import { useState } from "react";

function App() {
  const [sliderRangeValue, setSliderRangeValue] = useState<[number, number]>([
    1, 10,
  ]);
  const [sliderValue, setSliderValue] = useState<number>(50);

  return (
    <>
      <SliderRange
        value={sliderRangeValue}
        onChangeRangeValue={setSliderRangeValue}
      />
      <Slider value={sliderValue} onChangeValue={setSliderValue} />
    </>
  );
}

export default App;
