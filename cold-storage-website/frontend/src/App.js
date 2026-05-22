
import React, { useState } from "react"; 
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import { Heading } from "./components/Heading";
import Overview from "./pages/Overview";
import ColdChainSolution from "./pages/ColdChainSolution";
import ColdChainManagement from "./pages/ColdChainManagement";
import ColdStorage from "./pages/ColdStorage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Enquiries from "./pages/Enquiries";
import AdminEnquiries from "./admin/AdminEnquiries";


function App() {
//   const [page, setPage] = useState("overview");

//   const renderPage = () => {
//     switch (page) {
//       case "overview":
//         return <Overview />;
//       case "solution":
//         return <ColdChainSolution />;
//       case "management":
//         return <ColdChainManagement />;
//       case "storage":
//         return <ColdStorage />;
//       case "contact":
//         return <Contact />;
//       default:
//         return <Overview />;
//     }
//   };

  return (
  <>
    <Heading/>
      <Hero />
      <Navbar/>

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/solution" element={<ColdChainSolution />} />
        <Route path="/management" element={<ColdChainManagement />} />
        <Route path="/storage" element={<ColdStorage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route
  
/>
<Route path="/admin/enquiries" element={<AdminEnquiries />} />
      </Routes>

      {/* <Overview/>
      <ColdChainSolution/>
      <ColdChainManagement/>
      <ColdStorage/>
      <Contact/> */}

      <Footer />
    </>
  );
}


export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import EnquiryPage from "./pages/EnquiryPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/enquiry" element={<EnquiryPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ServicesPage from "./pages/ServicesPage";
// import EnquiryPage from "./pages/EnquiryPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/enquiry" element={<EnquiryPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import Services from "./components/Services";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
