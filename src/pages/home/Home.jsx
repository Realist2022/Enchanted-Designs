import React from "react";
import Hero from "../components/Hero.jsx";
import TopNav from "../../common/TopNav.jsx";
import ImageContent from "../components/ImageContent.jsx";
import TextContentUnderImage from "../components/TextContentUnderImage.jsx";
import LaserCutterImage from "../components/LaserCutterImage.jsx";
import LaserCutterText from "../components/LaserCutterText.jsx";
import EnchantedDesignLogo from "../components/EnchantedDesignLogo.jsx"; 
import Footer from "../../common/Footer.jsx";
import { useState } from "react";
import Login from "../loginAndSignup/Login.jsx";
import SignUp from "../loginAndSignup/SignUp.jsx";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // LOGIN/ MODAL CONTENT: This is a conditional for rendering the modal content
  const handleLoginClick = () => {
    setModalContent(<Login onClose={handleCloseModal} />);
    setIsModalOpen(true);
  };

  const handleSignUpClick = () => {
    setModalContent(<SignUp onClose={handleCloseModal} />); 
    setIsModalOpen(true);
  }

  // CLOSING MODAL: This is for Closing the modal //
  const handleCloseModal = () => {
    setIsModalOpen(false); //this is to close the modal
    setModalContent(null); //this is to set the modal content to null
  };

  return (
    <>
      {/* LOGIN/SIGN UP MODAL CONTENT: This is a conditional for rendering the modal content */}
      {isModalOpen && modalContent}

      <TopNav onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
      <Hero />
      <ImageContent />
      <TextContentUnderImage />
      <LaserCutterImage />
      <LaserCutterText />
      <EnchantedDesignLogo />
      <Footer />
    </>
  );
}

export default Home;
