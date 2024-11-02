const settings = {
  isSplash: false, 
};

const seo = {
  title: "Shivam's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shivam Kumar Sah Portfolio",
    type: "website",
    url: "http://shivamkumarsah.com/",
  },
};

//Home Page
const greeting = {
  title: "Shivam Kumar Sah",
  logo_name: "ShivamKumarSah",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1A5YBzf1qRtU7_8Y7WsbJOr6eUsa4Xj1d/view?usp=sharing",
  portfolio_repository: "https://github.com/ShivamKSah",
  githubProfile: "https://github.com/ShivamKSah",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ShivamKSah",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shivam-kumar-sah-b8808b291",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:shivamsah141205@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/Shivam_K_Sah",
    fontAwesomeIcon: "fa-brands fa-x-twitter", 
    backgroundColor: "#181717", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_shivam.sah_/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        /*{
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },*/
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        /*{
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },*/
      ],
},
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        /*{
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },*/
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        /*{
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },*/
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        /*{
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },*/
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        /*{
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },*/
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/shivam-sah/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/shivam_sah",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shivam_k_sah",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shivam_sah",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM Institute of Science and Technology, Tiruchirappalli",
      subtitle: "B.Tech. in Computer Science and Engineering (Big Data Analytics)",
      logo_path: "srm.png",
      alt_name: "SRM Trichy",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Pursuing a B.Tech. in Computer Science and Engineering with a specialization in Big Data Analytics, focusing on building a strong foundation in programming, data structures, and algorithms.",
        "⚡ Completed first-year coursework, including introductory subjects in computer science, mathematics, and data analysis, with hands-on projects and practical applications.",
        "⚡ Attended workshops to enhance technical knowledge and practical skills in the field of big data analytics.",
      ],
      website_link: "https://srmtrichy.edu.in/",
    },
  ],
};



const certifications = {
  certifications: [
    {
      title: "Neo4j Certified Professional",
      subtitle: "- Neo4j",
      logo_path: "neo4j.png",
      certificate_link:
        "https://graphacademy.neo4j.com/c/f2e0a7c2-10fb-460f-a5dc-fc402b510048/?trk=public_profile_see-credential",
      alt_name: "Neo4j Certified Professional",
      color_code: "#ff7ce7",
    },

    {
      title: "AWS Certified Developer - Associate - Prep Course",
      subtitle: "- Infosys Springboard",
      logo_path: "Infosys.png",
      certificate_link:
        "https://graphacademy.neo4j.com",
      alt_name: "AWS Certified Developer - Associate - Prep Course",
      color_code: "#641e16",
    },

    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      subtitle: "- Forage",
      logo_path: "forage-logo.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_qDs8sY4SkuxfLmEHj_1725818432093_completion_certificate.pdf?trk=public_profile_see-credential",
      alt_name: "Forage",
      color_code: "#f4d03f",
    },

    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      subtitle: "- LinkedIn",
      logo_path: "Linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/41f0c54efba0ba995b6273d4d310c26dbe9a5e8eea9b7f876a95391c190ea4a6?trk=public_profile_see-credential",
      alt_name: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      color_code: "#b3b6b7",
    },

    {
      title: "Ciphervault Winner - First Place",
      subtitle: "- SRM Institute of Science and Technology",
      logo_path: "srm.png",
      certificate_link:
        "https://graphacademy.neo4j.com/c/f2e0a7c2-10fb-460f-a5dc-fc402b510048/?trk=public_profile_see-credential",
      alt_name: "Ciphervault Winner - First Place",
      color_code: "#2980b9",
    },

    {
      title: "Introduction to Cybersecurity",
      subtitle: "- Cisco",
      logo_path: "Cisco.png",
      certificate_link:
        "https://www.credly.com/badges/f7f5933b-2638-490c-b254-3ae72f5604b7/public_url?trk=public_profile_see-credential",
      alt_name: "Introduction to Cybersecurity",
      color_code: "#2ecc71",
    },

    {
      title: "Java (Basic)",
      subtitle: "- HackerRank",
      logo_path: "Hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/39f915400073?trk=public_profile_see-credential",
      alt_name: "hackerRank",
      color_code: "#eb984e",
    },

    {
      title: "Problem Solving (Basic)",
      subtitle: "- HackerRank",
      logo_path: "Hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/2619b16cde69?trk=public_profile_see-credential",
      alt_name: "hackerRank",
      color_code: "#85c1e9",
    },

    {
      title: "Python (Basic)",
      subtitle: "- HackerRank",
      logo_path: "Hackerrank.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/90eb24116de3?trk=public_profile_see-credential",
      alt_name: "hackerRank",
      color_code: "#ecf0f1",
    },

    {
      title: "Working with Big Data in Python",
      subtitle: "- Infosys Springboard",
      logo_path: "Infosys.png",
      certificate_link:
        "https://graphacademy.neo4j.com",
      alt_name: "Working with Big Data in Python",
      color_code: "#884ea0",
    },

    {
      title: "Micro-Certification - Welcome to ServiceNow",
      subtitle: "- ServiceNow",
      logo_path: "Servicenow.png",
      certificate_link:
        "https://graphacademy.neo4j.com",
      alt_name: "Micro-Certification - Welcome to ServiceNow",
      color_code: "#27ae60",
    },
	  
    {
      title: "Unity Essentials Pathway",
      subtitle: "- Unity",
      logo_path: "unity.png",
      certificate_link:
        "https://www.credly.com/badges/f331474f-d3c9-404a-940a-37eda213ea72",
      alt_name: "Unity Essentials Pathway",
      color_code: "#111555",
    },
    {
      title: "Introduction to MongoDB",
      subtitle: "- MongoDB",
      logo_path: "mongodb.png",
      certificate_link:
        "https://learn.mongodb.com/c/n9DJhtrDRf6Ybq-b_U60og",
      alt_name: "Introduction to MongoDB",
      color_code: "#987654",
    },
    {
      title: "Hands on Training Program on Computational Methods in Chemistry",
      subtitle: "- School of Chemistry and Biotechnology, SRM",
      logo_path: "srm.png",
      certificate_link:
        "https://drive.google.com/file/d/1kn34HeC2rm7jeBFnEaIIaH4Npew3YFe8/view?usp=sharing",
      alt_name: "SRM University",
      color_code: "#623456",
    },
    {
      title: "UI/UX Masterclass",
      subtitle: "- Team Gen-Y",
      logo_path: "srm.png",
      certificate_link:
        "https://drive.google.com/file/d/1Q47spWVYAqzJhiV1VtsoC9ncl7R2R1o3/view?usp=sharing",
      alt_name: "SRM University",
      color_code: "#181818",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Zd0hupMZQKo3axZZjxlfTJB0EonxtKGa/view?usp=sharing",
      alt_name: "Google Analytics for Beginners",
      color_code: "#99999999",
    },
    {
      title: "Advanced Google Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1p4NKB1f-9kXb8y_52AYirZrfpXK9kkQt/view?usp=sharing",
      alt_name: "Advanced Google Analytics",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Analytics Certification",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1BbkT1UfjuVW-hIHKzP_Pmxm4G1GZp-sL/view?usp=sharing",
      alt_name: "Google Analytics Certification",
      color_code: "#1F70C199",
    },
    {
      title: "Google Analytics for Power Users",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xoXo9ZheFU_I5lh8lJf69V7b3HX7ue8Q/view?usp=sharing",
      alt_name: "Google Analytics for Power Users",
      color_code: "#D83B0199",
    },
    {
      title: "7 DAYS NATIONAL LEVEL FDP ON PYTHON",
      subtitle: "- SIFRE",
      logo_path: "sifre.png",
      certificate_link:
        "https://drive.google.com/file/d/1-PCO1HIqf_ja0sHii5HJDnr42ZOBQwk3/view?usp=sharing",
      alt_name: "SIFRE",
      color_code: "#1F70C199",
    },
    {
      title: "Data Analytics with Python",
      subtitle: "- IIT Roorkee",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1xtfdLMpgyNvRx79lquwH9QwJZyIn6TBv/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Workshops",
  description:
    "I have gained valuable experience working with emerging technologies and developing my skills in computer science. I am passionate about technology and have participated in workshops to enhance my expertise in various areas. I enjoy engaging with the tech community and contribute to various open source projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      work: true,
      title: "Internships",
      experiences: [
	{
          title: "Subject Matter Expert (Statistics & Probability) Intern",
          company: "Solvitude",
          company_url: "https://solvitude.co.in/",
          logo_path: "solvitude.png",
          duration: "Dec 2023 - May 2024",
          location: "Work From Home",
          description:
            "Interning at Solvitude as a Subject Matter Expert in Statistics & Probability provided me with the opportunity to enhance my analytical skills and apply theoretical knowledge in practical, real-world situations. This role allowed me to collaborate with a team of experts, enhancing my professional development and deepening my understanding of statistical methodologies and their applications across various industries. Through this internship, I learned to effectively communicate complex quantitative concepts to diverse audiences, which is a crucial skill in any data-driven profession.",
          color: "#ee3c26",
        },
        {
          title: "Subject Matter Expert (Computer Science) Intern",
          company: "Tutornet Solutions",
          company_url: "https://tutornetsolutions.com/",
          logo_path: "tutornet.png",
          duration: "Sep 2023 - Nov 2023",
          location: "Work From Home",
          description:
            "Interning at TutorNet Solutions as a Subject Matter Expert in Computer Science provided me with the opportunity to enhance my pedagogical skills and deepen my understanding of complex computer science concepts. I also benefited from working in a collaborative environment, where I developed effective communication and problem-solving skills. Throughout the internship, I learned how to create engaging content tailored to diverse learning styles, which has been instrumental in my professional development as an educator in the tech field.",
          color: "#000000",
        },
        
        {
          title: "Subject Matter Expert (Statistics & Probability) Intern",
          company: "Brainspark",
          company_url:
            "https://www.linkedin.com/company/profitswitch/?originalSubdomain=in",
          logo_path: "brainspark.png",
          duration: "May 2023 - Aug 2023",
          location: "Work From Home",
          description:
            "Interning as a Subject Matter Expert (Statistics & Probability) at Brainspark provided me with the invaluable opportunity to deepen my expertise in advanced statistical theories and their practical applications, enhancing my analytical and problem-solving skills. The role also honed my ability to communicate complex concepts clearly and effectively, a crucial skill in any data-driven profession. Throughout this internship, I learned to apply statistical models to real-world problems, developed proficiency in statistical software, and gained insights into the latest trends and methodologies in the field of statistics and probability.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Workshops",
      experiences: [
        {
          title: "Game Development",
          company: "Unity, C#",
          company_url: "https://www.arduino.cc/",
          logo_path: "gamelogo.png",
          duration: "14th March 2024",
          location: "SRMIST Tiruchirappalli, Tamil Nadu",
          description:
            "Attended a hands-on workshop on game development, gaining practical experience in Unity and C# programming. Also explored the fundamentals of AR/VR, broadening my understanding of immersive technologies.",
          color: "#4285F4",
        },

        {
          title: "Robotics With Arduino",
          company: "Arduino",
          company_url: "https://www.arduino.cc/",
          logo_path: "Arduino.png",
          duration: "10th March 2024",
          location: "NIT Tiruchirappalli, Tamil Nadu",
          description:
            "Attending the robotics workshop with Arduino provided invaluable hands-on experience in building and programming robots. It enhanced my understanding of Arduino's capabilities and boosted my skills in electronics and coding, essential for future robotics projects.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "the-future-of-game-development",
      name: "The Future of Game Development",
      createdAt: "2024-08-15T00:00:00Z",
      description: "Blog published on Medium",
      url: "https://medium.com/@shivamsah141205/the-future-of-game-development-emerging-trends-and-technologies-97e6bcb5e76d",
    },
    {
      id: "rest-apis",
      name: "Understanding the Basics of REST APIs: A Beginner’s Guide",
      createdAt: "2024-08-15T00:00:00Z",
      description: "Blog published on Medium",
      url: "https://medium.com/@shivamsah141205/understanding-the-basics-of-rest-apis-a-beginners-guide-dc348f846545",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Shivam_logo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@shivamsah141205",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "LG Enclave,63/3/2, Sriharipuram, Jawaharnagar, Visakhapatnam - 530011",
    locality: "Sriharipuram",
    country: "India",
    region: "Andhra Pradesh",
    postalCode: "530011",
    streetAddress: "Jawaharnagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/LG+Enclave/@17.6845681,83.2345327,21z/data=!4m14!1m7!3m6!1s0x3a39692ccfab9b31:0xb65dc36c2fcde535!2sLG+Enclave!8m2!3d17.6845492!4d83.2347928!16s%2Fg%2F11q7fvxkj5!3m5!1s0x3a39692ccfab9b31:0xb65dc36c2fcde535!8m2!3d17.6845492!4d83.2347928!16s%2Fg%2F11q7fvxkj5?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
