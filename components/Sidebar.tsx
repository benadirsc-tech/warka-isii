
import React from 'react';
import { Contact } from '../types';
import { APP_NAME } from '../constants';

interface SidebarProps {
  contacts: Contact[];
  selectedId: string;
  onSelectContact: (contact: Contact) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ contacts, selectedId, onSelectContact }) => {
  return (
    <div className="flex flex-col h-full bg-[#111b21]">
      <div className="p-4 bg-[#202c33] flex justify-between items-center">
        <div className="flex items-center gap-3">
            <img src="https://picsum.photos/seed/user-me/100" className="w-10 h-10 rounded-full border border-gray-700" alt="Me" />
            <h1 className="font-bold text-lg text-emerald-400">{APP_NAME}</h1>
        </div>
        <div className="flex gap-4 text-gray-400">
          <button className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="overflow-y-auto flex-1">
        {contacts.map((contact) => (
          <div 
            key={contact.id}
            onClick={() => onSelectContact(contact)}
            className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-[#202c33] transition-colors border-b border-[#222d34] ${selectedId === contact.id ? 'bg-[#2a3942]' : ''}`}
          >
            <div className="relative">
              <img src={contact.avatar} className="w-12 h-12 rounded-full" alt={contact.name} />
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#111b21]"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-white truncate">{contact.name}</h3>
                <span className="text-xs text-gray-500">12:45 PM</span>
              </div>
              <p className="text-sm text-gray-400 truncate">{contact.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
