import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      address: "",
      city: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");

    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        address: location.address,
        city: location.city
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}


  render() {
    return (
        <div className="card">
          <div className="card-content">
            <h2><span className="card-locationaddress">{this.state.address}</span></h2>
            <p><span className="card-locationcity">{this.state.city}</span></p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>
          </div>
        </div>
      );
  }
}

export default LocationDetail;