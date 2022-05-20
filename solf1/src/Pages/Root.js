import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import das pages que temos acesso ao login
import PageAutorizadaInicial from "./Autorizada/Inicial/Inicial";
import PageAutorizadaAdmin from "./Autorizada/Admin/Admin";
import PageAutorizadaDashboard from "./Autorizada/Dashboard/Dashboard";
import PageAutorizadaLogin from "./Autorizada/Login/login";
import PageAutorizadaCartoes from "./Autorizada/cartões/Cartões";
//import das pages que não temos acesso 
import PageNaoAutorizadaAdmin from "./NãoAutorizada/Admin/Admin";
import PageNaoAutorizadaDashboard from "./NãoAutorizada/Dashboard/Dashboard";
import PageNaoAutorizadaCartoes from "./NãoAutorizada/Cartões/Cartoes";
//import das pages options dentro de dashboard
import PageDashboardOptionsConta from "./Autorizada/Dashboard/Options/Conta/Dashboard-options-conta";
import PageDashboardOptionsDespesa from "./Autorizada/Dashboard/Options/Despesa/Dashboard-options-despesa";
import PageDashboardOptionsEndereço from "./Autorizada/Dashboard/Options/Endereço/Dashboard-options-endereço";
//import das pages dentro de login
import PageLoginSignIn from "./Autorizada/Login/SignIn/signin";
import PageLoginSignUp from "./Autorizada/Login/SignUp/signup";


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageAutorizadaInicial/>}/>    
                <Route path="/login" element={<PageAutorizadaLogin/>}/>
                    <Route path="/SignUp" element={<PageLoginSignUp/>}/>
                    <Route path="/SignIN" element={<PageLoginSignIn/>}/>
                <Route path="/dashboard" element={<PageAutorizadaDashboard/>}/>
                    <Route path="/dashboard-conta" element={<PageDashboardOptionsConta/>}/>
                    <Route path="/dashboard-despesa" element={<PageDashboardOptionsDespesa/>}/>
                    <Route path="/dashboard-endereço" element={<PageDashboardOptionsEndereço/>}/>
                <Route path="/cartoes" element={<PageAutorizadaCartoes/>}/>
                <Route path="/admin" element={<PageAutorizadaAdmin/>}/> 
                
                <Route path="/Naodashboard" element={<PageNaoAutorizadaDashboard/>}/>
                <Route path="/Naocartoes" element={<PageNaoAutorizadaCartoes/>}/>
                <Route path="/Naoadmin" element={<PageNaoAutorizadaAdmin/>}/>
            </Routes>
        </Router>
    );
};

export default Root;