import React from 'react';
import ContactInfo from './contactInfo';


export default class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state={
          contactData:[
            {
              name:'A',
              phone:'010-3527-1234'
            },
            {
              name:'A',
              phone:'010-3527-1234'
            },
            {
              name:'A',
              phone:'010-3527-1234'
            },
            {
              name:'A',
              phone:'010-3527-1234'
            }
        ]
        };
      }

      render(){
        const mapToComponents=(data)=>{
            return data.map((contact,i)=>{
  
              return (<ContactInfo contact={contact} key={i}/>);
            })
  
        };

        return(
            <div>
                <h1>Contact</h1>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
  
      }


}