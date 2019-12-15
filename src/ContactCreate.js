import React from 'react';


export default class ContactCreate extends React.Component{

    constructor(props){
        super(props);

        this.state={
            name:'',
            phone:''

        };

        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

 
    


    

    handleChange(e){

        let nextState={};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);

    }

    handleClick(){
        const Contact={
            name:this.state.name,
            phone:this.state.phone
        }

        this.props.onCreate(Contact);

        this.setState({
            name:'',
            phone:''
        });

        console.log('1');
    }

    

    render(){

        return(
        <div>
            <h2>Create Contact</h2>
            <p>
                <input type='text' name='name' placeholder= 'name' value={this.state.name} onChange={this.handleChange}></input>
                <br/>
                <input type='text' name='phone' placeholder='phone Number' value={this.state.phone} onChange={this.handleChange}></input>
                <br/>
                <button onClick={this.handleClick}>입력</button>
            </p>
        </div>
        
        );
    }


}

ContactCreate.defaultProps={

    onCreate:()=>{console.error('onCreate ont defined');}
}