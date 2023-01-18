import React from "react";
import CardList from "./components/CardList";

function App() {
  return (
    <main className="hero">
      <div className="hero__overlay"></div>
      <h1 className="hero__title">Ты сегодня покормил кота?</h1>
      <CardList />
    </main>
  );
}

export default App;
