import React from "react";
import { All_CARD_COMPONENT } from "./data.js";
import Flower from "./components/flower.jsx";


function App() {
  return (
    <>
      <header>
        <h1>Card Component</h1>
      </header>
      <main>
        <section className="flower-category">
          <div className="flower">
            {All_CARD_COMPONENT.map((myFlower, index) => (
              <Flower key = {index} flower = {myFlower}/>
            ))}
          </div>
        </section>
      </main>
    </>
    );
}

export default App;
