import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import { Home, NotFound, Entries, NewEntry } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/newentry" element={<NewEntry />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
