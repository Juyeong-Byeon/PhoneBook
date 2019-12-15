import React from 'react';

export default  class ContactDetail extends React.Component{


    render(){
        const details=(<div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
        </div>);
        
        const blank=(<div>blank</div>);
        return(

            <div>
                <h2>details</h2>
                {this.props.isSelected? details:blank}
            </div>
        );
    }

}

ContactDetail.defaultProps={
    contact:{
        name:'',
        phone:''
    }

};