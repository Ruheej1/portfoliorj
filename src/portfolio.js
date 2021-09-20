import emoji from "react-easy-emoji";

const illustration = {
  animated: true 
};

const greeting = {
  username: "Anshul Sharma",
  title: "Hi all, I'm Anshul",
  subTitle: emoji(
    "I am currently in third year of college at BVCOE,Delhi pursuing a bachelors degree in Information Technology. Having a never ending appetite for learning, I'm trying my hands and brain at technologies like Web Development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nA2byjcybgxEWi6MHra2VDY9BDhVekPY/view", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  gmail: "anhsulsharma2001@gmail.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com/",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY LEARNER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Solve real world problems using technology"),
    emoji(
      "⚡ Integration of technology with disciplines where it could bring a about a change, a major revolution"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Bharati Vidyapeeth College Of Engineering",
      logo: require("./assets/images/bvcoe.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2019-2023",
      desc: "Scored 9 GPA in first year, got promoted to IT",
      
    },

    {
      schoolName: "Darbari Lal DAV Model School, Pitampura",
      logo: require("./assets/images/DAVLogo.png"),
      subHeader: "Non Medical with specialisation in Computer Science",
      duration: "2005-2019",
      desc: "Scored 92% in XII Standard",
     
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
};

// Work experience section

const workExperiences = {
  //yet to be added
};


const openSource = {
  // yet to be added
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true 
};

//Projects Sections

const bigProjects = {
  title: "Projects",
  subtitle: "Projects created while learning in summer",
  projects: [
    {
      image: require("./assets/images/todoList.png"),
      projectName: "ToDoList",
      projectDesc: "An app to record and make a list of your daily tasks for your routine!",
      footerLink: [
        {
          name: "Check Project",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/shoppingcart.png"),
      projectName: "Shopping Cart",
      projectDesc: "The shopping cart is a project for the management of a shopping list. ",
      footerLink: [
        {
          name: "Check Project",
          url: ""
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section


const achievementSection = {
  title: emoji("Experience And Certifications 🏆 "),
  subtitle:
    "Certifications done in summer !",

  achievementsCards: [
    {
      title: "Full Stack Web Development",
      subtitle:
        "Completed Full Stack Web Development Course from Coding Blocks and successfully created projects.",
      image: require("./assets/images/fullstack.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1nA2byjcybgxEWi6MHra2VDY9BDhVekPY/view"
        }
      ]
    },

    {
      title: "Girlscript Foundation Education Outreach Program",
      subtitle: "Learnt about open source contributions and successfully created a PR",
      image: require("./assets/images/girlscript.png"),
      footerLink: [
        {
        name: "View Badge", 
        url: "https://drive.google.com/file/d/1nCI6MDNk_MnpuVfWr4lJKPuJ_cklsUCq/view"
      }
      ]
    }
  ],
  display: true 
};

// Blogs Section

const blogSection = {
 //yet to be addded
};

// Talks Sections

const talkSection = {
 //yet to be added
};

// Podcast Section

const podcastSection = {
  //yet to be added
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8178921642",
  email_address: "anshulsharma2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  //yet to be added
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
