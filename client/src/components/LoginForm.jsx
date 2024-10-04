export default function LoginForm() {

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
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
  return (
    <>
      <form
        method="post"
        action="login-react"
        style={{ maxWidth: 500 + "px" }}
        className="m-auto"
        onSubmit={handleSubmit}
      >
  
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="d-grid">
          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 mt-4">Sign in</button>
        </div>

        <div className="text-center">
          <p>Not a member? <a href="http://localhost:3000/new-message">Register</a></p>
        </div>
      </form>
    </>
  )
}