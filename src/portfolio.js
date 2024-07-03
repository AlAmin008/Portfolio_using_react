
import html from './skill_icon/html-5.png'
import css from './skill_icon/css.png'
import js from './skill_icon/js.png'
import py from './skill_icon/python.png'
import react from './skill_icon/atom.png'
import django from './skill_icon/django.jpg'
import rest from './skill_icon/rest.png'
import flutter from './skill_icon/flutter.png'
import mycv from './cv.pdf'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'Al-Amin.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Md. Al-Amin',
  role: 'Full Stack Web Developer',
  description:
    '🚀 Full Stack Developer specializing in React and Django, with proficiency in Flutter for cross-platform mobile app development. Passionate about creating seamless and responsive web applications, I bring a unique blend of frontend expertise and robust backend solutions to the table. Let\'s build something amazing together! 💻🌐📱',
  cv: mycv,
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const educations =[
  {
    key:"University",
    degree:'Bachelor of Science in Software Engineering(BSSE)',
    Institute:'Noakhali Science and Technology University, Noakhali',
    year:"2018 - Present",
    description:"Noakhali Science and Technology University is a public university in the coastal terrain Noakhali of Bangladesh. It is the 27th public university and fifth science and technology university in Bangladesh. Its foundation stone was laid on 11 October 2003 and academic activities started on 22 June 2006."
  },
  {
    key:"College",
    degree:'Higher Secondary Certificate(HSC)',
    Institute:'Government Bangla College, Dhaka',
    year:"2015 - 2017",
    description:"overnment Bangla College is a public college located in the northwest part of the capital city of Dhaka in Bangladesh. The college was established in 1962 by Principal Abul Kashem to promote the use of the Bangla in higher education and to establish the language in all spheres of national life of Bengalis."
  },
  {
    key:"School",
    degree:'Secondary School Certificate(SSC)',
    Institute:'Annada Govt. High School, Brahmanbaria',
    year:"2010 - 2015",
    description:"Annada Government High School is a government secondary school for boys, in Brahmanbaria, Bangladesh. The school was named after Raja Roy Bahadur Annada Prashad Roy who was a landlord of Kolkata. The school operates under the Cumilla Education Board."
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    name: 'Blockchain Aided Academic Document Processing Portal',
    description:
      'This website was created as a means of automating the academic document receipt process. We created the system\'s web and mobile versions. Additionally, the blockchain concept was used for high security.',
    stack: ['html', 'CSS', 'JavaScript', 'Bootstrap 5', 'dart', 'Flutter', 'MySQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Movie Recommendation System',
    description:
      'As part of my latest project, I developed an engaging movie recommendation system with a user-friendly interface built using Streamlit. This system allows users to search for any movie and receive comprehensive information about it. Utilizing the TMDB database and APIs, the recommendation system employs content-based filtering to suggest similar movies that the user might like.',
    stack: ['Python', 'Machine learning'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'AudioVision: Audio Caption of Real-Time Captured Images',
    description:
      'As part of my final year project, I have developed a mobile app that captures images and generates audio captions for them. The aim of this project is to help visually impaired people by providing them with descriptive audio feedback of their surroundings. The app utilizes an encoder-decoder based deep learning model to generate accurate and meaningful captions, ensuring a reliable and user-friendly experience.',
    stack: ['Python', 'Machine learning','Deep Learning','Flutter','Django'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Restaurant Reservation System',
    description:
      'A website that lets you reserve a table at a restaurant. The creation of a booking system served as the primary inspiration for this application. Core functionality includes reserving one or multiple tables, pre-ordering foods, updating daily menu, posting offers and discounts and reservation management.',
    stack: ['html', 'CSS', 'JavaScript', 'Bootstrap 5', 'PHP', 'MySQL'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const experiences = [
  {
    "position":"Software Engineering Intern",
    "Company":"Tappware Solutions Limited, Purana Paltan, Dhaka ",
    "job_description":"As part of my 7th semester internship program, I worked as a Software Engineering Intern at Tappware Solution Limited. During this internship, gained hands-on experience and learned new technologies, enhancing my technical skills and practical knowledge in the field of software development.",
    "year":"June, 2023 – Dec, 2023 "
  }
]

const skills = [
  {
    "name":"Python",
    "image":py 
  },
  {
    "name":"Machine Learning",
    "image":py 
  },
  {
    "name":"Data Science",
    "image":py 
  },
  {
    "name":"React",
    "image":react
  },{
    "name":"Django",
    "image": django
  },{
    "name":"Django REST Framework",
    "image":rest 
  },{
    "name":"Flutter",
    "image":flutter 
  },{
    "name":"MySQL",
    "image":""
  },{
    "name":"Git",
    "image":""
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact ,educations,experiences}
