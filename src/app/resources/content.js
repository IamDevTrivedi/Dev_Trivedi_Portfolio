import { Logo } from "@/once-ui/components";
import { SmartLink } from "@/once-ui/components";
import { baseURL } from "./config";

const person = {
    firstName: "Dev",
    lastName: "Trivedi",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Engineer Analyst Intern at Goldman Sachs | Full Stack Developer",
    avatar: "/images/avatar.jpg",
    email: "devtrivedi.work@gmail.com",
    location: "Asia/kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on the intersection of
            creativity and engineering.
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
        link: "/resume",
    },
];

const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name} | Engineer Analyst Intern at Goldman Sachs & Full Stack Developer`,
    description: `Explore my portfolio and resume featuring full stack projects, real-time systems, and 2200+ coding challenges solved.`,
    keywords: [
        "Dev Trivedi portfolio",
        "Dev Trivedi resume",
        "Dev Trivedi Goldman Sachs",
        "Dev Trivedi Engineer Analyst Intern",
        "Goldman Sachs Engineer Analyst Intern Bengaluru",
        "Next.js developer portfolio",
        "React Node.js portfolio",
    ],
    headline: "Backend Engineer \u0026 Full Stack Developer",
    featured: {
        display: true,
        title: (
            <>
                Recent project: <strong className="ml-4">Trimium</strong>
            </>
        ),
        href: "/work/trimium-upgraded-url-management-platfrom-and-more",
    },
    subline: (
        <>
            I&apos;m currently an <strong>Engineer Analyst Intern at Goldman Sachs</strong> in
            Bengaluru — applying my problem-solving skills to financial technology.
            <br /> I build user-focused full-stack applications with React, Next.js, Node.js, and
            modern AI tooling.
        </>
    ),
};

const about = {
    path: "/about",
    label: "About",
    title: `About ${person.name}`,
    description: `I am ${person.name}, a ${person.role} specializing in real-time collaborative web apps and scalable backend systems.`,
    keywords: [
        "Dev Trivedi about",
        "Dev Trivedi full stack developer",
        "Dev Trivedi Goldman Sachs",
        "Dev Trivedi Dhirubhai Ambani University",
    ],
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
        title: "About Me",
        description: (
            <>
                Currently an Engineer Analyst Intern at Goldman Sachs in Bengaluru, where I apply
                strong algorithmic thinking and full-stack engineering to financial technology at
                scale. I build real-time collaborative platforms and intuitive web applications,
                combining technical innovation with user-focused design to deliver seamless,
                practical digital experiences. With 2200+ coding challenges solved on LeetCode and
                Codeforces, I bring deep problem-solving skills to every project – from hackathons
                to enterprise systems.
            </>
        ),
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Goldman Sachs",
                timeframe: "Summer 2026",
                role: "Engineer Analyst Intern",
                achievements: [],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Education",
        institutions: [
            {
                name: "Dhirubhai Ambani University",
                description: (
                    <>
                        B.Tech in Information & Communication Technology with
                        <strong> 8.59/10 GPA</strong>.
                    </>
                ),
            },
            {
                name: "Prime Science School, Jamnagar",
                description: (
                    <>
                        Completed Class 11/12 with <strong>99.02 percentile</strong> in JEE Mains.
                    </>
                ),
            },
        ],
    },

    technical: {
        display: true, // set to false to hide this section
        title: "Technical Skills",
        skills: [
            {
                title: "Full Stack Development",
                description: (
                    <>
                        I build modern web applications and real-time collaborative tools using{" "}
                        <strong>React</strong>, <strong>Node.js</strong>, MongoDB, and{" "}
                        <strong>Socket.IO</strong>.
                    </>
                ),
                images: [
                    {
                        src: "/images/projects/trimium/cover-01.png",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/talkasauras/cover-02.png",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/codewhisper/cover-01.png",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/linkwith/cover-01.png",
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
                        My LeetCode profile has an <strong>1819 peak rating</strong> and over{" "}
                        <strong>1600 problems</strong> solved, reflecting strong algorithm and data
                        structure skills. I have solved over <strong>2200+ challenges</strong>{" "}
                        across coding platforms.
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
                        src: "/images/profiles/leetcode.png",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/profiles/cf1.png",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/profiles/cf2.png",
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
    description: `Read what I have been building and learning recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Explore full-stack projects I built, from real-time collaboration tools to AI-powered applications.`,
    keywords: [
        "Dev Trivedi projects",
        "Dev Trivedi portfolio",
        "Dev Trivedi full stack projects",
        "Talkasauras Telegram bot",
        "CodeWhisper collaborative editor",
        "LinkWith URL management",
        "Trimium URL platform",
    ],
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const resume = {
    path: "/resume",
    label: "Resume",
    title: `${person.name} Resume - Engineer Analyst Intern at Goldman Sachs`,
    description: `Download my resume covering full-stack skills, Goldman Sachs engineering experience, and 2200+ coding challenges solved.`,
    keywords: [
        "Dev Trivedi resume",
        "Dev Trivedi CV",
        "Dev Trivedi Goldman Sachs",
        "Dev Trivedi full stack developer",
        "Goldman Sachs Engineer Analyst Intern",
        "TypeScript React Node.js resume",
    ],
};

export { person, social, newsletter, home, about, blog, work, resume };
