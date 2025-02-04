import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoice";
import Customer from "./pages/Customer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col md:flex-row sm:flex-row min-h-screen">
          <Sidebar/>
          <main className="flex-grow flex flex-col md:ml-63 sm:ml-63">
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/invoice" element={<Invoice/>}/>
                <Route path="/customer" element={<Customer/>}/>
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;