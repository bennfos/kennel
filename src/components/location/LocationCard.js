import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2><span className="card-locationaddress">{this.props.location.address}</span></h2>
          <p><span className="card-locationcity">{this.props.location.city}</span></p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;