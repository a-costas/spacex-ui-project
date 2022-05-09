import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MissionsPage from "../pages/MissionsPage";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="/" element={ <LandingPage /> }></Route>
            <Route path="/missions" element={ <MissionsPage /> }></Route>
        </Routes>
    </Router>
);

export default Routing;