// import React from "react";
import { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

function SignIn() {
  const [FormData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !FormData.email ||
      !FormData.password ||
      FormData.email === "" ||
      FormData.password === ""
    ) {
      return dispatch(signInFailure("Please fill all the fields."));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      // console.log(data);
      if (data.success === false) {
        // setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 items-center p-10 gap-6 md:gap-0">
      {/* Left */}
      <div className=" sm:w-3/4 mx-auto">
        <Link
          to="/"
          className=" self-center whitespace-nowrap text-5xl font-bold"
        >
          <span className=" px-2 py-1 bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 rounded-lg text-white">
            User's
          </span>
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500">
            Blog
          </span>
        </Link>
        <p className="mt-6 text-justify">
          Welcome to [Your Blog Name], where each story begins with a single
          step. Here, you'll explore my personal experiences and insights. Enter
          Your Email and Password to Sign In.
        </p>
      </div>
      {/* Right */}
      <div>
        <form
          className=" flex flex-col gap-4 sm:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <Label value="Email:-" />
            <TextInput
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Password:-" />
            <TextInput
              type="password"
              placeholder="*********************"
              id="password"
              onChange={handleChange}
            />
          </div>

          <Button
            gradientDuoTone="purpleToBlue"
            className="rounded-lg mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className=" pl-4">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <OAuth />
        </form>
        <div className="w-full text-center mt-4">
          <span>Don't have an account?</span>
          <Link to="/sign-up" className="text-blue-500 pl-2">
            Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert type="error" className="mt-4 sm:w-3/4 mx-auto" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default SignIn;
