import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

const ToppingOption = ({ name, imagePath, updateItemCount }) => {
  const [checked, toggleChecked] = useState(false);
  const handleChange = e => {
    updateItemCount(name, checked ? "0" : "1");
    toggleChecked(!checked);
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group
        controlId={`${name}-topping-checkbox`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Check
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ToppingOption;
