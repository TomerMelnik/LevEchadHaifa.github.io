import React from 'react';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

import config from '../config/index.json';

const FloatingWhatsapp = () => {
  const { about } = config;
  const { contact } = about;
  const { phoneNumber } = contact;

  const floatingWhatsAppProps = {
    phoneNumber,
    accountName: 'Lev Echad',
  };

  return (
    <div>
      <FloatingWhatsApp {...floatingWhatsAppProps} />
    </div>
  );
};

export default FloatingWhatsapp;
