
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import { VoiceMode } from './components/VoiceMode';
import { Contact, AppMode } from './types';
import { MOCK_CONTACTS } from './constants';

const App: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<Contact>(MOCK_CONTACTS[0]);
  const [mode, setMode] = useState<AppMode>(AppMode.Chat);

  const toggleVoiceMode = () => {
    setMode(prev => prev === AppMode.Chat ? AppMode.Voice : AppMode.Chat);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0b141a]">
      {/* Sidebar - always visible on md+, toggleable/conditional on mobile if we added more logic */}
      <div className={`w-full md:w-1/3 lg:w-1/4 border-r border-[#222d34] ${mode === AppMode.Voice ? 'hidden md:block' : 'block'}`}>
        <Sidebar 
          contacts={MOCK_CONTACTS} 
          selectedId={selectedContact.id} 
          onSelectContact={(c) => {
            setSelectedContact(c);
            setMode(AppMode.Chat);
          }} 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative">
        {mode === AppMode.Chat ? (
          <ChatWindow 
            contact={selectedContact} 
            onVoiceClick={toggleVoiceMode}
          />
        ) : (
          <VoiceMode 
            contact={selectedContact} 
            onClose={() => setMode(AppMode.Chat)} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
