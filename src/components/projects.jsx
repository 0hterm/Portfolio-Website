const Projects = () => {
    return (
        <div className="projects-container">
            <div className="card">
                <h2>PDF Document Chatbot</h2>
                <img className="project-img" src="https://i.imgur.com/VIAHhXo.png" width="275px" alt="Project Image" />
                <p className="project-desc">Skills Used: Python, OpenAI, langchain, chromaDB, and streamlit.</p>
                <div className="buttons">
                    <a href="https://github.com/0hterm/Streamlit_PDF_Chatter" target="_blank"><button>GitHub Repository</button></a>
                    <a href="https://gpt-with-pdf.streamlit.app" target="_blank"><button>Use the App!</button></a>
                </div>
            </div>
            <div className="card">
                <h2>Pokedex Discord Bot</h2>
                <img className="project-img" src="https://i.imgur.com/38NLyeu.png" width="275px" alt="Project Image" />
                <p className="project-desc">Skills Used: Node.js, Discord.js, APIs, and working with JSON.</p>
                <div className="buttons">
                    <a href="https://github.com/0hterm/pokedex-bot" target="_blank"><button>GitHub Repository</button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects;