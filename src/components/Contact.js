import React, { Component } from 'react'
import Svg from '../components/Svg'
import plane from '../images/plane.svg'
import { contact } from '../helpers/constants'
import { emailValidation, lengthValidation } from '../helpers/helpers'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      contactError: [],
      errorMessage: false,
      contactFormSent: false
    }
  }

  handleChange = event => {
    const {
      target: { name, value }
    } = event
    this.setState({ [name]: value })
  }

  formValidation = () => {
    const { name, email, message } = this.state
    let invalid = []
    if (!lengthValidation(name, 3))
      invalid.push('Name must be more than 3 characters')
    if (!emailValidation(email))
      invalid.push('Please enter a valid email address')
    if (!lengthValidation(message, 10))
      invalid.push('Minimum characters for message is 10')
    return invalid
  }

  onSubmitForm = () => {
    const contactErrors = this.formValidation()
    const template = process.env.REACT_APP_EMAILJS_TEMPLATEID
    const templateParams = {
      from_name: this.state.name,
      message_html: this.state.message,
      reply_to: this.state.email
    }
    this.setState({ contactError: contactErrors }, () => {
      if (this.state.contactError.length === 0) {
        window.emailjs
          .send('mailgun', template, templateParams)
          .then(res => {
            this.setState({ contactFormSent: true })
          })
          .catch(err => console.error('Failed to send feedback. Error: ', err))
      } else {
        this.setState({ errorMessage: true })
      }
    })
  }

  render() {
    const { name, email, message, contactFormSent, contactError } = this.state
    return (
      <div className="section-container">
        <div className="section">
          <div className="contact">
            <div className="social-links" style={{ marginTop: '0px' }}>
              <h2 className="secondary-heading">Let's keep in touch</h2>
              {contact.map((x, index) => {
                return <Svg key={index} icon={x.icon} a={x.a} />
              })}
            </div>
            <div className="form-container">
              <h2 className="secondary-heading">Let's chat</h2>
              <div className="form">
                {contactError.length > 0
                  ? contactError.map((x, index) => {
                      return (
                        <li key={index} className="error">
                          {x}
                        </li>
                      )
                    })
                  : null}
                {contactFormSent ? (
                  <p className="success">Message sent!</p>
                ) : null}
                <input
                  name={'name'}
                  type={'text'}
                  placeholder={'Name'}
                  value={name}
                  onChange={this.handleChange}
                />
                <input
                  name={'email'}
                  type={'text'}
                  placeholder={'Email'}
                  value={email}
                  onChange={this.handleChange}
                />
                <textarea
                  name={'message'}
                  type={'text'}
                  placeholder={'Message'}
                  value={message}
                  onChange={this.handleChange}
                />
                <button onClick={this.onSubmitForm}>
                  <Svg icon={plane} />
                  <h3>Send</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
