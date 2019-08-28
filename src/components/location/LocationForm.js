import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationForm extends Component {
    state = {
        address: "",
        city: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.address === "" || this.state.city === "") {
            window.alert("Please input a location address and city");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                address: this.state.address,
                city: this.state.city
            };

            // Create the animal and redirect user to animal list
            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="address"
                            placeholder="Location address"
                        />
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="city"
                            placeholder="City"
                            />
                            <label htmlFor="city">City</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm