export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I can help drive your company's growth by providing innovative solutions ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Highly flexible and open to relocation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning more about Machine Learning and AI",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  
  {
    id: 1,
    title: "MRI Brain Tumor Detection and Classification ",
    des: "A machine learning-based system for detecting and classifying brain tumors from MRI scans to assist in early and accurate diagnosis.",
    img: "/mlProject.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "Vite.png", "chakratransp.png"],
    link: "",
  },
  {
    id: 2,
    title: "Real-Time Transcription App",
    des: "A real-time transcription app that converts spoken language into text instantly using speech-to-text technology for enhanced accessibility and productivity.",
    img: "/mic.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "Vite.png", "chakratransp.png"],
    link: ""
  },
  {
    id: 3,
    title: "AI Powered Stock Dashboard",
    des: "Unlock smarter investing as intelligent AI analyzes data in real-time to recommend the best stocks for your portfolio.",
    img: "/project1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "Vite.png", "chakratransp.png"],
    link: "https://github.com/pbroz35/Stocks-project",
  },
  {
    id: 4,
    title: "AI Chatbot",
    des: "Experience seamless conversations with our AI chatbot, designed to understand and respond to your needs in real-time.",
    img: "/project2Edit2.jpg",
    iconLists: ["chakratransp.png", "/tail.svg", "/ts.svg", "Vite.png"],
    link: "https://github.com/pbroz35/AI-Assistant",
  },
  // {
  //   id: 3,
  //   title: "Movie Library",
  //   des: "Discover your next favorite film with our movie website. Browse an extensive library, access detailed movie information",
  //   img: "/project3.png",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "Vite.png"],
  //   link: "https://github.com/pbroz35/movie-website",
  // },
  // {
  //   id: 4,
  //   title: "OpenStreetMap",
  //   des: "A mapping system developed in C++ to find your way around campus by using Dijkstra's algorithm",
  //   img: "/b5.svg",
  //   iconLists: ["axios.png", "ISO_C++_Logo.svg"],
  //   link: "https://github.com/pbroz35",
  // },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Piotr at the Electronic Visualization Lab, where he demonstrated exceptional skills in React, Node.js, Express, Docker, Next.js, Vite, and various web technologies. His expertise in building front-end components, developing back-end services, optimizing applications, and integrating APIs made him an invaluable asset to our team. Piotr’s proactive nature and passion for innovation were evident in every project.",
    name: "Shrut Patel",
    title: "Software Engineer Intern at Electronic Visualization Lab",
  },
  {
    quote: "Piotr is an excellent worker and is always diligent in his tasks. He helps whenever he can, and never fails to show up on time, ready to work. He listens to others, and works with them to not only improve himself, but the group as a whole. He is an amazing friend, and a pleasure to work with!",
    name: "Adyan Khan",
    title: "Former Colleague",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [

    {
    id: 2,
    title: "Research Assistant - Electronic Visualization Lab",
    desc: "Enhanced SAGE3, a collaborative whiteboard used by 5,000+ users across 800+ institutions, by implementing LLM features such as DeepPlot visualizations, speaker diarization, and Llama 3 summarization using TypeScript, React, LangChain, and Docker. Built AI-powered export tools with Python and React to generate summaries as CSVs, PDFs, images, and sticky notes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern - Ingenio Healthcare",
    desc: "As a Full-Stack Developer Intern at Ingenio Healthcare, I built a physician-finder tool using React, Redux, Node.js, and PostgreSQL, integrating NPPES data and MapGL for seamless provider search and scheduling. I also developed an AI-powered insurance authorization system with the OpenAI API, reducing approval time by 30% and enabling physicians to write authorizations 25% faster.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },

  {
    id: 4,
    title: "Fullstack Engineer Intern - Electronic Visualization Lab",
    desc: "As a Full-Stack Software Intern at the Electronic Visualization Lab, I improved the performance of an AI-powered stock dashboard by 25% through custom web scraping and data filtering from 100+ sources per request. I built real-time data applications with React, Node.js, and Express, integrating AI for predictive stock insights. I also developed interactive tools like a movie website and AI chatbot to boost user engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pbroz35",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/1brozek/",
  },
];