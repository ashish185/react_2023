import React from "react";

type LoginFormProps = {
  title: string;
  onLoginClick(username: string | null, password: string): void;
};

const LoginForm: React.FC<LoginFormProps> = function(props) {
  const [username, setUsername] = React.useState<string | null>("");
  const [password, setPassword] = React.useState("");

  return (
    <form>
      <h1>{props.title.toUpperCase()}</h1>

      <input
        type="text"
        value={username || ""}
        onChange={e => setUsername(e.currentTarget.value)}
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <button onClick={() => props.onLoginClick(username, password)}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
