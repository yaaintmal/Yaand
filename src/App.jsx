import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import { Home, NotFound, Entries, NewEntry } from "./pages";
import { EntriesProvider } from "./context/EntriesContext.jsx";

const App = () => {
  return (
    // 2. Wrap the Routes with the EntriesProvider to make state accessible
    <EntriesProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/newentry" element={<NewEntry />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </EntriesProvider>
  );
};

export default App;
