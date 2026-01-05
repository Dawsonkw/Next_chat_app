type Message = {
  id: number;
  created_at: string;
  content: string;
  user_name: string;
};
export type { Message };

type SendMessageProps = {
  message: string;
  onSend: (content: string) => void;
  onClick?: () => void;
};
export type { SendMessageProps };

type NewMessageProps = {
  onClick?: () => void;
};
export type { NewMessageProps };

type MessagePreviewProps = {
  name: string;
  timestamp: string;
  preview: string;
};
export type { MessagePreviewProps };
