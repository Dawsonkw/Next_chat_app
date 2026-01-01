import MessageList from "./components/MessageList";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-350 h-250 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/3 border-r border-gray-200">
          <MessageList />
        </div>

        <div className="w-1/2 flex items-center justify-center"></div>
      </div>
    </div>
  );
}
