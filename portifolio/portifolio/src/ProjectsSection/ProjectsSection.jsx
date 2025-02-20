import SectionTitle from "../SectionTitle";
import Project from "./Project";

function ProjectsSection() {
    const projects = [
        {icons: ["html", "css", "js", "python", "django", "git", "github"], className: "ia_ttt", imgSrc: "https://frcelipe7.github.io/assets/images/projects/ia_ttt.webp", imgAlt: "Imagem site IA para jogo da velha", description: "Inteligência Artificial para jogar o jogo da velha", href: "#", anchorText: "Learn more"},
        {icons: ["html", "css", "js", "figma", "git", "github"], className: "caminhos_trilhas", imgSrc: "https://frcelipe7.github.io/assets/images/projects/caminhos_trilhas.webp", imgAlt: "Imagem site caminhos e trilhas", description: "Caminhos & Trilhas: site de pontos turisticos desenvido em grupo coomo projeto acadêmico", href: "https://sandro-a-moraes.github.io/", anchorText: "Visit site"},
        {icons: ["html", "css", "js", "python", "django", "figma", "git", "github"], className: "frequencia", imgSrc: "https://frcelipe7.github.io/assets/images/projects/frequencia.webp", imgAlt: "Imagem site frequência Bioquality", description: <>Site de gerenciamento de turmas e registro de frequência desenvolvido para a <a href="https://bioqualityconsultoria.com.br" target="_blank">Bioquality</a></>, href: "https://bioqualityconsultoria.com.br/", anchorText: "Acessar site da empresa"},
        {icons: ["html", "css", "js", "git", "github"], className: "clima_tempo", imgSrc: "https://frcelipe7.github.io/assets/images/projects/clima_tempo.webp", imgAlt: "Imagem site clima tempo", description: "Weather App: a website using an API to display the weather based on your location", href: "https://frcelipe7.github.io/clima.html", anchorText: "Visit site"},
        {icons: ["html", "css", "js", "git", "github"], className: "afma", imgSrc: "https://frcelipe7.github.io/assets/images/projects/afma.webp", imgAlt: "Imagem site filhas do mel", description: "Development of the landing page for the Associação Filhas do Mel da Amazônia - AFMA", href: "https://filhasdomel.github.io/site/", anchorText: "Visit site"},
        {icons: ["html", "css", "js", "python", "django", "git", "github"], className: "new_job", imgSrc: "https://frcelipe7.github.io/assets/images/projects/new_job.webp", imgAlt: "Imagem site new job", description: "New Job: a web application for companies to post job vacancies", href: "https://www.youtube.com/watch?v=TeuvA68l0bM", anchorText: "Watch video"},
        {icons: ["html", "css", "js", "figma", "git", "github"], className: "bio", imgSrc: "https://frcelipe7.github.io/assets/images/projects/bio.webp", imgAlt: "Imagem site bioquality", description: <>Presentation website for <a href="https://bioqualityconsultoria.com.br" target="_blank">Bioquality</a>, highlighting their services and values</>, href: "https://bioqualityconsultoria.com.br/", anchorText: "Visit site"},
    ]

    const showProjects = projects.map(project => 
        <Project
            icons={project.icons}
            className={project.className}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt} 
            description={project.description} 
            href={project.href} 
            anchorText={project.anchorText} 
            key={project.className} 
        />
    )
    
    return (
        <section id="projects">
            <SectionTitle title="Projects" />

            <div className="container">
                {showProjects}
            </div>
        </section>
    );
}

export default ProjectsSection;


