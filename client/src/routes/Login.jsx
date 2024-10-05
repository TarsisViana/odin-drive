import InputField from "../components/InputField";
import { Form } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
    const formData = new request.formData();
    const user = Object.fromEntries(formData);

    const res = await fetch(
        `http://localhost:3000/login`,
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
    const data = await res.json()
    console.log(data)
}

export default function Login() {
    return (
        <>
            <Form
                method="post"
            >
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
                <SubmitButton>
                    Submit
                </SubmitButton>
            </Form>
        </>
    )
}