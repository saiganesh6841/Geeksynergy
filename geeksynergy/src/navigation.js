import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./components/auth/register"
import Login from "./components/auth/login";
import HomePage from "./components/home/homePage";
import CompanyInfo from "./components/home/company";


const Navigation=()=>{


    return(
        <>
        <BrowserRouter>
        <Routes>
               <Route path="/" Component={Login}/>
               <Route path="/signup" Component={RegisterPage}/>
               <Route path="/home" Component={HomePage} />
               <Route path="/companyInfo" Component={CompanyInfo} />
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
export default Navigation;