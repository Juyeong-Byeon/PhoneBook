import React from 'react';


export default class ContactInfo extends React.Component{
    render(){
        return(
    <div class='contactList' onClick={this.props.onClick} >{this.props.contact.name}</div>
        );
    }

}