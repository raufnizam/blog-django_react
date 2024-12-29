import axios from "axios";
import { useState } from "react";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    snippet: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data:", formData); // Log the payload being sent
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        setMessage("Authentication token not found. Please log in.");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Post added successfully!");
      setFormData({ title: "", snippet: "", description: "" }); // Clear the form
      console.log("Post created:", response.data); // Debugging
    } catch (error) {
      console.error("Error adding post:", error.response.data); // Log error details
      setMessage(error.response?.data?.detail || "Error adding post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Snippet</label>
          <input
            type="text"
            name="snippet"
            value={formData.snippet}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Post"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default AddPost;
