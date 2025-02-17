
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Khalid Mehmood",
  title: "Hi all, I'm Khalid",
  subTitle: emoji("A passionate Software Developer 🚀 who loves turning ideas into powerful digital experiences. Skilled in JavaScript,  Node.js, React.js, Angular.js, Redux, Socket.io, MongoDB, Firebase, and more. Always innovating, always building! ⚡✨"),
  // resumeLink: "https://drive.google.com/file/d/184Uwybo_2Ag-HV0LpJAMjyO9BihymrHn/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/khalidMhd",
  gmail: "khalidmhd1137@gmail.com",
  facebook: "https://www.facebook.com/khalid.khalidokz",
  instagram: "https://www.instagram.com/khalidm.official",
  linkedin: "https://www.linkedin.com/in/khalidmhd/",

  // stackoverflow: "https://stackoverflow.com/users/10422806/Khalid"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "A Crazy Full Stack Developer Ready to Tackle Any Tech Stack!",
  skills: [
    emoji("⚡ Craft highly interactive Frontend/UI for web apps"),
    emoji("⚡ Build Progressive Web Applications (PWAs)"),
    emoji("⚡ Develop Chrome Extensions & Swagger UI/APIs"),
    emoji("⚡ Create Node.js APIs with Swagger Documentation"),
    emoji("⚡ Build Real-Time Chat Apps with Socket.io"),
    emoji("⚡ Integrate Third-Party Services Seamlessly"),
    emoji("⚡ Always exploring new technologies to keep projects fresh and innovative")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Tailwind ",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fab fa-css3"
    },

    {
      skillName: "Font-awesome",
      fontAwesomeClassname: "fab fa-font-awesome-flag"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Nestjs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swagger UI/APIs",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "Socket io",
      fontAwesomeClassname: "fab fa-rocketchat"
    },

    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-database"
    },

  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "City University",
      logo: require("./assets/images/cityLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Software",
      duration: "September 2018 - 2022",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - MERN Stack",
      company: "DPL Pvt. Ltd",
      companylogo: require("./assets/images/dpl.png"),
      date: "October 2022 – Present",
      desc: "I work as a MERN Stack Developer, handling both Front-end and Back-end development. I build dynamic web applications using React.js and Angular for the front-end, while Node.js and MongoDB power the back-end. My role includes developing and maintaining APIs, optimizing performance, and ensuring seamless user experiences across the entire application.",
    },
    {
      role: "MERN/MEAN Stack Developer",
      company: "K2 Peak Technologies",
      companylogo: require("./assets/images/k2.png"),
      date: "October 2021 – September 2022",
      desc: "I worked as a MERN/MEAN Stack Developer, focusing on both Front-end and Back-end development. I was responsible for building and maintaining web applications, handling everything from user interfaces with React.js to server-side development using Node.js and MongoDB."
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "khalidmhd", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/NLC.png"),
      link: "https://vehicle-valeting.herokuapp.com"
    },
    {
      image: require("./assets/images/opaq.png"),
      link: "https://vehicle-valeting.herokuapp.com"
    },
    {
      image: require("./assets/images/vechile.png"),
      link: "https://vehicle-valeting.herokuapp.com"
    },
    {
      image: require("./assets/images/ccsc.png"),
      link: "https://ccscenter.herokuapp.com"
    },
    {
      image: require("./assets/images/drustDaam.png"),
      link: "https://pricecontrol.herokuapp.com/signin"
    },
    {
      image: require("./assets/images/polio.PNG"),
      link: "https://polioapp.herokuapp.com/"
    },
    {
      image: require("./assets/images/FYP.png"),
      link: "http://108.60.209.101:2000/signin"
    },
    {
      image: require("./assets/images/asp.png"),
      link: "http://108.60.209.101:5010/signin"
    },

    {
      image: require("./assets/images/itmd.PNG"),
      link: "https://ittemad.herokuapp.com/"
    },
    // {
    //   image: require("./assets/images/extension.PNG"),
    //   link: "#"
    // },
    {
      image: require("./assets/images/emobile.png"),
      link: "https://e-mobile-demo.herokuapp.com/"
    },
    {
      image: require("./assets/images/chat.PNG"),
      link: "https://chat-app-dem0.herokuapp.com/"
    },
    // {
    //   image: require("./assets/images/insta.png"),
    //   link: "https://insta-dem0.herokuapp.com/"
    // },
    {
      image: require("./assets/images/api.png"),
      link: "https://sabzi-ghar.herokuapp.com/swagger/"
    },

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@khalidMhd/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/khalidMhd-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---khalid-mehmood-from-hangu--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3088887580",
  email_address: "khalidmhd1137@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
