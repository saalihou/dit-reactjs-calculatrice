import React from 'react';

function LCD({ entree, sortie }) {
  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
      }}
    >
      <div style={{ fontSize: 20 }}>{entree}</div>
      <div
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'right',
        }}
      >
        {sortie}
      </div>
    </div>
  );
}

export default LCD;
