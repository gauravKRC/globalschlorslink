import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Universities from '@/pages/Universities';
import VisaServices from '@/pages/VisaServices';
import Services from "./pages/Services";
import Header from "./components/Header";


function App() {


  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/visa-services" element={<VisaServices />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>

      </ThemeProvider>
    </>
  )
}

export default App
