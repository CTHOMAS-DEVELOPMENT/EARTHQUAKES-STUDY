import {
  ADD_ALL_EARTHQUAKES,
  SET_MAG_FILTER,
  SET_TEXT_FILTER,
  SORT_BY
} from "./constants";
const initialState = {
  earthquakes: [],
  text: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_ALL_EARTHQUAKES:
      let earthquakes=action.payload.earthquakes.map((earthquake)=>{
      return {
          type:earthquake.type,
          properties:{
            place:earthquake.properties.place,
            mag:earthquake.properties.mag,
            magType:earthquake.properties.magType
          },
          id:earthquake.id
        }
      })
      return { ...state, earthquakes: earthquakes};

    case SET_TEXT_FILTER:
      return { ...state, text: action.text };

    case SET_MAG_FILTER:
      if(action.typeis==="lmag")
      {
        return { ...state, lmag: action.value };
      }
      return { ...state, hmag: action.value };
      
    case SORT_BY:
      return { ...state, sortBy: action.sortBy };

      default:
      return state;
  }
};
export default rootReducer;
