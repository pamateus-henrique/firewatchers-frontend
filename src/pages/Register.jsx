import { Form, redirect, Link, useActionData } from "react-router-dom";
import FormRow from "../components/FormRow";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/api/v1/auth/register", data);

    return redirect("/dashboard");
  } catch (e) {
    console.log(e.response.data);
    return {
      errors: e.response.data || { message: "An unexpected error occurred" },
    };
  }
};

const Register = () => {
  const actionData = useActionData();
  const errors = actionData?.errors || null;

  return (
    <div className='wrapper bg-slate-100 mx-auto h-screen flex justify-center items-center'>
      <div className='form-modal flex flex-col bg-white p-6 rounded-md ring-1 ring-slate-200 shadow-md'>
        <h1 className='text-xl'>Create Your Account</h1>
        {errors && (
          <p className='text-sm text-red-500 mt-2'>{errors.message}</p>
        )}
        <Form className='mt-6 space-y-6' method='post'>
          <div className='flex space-x-6'>
            <FormRow
              type='name'
              name='name'
              placeholder='John'
              labelText='Name'
            />
            <FormRow
              type='surname'
              name='surname'
              placeholder='Doe'
              labelText='Last Name'
            />
          </div>

          <FormRow
            type='email'
            name='email'
            placeholder='email@cloudwalk.io'
            labelText='Your email'
          />
          <FormRow
            type='password'
            name='password'
            placeholder='***********'
            labelText='Password'
          />
          <div className=''>
            <button className='p-2 bg-blue-600 rounded-md px-4 w-full text-white'>
              Submit
            </button>
          </div>
          <p className='text-sm text-slate-400'>
            Already have an account?
            <Link to='/login' className='text-blue-400 pl-1'>
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
