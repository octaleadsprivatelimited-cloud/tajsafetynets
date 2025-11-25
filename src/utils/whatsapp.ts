export const openWhatsAppQuote = () => {
  const phoneNumber = '918790839401';
  const message = encodeURIComponent(
    'Hi! I would like to get a quote for Premium Invisible Grills and Cloth Hangers installation from Taj Safety Nets. Please provide me with more information about your services.'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open WhatsApp in new tab/window
  window.open(whatsappUrl, '_blank');
};
