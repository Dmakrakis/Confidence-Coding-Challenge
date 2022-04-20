import React from "react";
import Header from "./components/Header";
import LocationsList from "./components/LocationsList";

function App() {
  return (
    <div role="contentinfo" className="min-h-screen min-w-screen bg-gray-100">
      <Header />
      <div className="container pt-8 pb-40 mx-auto flex justify-center">
        <LocationsList />
      </div>
    </div>
  );
}

export default App;
