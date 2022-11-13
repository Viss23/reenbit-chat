import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./loginSlice";

import { Formik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginContainer = (props) => {
  const currentUserId = useSelector((state) => state.currentUser.id);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUserId) {
      return navigate("/");
    }
  }, [currentUserId]);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <Formik
        initialValues={{ username: "oleh", password: "123456" }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(loginThunk(values));
        }}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
