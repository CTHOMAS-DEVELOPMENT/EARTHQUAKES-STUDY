/*
(1)Get all the initialized data in this class Component
(2)mapStateToProps uses the filter data to filter the current data set for the user.
*/
import React from "react";
import { connect } from "react-redux";
import {sortFilter} from "../sortfilter";

class ConnectedList extends React.Component {
  constructor(props) {
      super();
      //Initialise state
      this.state = {
        earthquakes: []
      };
  }
  componentDidUpdate(prevProps) {
    if (this.props.earthquakes !== prevProps.earthquakes) {
     this.setState({ earthquakes:this.props.earthquakes })
    }
  }
  render() {
    const listStyle={color:"#008000"}
   return (
    <div>
      {this.state.earthquakes.length === 0 ? (
        <h2>not found</h2>
      ) : (
        <div>
          <ul className="list-group list-group-flush">
            {
              this.state.earthquakes.map(earthquake => {
              return (
                <li key={earthquake.id} style={listStyle}>
                   {earthquake.id} : { earthquake.properties.place } : { earthquake.properties.mag } : { earthquake.properties.magType }
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
  }
};
const mapStateToProps = state => {
  if(state.earthquakes.length>0)
  {
    return sortFilter({
      earthquakes: state.earthquakes,
      text: state.text,
      sortBy: state.sortBy,
      lmag: state.lmag, hmag: state.hmag
    });
  }
  return {};
};
export default connect(mapStateToProps)(ConnectedList);
