import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/register">Register</Link>
      <button
      onClick={()=> fetch("http://localhost:3000/session/logout")}>log out</button>
    </>
  );
}