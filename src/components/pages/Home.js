import React from 'react';
import project2 from "../../assets/images/Project_2_ScreenShot.PNG";
import eCommerce from "../../assets/images/E-Commerce_Back_End.PNG";
import noteTaker from "../../assets/images/NoteTaker.PNG";
import teamProfileGenerator from "../../assets/images/TeamProfileGenerator.PNG";

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>
    
      <section id="projects-container">
            <h2>Images of Gene's Applications</h2>

      
            <div id="project1" className="col-sm-10 col-md-4 myProjects">
                <h2 className="card-header">Art Institute Events Project</h2>
                <a className="card-header" href="https://github.com/NBFxSuccess/ArtInstituteProject" target="_blank">Associated github repository</a>
                <a href="https://tranquil-island-74133.herokuapp.com/" target="_blank"><img id="coolWebsite" src={project2}
                        alt="ArtInstituteProject"/></a>
            </div>

           
            <div className="col-sm-10 col-md-4 myProjects">
                <h2 className="card-header">E-Commerce Back End</h2>
                <a className="card-header" href="https://github.com/ggrove87/E-Commerce_Back_End" target="_blank">Associated github repository</a>
                <a href="https://drive.google.com/file/d/1IkFzg_YDaF5bfpmXnwmzi0bgOvm4tS_Z/view"
                    target="_blank"><img className="project-photos" src={eCommerce} alt="Cool_Cave"/></a>
            </div>

            <div className="col-sm-10 col-md-4 myProjects">
                <h2 className="card-header">NoteTaker</h2>
                <a className="card-header" href="https://github.com/ggrove87/NoteTaker" target="_blank">Associated github repository</a>
                <a href="https://shrouded-sierra-86347.herokuapp.com/" target="_blank"><img className="project-photos"
                        src={noteTaker} alt="Sampson"/></a>

            </div>
            <div className="col-sm-10 col-md-4 myProjects">
                <h2 className="card-header">Team Profile Generator</h2>
                <a className="col-sm-10 col-md-4 card-header" href="https://github.com/ggrove87/Team-Profile-Generator" target="_blank">Associated github repository</a>
                <a href="https://drive.google.com/file/d/1P5v3u2HJ5x-z4WC1kU4-KJJC91B_WHEw/view" target="_blank"><img className="project-photos" src={teamProfileGenerator}
                        alt="Good_Food"/></a>
            </div>
        </section>
   
     
    </div>
  );
}
