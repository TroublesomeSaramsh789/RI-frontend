import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar/navbar";
import UserInputForm from "./containers/userInputForm/userInputForm";
import Footer from "./components/footer/footer";
//pages
import Home from "./pages/home/home";
import Notice from "./pages/notice/notice";
//api
import oneCallAPI from "./api/oneCallAPI";

function App() {
  const [navigationData, setNavigationData] = useState();
  const [user, setUser] = useState("");
  const [location, setLoaction] = useState("");
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState();

  const data = {
    user: user,
    location: location,
    query: query,
    navigationData: navigationData,
    apiData: apiData,
  };
  const formHandlers = {
    user: setUser,
    location: setLoaction,
    query: setQuery,
  };
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      oneCallAPI(data.coords.latitude, data.coords.longitude, setApiData);
      
      setNavigationData({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home data={data} formHandlers={formHandlers} />}
            />
            <Route
              path="/userForm/dynamic-form"
              element={
                <UserInputForm data={data} formHandlers={formHandlers} />
              }
            />
            <Route
              path="/userForm"
              element={
                <UserInputForm data={data} formHandlers={formHandlers} />
              }
            />
            <Route
              path="/notice"
              element={<Notice data={data} formHandlers={formHandlers} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
