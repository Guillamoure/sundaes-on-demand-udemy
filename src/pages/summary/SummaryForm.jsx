import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SummaryForm = () => {
  const [disabled, toggleDisabled] = React.useState(true);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={!disabled}
          label={checkboxLabel}
          onChange={() => toggleDisabled(!disabled)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={disabled}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
