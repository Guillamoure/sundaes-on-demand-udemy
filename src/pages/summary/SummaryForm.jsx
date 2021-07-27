import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const SummaryForm = ({ updateOrderStatus }) => {
  const [disabled, toggleDisabled] = React.useState(true);

  const popup = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popup}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
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
      <Button
        variant="primary"
        type="submit"
        disabled={disabled}
        onClick={() => updateOrderStatus("confirmation")}
      >
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
