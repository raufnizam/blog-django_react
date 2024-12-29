import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import ViewPost from "./components/ViewPost";
import EditPost from "./components/EditPost";


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<ViewPost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
