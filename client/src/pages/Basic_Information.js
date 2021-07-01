import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col } from "react-bootstrap";

const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      user_email: user.user_email,
      user_password: user.user_password,
      birth_year: user.birth_year,
      phone_number: user.phone_number,
      national_id: user.national_id,
    },
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    //console.log(data);
    props.history.push("/second");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: "First name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "First name should contain only characters.",
              },
            })}
            className={`${errors.first_name ? "input-error" : ""}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: "Last name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Last name should contain only characters.",
              },
            })}
            className={`${errors.last_name ? "input-error" : ""}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="user_email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            className={`${errors.user_email ? "input-error" : ""}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="user_password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            ref={register({
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should have at-least 6 characters.",
              },
            })}
            className={`${errors.user_password ? "input-error" : ""}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="birth_year">
          <Form.Label>Birth year</Form.Label>
          <Form.Control
            type="number"
            name="birth_year"
            placeholder="Enter your birthdate year"
            autoComplete="off"
            ref={register({
              required: "Birth Year is required.",
              pattern: {
                value: /^-?(0|[1-9]\d*)?$/,
                message: "Birth year should contain only numbers.",
              },
              maxLength: {
                value: 4,
                message: "Maximum 4 numbers",
              },
              minLength: {
                value: 4,
                message: "Minimum 4 numbers",
              },
            })}
            className={`${errors.birth_year ? "input-error" : ""}`}
          />
          {errors.birth_year && (
            <p className="errorMsg">{errors.birth_year.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="national_id">
          <Form.Label>National ID</Form.Label>
          <Form.Control
            type="number"
            name="national_id"
            placeholder="Enter your National ID"
            autoComplete="off"
            ref={register({
              required: "National ID is required.",
              pattern: {
                value: /^-?(0|[1-9]\d*)?$/,
                message: "National ID should contain only characters.",
              },
            })}
            className={`${errors.national_id ? "input-error" : ""}`}
          />
          {errors.national_id && (
            <p className="errorMsg">{errors.national_id.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="phone_number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone_number"
            placeholder="Enter your Phone Number"
            autoComplete="off"
            ref={register({
              required: "Phone number is required.",
              pattern: {
                value: /^-?(|[0-9]\d*)?$/,
                message: "Phone number should contain only numbers.",
              },
              minLength: {
                value: 4,
                message: "Minimum 4 numbers",
              },
            })}
            className={`${errors.phone_number ? "input-error" : ""}`}
          />
          {errors.phone_number && (
            <p className="errorMsg">{errors.phone_number.message}</p>
          )}
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;
