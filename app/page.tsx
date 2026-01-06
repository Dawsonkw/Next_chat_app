import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import ConversationArea from "./components/ConversationArea";

// TO DO
//  NEED TO DO AUTH SYSTEM FIRST BEFORE DOING ANYTHING ELSE SO THAT MESSAGES CAN BE ASSOCIATED WITH USERS.
// design chat interface layout. 
// send the messafe from the chat input through to the SUPABASE server and store it in the database.
// Need to create some kind of message fetching system to get messages from SUPABASE and display them in the conversation area.
// Implement real time updates so that when a new message is sent or received, the conversation area updates automatically.
// create new message pipeline to start new conversations.
// implement authentication system for users to log in and have their messages associated with their account.
// ARE WE OVERENGINEERING EVERYTHING AND ADDING IN AN ENCRYPTION SERVICE? ARE WE REALLY DOING THIS?
// read about encryption libraries for javascript and see if any of them are compatible with SUPABASE.
// WHen a message is sent to a persom it should pop up in their message list. options for notifications?
// User profiles to inslude, name, profile picture, status message. 




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
