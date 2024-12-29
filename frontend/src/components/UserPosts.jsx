import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          setMessage("Authentication token not found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get("http://localhost:8000/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API Response:", response.data); // Debugging: Log API response
        setUserPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error); // Debugging: Log the error
        setMessage(
          error.response?.data?.detail || "Error fetching user posts."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading posts...</p>
      </div>
    );
  }

  if (message) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg font-semibold">{message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Blog Posts</h1>
      {userPosts.length > 0 ? (
        <ul className="space-y-4">
          {userPosts.map((post) => (
            <li
              key={post.id}
              className="p-4 border rounded-lg hover:bg-gray-100"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.snippet}</p>
              <p className="text-sm text-gray-500">
                Posted on {new Date(post.created_at).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <Link
                  to={`/posts/${post.id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  View Post
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 text-center">No posts found.</p>
      )}
    </div>
  );
};

export default UserPosts;
