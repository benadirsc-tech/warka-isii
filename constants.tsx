
import React from 'react';
import { Contact } from './types';

export const MOCK_CONTACTS: Contact[] = [
  {
    id: 'gemini-ai',
    name: 'Warka Isii AI',
    avatar: 'https://picsum.photos/seed/ai/200',
    lastMessage: 'Let\'s talk! Click the mic.',
    online: true,
  },
  {
    id: '1',
    name: 'Abdi Nasir',
    avatar: 'https://picsum.photos/seed/abdi/200',
    lastMessage: 'Maalin wanaagsan!',
    online: true,
  },
  {
    id: '2',
    name: 'Hodan Yusuf',
    avatar: 'https://picsum.photos/seed/hodan/200',
    lastMessage: 'See tahay?',
    online: false,
    lastSeen: '2 hours ago',
  },
  {
    id: '3',
    name: 'Ahmed Noor',
    avatar: 'https://picsum.photos/seed/ahmed/200',
    lastMessage: 'I’ll call you later.',
    online: true,
  }
];

export const APP_NAME = "Warka Isii";
