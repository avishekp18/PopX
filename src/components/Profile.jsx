// Main Dashboard Component
import ProfileCard from "../components/Card"
export default function Dashboard() {
    const user = {
        name: "Avishek Pradhan",
        email: "avishekpradhan24@gmail.com",
        bio: "Full Stack Developer | MERN Enthusiast | Open to Opportunities",
        avatar:
            "https://media.licdn.com/dms/image/v2/D5603AQHNOXjr11LJSQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719424449507?e=1761177600&v=beta&t=_LyP4hd6ozd6LMFkTUk5Kukg-jZfHJUSvbagD5SuKIc",
        linkedin: "https://in.linkedin.com/in/avishek-pradhan0118052002",
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-50 p-6 gap-8">
            {/* Use ProfileCard multiple times */}
            <ProfileCard user={user} />
        </div>
    );
}