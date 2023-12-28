import React from 'react'
import SimpleForm from "./SimpleForm";
import showResults from "./showResults";

const SimpleFormCall = () => {
  return (
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
  );
}
export default SimpleFormCall;