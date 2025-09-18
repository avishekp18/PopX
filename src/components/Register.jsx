import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
            >
                {/* Full Name */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Full Name<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />

                {/* Phone Number */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Phone number<span className="text-red-500">*</span>
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile number"
                    required
                    className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />

                {/* Email */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Email address<span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    required
                    className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />

                {/* Password */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Password<span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="paassword"
                    required
                    className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />

                {/* Company Name */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Company name
                </label>
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full mb-4 p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />

                {/* Agency Radio */}
                <label className="block mb-2 text-sm font-semibold text-purple-600">
                    Are you an Agency?<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isAgency"
                            value="yes"
                            checked={formData.isAgency === "yes"}
                            onChange={handleChange}
                            className="text-purple-600 focus:ring-purple-500"
                        />
                        Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isAgency"
                            value="no"
                            checked={formData.isAgency === "no"}
                            onChange={handleChange}
                            className="text-purple-600 focus:ring-purple-500"
                        />
                        No
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-purple-600 text-white rounded font-medium hover:bg-purple-700 transition"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}
