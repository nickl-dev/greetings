import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__heading">Login</h1>
      <Form noValidate>
        <Form.Input
          label="Username"
          placeholder="Username"
          // name="username"
          // value={values.username}
          // error={errors.username ? true : false}
          // onChange={onChange}
        />
        <Form.Input label="Password" placeholder="Password" />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
