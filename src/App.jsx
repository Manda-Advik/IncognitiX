function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div className="mt-4 p-4 bg-blue-200 rounded-lg shadow">
        <p className="text-blue-800">This is a test of Tailwind classes</p>
      </div>
      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Test Button
      </button>
    </div>
  );
}

export default App;
