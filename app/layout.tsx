import React from 'react';

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
