import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ClientPortal from "./pages/ClientPortal";
import ContactPage from "./pages/ContactPage";
import { mockUser } from "./components/mock";

function App() {
  const [user, setUser] = useState(mockUser);

  const handleLogin = (userData) => {
    setUser({ ...userData, isLoggedIn: true });
  };

  const handleLogout = () => {
    setUser({ ...mockUser, isLoggedIn: false });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} onLogout={handleLogout} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produkt/:category/:id" element={<ProductPage />} />
            <Route path="/prihlaseni" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/registrace" element={<RegisterPage />} />
            <Route path="/klientsky-portal" element={<ClientPortal user={user} />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;