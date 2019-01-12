/*
Maintains the filter data in the store
*/
import React from "react";
import { connect } from "react-redux";
import { setTextFilter, setMagFilter, setSortFilter } from "../actions";

class ConnectedFilter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      earthquakes: [],
      text: "",
      sortBy: "",
      lmag: "0",
    hmag: "0"
    };
  }

  /*Updates the store with the field data event.target.id ="text"*/
  handleChange = event => {
    //Update the filter data as the user populates the field
    this.setState({ [event.target.id]: event.target.value });
    this.props.dispatch(setTextFilter(event.target.value));
  };
  handleMagChange = event => {
    if(isNaN (event.target.value) || parseFloat(event.target.value) > 9.9)
    {
      event.target.value="0"
    }

    this.setState({ [event.target.id]: event.target.value });
    this.props.dispatch(setMagFilter(event.target.value,event.target.id));
    
  };
  
  render() {
    const smallField={ maxWidth: "100px" }
    return (
      <div>
        <div className="input-group mb-3">
          {/* Field name: Magnitude Type*/}
          <div className="input-group-prepend">
            <span className="input-group-text">Magnitude Type</span>
          </div>
          <div className="col-xs-1">        
          <input
          style={smallField}
          type="text"
          maxLength={"6"}
          className="form-control" aria-label="Magnitude type"
          id="text"
          value={this.props.text}
          onChange={this.handleChange}
          autoFocus
          />
          </div>
          {/* Field name: Magnitude (Low)*/}
          <div className="input-group-prepend">
            <span className="input-group-text">Magnitude (Low)</span>
          </div>
          <div className="col-xs-1">
          <input
          style={smallField}
          type="text"
          maxLength={"3"}
          className="form-control" aria-label="Low Magnitude"
          id="lmag"
          defaultValue={this.props.lmag}
          onChange={this.handleMagChange}
          />
          </div>
          {/* Field name: Magnitude (High)*/}
          <div className="input-group-prepend">
            <span className="input-group-text">Magnitude (High)</span>
          </div>
          <div className="col-xs-1">
          <input
            style={smallField}
            type="text"
            maxLength={"3"}
            className="form-control" aria-label="High Magnitude"
            id="hmag"
            defaultValue={this.props.hmag}
            onChange={this.handleMagChange}
          />
          </div>
          {/* Sort by Magnitude or Magnitude Type*/}
          <div className="input-group-prepend">
            <span className="input-group-text">Sort by</span>
          </div>
          <div className="col-xs-1">
            <select
            className="form-control" aria-label="Sort by"
            value={this.props.sortBy}
            onChange={e => {
            this.props.dispatch(setSortFilter(e.target.value));
            }}
            >
            <option value="mag">Magnitude</option>
            <option value="magType">Mag Type</option>
            </select>
          </div>         
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    earthquakes: state.earthquakes,
    text: state.text,
    sortBy: state.sortBy,
    lmag: state.lmag,
    hmag: state.hmag
  };
};

export default connect(mapStateToProps)(ConnectedFilter);
