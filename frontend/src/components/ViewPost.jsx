import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ViewPost = () => {
  const { id } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(`http://localhost:8000/api/posts/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post deleted successfully!");
      navigate("/"); // Redirect to home after deleting
    } catch (error) {
      alert("Error deleting the post.");
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(
          `http://localhost:8000/api/posts/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(response.data);
      } catch (error) {
        setMessage("Error fetching post details.");
      }
    };

    fetchPost();
  }, [id]);

  if (message) {
    return <div className="text-red-500 text-center mt-10">{message}</div>;
  }

  if (!post) {
    return (
      <div className="text-gray-700 text-center mt-10">Loading post...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.snippet}</p>
      <p className="text-gray-700">{post.description}</p>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>

        <Link
          to={`/posts/${id}/edit`}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Edit
        </Link>
        <Link
          to="/"
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ViewPost;
