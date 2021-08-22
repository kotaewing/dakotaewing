function Portfolio({ projects }) {
    return (
        <div>
            {projects.map((project, idx) => {
                return (
                    <h1 key={idx}>{project.title}</h1>
                )
            })}
        </div>
    )
}

export default Portfolio;