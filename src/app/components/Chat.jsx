'use client';

import { useChat } from 'ai/react';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className='flex flex-col max-w-xl px-8 mx-auto'>
      {messages.map((message) => {
        const isAssistant = message.role !== 'user';
        return (
          <div key={message.id}>
            <p>
              {isAssistant ? '👩‍✈️' : '🛫'}
              <span
                className={`pl-4 ${
                  isAssistant ? 'text-yellow-500' : ' text-blue-300'
                }`}
              ></span>
              {message.content}
            </p>
          </div>
        );
      })}

      <form onSubmit={handleSubmit} className='flex justify-center'>
        <input
          className='fixed w-full max-w-xl px-4 py-2 m-auto mb-8 text-sm border border-gray-400 rounded-full shadow-2xl bottom-4'
          placeholder='Tell me about your travel'
          type='text'
          name='...'
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
