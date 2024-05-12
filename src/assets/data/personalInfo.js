import satafood from '../images/projects/satafood.png'
import natours from '../images/projects/natours.png'
import carApp from '../images/projects/carApp.png'
import book from '../images/projects/book-store.png'


import news1 from '../images/example/news1.png'
import news2 from '../images/example/news2.png'
import news3 from '../images/example/news3.png'
import news4 from '../images/example/news4.png'
import news5 from '../images/example/news5.png'
import news6 from '../images/example/news6.png'
import news7 from '../images/example/news7.png'
import news8 from '../images/example/news8.png'

///////////////////////////////////////
import commerce1 from '../images/example/commerce1.png'
import commerce2 from '../images/example/commerce2.png'
import commerce3 from '../images/example/commerce3.png'
import commerce4 from '../images/example/commerce4.png'
import commerce5 from '../images/example/commerce5.png'
//////////////////////////////////////////////
import devops1 from '../images/example/SCREENSHOT01.png'
import devops2 from '../images/example/SCREENSHOT02.png'
import devops3 from '../images/example/SCREENSHOT03.png'
import devops4 from '../images/example/SCREENSHOT04.png'
import devops5 from '../images/example/SCREENSHOT05.png'
import devops6 from '../images/example/SCREENSHOT06.png'
import devops7 from '../images/example/SCREENSHOT07.png'
import devops8 from '../images/example/SCREENSHOT08.png'
import devops9 from '../images/example/SCREENSHOT09.png'
import devops10 from '../images/example/SCREENSHOT10.png'
import devops11 from '../images/example/SCREENSHOT11.jpg'
import devops12 from '../images/example/SCREENSHOT12.jpg'
import { certificatesData } from './certificates'

const newsPics = [news7, news1, news2, news3, news4, news5, news6, news8]
const news = newsPics[Math.floor(Math.random() * newsPics.length)];
const commercePics = [commerce1, commerce2, commerce3, commerce4, commerce5]
const commerce = commercePics[Math.floor(Math.random() * commercePics.length)];
const devopsPics = [devops1, devops2, devops3, devops4, devops5, devops6, devops7, devops8, devops9, devops10, devops11, devops12]
const devops = devopsPics[Math.floor(Math.random() * devopsPics.length)];

export const personalInfo = {
  personalProfile: [
    {
      firstName: "Ahmed",
      lastName: "Fehid",
      occupation: "Back-end Developer",
      city: "Cairo",
      country: "Egypt",
      email: "a.fehid@hotmail.com",
      phone: "+201120085440",
      socialMediaLinks: {
        linkedInUrl: "https://www.linkedin.com/in/afehid/",
        githubUrl: "https://github.com/afehid",
      },
    },
  ],
  education: [
    // {
    //   id: 1,
    //   schoolName: "Alexandria University",
    //   degree: "Master's Degree",
    //   speciality: `Mediation and Conflict Resolution`,
    //   city: "Bucharest",
    //   year: {
    //     start: "2014",
    //     end: "2015",
    //   },
    // },
    {
      id: 2,
      schoolName: `Port Said University`,
      degree: `Bachelor's Degree In Communication Engineering`,
      speciality: `The Faculty of Engineering`,
      city: "Alexandria",
      year: {
        start: "2016",
        end: "2021",
      },
    },
  ],

  jobs: [
    {
      id: "job1",
      title: "Backend Developer",
      company: "Sata Group Technology",
      type: "full-time",
      year: {
        start: "2023",
        end: "2024",
      },
      city: "Cairo",
      description: [
        "Create server-side apps",
        "problem-solving",
        "Daily website maintenance.",
        "Custom API integrations.",
        "Creating Restaurant management system, point of sale, inventory management system and webscrapping app"
      ],
    },
    // {
    //   id: "job5",
    //   title: "Senior Sales Agent",
    //   company: "ALEEA TRADING S.R.L.",
    //   year: {
    //     start: "2014",
    //     end: "2014",
    //   },
    //   city: "Bucharest",
    //   description: [

    //     "Worked closely with the owner to improve quality standards for customer satisfaction.",
    //     "Was trusted with special projects to help my team sell better and be more motivated.",
    //     "Maintained good connections with all suppliers in the market.",
    //   ],
    // },
    // {
    //   id: "job6",
    //   title: "Pawnbroker Assistant",
    //   company: "ROGEF LUCKY GOLD IFN",
    //   year: {
    //     start: "2010",
    //     end: "2013",
    //   },
    //   city: "Slatina",
    //   description: [
    //     "Managed and optimized the contract database.",
    //     "Analyzed and processed returns.",
    //     "Advised clients on how to obtain loans.",
    //   ],
    // },
  ],

  skills: {
    codingSkills: [
      // {
      //   id: "skills1",
      //   category: "Front-End",
      //   languages: [
      //     "HTML5",
      //     "CSS3",
      //     "JavaScript",
      //     "TypeScript",
      //     "React JS",
      //     "React Hooks",
      //     "React Router",
      //     "Redux",
      //     "REST APIs",
      //     "Material UI",
      //     "Bootstrap",
      //     "Next.JS"
      //   ],
      // },
      {
        id: "skills2",
        category: "Back-End",
        languages: ["Nest.JS", "Node.JS", "REST APIs", "GraphQl", "Websocket", "RabbitMQ", "Swagger"],
      },
      {
        id: "skills3",
        category: "Databases",
        languages: ["PostgreSQL", "MySql", "mongodb", "mongoose", "migration", "orm (typeorm , prisma)"],
      },
      {
        id: "skills4",
        category: "Source Control",
        languages: ["Git", "GitHub"],
      },
    ],
    languages: [
      {
        id: "lang1",
        title: "Arabic",
        level: "mother tongue",
      },
      {
        id: "lang2",
        title: "English",
        level: "Professional",
      },
    ],
    softSkills: [
      `Highly motivated`,
      `Analytical, proactive and creative thinking`,
      `Results and solutions-oriented`,
      `Great ability to work with a team`,
      `Excellent communication skills`,
      `Research oriented`,
      `Problem solver`,
    ],

    courses: certificatesData,
  },

  projects: [
    {
      title: "e-commerce and online food ordering company ",
      // githubUrl: "#",
      url: "https://www.sata-food.com/en",
      image: satafood,
      description: `
      It is a new, innovative and advanced technology in the food industry and supermarkets, and we deliver medicines through its basic system via smart phones.
      .............
      Why Order From Sata Food ?
      Throughout saving multiple perks for both users and providers. About users, The company displays a broad collection of restaurants, supermarkets, and pharmacies for SATA FOOD users to choose the best Moreover, spot delivery with a low cost. In addition to offering discount coupons and gifts continuously.
      .............
      What Does Sata Food Offer ?
      All of that to provide our customers with the best services, so, we decided to release SATA FOOD company that collects between the welfare of new advanced technology and low expenses.
              `,
    },

    {
      title: "Backend for Tourism service , e-learning service",
      githubUrl: "https://github.com/afehid/Natours",
      // url: "#",
      image: natours,
      description: `
      using Nodejs, MongoDB, class-validator for validation ,jwt for authentication ...
      creating a sample backend for booking travels for tourism service that helps tourists to book their travel.`,
    },
    {
      title: "Backend for Car rent service , e-learning service",
      githubUrl: "https://github.com/afehid/Nest_Car_Project",
      // url: "#",
      image: carApp,
      description: `
      using NestJs, TypeORM, class-validator for validation ,jwt for authentication ...
      creating a sample backend for renting cars.`,
    },
    {
      title: "Backend for E-commerce , e-learning service",
      githubUrl: "https://github.com/afehid/Book-Store",
      // url: "#",
      image: book,
      description: `
      using NodeJs, SQL, Mocha Technology, auditing, winston logging, jwt for authentication ...
      creating a sample backend for buying products.`,
    },



  ],
  hobbies: [
    "Technology",
    "Watching Movies",
    "Football",
    "Playstation",
    "Running",
    "Chess",
  ],
};
