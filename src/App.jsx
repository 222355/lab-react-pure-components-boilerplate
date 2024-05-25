import React from "react";
import PureCounterComponent from "./components/PureCounterComponent";
import SimpleCounterComponent from "./components/SimpleCounterComponent";
export default function App() {
  return (
    <div>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}
