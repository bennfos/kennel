import { Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList.js'
import LocationForm from './location/LocationForm.js'
import EmployeeList from './employee/EmployeeList.js'
import EmployeeForm from './employee/EmployeeForm.js'
import OwnerList from './owner/OwnerList.js'
import OwnerForm from './owner/OwnerForm.js'
import AnimalList from './animal/AnimalList.js';
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationDetail from "./location/LocationDetail"
import Login from './auth/Login'

class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
    // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
        }} />
        <Route exact path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
           if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
          return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
        }} />
        <Route exact path="/locations/new" render={(props) => {
          return <LocationForm />
        }} />
        <Route exact path="/employees" render={(props) => {
           if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
          return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
           if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
          return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews