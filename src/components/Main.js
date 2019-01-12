/*Note: I call this the "parent component"
(1) The initial data has been obtained and already exists in the store
(2) There are 2 children (a)Filter component (b)Data list component
*/
import React from "react";
import { connect } from "react-redux";
import Earthquakes from "./Earthquakes";
import Filter from "./Filter";
class ConnectedMain extends React.Component {
  constructor(props) {
    super();
    //Initialise state
    this.state = {
      earthquakes: []
    };
  }
  getMagFilter= (min , max, earthquakes) => {
    return earthquakes.filter((earthquake)=>{
      return parseFloat(earthquake.properties.mag) > parseFloat(min) && parseFloat(earthquake.properties.mag) < parseFloat(max) ? true: false;
    }
    )
  }
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-10 offset-md-1 ">
          <Filter />
          <Earthquakes earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}
//Data shared between store and local state
const mapStateToProps = state => {
  return { earthquakes: state.earthquakes };
};

export default connect(mapStateToProps)(ConnectedMain);
