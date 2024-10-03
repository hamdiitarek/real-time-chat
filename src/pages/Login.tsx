import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { login } from "../auth/authService"; // Import the login function from your authService

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login({ username: email, password }); // Ensure the property name is correct
      if (response.token) {
        localStorage.setItem("authToken", response.token); // Save the token
        navigate("/dashboard"); // Redirect on successful login
      } else {
        alert("Login failed: " + response.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button
            type="button"
            className="w-full"
            onClick={handleLogin}
          >
            Login
          </Button>
          
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
