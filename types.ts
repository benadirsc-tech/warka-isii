
export interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: Date;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  online: boolean;
  lastSeen?: string;
}

export enum AppMode {
  Chat = 'chat',
  Voice = 'voice'
}
