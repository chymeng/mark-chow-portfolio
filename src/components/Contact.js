import React, { Component } from 'react'
import Svg from '../components/Svg'
import { contact } from '../constants/constants'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = event => {
    const {
      target: { name, value }
    } = event
    this.setState({ [name]: value })
  }

  onSubmitForm = () => {
    console.log('test')
  }

  render() {
    const { name, email, message } = this.state
    return (
      <div className="section-container">
        <div className="section">
          <h2 className="secondary-heading">Let's keep in touch</h2>
          <div className="social-links" style={{ marginTop: '0px' }}>
            {contact.map((x, index) => {
              return <Svg key={index} icon={x.icon} a={x.a} />
            })}
          </div>
          <div className="contact-form">
            <h2 className="secondary-heading">Let's chat</h2>
            <div className="form">
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
                placeholder={'email'}
                value={email}
                onChange={this.handleChange}
              />
              <textarea
                name={'message'}
                type={'text'}
                placeholder={'message'}
                value={message}
                onChange={this.handleChange}
              />
              <button onClick={this.onSubmitForm}>submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
