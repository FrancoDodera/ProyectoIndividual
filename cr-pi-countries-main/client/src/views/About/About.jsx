import style from "./About.module.css";
import img1 from "../../assets/GitHub-Logo.png";
import img2 from "../../assets/linkedin-logo.png";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.aboutContainer}>
        <h1 className={style.aboutTitle}>Sobre mí</h1>
        <p className={style.aboutDescription}>
          ¡Hola! Mi nombre es Franco Rodriguez Dodera y soy el desarrollador de
          esta página.
        </p>
        <p className={style.aboutDescription}>
          En este proyecto, he desarrollado una aplicación web utilizando
          tecnologías de vanguardia. En el backend, utilicé Node.js y Express.js
          para construir la parte del servidor. La base de datos fue conectada
          mediante Sequelize, lo que me permitió gestionar de manera eficiente
          los modelos de datos. En el frontend, aproveché la potencia de React y
          Redux para crear las vistas y manejar el estado de la aplicación de
          manera efectiva. Estas tecnologías me permitieron crear una interfaz
          de usuario interactiva y dinámica, proporcionando una experiencia
          fluida a los usuarios. Además, implementé validaciones en el
          formulario utilizando JavaScript, lo que garantiza que los datos
          ingresados por los usuarios sean correctos y cumplan con los
          requisitos establecidos. Esto contribuye a la integridad y calidad de
          la información en la aplicación.
        </p>
        <p className={style.aboutDescription}>
          Si tienes alguna pregunta o sugerencia sobre esta página, no dudes en
          contactarme en mi GMAIL: fancododera@gmail.com o redes sociales.
          ¡Gracias por visitar mi sitio!
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
