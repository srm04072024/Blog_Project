// import React from "react";
import { useState } from "react";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
function SignUP() {
  const [FormData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !FormData.username ||
      !FormData.email ||
      !FormData.password ||
      FormData.username === "" ||
      FormData.email === "" ||
      FormData.password === ""
    ) {
      return setErrorMessage("Please fill all the fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const data = res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  console.log(errorMessage);
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
        <p className="mt-6 text-justify text-gray-50">
          Welcome to [Your Blog Name], where each story begins with a single
          step. Here, you'll explore my personal experiences and insights. Join
          me in this journey and let’s create something extraordinary together
        </p>
      </div>
      {/* Right */}
      <div>
        <form
          className=" flex flex-col gap-4 sm:w-3/4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <Label value="Username:-" className=" text-white" />
            <TextInput
              type="text"
              placeholder="Enter your username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Email:-" className=" text-white" />
            <TextInput
              type="email"
              placeholder="Enter your email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value="Password:-" className=" text-white" />
            <TextInput
              type="password"
              placeholder="Enter your password"
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
              "Sign Up"
            )}
          </Button>
        </form>
        <div className="w-full text-center mt-4">
          <span className=" text-white">Have an account?</span>
          <Link to="/sign-in" className="text-blue-500 pl-2">
            Sign In
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

export default SignUP;
