import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import ReactSelect from 'react-select';
import MySelect from "./MySelect";

class UserForm extends Component {
  onSubmit = (value) => {
    console.log("submitted", value);
  };

  componentDidMount() {
    const { initialize } = this.props;
    initialize({
      firstName: "Marie",
      lastName: "Jane",
      email: "marie@mail.com",
    });
  }

  onChange = () => {
    console.log("--------------------------------On change calling");
  };

  genderOptions = () => [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  selectOnChange= () =>{
    console.log("**********************user form on change invoked");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form data-testid="userform" onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            aria-label="first name"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            aria-label="last name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="text"
            aria-label="email"
          />
        </div>
        <div>
          <label >Gender</label>
          <Field
            name="select-gender"
            component={MySelect}
            type="text"
            options={this.genderOptions()}
            onChange={this.selectOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "userForm"
})(UserForm);
