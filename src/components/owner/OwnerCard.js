import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2><span className="card-ownername">{this.props.owner.name}</span></h2>
          <p><span className="card-ownerphone">{this.props.owner.phone}</span></p>
          <button type="button"
        onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Bye</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;