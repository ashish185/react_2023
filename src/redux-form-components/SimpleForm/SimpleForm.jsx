import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit} data-testid="simple-form">
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            data-testid="firstName"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            data-testid="lastName"
          />
        </div>
      </div>
      <div>
        <button
          data-testid="submitButton"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SimpleForm);
