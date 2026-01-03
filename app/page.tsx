import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import ConversationArea from "./components/ConversationArea";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-350 h-250 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/3 border-r border-gray-200">
          <MessageList />
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex-1">
            <ConversationArea />
          </div>
          <div className="flex items-center justify-end">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}
