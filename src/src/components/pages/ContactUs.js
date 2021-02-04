
import React, {Component} from 'react';
import './ContactUs.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
        
      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["message"] = "";
            this.setState({input:input});
      
            alert('Form is submited');
        }
      }
      
      validate(){
          let input = this.state.input;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
          }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
      
          if (!input["message"]) {
            isValid = false;
            errors["message"] = "Please enter your message.";
          }
      
          this.setState({
            errors: errors
          });
      
          return isValid;
      }
    
    
    
    

    render( ) {
    return(
        <div >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                   
                   
<h1>What are our roles</h1>
<div className='imagewrap2'>
    <div className='row2'>
        <div className='column2'>
<img src={process.env.PUBLIC_URL + '/img/designer.jpg'} alt='designer' className='images11'/><p>Designer</p>
</div>
<div className='column2'>

<img src={process.env.PUBLIC_URL + '/img/front-end-developer.jpg'} alt='frontend' className='images11'/><p>Front End Developer</p>
</div>
<div className='column2'>

<img src={process.env.PUBLIC_URL + '/img/backend-developer.jpg'} alt='backend' className='images11'/><p>Back End Developer</p>
</div>
<div className='column2'>

<img src={process.env.PUBLIC_URL + '/img/mobile-developer.jpg'} alt='mobile' className='images11'/><p>Mobile Developer</p>
</div>

</div>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<div id='contactUs' className='contact'> 
<div className='group'>
<form onSubmit={this.handleSubmit} method="POST" action="mailto:shanice.gygenaar@younglings.africa" >
    <input type='text' name='name' 
     value={this.state.input.name}
     onChange={this.handleChange}/>

    <label htmlFor='name' className='form-label'><span className='bar'>Name</span></label>
    <br />
    <br />
    <div className="text-danger">{this.state.errors.name}</div>
  <br />
  <br />
    <input type='email' name='email'
    value={this.state.input.email}
    onChange={this.handleChange}/>
    <label>Email</label>
    <br />
    <br />
  
    <div className="text-danger">{this.state.errors.email}</div>

    <br />
    <br />
    <label htmlFor='message'>Message</label>
    <textarea rows='6'
    name='message'
    value={this.state.input.comment} 
    onChange={this.handleChange}></textarea>

        <div className="text-danger">{this.state.errors.message}</div>

    
    </form>
    </div>
    <form onSubmit={this.handleSubmit} >

<div className='contact2'>
    <h3>Contact Us</h3>
<p>Want to more about how we work. Then just pop us a message.
</p>
<p>WE ALWAYS READY TO SOLVE YOUR PROBLEMS</p>
    <button type='submit' value='submit'>Submit</button>
    </div>


</form>

</div>
            
<p className='copyright'>© 2020 All Rights Reserved • ScrapeCoders
</p>
        </div>
    );
}
}





export default Contact;