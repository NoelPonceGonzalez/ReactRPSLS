import React from "react";

function MessageDisplay({ userChoice, computerChoice }) {
  return (
    <div>
      {userChoice && userChoice.emoji && (
        <p className="text-xl mt-4">{`Has elegido ${userChoice.emoji} - ${userChoice.name}`}</p>
      )}
      {computerChoice && computerChoice.emoji && (
        <p className="text-xl mt-4">{`El ordenador ha elegido ${computerChoice.emoji} - ${computerChoice.name}`}</p>
      )}
    </div>
  );
}

export default MessageDisplay;
