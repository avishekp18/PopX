import { useState } from "react";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted:", form);
        // later: add API call here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
                    Login to PopX
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-purple-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
