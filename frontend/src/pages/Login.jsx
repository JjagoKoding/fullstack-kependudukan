import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password}),
    });

    const data = await res.json();

    if(res.ok) {
        localStorage.setItem('token', data.access_token);
        navigate("/admin/provinsi");
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
