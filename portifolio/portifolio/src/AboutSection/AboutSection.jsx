import SectionTitle from "../TitleSection";
import "./AboutSection.css";

function AboutSection() {
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
            </div>
        </section>
    );
}

export default AboutSection;