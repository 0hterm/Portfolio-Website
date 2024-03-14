import portrait from '../assets/eyeswideshut.jpg';

const IntroBox = () => {
    return(
        <div className="intro-container">
            <div className='left-intro-container'>
                <h1 id="name">Hunter Termo</h1>
                <img src={portrait} id="intro-image" alt="Self Portrait" width="300px"/>
            </div>
            <div className="intro-desc">
                <p>Thank you for visiting my website! This site holds information about me and 
                    my projects.
                </p>
                <p> I am a software developer with a passion for creating and learning. My 
                    interests span a wide range from back-end tools like Node.js and API development, 
                    to front-end frameworks like React, Streamlit, and recently Angular.
                </p>
                <p> I am currently seeking new opportunities and am open to new projects. 
                    Please feel free to reach out to me!
                </p>
            </div>
        </div>
    )
}

export default IntroBox;