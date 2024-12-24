// import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
function SignUP() {
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
          <text className=" bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500">
            Blog
          </text>
        </Link>
        <p className="mt-6 text-justify">
          Welcome to [Your Blog Name], where each story begins with a single
          step. Here, you'll explore my personal experiences and insights. Join
          me in this journey and let’s create something extraordinary together
        </p>
      </div>
      {/* Right */}
      <div className="">
        <form className=" flex flex-col gap-4 sm:w-3/4 mx-auto">
          <div>
            <Label value="Username:-" />
            <TextInput
              type="text"
              placeholder="Enter your username"
              id="username"
            />
          </div>
          <div>
            <Label value="Email:-" />
            <TextInput type="email" placeholder="Enter your email" id="email" />
          </div>
          <div>
            <Label value="Password:-" />
            <TextInput
              type="password"
              placeholder="Enter your password"
              id="password"
            />
          </div>

          <Button
            gradientDuoTone="purpleToBlue"
            className="rounded-lg mt-4"
            type="submit"
          >
            Sign UP
          </Button>
        </form>
        <div className="w-full text-center mt-4">
          <spam>Have an account?</spam>
          <Link to="/sign-in" className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
