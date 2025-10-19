import React, { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: null }));
    setMessage(null);
  };

  const validate = () => {
    const err = {};
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = "Please enter a valid email.";
    if (!form.password || form.password.length < 6) err.password = "Password must be at least 6 characters.";
    if (mode === "signup") {
      if (!form.name || form.name.trim().length < 2) err.name = "Please enter your name.";
      if (form.password !== form.confirm) err.confirm = "Passwords do not match.";
    }
    return err;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    // Simulate submit
    if (mode === "login") {
      setMessage({ type: "success", text: `Signed in as ${form.email}` });
    } else {
      setMessage({ type: "success", text: `Account created for ${form.email}` });
    }

    // Reset password fields for safety
    setForm((s) => ({ ...s, password: "", confirm: "" }));
  };

  return (
    <div className="min-h-[72vh] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold">{mode === "login" ? "Sign in" : "Create account"}</h1>
            <div className="flex items-center gap-2 text-sm">
              <button
                onClick={() => setMode("login")}
                className={`px-3 py-1 rounded-lg ${mode === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                Sign in
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`px-3 py-1 rounded-lg ${mode === "signup" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                Sign up
              </button>
            </div>
          </div>

          {message && (
            <div className={`mb-4 p-3 rounded-md ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className={`w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 px-3 py-2 ${errors.name ? "border-red-300" : ""}`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className={`w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 px-3 py-2 ${errors.email ? "border-red-300" : ""}`}
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                name="password"
                value={form.password}
                onChange={onChange}
                className={`w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 px-3 py-2 ${errors.password ? "border-red-300" : ""}`}
                placeholder="••••••••"
                type="password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>

            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input
                  name="confirm"
                  value={form.confirm}
                  onChange={onChange}
                  className={`w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 px-3 py-2 ${errors.confirm ? "border-red-300" : ""}`}
                  placeholder="Repeat password"
                  type="password"
                />
                {errors.confirm && <p className="mt-1 text-xs text-red-600">{errors.confirm}</p>}
              </div>
            )}

            <div className="pt-2">
              <button type="submit" className="w-full px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                {mode === "login" ? "Sign in" : "Create account"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            {mode === "login" ? (
              <>
                New here?{' '}
                <button onClick={() => setMode('signup')} className="text-blue-600 hover:underline">Create an account</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-blue-600 hover:underline">Sign in</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
