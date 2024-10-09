'use client';

// components/VoiceBot.js
import { useEffect, useState } from 'react';

import Vapi from '@vapi-ai/web';

const VoiceBot = () => {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const vapiInstance = new Vapi('2baf1c52-b10c-4a48-a703-24133f046585'); // Replace with your public key
    setVapi(vapiInstance);

    // Event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call has started.');
    });

    vapiInstance.on('call-end', () => {
      console.log('Call has ended.');
    });

    vapiInstance.on('message', (message) => {
      console.log('Message from assistant:', message);
    });

    vapiInstance.on('error', (e) => {
      console.error(e);
    });

    return () => {
      vapiInstance.stop(); // Cleanup on unmount
    };
  }, []);

  const startCall = () => {
    if (vapi) {
      vapi.start({
        transcriber: {
          provider: 'deepgram',
          model: 'nova-2',
          language: 'en-US',
        },
        model: {
          provider: 'openai',
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
          ],
        },
        voice: {
          provider: 'playht',
          voiceId: 'jennifer',
        },
        name: 'Restaurant Order Assistant',
      });
      setIsListening(true);
    }
  };

  const stopCall = () => {
    if (vapi) {
      vapi.stop();
      setIsListening(false);
    }
  };

  const handleOrderSubmit = () => {
    if (vapi) {
      vapi.send({
        type: 'add-message',
        message: {
          role: 'user',
          content: order,
        },
      });
      setOrder(''); // Clear the order input
    }
  };

  return (
    <div>
      <h1>Restaurant Voice Order Bot</h1>
      <button onClick={isListening ? stopCall : startCall}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <input
        type="text"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        placeholder="Type your order here..."
      />
      <button onClick={handleOrderSubmit}>Submit Order</button>
    </div>
  );
};

export default VoiceBot;
