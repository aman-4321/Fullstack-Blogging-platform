import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";

export const Publish: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/blogs");
    }
  }, [navigate]);

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        { title, content: description },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Create a New Post
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your post title"
                />
              </div>
              <TextEditor value={description} onChange={setDescription} />
            </div>
          </div>
          <div className="px-6 py-8 bg-gray-50 border-t border-gray-200 sm:px-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePublish}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Publish Post
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        Content
      </label>
      <div className="mt-1">
        <textarea
          id="description"
          rows={8}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          placeholder="Write your post content here..."
        />
      </div>
    </div>
  );
};
