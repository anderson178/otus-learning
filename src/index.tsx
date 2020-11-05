import React from "react";
import { render } from "react-dom";

import { ShowButton } from "./lesson3/ShowButton";

render(
  <ShowButton buttonName={"Show value line"} />,
  document.getElementById("root")
);
