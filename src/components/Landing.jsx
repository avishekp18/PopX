import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
                    Welcome to <span className="text-purple-600">PopX</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                    Build, manage, and explore your dashboard with ease.
                    Start your journey today by creating an account or logging in!
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        to="/login"
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
                    >
                        Register
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 text-gray-500 text-sm">
                © {new Date().getFullYear()} PopX. All rights reserved.
            </footer>
        </div>
    );
}
