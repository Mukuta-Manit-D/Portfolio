import {
  backend,
  mobile,
  web,
  clglogo,

  profile,

  amazonaws,
  anaconda,
  android,
  androidstudio,
  arduino,
  atom,
  bitcoin,
  blender,
  bootstrap,
  c,
  canva,
  chartdotjs,
  coursera,
  css3,
  django,
  eclipseide,
  ethereum,
  flask,
  geeksforgeeks,
  git,
  github,
  githubpro,
  googlechrome,
  googledrive,
  hackerrank,
  html5,
  inkscape,
  java,
  javascript,
  jupyter,
  kalilinux,
  kotlin,
  leetcode,
  matplotlib,
  mega,
  microsoft,
  microsoftazure,
  microsoftedge,
  microsoftexcel,
  microsoftoffice,
  microsoftpowerpoint,
  microsoftword,
  mongodb,
  mysql,
  netflix,
  nodedotjs,
  notepadplusplus,
  notion,
  numpy,
  nvidia,
  openai,
  opera,
  oracle,
  pandas,
  python,
  react,
  replit,
  republicofgamers,
  scikitlearn,
  spotify,
  stackoverflow,
  tailwindcss,
  threedotjs,
  torbrowser,
  ubuntu,
  udemy,
  unity,
  visualstudiocode,
  wikipedia,
  windows11,

  ai,
  brw,
  claho,
  db,
  devl,
  ds,
  edu,
  frwk,
  ide,
  mcft,
  ml,
  os,
  oth,
  pla,
  plb,
  vc,

  linkedinconnect,
  outlookconnect,
  githubconnect,
  twitterconnect,
  telegramconnect,
  replitconnect,
  discordconnect
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Connect"
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const about = [
  {
    name: "Profile",
    description: "DOB: 27 May 2004\nPOB: Mysore, Karnataka\nNationality: Indian ",
    image: profile,
  },
];


const education = [
  {
    name: "S.V.E.I Public School",
    type: "Primary Education",
    icon: web
  },
  {
    name: "Presentation Public School",
    type: "Secondary Education",
    icon: mobile
  },
  {
    name: "BASE PU College",
    type: "Pre University Education",
    icon: backend
  },
  {
    name: "Maharaja Institute of Technology",
    type: "Bachelor of Engineering",
    icon: clglogo
  },
];


const skill = [
  {
    title: "Programming Languages (Advanced)",
    iconpic: pla,
    name: "PLA",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Python",
        icon: python
      },
      {
        name: "C Lan",
        icon: c
      }
    ]
  },
  {
    title: "Programming Languages (Basic)",
    iconpic: plb,
    name: "PLB",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Java",
        icon: java
      },
      {
        name: "HTML",
        icon: html5
      },
      {
        name: "CSS",
        icon: css3
      },
      {
        name: "Javascript",
        icon: javascript
      },

    ],
  },
  {
    title: "Frameworks",
    iconpic: frwk,
    name: "FRWK",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Django",
        icon: django
      },
      {
        name: "Flask",
        icon: flask
      },
      {
        name: "React",
        icon: react
      },
      {
        name: "nodedotjs",
        icon: nodedotjs
      },
      {
        name: "Bootstrap",
        icon: bootstrap
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss
      }
    ],
  },
  {
    title: "Version Control",
    iconpic: vc,
    name: "VC",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "git",
        icon: git
      },
      {
        name: "Github",
        icon: github
      },
    ],
  },
  {
    title: "Database",
    iconpic: db,
    name: "DB",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Mongodb",
        icon: mongodb
      },
      {
        name: "Mysql",
        icon: mysql
      }
    ],
  },
  {
    title: "Artificial Intelligence",
    iconpic: ai,
    name: "AI",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "openai",
        icon: openai
      },
      {
        name: "notion",
        icon: notion
      }
    ]

  },
  {
    title: "Machine Learning",
    iconpic: ml,
    name: "ML",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "matplotlib",
        icon: matplotlib
      },
      {
        name: "Numpy",
        icon: numpy
      },
      {
        name: "Pandas",
        icon: pandas
      },
      {
        name: "scikit-learn",
        icon: scikitlearn
      }
    ],
  },
  {
    title: "IDE",
    iconpic: ide,
    name: "ide",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Visual studio code",
        icon: visualstudiocode
      },
      {
        name: "Android Studio",
        icon: androidstudio
      },
      {
        name: "Jupyter",
        icon: jupyter
      },
      {
        name: "Eclipseide",
        icon: eclipseide
      },

      {
        name: "Notepadplusplus",
        icon: notepadplusplus
      }
    ],
  },
  {
    title: "Hosting and Cloud Storage",
    iconpic: claho,
    name: "CLAHO",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "AWS",
        icon: amazonaws
      },
      {
        name: "Azure",
        icon: microsoftazure
      },
      {
        name: "Oracle",
        icon: oracle
      },
      {
        nmae: "Google Drive",
        icon: googledrive
      }
    ],
  },
  {
    title: "Design",
    iconpic: ds,
    name: "DS",
    iconBg: "#E6DEDD",
    skillball: [

      {
        name: "Canva",
        icon: canva
      },

    ],
  },
  {
    title: "Microsoft",
    iconpic: mcft,
    name: "Mcft",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Microsoft",
        icon: microsoft
      },
      {
        name: "Microsoft Office",
        icon: microsoftoffice
      },
      {
        name: "Microsoft Word",
        icon: microsoftword
      },
      {
        name: "Microsoft Excel",
        icon: microsoftexcel
      },
      {
        name: "Microsoft PowerPoint",
        icon: microsoftpowerpoint
      },
    ],
  },
  {
    title: "Developer",
    iconpic: devl,
    name: "Devl",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "HackerRank",
        icon: hackerrank
      },
      {
        name: "Leetcode",
        icon: leetcode
      },
      {
        name: "StackOverflow",
        icon: stackoverflow
      },
    ],
  },
  {
    title: "Operation System",
    iconpic: os,
    name: "OS",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Windows",
        icon: windows11
      },
      {
        name: "Kali",
        icon: kalilinux
      },
      {
        name: "Ubuntu",
        icon: ubuntu
      },
      {
        name: "Android",
        icon: android
      },
    ],
  },
  {
    title: "Browsers",
    iconpic: brw,
    name: "Brw",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Google Chrome",
        icon: googlechrome
      },
      {
        name: "Tor",
        icon: torbrowser
      },
      {
        name: "Opera",
        icon: opera
      },
      {
        name: "Edge",
        icon: microsoftedge
      },
    ],
  },
  {
    title: "Education",
    iconpic: edu,
    name: "Edu",
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "Coursera",
        icon: coursera
      },
      {
        name: "Udemy",
        icon: udemy
      },
      {
        name: "GeeksforGeeks",
        icon: geeksforgeeks
      },
    ],
  },
  {
    title: "Others",
    iconpic: oth,
    name: 'OTH',
    iconBg: "#E6DEDD",
    skillball: [
      {
        name: "ROG",
        icon: republicofgamers
      },
      {
        name: "Wikipedia",
        icon: wikipedia
      },
      {
        name: "Netflix",
        icon: netflix
      },
      {
        name: "Spotify",
        icon: spotify
      },
      {
        name: "Nvidia",
        icon: nvidia
      },
      {
        name: "Unity",
        icon: unity
      },
      {
        name: "bitcoin",
        icon: bitcoin
      },
      {
        name: "Ethereum",
        icon: ethereum
      },
    ],
  },
];

const projects = [
  {
    name: "Github",
    icon: githubpro,
    link: "https://github.com/Mukuta-Manit-D?tab=repositories"
  },
];

const connect = [
  {
    name: "linkedin",
    icon: linkedinconnect,
    link: "https://www.linkedin.com/in/mukuta-manit-60a77b273/"
  },
  {
    name: "email",
    icon: outlookconnect,
    link: "https://mail.google.com/mail/u/0/?to=mukutamanitd6@gmail.com&fs=1&tf=cm"
  },
  {
    name: "github",
    icon: githubconnect,
    link: "https://github.com/Mukuta-Manit-D"
  },
  {
    name: "twitter",
    icon: twitterconnect,
    link: ""
  },
  {
    name: "telegram",
    icon: telegramconnect,
    link: "https://t.me/mukutamanitd"
  }
]

export { about, education, skill, projects, connect };
