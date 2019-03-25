"use strict";

import React from "react";
import About from "../src/component/About";
import renderer from "react-test-renderer";

jest.useFakeTimers();
Date.now = jest.fn(() => 14882363367071);

it("renders correctly", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
