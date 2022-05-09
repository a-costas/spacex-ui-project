import Navigation from "../components/Navigation";
import Missions from "../components/Missions";
import Footer from "../components/Footer";

const MissionsPage = () => {
    return (
        <div className="missions-page">
            <Navigation />
            <Missions />
            <Footer />
        </div>
    );
};

export default MissionsPage;