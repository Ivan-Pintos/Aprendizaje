import Game from "./Game";
function App() {
  return (
    <main className="h-screen grid">
      <h1 className="text-4xl text-center py-4 font-mono bg-slate-800 text-white border-b-4 border-slate-950">
        Learning Pixi using ChatGpt
      </h1>
      <div className="flex justify-center bg-slate-950 h-full items-center">
        <Game imageUrl="/Goblin.png" />
      </div>
    </main>
  );
}

export default App;
