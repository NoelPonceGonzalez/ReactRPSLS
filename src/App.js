import React from "react";
import useChoices from "./hooks/useChoices";
import options from "./src/options";
import OptionButton from "./components/optionButton";
import ResultDisplay from "./components/resultDisplay";
import MessageDisplay from "./components/MessageDisplay";
import GameControls from "./components/gameControlls";

function App() {
  const {
    userChoice,
    computerChoice,
    result,
    disabled,
    handlePlay,
    reset,
  } = useChoices();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="rounded-lg p-4 bg-gray-500">
        <h1 className="text-3xl mb-4 text-center font-bold">¡A jugar!</h1>
        <div className="max-w-md mx-auto">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              option={option}
              handlePlay={handlePlay}
              disabled={disabled}
            />
          ))}
          <MessageDisplay userChoice={options[userChoice]} computerChoice={options[computerChoice]} />
          {result !== null && (
            <ResultDisplay
              result={result}
              userChoice={options[userChoice]}
              computerChoice={options[computerChoice]}
            />
          )}
          {reset !== null && (
            <GameControls onRestart={reset}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;