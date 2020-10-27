import React from "react";
import { mount, render } from "enzyme";

import { ShowButton } from "./ShowButton";

describe("Name button render check", () => {
  it("should render to static HTML", () => {
    expect(
      render(<ShowButton buttonName={"Show value line"} />).text()
    ).toEqual("Show value line");
  });
});
