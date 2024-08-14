import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupText, Label } from "reactstrap";

const Login = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="page-login">
      <div className="login-form-area">
        <div className="login-form mb-3">
          <h5 className="text-primary text-center mb-0">Welcome Back !</h5>
          <p className="text-center">Login to continue</p>
          <div className="mb-3">
            <Label>Username</Label>
            <Input />
          </div>
          <div className="mb-3">
            <div className="text-between">
              <Label>Password</Label>
              <Label className="text-muted pointer">Forget Password?</Label>
            </div>

            <InputGroup>
              <Input type={isShow ? "text" : "password"} />
              <InputGroupText
                className="pointer"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? (
                  <i className="ri-eye-off-line"></i>
                ) : (
                  <i className="ri-eye-line"></i>
                )}
              </InputGroupText>
            </InputGroup>
          </div>
          <div className="mb-3 align-center">
            <Input type="checkbox" className="me-2 p-10 mt-0" />
            <div>Remeber me</div>
          </div>
          <div className="mb-3">
            <Button className="w-100" color="primary">
              Login
            </Button>
          </div>
        </div>
        <p className="text-center">
          Don't have an account?{" "}
          <span className="text-primary underline pointer">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
