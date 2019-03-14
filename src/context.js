import React, { Component } from 'react';

const Context= React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return{ //spread operator (operador de propagacion ...) we want to take the existing state
                ...state,
                contacts: state.contacts.filter(contact =>
                contact.id !== action.payload) //carga util - data that you want to send along with your action.
            };
        case 'ADD_CONTACT':
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
  
        }
        default:
            return state;
    }
}

export class Provider extends Component {
    state= {
        contacts: [
            {
                id: 1,
                name: 'Carlos Murillo',
                email: 'ca@.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Carlos Murillo1',
                email: 'ca@.com',
                phone: '222-555-5555'
            },
            {
                id: 3,
                name: 'Carlos Murillo2',
                email: 'ca@.com',
                phone: '333-555-5555'
            }
         ],
         dispatch: action => {
             this.setState(state=> reducer(state, action))
         }
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;