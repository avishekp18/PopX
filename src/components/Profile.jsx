// Main Dashboard Component
import ProfileCard from "../components/Card"
import avatarImage from "../assets/Avi.webp";
export default function Dashboard() {
    const user = {
        name: "Avishek Pradhan",
        email: "avishekpradhan24@gmail.com",
        bio: "Full Stack Developer | MERN Enthusiast | Open to Opportunities",
        avatar: avatarImage,
        linkedin: "https://in.linkedin.com/in/avishek-pradhan0118052002",
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-50 p-6 gap-8">
            {/* Use ProfileCard multiple times */}
            <ProfileCard user={user} />
        </div>
    );
}