function MessageList() {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Header */}
      <div className="px-4 py-5 border-b border-gray-200">
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
      </div>

      {/* New Message Button */}
      <div className="p-4 border-t border-gray-200">
        {/* THIS IS GOING TO GET REPLACED WITH A PURE BUTTON COMPONENT WIRH SIMILAR STYLING */}
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold cursor-pointer hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed"
          // DISABLED FOR NOW
          disabled
        >
          + New Message
        </button>
      </div>
    </div>
  );
}

export default MessageList;
