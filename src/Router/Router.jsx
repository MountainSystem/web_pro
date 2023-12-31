import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="*" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
