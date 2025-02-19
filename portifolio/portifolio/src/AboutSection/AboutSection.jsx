import SectionTitle from "../SectionTitle";
import "./AboutSection.css";
import AboutIcon from "./AboutIcon";

function AboutSection() {
    const harvardxText = "CS50's Web Programming with Python and JavaScript - HarvardX";
    const harvardxSrc = "https://frcelipe7.github.io/assets/images/about_me/harvardx.webp";

    const icpcText = "3rd place in the regional phase of the ICPC Programming Contest";
    const icpcSrc = "https://frcelipe7.github.io/assets/images/about_me/icpc.webp";

    const uepaText = "Bachelor's in Software Engineering at the State University of Pará - UEPA";
    const uepaSrc = "https://frcelipe7.github.io/assets/images/about_me/uepa.webp";

    const ifpaText = "High school integrated with an Electronics Technician course - IFPA";
    const ifpaSrc = "https://frcelipe7.github.io/assets/images/about_me/ifpa.webp";

    const picText = "Junior Scientific Initiation Program - PICJr";
    const picSrc = "https://frcelipe7.github.io/assets/images/about_me/pic.webp";

    const obmepText = "Honorable Mention at the Brazilian Public School Mathematics Olympiad - OBMEP";
    const obmepSrc = "https://frcelipe7.github.io/assets/images/about_me/obmep.webp";

    const obaText = "Bronze Medal at the Brazilian Astronomy and Astronautics Olympiad - OBA";
    const obaSrc = "https://frcelipe7.github.io/assets/images/about_me/oba.webp";

    const canguruText = "Bronze Medal at the Kangaroo Mathematics Olympiad";
    const canguruSrc = "https://frcelipe7.github.io/assets/images/about_me/canguru.webp";

    return (
        <section id="about_me">
            <SectionTitle title="About me" />
            <div className="right">
                <p className="description">
                    Hello, I am <span>Felipe Raphael</span>, a web developer currently
                    pursuing a bachelor&apos;s degree in <span>Software Engineering</span>
                    at the State University of Pará (UEPA).
                </p>
                <p className="description">
                    I have experience with <span>web development</span> using
                    <span>Django, HTML, CSS, JavaScript and Sass</span>. Additionally, I am
                    proficient in version control with <span>Git and GitHub</span>, system
                    modeling with <span>UML</span>, and interface design using
                    <span>Figma</span>.
                </p>
                <p className="description">
                    Furthermore, I have <span>DevOps</span> experience, including
                    <span>configuration and deployment</span> of applications on Linux
                    servers, <span>domain pointing</span>, and virtual host configuration.
                    In the future, I plan to specialize in <span>Cloud</span> and <span>Docker</span>.
                </p>

                <div className="container">
                    <AboutIcon icon="harvardx" text={harvardxText} src={harvardxSrc} />
                    <AboutIcon icon="icpc" text={icpcText} src={icpcSrc} />
                    <AboutIcon icon="uepa" text={uepaText} src={uepaSrc} />
                    <AboutIcon icon="ifpa" text={ifpaText} src={ifpaSrc}/>
                    <AboutIcon icon="pic" text={picText} src={picSrc} />
                    <AboutIcon icon="obmep" text={obmepText} src={obmepSrc} />
                    <AboutIcon icon="oba" text={obaText} src={obaSrc} />
                    <AboutIcon icon="canguru" text={canguruText} src={canguruSrc} />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;