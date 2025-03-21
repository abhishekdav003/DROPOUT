import React from 'react';
import Footer from './components/Footer'; // Assuming your Footer component is here
import Header from './components/Header'; // Assuming your Footer component is here
import WhatsAppIcon from './components/WhatsappIcon';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen playfair-400">
      <Header />
      <main className="flex-1">
        {/* Your main content here */}
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold">Welcome to Our Website!</h1>
          <p className="mt-4">This is some content above the footer.</p>
          <WhatsAppIcon />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
