const ProjectCard = (props) => {
    
    const { title, description, img, gitLink, appLink } = props;

    return(
        <div className={"card " + props.id}>
            <h2>{title}</h2>
                <img className="project-img" src={img} width="275px" alt="Project Image" />
                <p className="project-desc">{description}</p>
                <div className="buttons">
                    <a href={gitLink} target="_blank"><button>GitHub Repository</button></a>
                    { appLink ?
                        <a href={appLink} target="_blank"><button>Use the App!</button></a>
                        : null
                    }
                </div>
        </div>
    )
}

export default ProjectCard;