import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MyTrips from "./pages/MyTrips";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/trips"
          element={<MyTrips />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

