import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main className="hero">
      <div className="hero__overlay">
        <h1 className="hero__title">Ты сегодня покормил кота?</h1>
        <Card />
      </div>
    </main>
  );
}

export default App;
