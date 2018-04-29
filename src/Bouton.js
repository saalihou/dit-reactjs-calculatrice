import React from 'react';

function Bouton({
  couleur,
  taille,
  label,
  onPress,
}) {

  function onClick() {
    onPress();
  }

  return (
    <button
      style={{
        backgroundColor: couleur,
        width: taille,
        height: taille,
        borderRadius: 10,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Bouton;
