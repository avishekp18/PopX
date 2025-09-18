// ProfileCard.jsx
import { FaCamera, FaLinkedin } from "react-icons/fa";

export default function ProfileCard({ user }) {
    return (
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 border">
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                    <img
                        src={user.avatar}
                        alt="profile"
                        className="w-16 h-16 rounded-full object-cover border"
                    />
                    <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full cursor-pointer">
                        <FaCamera size={14} />
                        <input type="file" className="hidden" />
                    </label>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </div>

            {/* Bio */}
            <p className="text-gray-600 text-sm leading-relaxed border-t pt-4 mb-4">
                {user.bio}
            </p>

            {/* LinkedIn Button */}
            <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                <FaLinkedin size={18} /> View LinkedIn
            </a>
        </div>
    );
}
