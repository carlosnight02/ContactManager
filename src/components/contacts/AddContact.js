import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
 
class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        //console.log(this.state);
        const {name, mail, phone} = this.state;

        // Check For Errors
        if(name ===''){
            this.setState({errors: {name: 'Name is requiered'}})
            return;
        }
        
        if(mail === ''){
            this.setState({errors:{email: 'Email is required'}});
            return;
        }
     
        if(phone === ''){
            this.setState({errors:{phone: 'Phone is required'}});
            return;
        }
      
        const newContact = {
            id:uuid(),
            name,
            mail,
            phone
        }
        dispatch({type: 'ADD_CONTACT', payload: newContact});

      //Clear State
        this.setState({
            name: '',
            email:'',
            phone: '',
            errors: {}
      });
    }  
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
   
    render() {
        const { name, email, phone, errors }= this.state;
        return (
        <Consumer>
            {value =>{
                const { dispatch } = value;
                return(
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div> 
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)} >
                                <TextInputGroup
                                    label="Name"
                                    name="name"                                
                                    placeholder="Enter Name.."
                                    value= {name}
                                    onChange= {this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email.."
                                    value= {email}
                                    onChange= {this.onChange}
                                    error={errors.mail}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"                                
                                    placeholder="Enter Phone.."
                                    value= {phone}
                                    onChange= {this.onChange}
                                    error={errors.phone}
                                />       
                                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    
    );
 }
}
export default AddContact;