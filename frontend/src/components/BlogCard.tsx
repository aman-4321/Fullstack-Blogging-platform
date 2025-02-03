import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
        <div className="flex items-center mb-4">
          <Avatar name={authorName}></Avatar>
          <div className="font-medium pl-2 text-gray-700">{authorName}</div>
          <div className="flex items-center pl-2">
            <Circle></Circle>
          </div>
          <div className="pl-2 text-gray-500 text-sm">{publishedDate}</div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-2">{content}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{`${Math.ceil(content.length / 100)} minute read`}</span>
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={` ${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
