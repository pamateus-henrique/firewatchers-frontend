import {
  Form,
  redirect,
  useNavigation,
  Link,
  useActionData,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/api/v1/auth/login", data);
    return redirect("/dashboard");
  } catch (e) {
    console.log(e.response.data);
    return {
      errors: e.response.data || { message: "An unexpected error occurred" },
    };
  }
};

const Login = () => {
  const actionData = useActionData();
  const errors = actionData?.errors || null;
  return (
    <div className='wrapper bg-slate-100 mx-auto h-screen flex justify-center items-center'>
      <div className='form-modal flex flex-col bg-white p-6 rounded-md ring-1 ring-slate-200 shadow-md'>
        <h1 className='text-xl'>Log in into your account</h1>
        {errors && (
          <p className='text-sm text-red-500 mt-2'>{errors.message}</p>
        )}
        <Form className='mt-6 space-y-6' method='post'>
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
            Dont have an account yet?
            <Link to='/register' className='text-blue-400 pl-1'>
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
