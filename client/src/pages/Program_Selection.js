import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";

const SecondStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      faculty: user.faculty,
      major: user.major,
      high_school_name: user.high_school_name,
      certificate: user.certificate,
    },
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    //console.log(data);
    props.history.push("/third");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="faculty">
          <Form.Label>Faculty</Form.Label>
          <Form.Control as="select">
            <option key="blankChoice" hidden value>
              {" "}
              Select desired Faculty{" "}
            </option>
            <option>Computer Science</option>
            <option>Engineering</option>
            <option>Business</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="major">
          <Form.Label>Major</Form.Label>
          <Form.Control
            type="text"
            name="major"
            placeholder="Enter your desired major"
            autoComplete="off"
            ref={register({
              required: "Major Name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Major Name should contain only characters.",
              },
            })}
            className={`${errors.high_school_name ? "input-error" : ""}`}
          />
          {errors.high_school_name && (
            <p className="errorMsg">{errors.high_school_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="high_school_name">
          <Form.Label>High School Name</Form.Label>
          <Form.Control
            type="text"
            name="high_school_name"
            placeholder="Enter your High School Name"
            autoComplete="off"
            ref={register({
              required: "High School Name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "High School Name should contain only characters.",
              },
            })}
            className={`${errors.high_school_name ? "input-error" : ""}`}
          />
          {errors.high_school_name && (
            <p className="errorMsg">{errors.high_school_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="certificate">
          <Form.Label>Certificate</Form.Label>
          <Form.Control as="select" placeholder="Enter desired Faculty">
            <option key="blankChoice" hidden value>
              {" "}
              Select your High School Certificate{" "}
            </option>
            <option>IGCSE</option>
            <option>American</option>
            <option>National</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;
