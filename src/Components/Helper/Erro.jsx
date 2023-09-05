import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <div>
      <p style={{ color: '#f31', marginTop: '10px' }}>{error}</p>
    </div>
  );
};

export default Error;
