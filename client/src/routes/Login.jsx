import InputField from "../components/InputField";
import { Form, redirect } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = await request.formData();
    const user = Object.fromEntries(formData);
    
    const res = await fetch(
        `${import.meta.env.VITE_SERVER_HOST}/session/login`,
        {
            method: 'post',
            credentials: "include",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    console.log(res)

    return redirect("/")
}

export default function Login() {
    return (
        <>
            <Form method="post">
                <InputField
                    type="email"
                    name="email"
                >Email address: <br />
                </InputField>
                <InputField
                    type="password"
                    name="password"
                >
                    <br />Password:<br />
                </InputField>
                <br/>
                <SubmitButton type="submit">
                    Submit
                </SubmitButton>
            </Form>
        </>
    )
}