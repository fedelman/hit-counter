import React from "react";

import { HitCounter } from "./components/hitCounter";
import { Censored } from "./components/censored";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{" "}
        <Censored>
          <HitCounter />
        </Censored>
        .
      </p>
    </main>
  );
}

export default Home;
