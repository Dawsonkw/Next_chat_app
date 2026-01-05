"use client";
import { useState } from "react";
import { SendMessageProps } from "@/lib/types";
import { supabase } from "@/lib/supabase";

function SendMessage({ message, onSend }: SendMessageProps) {
  const [isSending, setIsSending] = useState(false);
  
  const handleSend = async () => {
    if (!message.trim()) return;
    setIsSending(true);
    try {
      const { data, error } = await supabase
        .from("messages")
        .insert([
          {
            content: message,
            created_at: new Date().toISOString(),
            // ADD IN OTHER FIELDS WHEN YOU CREATE USER AUTHENTICATION!!
          }
        ]);
        
      if (error) {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      } else {
        console.log("Message sent:", data);
        onSend(''); 
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <div>
      <button
        onClick={handleSend}
        disabled={!message.trim() || isSending}
        className="bg-purple-500 mb-1 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:hover:cursor-not-allowed h-fit self-end"
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}

export default SendMessage;