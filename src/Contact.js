import React from 'react';
import ContactInfo from './contactInfo';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';
import ContactCreate from './ContactCreate';


export default class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state={
          keyword:'',
          selectedKey:-1,
          contactData:[
            {
              name:'A',
              phone:'010-3527-1234'
            },
            {
              name:'B',
              phone:'010-3527-1134'
            },
            {
              name:'C',
              phone:'010-3427-1234'
            },
            {
              name:'D',
              phone:'010-3517-6234'
            }
        ]
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
        
        this.handleCreate=this.handleCreate.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
      }

      handleChange(e){
        this.setState({
          keyword:e.target.value,//이벤트 객체
         
        });
      }
      handleClick(key){
        this.setState({
          selectedKey:key
        });

      }

      handleCreate(contact){

        this.setState({
          contactData:update(this.state.contactData,{$push:[contact]})
        });
      }
      handleRemove(){
        if(this.state.selectedKey<0){
          return;
        }
        this.setState({
          contactData:update(this.state.contactData,{$splice:[[this.state.selectedKey,1]]}),
          selectedKey:-1
        });

      }

      handleUpdate(name,phone){
        this.setState({
          contactData:update(this.state.contactData,
            {
              [this.state.selectedKey]:{
                  name:{$set:name},
                  phone:{$set:phone}

              }
            }
            )

        });

      }

      render(){


        const mapToComponents=(data)=>{
            data.sort();

            data=data.filter((contact)=>{//받은 contact데이터를 필터를 거쳐 원하는 배열로 만든다. 
              
              return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase())>-1;// contact 객체의 name 프로퍼티에 keyword와 같은 스펠이 있는지 체크
              
            });
            return data.map((contact,i)=>{
  
              return (<ContactInfo  contact={contact} key={i} onClick={()=>{this.handleClick(i)}}/>);//각 메서드 마다 iter를 돌려 이러한 형태로 만들어줌.
            });
  
        };

        return(
            <div class='App'>
                <h2>Contact</h2>
                <input 
                 name='keyword'
                 placeholder='keyword'
                 value={this.state.keyword}
                 onChange={this.handleChange}
                ></input>
                <div>{mapToComponents(this.state.contactData)}</div>
               <ContactDetail 
               isSelected={this.state.selectedKey!==-1}
               contact={this.state.contactData[this.state.selectedKey]}
               onRemove={this.handleRemove}
               onEdit={this.handleUpdate}
               />

                <ContactCreate
                onCreate={this.handleCreate}
                />
            </div>
          
        );
  
      }


}