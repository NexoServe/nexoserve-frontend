'use client';

import { useEffect, useState } from 'react';

import { useServerInsertedHTML } from 'next/navigation';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';

function JSSCacheProvider({ children }: { children: React.ReactNode }) {
  const [{ generateId, registry }] = useState(() => {
    return { registry: new SheetsRegistry(), generateId: createGenerateId() };
  });

  useEffect(() => {
    const style = document.body.querySelector('#server-side-styles');
    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, []);

  useServerInsertedHTML(() => {
    return <style id="server-side-styles">{registry.toString()}</style>;
  });

  return (
    <JssProvider generateId={generateId} registry={registry}>
      {children}
    </JssProvider>
  );
}

export default JSSCacheProvider;
