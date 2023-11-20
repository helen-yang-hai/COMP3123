import React, { Component } from 'react'
import axios from 'axios'
import './PersonList.css'

export default class PersonList extends Component {
    constructor(props){
        super(props)
        //Define state default values
        this.state = {
            persons: []
        }
    }

 //Component Lifecycle Callback
    componentDidMount(){
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    // fetchAllUsers = async() => {
    //     try{
    //         var res = await fetch(`https://randomuser.me/api/?results=10`)
    //         const person = await res.json()
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

  render() {
    return (
      <div>
        <h1>User List</h1>
        <div>
            {this.state.persons.map((person) => {
                return (
                    <div className='personInfo'>
                        <h2>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</h2>
                        <div className='personInfoContainer'>
                            <div className='personInfoLeft'>
                                <img src={person.picture.medium} alt={person.name.first}></img>
                                <br></br>
                                <button>Details</button>
                            </div>
                            <div className='personInfoRight'>
                                <h3>User Name: {person.login.username}</h3>
                                <h3>Gender: {person.gender}</h3>
                                <h3>Time Zone Description: {person.location.timezone.description}</h3>
                                <h3>Address: {person.location.street.number} {person.location.street.name}, 
                                    {person.location.city}, {person.location.state}, {person.location.country} - 
                                    {person.location.postcode}
                                </h3>
                                <h3>Email: {person.email}</h3>
                                <h3>BirthDate and Age: {person.dob.date} ({person.dob.age}) </h3>
                                <h3>Register Date: {person.registered.date} </h3>
                                <h3>Phone#: {person.phone}</h3>
                                <h3>Cell#: {person.cell}</h3>
                            </div>
                        </div>    
                    </div>
                    
                )
            })}
        </div>

      </div>
    )
  }
}
