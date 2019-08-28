import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        name: "",
        phone: "",
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };


    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.phone === "") {
            window.alert("Please input an owner name and phone");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.name,
                phone: this.state.phone
            };

            // Create the animal and redirect user to animal list
            OwnerManager.post(owner)
            .then(() => this.props.history.push("/owners"));
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
                            id="name"
                            placeholder="Owner name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="Phone"
                            />
                            <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default OwnerForm