import React, { Component } from 'react'
import './UserFormClass.css'

export default class UserFormClass extends Component {
    constructor(props){
        super(props)
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba',
        'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 
        'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            formSubmitted: false
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.setState({formSubmitted: true})
    }

  render() {
    return (
      <div>
        <div className='form'>
            <h1>Data Entry Form</h1>
            <form onSubmit={(event) => this.onSubmitForm(event)}>
                <div className="formCol">
                    <label>
                        Email
                    <input
                        name='email'
                        onChange={(e) => this.onValueChanged(e)}
                        type='text'
                        
                        placeholder='Enter email'/>
                    </label>
                    
                    <label>
                        Name
                    <input
                        name='name'
                        type='text'
                        onChange={(e) => this.onValueChanged(e)}
                        placeholder='Full Name'/>
                    </label>
                </div>

                <label className="formCol">
                    Address
                <input
                    name='address'
                    type='text'
                    onChange={(e) => this.onValueChanged(e)}
                    placeholder='1234 Main St'/>
                </label>

                <label className="formCol">
                    Address 2
                <input
                    name='address2'
                    type='text'
                    onChange={(e) => this.onValueChanged(e)}
                    placeholder='Apartment, studio, or floor'/>
                </label>

                <div className="formCol">
                <label>
                    City
                <input
                    name='city'
                    type='text'
                    onChange={(e) => this.onValueChanged(e)}/>
                </label>

                <label>
                    Province
                <select name='province' onChange={(e) => this.onValueChanged(e)} required>
                    <option value="">Choose</option>
                    {
                        this.provinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                        ))
                    }
                </select>
                </label>

                <label>
                    Postal Code
                <input
                    name='postalCode'
                    type='text'
                    onChange={(e) => this.onValueChanged(e)}/>
                </label>
                </div>

                <label>
                <input
                    name='terms'
                    type='checkbox'
                    onChange={(e) => this.onValueChanged(e)} required/>
                    Agree Terms & Conditions?
                </label>
                <br></br>

                <button
                    name='submitBtn'
                    type='submit'>Submit</button>
            </form>
        </div>   

        {this.state.formSubmitted && (
            <div className="info" onSubmit={(event) => this.onSubmitForm(event)}>
                <h2>
                    <span className="greenText">Email: </span>
                    <span className="blackText">{this.state.email}</span>
                </h2>
                <h2>
                    <span className="greenText">Full Name: </span>
                    <span className="blackText">{this.state.name}</span>
                </h2>
                <h2>
                    <span className="greenText">Address: </span>
                    <span className="blackText">{this.state.address}, {this.state.address2}</span>
                </h2>
                <h2>
                    <span className="greenText">City: </span>
                    <span className="blackText">{this.state.city}</span>
                </h2>
                <h2>
                    <span className="greenText">Province: </span>
                    <span className="blackText">{this.state.province}</span>
                </h2>
                <h2>
                    <span className="greenText">Postal Code: </span>
                    <span className="blackText">{this.state.postalCode}</span>
                </h2>
            </div>
        )}     
      </div>
    )
  }
}
