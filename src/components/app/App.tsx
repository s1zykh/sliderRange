import { Slider } from "../Slider/Slider";
import { SliderRange } from "../SliderRange/SliderRange";
import { useState } from "react";

function App() {
  const [sliderRangeValue, setSliderRangeValue] = useState<[number, number]>([
    0.1245, 0.5535,
  ]);
  const [sliderValue, setSliderValue] = useState<number>(50);

  return (
    <>
      {/* <SliderRange
        value={sliderRangeValue}
        onChangeRangeValue={setSliderRangeValue}
        min={0}
        max={1}
        step={0.0005}
      /> */}
      {/* <Slider
        value={sliderValue}
        onChangeValue={setSliderValue}
        min={1}
        max={10}
        step={0.1}
      /> */}
    </>
  );
}

export default App;
