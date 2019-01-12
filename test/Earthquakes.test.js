import React from "react";
import { shallow } from "enzyme";
import Earthquakes from "../src/components/Earthquakes";
import { Provider } from "react-redux";
import store from "../src/store"

test("Should render Earthquakes correctly..", () => {
  const wrapper = shallow(
    <Provider store={store}>
    <Earthquakes earthquakes={[]} />
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});