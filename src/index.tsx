import React from "react";
import { render } from "react-dom";

import { ShowButton } from "./ShowButton";

render(
  <ShowButton buttonName={"Show value line"} />,
  document.getElementById("root")
);
