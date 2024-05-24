import React, { useState } from "react";
import { Formik, Form } from "formik";
import LoginValidation from "./validation";
import Input from "../Common/Input";
import { FormattedMessage, useIntl } from "react-intl";
import { signInUser, signUpUser } from "../../apis/firebase";
import Constants from "../../utils/Constants";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const formHeadingId = isSignIn ? "signIn" : "signUp";
  const newExistUserTextId = isSignIn
    ? "newUserSingUpText"
    : "existingUserSingInText";
  const intl = useIntl();
  const initialValues = {
    ...(!isSignIn && { firstName: "" }),
    ...(!isSignIn && { lastName: "" }),
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    const {
      email,
      password,
      displayName = values?.firstName + values?.lastName,
    } = values;
    if (isSignIn) {
      signInUser({ email, password }, setErrorMessage);
    } else {
      signUpUser(
        { email, password, displayName, photoURL: Constants.photo_url },
        setErrorMessage,
        { dispatch }
      );
    }
  };

  return (
    <div className="w-3/12 bg-black opacity-90 absolute left-0 right-0 mx-auto my-32 p-10">
      <h1 className="text-white my-4 text-3xl">
        <FormattedMessage id={formHeadingId} />
      </h1>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      <Formik
        initialValues={initialValues}
        validationSchema={() => LoginValidation(isSignIn)}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          {!isSignIn && (
            <Input
              id="firstName"
              name="firstName"
              placeholder="firstName"
              className="w-full border-2 border-black-100 p-2 my-2 focus:ring-2 rounded"
            />
          )}
          {!isSignIn && (
            <Input
              id="lastName"
              name="lastName"
              placeholder="lastName"
              className="w-full border-2 border-black-100 p-2 my-2 focus:ring-2 rounded"
            />
          )}
          <Input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            className="w-full border-2 border-black-100 p-2 my-2 focus:ring-2 rounded"
          />
          <Input
            id="password"
            name="password"
            placeholder="password"
            type="password"
            className="w-full border-2 border-black-100 p-2 my-2 focus:ring-2 rounded"
          />
          <button type="submit" className="w-full bg-red-700 p-2 my-2 rounded">
            <FormattedMessage id={formHeadingId} />
          </button>
        </Form>
      </Formik>
      <div className="w-full my-2 curson-pointer">
        <span className="text-white">
          {intl.formatMessage({ id: newExistUserTextId })}
        </span>
        <span
          className="text-red-700 ml-1"
          id={formHeadingId}
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {intl.formatMessage({ id: `${isSignIn ? "signUp" : "signIn"}` })}
        </span>
      </div>
    </div>
  );
};

export default Login;
