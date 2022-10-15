import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//pages components
import Landing from "./pages/Landing.pages";
import CompanyIndex from "./pages/company/Index.company.jsx";
import CompanyFeed from "./pages/company/Feed.company";
import CompanyJobApplicants from "./pages/company/Applicants.company.jsx";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>

          <Route exact path="company" element={<CompanyIndex/>}>
            <Route exact path="" element={<CompanyFeed />} />
            <Route exact path=":jobtitle" element={<CompanyJobApplicants />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
