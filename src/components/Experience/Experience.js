// import uniqid from 'uniqid'
// import phdIcon from '@material-ui/icons/GitHub'
// import EducationIcon from '@material-ui/icons/SchoolTwoTone'
import { experiences } from '../../portfolio'


import './Experience.css';


const Experience = () => (
//   if (!experiences.length) return null
//   return(
  <section id="experiences" className="section experiences">
    <h2 className="section__title">Experiences</h2>
    <div className="timeline">

    {experiences.map((experience) => (
            <div className="entry">
            <div className="title">
              <h4>{experience.year}</h4>
              <p>{experience.Company}</p>
            </div>
            <div className="body">
              <h3>{experience.position}</h3>
              <p>{experience.job_description}</p>
            </div>
          </div>
          ))}

  {/* <div className="entry">
    <div className="title">
      <h3>2014 - Present</h3>
      <p>Title, Company</p>
    </div>
    <div className="body">
      <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
      <ul>
        <li>Rerum sit libero possimus amet excepturi</li>
        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
      </ul>
    </div>
  </div> */}

</div>
  </section>
//   )
);

export default Experience;



