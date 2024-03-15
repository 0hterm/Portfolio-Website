const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="card">
                <h2>About Me</h2>
                <div className="card-text">
                    <p>
                        I am currently in my senior year, on track to complete
                        my Bachelor&apos;s degree in Computer Science at Florida 
                        Atlantic University.
                    </p>
                    <p>
                        I started coding in 2020 and have loved it ever since. 
                        Some of my first projects were simple calculator apps to 
                        help with my job at the time. I have since moved on to 
                        creating full-stack applications and have been learning 
                        new technologies.
                    </p>
                    <p>
                        Some of my most proficient languages are Python, Javascript, 
                        and C++. In regards to frameworks, in the front-end I have 
                        worked with React, Streamlit, and Angular.
                    </p>
                    <p>
                        In the back-end, I have worked with Node.js, Express, and Flask. 
                        I am also familiar with SQL and NoSQL databses such as MySQL, and MongoDB.
                    </p>

                </div>
            </div>
            <div className="card">
                <h2>Interests</h2>
                <div className="card-text">
                    <li className="int-list">Back-End Development</li>
                    <li className="int-list">API Development</li>
                    <li className="int-list">Machine Learning</li>
                    <li className="int-list">Generative AI</li>
                    <li className="int-list">Front-End Development</li>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;