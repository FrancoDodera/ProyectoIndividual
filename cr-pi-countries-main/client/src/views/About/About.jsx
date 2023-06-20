import style from "./About.module.css";
import img1 from "../../assets/GitHub-Logo.png";
import img2 from "../../assets/linkedin-logo.png";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutContainer}>
        <h1 className={style.aboutTitle}> ABOUT THIS SITE</h1>
        <p className={style.aboutDescription}>
          HELLO! MY NAME IS FRANCO RODRIGUEZ DODERA AND I AM THE DEVELOPER OF
          THIS PAGE.
        </p>
        <p className={style.aboutDescription}>
          IN THIS PROJECT, I HAVE DEVELOPED A WEB APPLICATION USING
          STATE-OF-THE-ART TECHNOLOGIES. IN THE BACKEND, I USED NODE.JS AND
          EXPRESS.JS TO BUILD THE SERVER PART. THE DATABASE WAS CONNECTED
          THROUGH SEQUELIZE, WHICH ALLOWED ME TO EFFICIENTLY MANAGE THE DATA
          MODELS. ON THE FRONTEND, I LEVERAGED THE POWER OF REACT AND REDUX TO
          CREATE THE VIEWS AND MANAGE THE APPLICATION STATE EFFECTIVELY. THESE
          TECHNOLOGIES ALLOWED ME TO CREATE AN INTERACTIVE AND DYNAMIC USER
          INTERFACE, PROVIDING A SEAMLESS EXPERIENCE TO USERS. IN ADDITION, I
          IMPLEMENTED VALIDATIONS IN THE FORM USING JAVASCRIPT, WHICH GUARANTEES
          THAT THE DATA ENTERED BY THE USERS IS CORRECT AND MEETS THE
          ESTABLISHED REQUIREMENTS. THIS CONTRIBUTES TO THE INTEGRITY AND
          QUALITY OF THE INFORMATION IN THE APPLICATION.
        </p>
        <p className={style.aboutDescription}>
          IF YOU HAVE ANY QUESTIONS OR SUGGESTIONS ABOUT THIS PAGE, DO NOT
          HESITATE TO CONTACT ME AT MY GMAIL: FANCODODERA@GMAIL.COM OR SOCIAL
          NETWORKS. THANKS FOR VISITING MY SITE
        </p>
        <div className={style.imgContainer}>
          <a href="https://github.com/FrancoDodera">
            <img className={style.imgGit} src={img1} />
          </a>
          <a href="https://www.linkedin.com/in/franco-rodriguez-dodera-a2530a260/">
            <img className={style.imgGit} src={img2} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
