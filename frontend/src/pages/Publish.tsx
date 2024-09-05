import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/blogs");
    }
  }, [navigate]);

  return (
    <div className="bg-white text-black min-h-screen">
      <Appbar />
      <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg w-full">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6">Create a New Post</h2>

            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-4 shadow-sm"
              placeholder="Enter post title"
            />

            <TextEditor onChange={(e) => setDescription(e.target.value)} />

            <button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: `${localStorage.getItem("token")}`,
                    },
                  },
                );
                navigate(`/blog/${response.data.id}`);
              }}
              type="submit"
              className="mt-6 inline-flex items-center px-6 py-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-6">
      <label className="block text-lg font-medium mb-2">Article Content</label>
      <textarea
        onChange={onChange}
        id="editor"
        rows={8}
        className="block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your article here..."
        required
      />
    </div>
  );
}
