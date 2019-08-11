import React, { useState } from "react";
import { WallClock } from "../Analog/wallClock";
import { Checkbox, Radio } from "antd";

export function AnalogClock() {
  const [secondVisible, setSecondVisibility] = useState(true);
  const [background, setBackground] = useState(1);
  const onCheckSecond = e => setSecondVisibility(e.target.checked);
  const onBackgroundChange = e => setBackground(e.target.value);

  return (
    <>
      <Radio.Group
        defaultValue={background}
        buttonStyle="solid"
        size="small"
        onChange={onBackgroundChange}
      >
        <Radio.Button value={1}>Baground 1</Radio.Button>
        <Radio.Button value={2}>Baground 2</Radio.Button>
      </Radio.Group>
      <Checkbox
        className="ml-20"
        onChange={onCheckSecond}
        checked={secondVisible}
      >
        Show Second Hand
      </Checkbox>
      <WallClock showSecond={secondVisible} background={background} />
    </>
  );
}
