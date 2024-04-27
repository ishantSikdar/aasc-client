export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="absolute top-[30%] max-w-lg text-center px-4">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
        <p className="text-gray-600 mb-8">Please check the URL or go back to the <a href="/" className="text-blue-600 hover:underline">homepage</a>.</p>
      </div>
    </div>
  );
};