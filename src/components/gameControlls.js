import React from "react";

function GameControls({ onRestart }) {
  return (
    <div className="mt-8">
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-black font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-700"
        onClick={onRestart}
      >
        Reiniciar Juego
      </button>
    </div>
  );
}

export default GameControls;