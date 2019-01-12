/*Basic data maintainence
It maintains 1 entity (earthquakes)
A full system would have more than 1 file like this.
*/
import store from "./store";
import { addAllEarthquakes } from "./actions";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

////////////
//INITIALIZE
////////////
export const initializeEqData = url => {
  fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(response => { 
      return response.json().then(body => {
         store.dispatch(
          addAllEarthquakes(
            {earthquakes:body.features}
           )
        );
           
      });  
    })
    .catch((e) => {
      console.log("ERROR: "+e);
  });
};

/////
//ADD
/////

////////
//UPDATE
////////

////////
//DELETE
////////
