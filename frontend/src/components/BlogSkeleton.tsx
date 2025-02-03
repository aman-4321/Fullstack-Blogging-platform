// Update the BlogSkeleton component
export const BlogSkeleton = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-4 w-24 bg-gray-200 rounded ml-3 animate-pulse"></div>
      </div>
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
      <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
};
