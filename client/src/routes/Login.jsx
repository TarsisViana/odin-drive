import InputField from "../components/InputField";
import { Form, redirect, useActionData } from "react-router-dom";
import Button from "../components/Button";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = await request.formData();
    const user = Object.fromEntries(formData);

    try {
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
        if (res.status === 400 || res.status === 401) {
            return "Invalid email or password."
        }
        return redirect('/')
    } catch (err) {
        console.log(`Error: ${err}`)
        return
    }

}

export default function Login() {
    const loginErr = useActionData()
    return (
        <>
            <p>{loginErr}</p>
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
                <br />
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}