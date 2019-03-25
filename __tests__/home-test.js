"use strict";

import React from "react";
import Home from "../src/component/Home";
import renderer from "react-test-renderer";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("Home changes the text after click", () => {
  const home = shallow(<Home labelOn="On" labelOff="Off" />);

  expect(home.text()).toEqual("Off");
  home.find("input").simulate("change");

  expect(home.text()).toEqual("On");
});
