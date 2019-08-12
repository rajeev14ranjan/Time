import React, { useState } from "react";
import LEDClock from "../Digital/ledClock/ledClock";
import { Checkbox, Radio } from "antd";

export function DigitalClock() {
  const [secondVisible, setSecondVisibility] = useState(true);
  const [timeFormat, setTimeFormat] = useState(24);
  const [forceUpdate, setForceUpdate] = useState(false);
  const onCheckSecond = e => setSecondVisibility(e.target.checked);
  const onFormatChange = e => {
    setTimeFormat(parseInt(e.target.value));
    setForceUpdate(true);
  }

  return (
    <>
      <Radio.Group
        defaultValue={timeFormat}
        buttonStyle="solid"
        size="small"
        onChange={onFormatChange}
      >
        <Radio.Button value={24}>24 Hour</Radio.Button>
        <Radio.Button value={12}>12 Hour</Radio.Button>
      </Radio.Group>
      <Checkbox
        className="ml-20"
        onChange={onCheckSecond}
        checked={secondVisible}
      >
        Show Seconds
      </Checkbox>
      <LEDClock
        showSecond={secondVisible}
        timeFormat={timeFormat}
        forceUpdate={forceUpdate}
        foceUpdateCallback={setForceUpdate}
      />
    </>
  );
}
