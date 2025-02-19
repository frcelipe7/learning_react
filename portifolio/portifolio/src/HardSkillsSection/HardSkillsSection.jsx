import SectionTitle from "../SectionTitle";
import "./HardSkillsSection.css";

function HardSkillsSection() {
    let frontend_tools = ["HTML", "CSS", "JavaScript", "Sass", "React.JS"];
    let backend_tools = ["Python", "Django"];
    let prototyping_tools = ["Figma"];
    let versioning_tools = ["Git", "GitHub"];
    let system_modeling_tools = ["UML"];

    const tools = {
        "Frontend": frontend_tools,
        "Backend": backend_tools,
        "Prototyping": prototyping_tools,
        "Versioning": versioning_tools,
        "System Modeling": system_modeling_tools
    };

    console.log(tools);
    
    return (
        <section id="hard_skills">
            <SectionTitle title="Hard Skills" />
            <div className="right">
                <p className="description">
                    I have experience as a <span>Full Stack</span> developer, working on the
                    Frontend with <span>HTML, CSS, JavaScript, Sass, and React.JS</span>,
                    and on the Backend with <span>Python and Django</span>. I am proficient
                    in <span>code versioning tools</span>, such as <span>Git and GitHub</span>,
                    and in <span>prototyping and design</span> using <span>Figma</span>.
                    Additionally, I have knowledge of system modeling with <span>UML</span>,
                    designing user-friendly interfaces <span>(UI/UX)</span>, and databases
                    like <span>SQLite and PostgreSQL with Django ORM</span>.
                </p>
                <p className="description">
                    I have also worked on <span>application deployment</span> on
                    <span>Apache servers</span>, and have experience in <span>business projects</span>,
                    developing <span>evaluation, attendance tracking, and certification solutions for corporate courses.</span>
                </p>
                <p className="description">
                    I am always exploring new technologies and enhancing my skills in areas
                    such as <span>DevOps, system integration, and the development of scalable and efficient solutions.</span>
                </p>
            </div>
        </section>
    );
}

export default HardSkillsSection;