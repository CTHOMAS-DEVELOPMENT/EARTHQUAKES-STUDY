import React from "react";
import { shallow } from "enzyme";
import Filter from "../src/components/Filter";
import { Provider } from "react-redux";
import store from "../src/store"

test("Should render Filter correctly..", () => {
  const wrapper = shallow(
    <Provider store={store}>
    <Filter/>
    </Provider>);
  expect(wrapper).toMatchSnapshot();
});
