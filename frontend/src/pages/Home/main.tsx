export const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Welcome to AutoClean</h2>
        <p className="text-gray-600">
          A simple script that identifies and removes temporary or duplicate files from a selected
          folder.
        </p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-3 text-lg font-semibold text-gray-900">Features</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Identify and remove temporary files automatically</span>
          </li>
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Detect common temporary file extensions (.tmp, .temp, .cache)</span>
          </li>
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free up disk space by removing unnecessary files</span>
          </li>
        </ul>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-blue-900">Getting Started</h3>
        <p className="text-blue-800">
          Select a folder to scan for temporary files and start cleaning up your system.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
