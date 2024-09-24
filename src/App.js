import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Layout>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
