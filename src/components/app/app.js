import React from 'react';
import MapScreen from "../map-screen";
import MapBooked from "../map-booked";
import { Route } from "react-router-dom";

function App() {
  return (
      <div>
          <Route path="/" component={MapScreen} exact />
          <Route path="/booked/" component={MapBooked} />
      </div>
  );
}

export default App;
