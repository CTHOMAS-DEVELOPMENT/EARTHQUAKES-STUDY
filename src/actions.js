import {
  ADD_ALL_EARTHQUAKES,
  SET_MAG_FILTER,
  SET_TEXT_FILTER,
  SORT_BY
} from "./constants";
export const addAllEarthquakes = eqs => {
  return {
  type: ADD_ALL_EARTHQUAKES,
  payload: eqs
}};
export const setTextFilter = (text = "") => {
  return {
    type: SET_TEXT_FILTER,
    text
  };
};
export const setMagFilter= (value = "0",typeis = "") => {
  return {
    type: SET_MAG_FILTER,
    value,
    typeis
  };
};
export const setSortFilter = (sortBy = "mag") => ({
  type: SORT_BY,
  sortBy
});
