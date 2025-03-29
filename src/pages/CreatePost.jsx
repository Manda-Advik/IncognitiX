export default function CreatePost() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        Create a Post
      </h2>
      <textarea className="w-full p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg" />
      <button className="mt-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg">
        Post
      </button>
    </div>
  );
}
