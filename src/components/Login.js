import * as React from "react";
import { useSetUserContext } from "../contexts/user";

const Login = () => {
  console.log("login");
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();

  const updateUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={e => {
          setError(null);
          e.preventDefault();
          if (
            user.email &&
            user.password &&
            user.password.trim() === "password"
          ) {
            setUserContext({
              name: "Test User",
              ...user
            });
          } else {
            setError("invalid");
          }
        }}
      >
        <input
          name="email"
          value={user.email}
          onChange={updateUser}
        />
        <input
          name="password"
          value={user.password}
          onChange={updateUser}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
