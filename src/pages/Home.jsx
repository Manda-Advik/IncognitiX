export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">Welcome to IncognitiX</h1>
      <p className="text-gray-700 dark:text-gray-300">
        A platform where you can share thoughts anonymously.
      </p>
      <div className="mt-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Recent Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          No posts yet. Be the first to share!
        </p>
      </div>
    </div>
  );
}
