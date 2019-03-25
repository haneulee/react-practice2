"use strict";
import React from "react";
import Members from "../src/component/Members";
import renderer from "react-test-renderer";
import { sum } from "../src/component/Members";
jest.autoMockOff();

// describe("sum", function() {
//   it("adds 1+2 equal 3", function() {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

it("renders correctly", () => {
  const tree = renderer
    .create(<Members page="http://www.facebook.com">facebook</Members>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders as an anchor when no page is set", () => {
  const tree = renderer.create(<Members>facebook</Members>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("properly escapes quotes", () => {
  const tree = renderer
    .create(<Members>{"\"Facebook\" \\' is \\ 'awesome'"}</Members>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("changes the class when hovered", () => {
  const component = renderer.create(
    <Members page="http://www.facebook.com">facebook</Members>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props._onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props._onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
