import React, { Component } from 'react';
import { Link } from "react-router-dom"

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2><span className="card-locationaddress">{this.props.location.address}</span></h2>
          <p><span className="card-locationcity">{this.props.location.city}</span></p>
          <button type="button"
        onClick={() => {this.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;