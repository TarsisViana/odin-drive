import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/register">Register</Link>
      <br/>
      <Link to="/home">HomePage</Link>
      <button
      onClick={()=> fetch(`${import.meta.env.VITE_SERVER_HOST}/session/logout`)}>log out</button>
    </>
  );
}