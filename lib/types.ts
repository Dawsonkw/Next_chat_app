type Message = {
  id: number;
  created_at: string;
  content: string;
  user_name: string;
};

type SendMessageProps = {
  message: string;
  onSend: (content: string) => void;
  onClick?: () => void;
};

export type { Message, SendMessageProps };
