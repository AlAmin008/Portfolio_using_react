// import uniqid from 'uniqid'
// import phdIcon from '@material-ui/icons/GitHub'
import EducationIcon from '@material-ui/icons/SchoolTwoTone'
import { educations } from '../../portfolio'
import './Education.css'


const Education = () => {
    if (!educations.length) return null
  
    return (
      <section id='educations' className='section educations'>
        <h2 className='section__title'>Education</h2>
  
          {educations.map((education) => (
                // <div className="container">
                // <div className="row">
                //   <div className="col-md-12 col-lg-8 offset-lg-2">
                    <article className="education-item">
                      {/* {phdIcon} */}
                      
                      <h5 className="education-date">{education.key} <EducationIcon/></h5>
                      <div className="education-card">
                      <h5 style={{ letterSpacing: '2px' }}>{education.degree}</h5>
              
                          <h6 className="card-subtitle"> <a href="https://github.com/eugene-robb">{education.Institute}</a> </h6>
                          <p className="card-text text-muted">{education.year}</p>
                          <p className="card-text">
                            {education.description}</p>
                        </div>
                    </article>
              //     </div>
              //   </div>
              // </div>
          ))}
      </section>
    )
  }
  
  export default Education
