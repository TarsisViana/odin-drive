import { Form, redirect } from "react-router-dom";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = await request.formData();
    const user = Object.fromEntries(formData);

    const res = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/register`,
      {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    const data = await res.json()
    console.log(data)
    return redirect("/")
}

export default function Register(){
    return (
        <>
            <Form method="post">
                <InputField
                    name="firstname"
                    type="text"
                >First Name: <br />
                </InputField>

                <InputField
                    name="lastname"
                    type="text"
                ><br />Last Name: <br />
                </InputField>

                <InputField
                    name="email"
                    type="email"
                ><br />Email: <br />
                </InputField>

                <InputField
                    name="password"
                    type="password"
                ><br />Enter Password: <br />
                </InputField>

                <InputField
                    name="confirm-pw"
                    type="password"
                ><br />Confirm Password: <br />
                </InputField>
                <br/>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </>
    )
}