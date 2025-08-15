import React, { useState } from 'react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace this with your actual WhatsApp number (include country code without + sign)
  // Example: For +1 234 567 8900, use "12345678900"
  const whatsappNumber = "919557342093"; // Updated with your WhatsApp number +919557342093
  
  const predefinedMessages = [
    "Hi! I'm interested in your cleaning products.",
    "Can you tell me about your store location and hours?",
    "What cleaning products do you have available?",
    "Do you offer bulk pricing for businesses?",
    "I'd like to visit your store. What's the address?"
  ];

  const handleQuickMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomMessage = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className={`whatsapp-widget ${isOpen ? 'open' : ''}`}>
        {/* Chat Box */}
        {isOpen && (
          <div className="whatsapp-chat-box">
            <div className="whatsapp-header">
              <div className="whatsapp-header-info">
                <div className="whatsapp-avatar">
                  <img src={`${import.meta.env.BASE_URL}images/logo/WebLogo.jpg`} alt="Yashu Cleaners" />
                </div>
                <div className="whatsapp-header-text">
                  <h4>Yashu Cleaners</h4>
                  <span>Typically replies instantly</span>
                </div>
              </div>
              <button 
                className="whatsapp-close" 
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className="whatsapp-body">
              <div className="whatsapp-message">
                <p>👋 Hello! Welcome to Yashu Cleaners!</p>
                <p>We're here to help you with premium cleaning solutions. Choose a quick message below or start a custom chat:</p>
              </div>
              
              <div className="whatsapp-quick-replies">
                {predefinedMessages.map((message, index) => (
                  <button
                    key={index}
                    className="quick-reply-btn"
                    onClick={() => handleQuickMessage(message)}
                  >
                    {message}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="whatsapp-footer">
              <button 
                className="whatsapp-send-btn"
                onClick={handleCustomMessage}
              >
                <span>💬</span>
                Start Chat
              </button>
            </div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <button 
          className="whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>
    </>
  );
};

export default WhatsAppChat;
