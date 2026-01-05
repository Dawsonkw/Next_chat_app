import { MessagePreviewProps } from "@/lib/types";
import { JSX } from "react";

function MessagePreview({ name, timestamp, preview }: MessagePreviewProps): JSX.Element{
    return (
        <div>
             <div className="p-4 border-b border-gray-200 hover:bg-purple-50 cursor-pointer">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-800 font-semibold">{name}</h3>
        <span className="text-gray-500 text-sm">{timestamp}</span>
      </div>
      <p className="text-gray-600 text-sm truncate">{preview}</p>
    </div>
        </div>
    );
}

export default MessagePreview;