import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toastShownRef = useRef(false);

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (location.state?.error === "login-required" && !toastShownRef.current ) {
      toast.error("You must login to access this page");
      toastShownRef.current = true; 
    }
  }, [location.state]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ isLoggedIn: true, userData })
    );
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
      >
        <Title>Login</Title>

        <Input
          label="Email"
          name="email"
          type="email"
          onChange={changeHandler}
        />

        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          onChange={changeHandler}
          icon={showPassword ? <FaEyeSlash /> : <FaEye />}
          onIconClick={() => setShowPassword((prev) => !prev)}
        />

        <Button type="submit" style={{ padding: "10px 20px" }}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
