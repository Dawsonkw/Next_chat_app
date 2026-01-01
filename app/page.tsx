"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Message } from "@/lib/types";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase.from("messages").select("*");

      if (error) console.error("Error:", error);
      else setMessages(data || []);
    }

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Messages: {messages.length}</h1>
    </div>
  );
}
