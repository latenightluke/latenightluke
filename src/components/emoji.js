import React from "react";

export default function emoji({ symbol, label }) {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
