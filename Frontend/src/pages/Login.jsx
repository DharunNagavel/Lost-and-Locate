import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignup) {
        // SIGN UP
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // SIGN IN
        await signInWithEmailAndPassword(auth, email, password);
      }

      // ✅ Redirect after success
      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-backgroundLight flex items-center justify-center">
      <div className="bg-accentLight w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h2 className="text-3xl font-bold text-primaryMain text-center">
          {isSignup ? "Create Account" : "Sign In"}
        </h2>

        <p className="text-primaryDark text-center mt-2">
          {isSignup
            ? "Join Lost & Locate to report lost items"
            : "Welcome back to Lost & Locate"}
        </p>

        {error && (
          <p className="text-red-600 text-center mt-3 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-primaryDark focus:outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-primaryDark focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-primaryDark focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-primaryDark text-white py-2 rounded-lg hover:bg-primaryMain transition"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-primaryDark mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 text-primaryMain font-semibold hover:underline"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>

      </div>
    </div>
  );
}
