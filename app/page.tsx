"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-350 h-250 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Left Side</h1>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="text-gray-800 text-3xl font-bold">Right Side</h1>
        </div>
      </div>
    </div>
  );
}
