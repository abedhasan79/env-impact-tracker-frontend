
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarbonForm from "./components/CarbonForm";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <CarbonForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;