import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function TextControlsExample() {
  const [tcChecked, setTcChecked] = useState(false);
  const popover = (
    <Popover id="popover-contained">
      <Popover.Body>No Condition</Popover.Body>
    </Popover>
  );
  const cheeckBoxLabel = (
    <span>
      I aggree the
      <OverlayTrigger placement="bottom" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={cheeckBoxLabel}
        />
      </Form.Group>
      <Button varient="secondary" type="submit" disabled={!tcChecked}>
        Submit
      </Button>
    </Form>
  );
}

export default TextControlsExample;
