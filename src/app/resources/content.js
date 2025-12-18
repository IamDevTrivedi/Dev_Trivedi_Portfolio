import { Logo } from "@/once-ui/components";
import { SmartLink } from "@/once-ui/components";
import { baseURL } from "./config";

const person = {
  firstName: "Dev",
  lastName: "Trivedi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "devtrivedi.work@gmail.com",
  location: "Asia/kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/IamDevTrivedi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/contact-devtrivedi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "download",
    link: `${baseURL}/downloads/resume.pdf`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Bridging innovation and functionality through code</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Talkasauras</strong>
      </>
    ),
    href: "/work/talkasaraus-telegram-ai-assistant-bot",
  },
  subline: (
    <>
      Dev Trivedi transforms ideas into elegant, functional web experiences
      <br /> with a passion for clean code, cutting-edge technologies, and
      strong problem-solving skills — backed by{" "}
      <strong>1600+ challenges solved</strong> on LeetCode & Codeforces.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dev is a software developer with understanding in building real-time
        collaborative platforms and intuitive web applications. His work
        combines technical innovation with user-focused design to create
        seamless digital experiences that solve practical problems. With over
        1600+ problems solved on LeetCode and Codeforces, he brings strong
        algorithmic thinking and deep problem-solving skills to every project.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dhirubhai Ambani University",
        description: (
          <>
            B.Tech in Information & Communication Technology with
            <strong> 8.72/10 GPA</strong>.
          </>
        ),
      },
      {
        name: "Prime Science School, Jamnagar",
        description: (
          <>
            Completed Class 11/12 with <strong>99.02 percentile</strong> in JEE
            Mains.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Expertise",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Proficient in <strong>React</strong>, <strong>Node.js</strong>,
            MongoDB, and <strong>Socket.IO</strong> for building modern web
            applications and real-time collaborative tools.
          </>
        ),
        images: [
          {
            src: "/images/myImages/projects/talkasauras/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/myImages/projects/codewhisper/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/myImages/projects/linkwith/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/myImages/projects/project-ashwatthama/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Problem Solving",
        description: (
          <>
            LeetCode profile with <strong>1819 rating(max)</strong> and over{" "}
            <strong>1150 problems</strong> solved, showcasing strong algorithm
            design and data structure skills. Solved over{" "}
            <strong>1600+ problems</strong> across various platforms.
            <ul style={{ marginTop: 10 }}>
              <li>
                <SmartLink href="https://leetcode.com/u/MysteriousMortal/">
                  LeetCode
                </SmartLink>
              </li>
              <li>
                <SmartLink href="https://codeforces.com/profile/Dev_Trivedi_03/">
                  Codeforces
                </SmartLink>
              </li>
              <li>
                <SmartLink href="https://www.codechef.com/users/devtrivedi03">
                  CodeChef
                </SmartLink>
              </li>
            </ul>
          </>
        ),
        images: [
          {
            src: "/images/myImages/profiles/leetcode.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/myImages/profiles/cf1.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/myImages/profiles/cf2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/myImages/profiles/leetcode.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/profiles/cf1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/profiles/cf2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/15.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/16.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/17.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/18.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/19.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/20.png",
      alt: "image",
      orientation: "horizontal",
    },

    {
      src: "/images/myImages/gallery/1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/5.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/6.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/7.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/8.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/9.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/10.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/11.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/12.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/13.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/myImages/gallery/14.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
