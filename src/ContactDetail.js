import React from 'react';

export default  class ContactDetail extends React.Component{


    constructor(props){
        super(props);

        this.state={
            isEdit:false,
            name:'',
            phone:""
        };

        this.handleToggle=this.handleToggle.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleEdit=this.handleEdit.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
    }

    handleToggle(){
       if(!this.state.isEdit){
        
        
        this.setState({
            name:this.props.contact.name,
            phone:this.props.contact.phone
        });
        }else{
           
            this.handleEdit();
            
        }
        this.setState({
            
            isEdit:!this.state.isEdit
            
            
        });
        
        
    
    
    }
    handleChange(e){

        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);

    }
    handleEdit(){

        this.props.onEdit(this.state.name,this.state.phone);

    }

    handleKeyPress(e){
        if(e.charCode===13){
        this.handleToggle();
        }

    }

    render(){
        const details=(<div >
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
        
        </div>);
        const blank=(<div>Select contact</div>);
        const updateInput=(
        <div>
            <p><input 
            type='text' name='name' value={this.state.name} 
            placeholder={this.props.contact.name}
            onChange={this.handleChange}
            
            ></input>
            </p>
            <p>
            <input type='text' name='phone' value={this.state.phone}  
            placeholder={this.props.contact.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            ></input>
            </p>

        </div>
        );
        const view =this.state.isEdit? updateInput:details;
        const UPDATEbuttonText=this.state.isEdit? "OK":"Update";
        return(
            <div class='contactdetail'>
                <h2>Details</h2>
                {this.props.isSelected? view:blank}
                <p>
                    <button onClick={this.handleToggle}>{UPDATEbuttonText}</button>
                    <button onClick={this.props.onRemove}>Delete</button>
                </p>
            </div>
        );
    }

}

ContactDetail.defaultProps={
    contact:{
        name:'',
        phone:''
    },
    onRemove:()=>{console.error('nothing selected');}

};