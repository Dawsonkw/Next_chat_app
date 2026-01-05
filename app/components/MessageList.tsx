import MessagePreview from "./MessagePreview";
import NewMessage from "./NewMessage";

function MessageList() {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-300">
      {/* Header */}
      <div className="px-4 py-5 border-b border-gray-300">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
        <div className="mt-3">
          {/* Search for conversations */}
          {/* THIS IS GOING TO GET REPLACED WITH A PURE COMPONENT WIRH SIMILAR STYLING */}
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 text-black py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            // DISABLED FOR NOW
            disabled
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {/* Individual conversations will appear here */}
        {/* CHAT MESSAGE INFO COMPONENT */}
        <MessagePreview
        // convention is to be name={name} ...etc but I want to have something hardcoded for now 
          name="Grantusla"
          timestamp="4:30AM"
          preview="Hardcoded preview message goes brrrrrr..."
        />
      </div>

      {/* New Message Button */}
      <div className="p-4 border-t border-gray-300">
        <NewMessage />
      </div>
    </div>
  );
}

export default MessageList;
