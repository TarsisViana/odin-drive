import { Form, redirect } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
export async function action({request}) {
  const formData = await request.formData()
  try {
    const res = await fetch(
    `${import.meta.env.VITE_SERVER_HOST}/files/upload`,
    {
      method: 'post',
      body: formData
     
    }
    )
    console.log(res)
  } catch (err) {
    console.log(err)
  }
  
  redirect('/home')
}

export default function HomePage() {
  return (
    <>
      <Form method="post"  encType="multipart/form-data">
        <input type="file" name="upload"/>
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}