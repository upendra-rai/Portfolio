import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Upendra Rai",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Open Source Contributor"],
    bio: "I am a highly skilled Java Backend Developer with expertise in designing, developing, and deploying robust microservices-based applications using Java 8, Spring Boot, and RESTful APIs. My expertise spans cloud computing (AWS, S3, SQS), containerization (Docker), CI/CD (Jenkins, GitHub, Bitbucket), and database management (MySQL, PostgreSQL, MongoDB).I have a strong background in API Gateway, Spring Security, JWT authentication, and integrating third-party services, including payment gateways like PhonePe, Razorpay, Stripe, and map services. Proficient in multithreading, distributed systems, JUnit testing, debugging, and SDLC processes, I ensure efficient and high-performance application development.Passionate about agile methodologies, I collaborate seamlessly across teams using JIRA while maintaining code quality with Maven, Gradle, and Git. My experience includes event-driven architecture using Kafka, Linux-based deployments, and secure API implementations. Dedicated to delivering innovative and scalable solutions, I am eager to take on challenging projects that push technological boundaries."
}



const ProjectInfo = [
    {
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://upendra-rai.github.io/Ekart/",
        github: "https://github.com/upendra-rai/Ekart/"
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/upendra-rai/Facebook-Clone",
        github: "https://github.com/upendra-rai/Facebook-Clone"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/upendra-rai/Spotify-Clone",
        github: "https://github.com/upendra-rai/Spotify-Clone"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/upendra-rai/Travel-Tracker",
        github: "https://github.com/upendra-rai/Travel-Tracker"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/upendra-rai/Instagram-Clone",
        github: "https://github.com/upendra-rai/Instagram-Clone"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/upendra-rai/CodeX",
        github: "https://github.com/upendra-rai/CodeX"
    }
]


const SkillInfo = [
    {
        title: "Learning Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/upendra-rai", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/upendrarai", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/mr._rai01", icon: IconBrandInstagram }, 
   // { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/upendrarai02", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Development Engineer",
       // company: "Infosys",
        date: "2021 - Present",
        desc: "I spearheaded software development initiatives using Spring Boot, designing and implementing scalable microservices and seamless interfaces. I optimized system performance by effectively integrating frontend and backend components, and strengthened security through robust RESTful APIs. Leveraging tools like Docker for containerization, Jenkins for CI/CD pipelines, and JIRA for agile project management, I collaborated within cross-functional teams to drive innovation and efficiency. My expertise in MySQL and PostgreSQL ensured reliable database management, contributing to the delivery of high-quality, secure, and scalable solutions",
        skills: ["Java", "Java8","Springboot","Microservices", "Restful API", "Docker", "MySQL", "PostgreSQL","MongoDB","Jenkins", "JIRA", "Agile", "Debugging", "API Gateway","Spring Security","Security JWT", "WebServices", "Rest API Services", "Web Development", 
            "Feign Client", "Application Development", "Git and GitHub", 
            "Bitbucket", "Maven", "Gradle", "JSON", 
            "Object-Oriented", "JUnit", "Multithreading", "Spring Boot JPA/Hibernate", 
            "SDLC", "Collections", "Distributed Systems", "Kafka", "Cloud Services", "AWS", "S3", "SQS-Simple Queue Service ",
            "Cloud Computing", "CI/CD", "Linux Deployment", "Docker", "Third  Party Map Integration" ,"Email and Mobile SMS Integration","PhonePay, RazorPay, Stripe Payment Gateway"]
    },
    /*{
        role: "Junior Software Developer,",
      //  company: "Infosys",
        date: "Dec 2021 - July 2023",
        desc: "I leveraged my expertise in Java and Spring Boot to design and develop scalable backend systems, utilizing Spring Data JPA for efficient database interactions and Feign Client for seamless service-to-service communication. I enhanced application security by implementing Spring Security and JWT for authentication and authorization. Collaborating within Agile teams, I used tools like JIRA for project management and Jenkins for CI/CD pipelines to ensure smooth deployments. My experience with AWS and API Gateway enabled me to build and manage cloud-based solutions, while Git, GitHub, and Bitbucket supported version control and collaborative development. Additionally, I optimized MySQL database performance and reliability, and utilized strong debugging skills to resolve issues and ensure robust system integration.",
        skills: ["Java", "MySQL", "Spring Data JPA", "Feign Client", "Spring Security","JWT","Jenkins", "JIRA", "AWS", "Agile","Git and GitHub","Bitbucket","Debugging", "API Gateway"]
    },
    {
        role: "Intern Software Developer,",
      //  company: "Infosys",
        date: "Jan 2021 - Dec 2023",
        desc: "As an Intern Software Developer, I gained hands-on experience in building scalable and efficient backend systems using Java and Spring Boot. I contributed to the design and development of RESTful APIs, ensuring seamless communication between frontend and backend components. Collaborating with cross-functional teams, I supported the integration of software solutions and optimized system performance. This role allowed me to develop a strong foundation in modern software development practices, including API design, backend development, and teamwork, while delivering impactful contributions to projects.",
        skills: ["Java", "MySQL", "Spring Data JPA", "Spring Security","JWT","Jenkins", "AWS", "Agile","Git and GitHub","Debugging", "API Gateway"]
    }*/
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };