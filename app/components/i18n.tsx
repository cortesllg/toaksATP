// components/i18n-provider.tsx
'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // path for i18n instance

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Ensures i18n is initialized in client environment
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
