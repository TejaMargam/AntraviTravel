import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '7674811075'; // Replace with your WhatsApp number
  const message = 'Hello! I have a question about your travel services.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="fixed bottom-24 right-5 z-50 hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 md:bottom-8 md:right-8 md:flex"
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </div>
  );
};

export default WhatsAppButton;
