import { Container } from "react-bootstrap"
import AboutBanner from "../components/AboutBanner"
import AboutMission from "../components/AboutMission"
import AboutBoxes from "../components/AboutBoxes"

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutBoxes />
            <AboutMission />
        </>
    )
}
export default About