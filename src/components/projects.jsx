import ProjectCard from "./projectcard";

const Projects = () => {
    return (
        <div className="projects-container">
            <ProjectCard title="PDF Document Chatbot" description="Skills Used: Python, OpenAI, langchain, chromaDB, and streamlit." img="https://i.imgur.com/VIAHhXo.png" gitLink="https://github.com/0hterm/Streamlit_PDF_Chatter" appLink="https://gpt-with-pdf.streamlit.app" />
            <ProjectCard title="Pokedex Discord Bot" description="Skills Used: Node.js, Discord.js, APIs, and working with JSON." img="https://i.imgur.com/38NLyeu.png" gitLink="https://github.com/0hterm/pokedex-bot" />
            <ProjectCard title="Pokemon Picker" description="Skills Used: Node.js, APIs and JSON data, Javascript, Algorithms, Data Structures." img="https://i.imgur.com/EkSPpWb.png" gitLink="https://github.com/COP4808-Spring2024-Full-Stack-Webdev/hw4-0hterm" />
        </div>
    )
}

export default Projects;