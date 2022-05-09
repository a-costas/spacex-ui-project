import Navigation from "../components/Navigation";
import LandingContent from "../components/LandingContent";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navigation />
            <LandingContent />
            <Footer />
        </div>
    );
};

export default LandingPage;