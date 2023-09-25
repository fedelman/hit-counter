"use client";
import React from "react";

export function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(false);

  console.log("Censored");

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {children}
    </button>
  );
}
