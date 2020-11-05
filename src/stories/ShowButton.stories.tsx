import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import { ShowButton } from "../lesson3/ShowButton";

export default {
  title: "ClickCounterButton",
  decorators: [withKnobs],
};

export const ClickCounterButtonStory: React.FC<{}> = () => {
  const nameButton = "Show value line";

  return <ShowButton buttonName={nameButton} />;
};
