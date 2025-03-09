import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Line } from "recharts";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line as RechartsLine } from "recharts";
import "./App.css";
import BanditSVG from "./components/ui/BanditSVG";

export default function BanditGame() {
  const initialCoins = 100;
  const banditProbabilities = [0.1, 0.3, 0.5, 0.7, 0.9];
  const [coins, setCoins] = useState(initialCoins);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const [banditWins, setBanditWins] = useState(Array(5).fill(0));
  const [banditPlays, setBanditPlays] = useState(Array(5).fill(0));
  const [latestWins, setLatestWins] = useState(Array(5).fill(0));
  const [winHistory, setWinHistory] = useState([]);
  const [strategySuggestion, setStrategySuggestion] = useState("Testa olika banditer och lär dig deras mönster!");
  const [bestBanditPlays, setBestBanditPlays] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function playBandit(index) {
    if (coins <= 0) return;

    const win = Math.floor(Math.random() * 11); // Random integer win between 0 and 10
    setCoins(coins - 1);
    setTotalWinnings(totalWinnings + win);
    
    const newWins = [...banditWins];
    const newPlays = [...banditPlays];
    const newLatestWins = [...latestWins];
    newWins[index] += win;
    newPlays[index] += 1;
    newLatestWins[index] = win;

    setBanditWins(newWins);
    setBanditPlays(newPlays);
    setLatestWins(newLatestWins);
    setWinHistory([...winHistory, { turn: initialCoins - coins + 1, winnings: totalWinnings + win }]);

    updateBestBanditPlays(newWins, newPlays, index);

    if (coins - 1 === 0) {
      setShowModal(true);
    }
  }

  function updateBestBanditPlays(wins, plays, lastPlayedIndex) {
    let bestBandit = 0;
    let bestAvg = 0;
    for (let i = 0; i < 5; i++) {
      const avg = plays[i] > 0 ? wins[i] / plays[i] : 0;
      if (avg > bestAvg) {
        bestAvg = avg;
        bestBandit = i;
      }
    }
    if (lastPlayedIndex === bestBandit) {
      setBestBanditPlays(bestBanditPlays + 1);
    }
  }

  function resetGame() {
    setCoins(initialCoins);
    setTotalWinnings(0);
    setBanditWins(Array(5).fill(0));
    setBanditPlays(Array(5).fill(0));
    setLatestWins(Array(5).fill(0));
    setWinHistory([]);
    setBestBanditPlays(0);
    setShowModal(false);
  }

  return (
    <div className="flex flex-col items-center mx-auto justify-center min-h-screen bg-gray-200 text-gray-800 p-6">
      <nav className="w-full bg-blue-500 text-white p-4 text-center text-lg font-bold">One-Armed Bandit Game</nav>
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-4xl">
        <p className="mt-2">Coins: {coins}</p>
        <p className="mt-1">Total Winnings: {totalWinnings}</p>
        <p className="mt-1 text-blue-500 font-semibold">Strategi: {strategySuggestion}</p>
        <p className="mt-1">Plays on Best Bandit: {bestBanditPlays}</p>
        <Button className="mt-4 bg-red-500 text-white" onClick={resetGame}>
          Starta om spelet
        </Button>
        <div className="grid grid-cols-5 gap-4 mt-4 w-full">
          {banditProbabilities.map((_, index) => (
            <Card key={index} className="p-4 flex flex-col items-center w-40">
              <BanditSVG className="w-20 h-20 mb-2" />
              <CardContent>
                <p className="text-lg font-bold">Bandit {index + 1}</p>
                <p className="mt-2">Avg Win: {banditPlays[index] > 0 ? (banditWins[index] / banditPlays[index]).toFixed(2) : "-"}</p>
                <p className="mt-1">Latest Win: {latestWins[index]}</p>
                <Button className="mt-2" onClick={() => playBandit(index)} disabled={coins <= 0}>
                  Play
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="w-full mt-6">
          <h2 className="text-xl font-bold">Cumulative Winnings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={winHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="turn" label={{ value: "Omgång", position: "insideBottomRight", offset: -5 }} />
              <YAxis label={{ value: "Total Vinst", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <RechartsLine type="monotone" dataKey="winnings" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold">Game Over</h2>
            <p className="mt-2">You played the best bandit {bestBanditPlays} times.</p>
            <p className="mt-1">Total Score: {totalWinnings}</p>
            <p className="mt-1 text-gray-700">This is a measure of exploitation in Reinforcement Learning.</p>
            <a href="https://en.wikipedia.org/wiki/Multi-armed_bandit" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Learn more about the bandit problem
            </a>
            <Button className="mt-4 bg-blue-500 text-white" onClick={resetGame}>Restart</Button>
          </div>
        </div>
      )}
    </div>
  );
}
