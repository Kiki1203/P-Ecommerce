import React, { Component } from 'react';

import EmailValidator from '../Supports/Functions/EmailValidator';
import PhoneValidator from '../Supports/Functions/PhoneValidator';

export default class Register extends Component {
  state = {
    error: null,
    phoneNumber: null,
    email: null,
  };

  // r
  onValidation = () => {
    let inputEmailOrPhone = this.refs.inputEmailOrPhone.value;

    if (inputEmailOrPhone) {
      if (!inputEmailOrPhone.includes('@')) {
        // Apabila Index Ke-0 adalah Number
        // Validasi Phone Number
        let resultPhoneValidator = PhoneValidator(inputEmailOrPhone);

        if (resultPhoneValidator === true) {
          this.setState({ phoneNumber: inputEmailOrPhone, error: null });
        } else {
          this.setState({ error: resultPhoneValidator });
        }
      } else {
        // Validasi Email
        let resultEmailValidator = EmailValidator(inputEmailOrPhone);

        if (resultEmailValidator === true) {
          this.setState({ email: inputEmailOrPhone, error: null });
        } else {
          this.setState({ error: 'Email Tidak Sesuai!' });
        }
      }
    } else {
      this.setState({ error: 'Isi Semua Data' });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mx-5 my-5 border border-grey" style={{ height: '68vh' }}>
          <div className="col-6"></div>
          <div className="col-6">
            <div className="mt-3">
              <h2>Register</h2>
            </div>
            <div className="mt-3">
              <input type="text" ref="inputEmailOrPhone" placeholder="Enter Your Email or Phone Number" className="form-control" onChange={this.onValidation} />
            </div>
            <div className="mt-3">
              <input type="text" placeholder="Enter Your Password" className="form-control" />
            </div>
            <div className="mt-3">
              <input type="button" value="Register" className="btn sefruit-bg-secondary-light sefruit-main-light mb-3" />
            </div>
            <div>
              <h6 className="sefruit-danger">{this.state.error}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
