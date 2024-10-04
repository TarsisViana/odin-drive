export default function RegisterForm() {

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const res = await fetch(
      `http://localhost:3000/register`,
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
  }
  return (
    <>
     <form method="post" action="" onSubmit={handleSubmit}>
      <label>
        First Name:<br /><input
          type="text"
          name="firstname"
        />
      </label>
      <br />
      <label>
        Last Name:<br /><input
          type="text"
          name="lastname"
          
        />
      </label>
      <br />
      <label>
        Enter Email:<br /><input
          type="text"
          name="email"
          
        />
      </label>
      <br />
      <label>
        Enter Password:<br /><input
          type="password"
          name="password"
          
        />
      </label>
      <br />
      <label>
        Confirm Password:<br /><input type="password" name="confirm-pw" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
    </>
  )
}