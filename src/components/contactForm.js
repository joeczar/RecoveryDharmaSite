import React from "react";
import { navigateTo } from "gatsby-link"
import './contactForm.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className='formWrapper'>
        <h2 id='formTitle'>Get in touch</h2>
        <form id='contactForm'
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            
              <input 
                className='input dropShadow'
                type="text" 
                name="name" 
                placeholder="Your Name" 
                onChange={this.handleChange} 
              />
            
          </p>
          <p>
            
              <input 
                className='input dropShadow'
                type="email" 
                name="email" 
                placeholder='Email Address' onChange={this.handleChange} 
              />
            
          </p>
          <p>
            
              <textarea 
                className='input textArea  dropShadow'
                name="message" 
                placeholder="Your message..." 
                onChange={this.handleChange} 
              />
          
          </p>
          <p>
            <button id='submit'
            className='btn  dropShadow' type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
