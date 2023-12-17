import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/030---Paper-Stack.png";
import Button from "./Button";
import Input from "./Input";

const AuthForm = ({ title, buttonText, onSubmit, linkText, link, linkTo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading] = useState(false);

  return (
    <div className="flex justify-center h-[100vh] items-center">
      <div className="w-[400px] border p-10 rounded-lg shadow-md">
        <div className="">
          <div className="flex gap-1 items-center">
            <img className="h-6 w-10" src={logo} alt="logo" />
            <h2 className="font-bold text-2xl text-[#4E5D78]">Stack</h2>
          </div>
          <p className="mt-4 font-semibold">{title}</p>
        </div>
        <form
          className="form mt-10 grid grid-cols-1 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <label htmlFor="email" className="text text-base my-4 font-medium">
              Email
            </label>

            <Input
              type="text"
              placeholder="Enter Email"
              error={errors?.email ? errors?.email?.message : ""}
              customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400"
              hookRef={{ ...register("email", { required: true }) }}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="text text-base my-4 font-medium "
            >
              Password
            </label>

            <Input
              type="password"
              placeholder="Enter Password"
              error={errors?.password ? errors?.password?.message : ""}
              customClassName="py-2 px-3 focus:ring-purple-200 focus:border-purple-400"
              hookRef={{ ...register("password", { required: true }) }}
            />

            {errors.password && (
              <p className="text-[10px] text-red-500 -mt-2">
                {errors.password}
              </p>
            )}
          </div>

          <div className="">
            <Button
              type="submit"
              customClass="bg-purple-600 text-white rounded-lg p-2 w-full"
              text={buttonText}
            />
            <p className="mt-3 text-gray-400 px-1">
              {linkText}{" "}
              <Link to={link} className="text-[#377DFF]">
                {linkTo}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
