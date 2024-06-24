import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,


  
    starbucks,
    tesla,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Developer",
      icon: mobile,
    },
    {
      title: "Game Design",
      icon: backend,
    },
    {
      title: "Concept Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
   
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Photoshop",
      icon: tailwind,
    },
 
   
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
   
    
  ];
  
  const experiences = [
    
    {
      title: "Concept Artist Intern",
      company_name: "Audacity Studios",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2022 - July 2023",
      points: [
        "Honed skills significant skills during OJT days as a Concept Artist.",
        "Achieved technical skills in Game Design, Concept Design and Graphic Design",
        "Presented high-quality code and completed the project on time.",
      
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Crave Digital Software Development",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Honed skills significant skills during OJT days as a front-end developer",
        "Achieved technical skills in Web programming languages like HTML, JavaScript, CSS, Bootstrap and Code Igniter",
        "Presented high-quality code and completed the project on time."

      ],
    },
    {
      title: "Technical Support Engineer",
      company_name: "Challenger Singapore",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2023 - November 2023",
      points: [
        " Proficiently managed and analyzed customer data utilizing pgAdmin, ensuring data integrity and optimal system performance. Handles customer data using pgAdmin",
        "Swiftly resolved data and delivery system issues using the company's operations system, ensuring seamless operations and improved system stability.",

      ],
    },
    {
      title: "Programmer ",
      company_name: "ChuGo PH Pte Ltd",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "August 2023 - November 2022",
      points: [
        "Collaborated with the team to address and rectify identified issues on the company's online shopping website/system.",
        "Diagnosed and resolved bugs within the Point of Sale (POS) system, playing a pivotal role in elevating system efficiency.",


      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Thesis Game: Pintura",
      description:
        "A 2D Goal Oriented Action Planning Game that focuses on puzzles and interaction to know about filipino folklore .",
      tags: [
        {
          name: "Godot",
          color: "blue-text-gradient",
        },
        {
          name: "Aseprite",
          color: "green-text-gradient",
        },
        {
          name: "GDScript",
          color: "pink-text-gradient",
        },
        {
          name: "Photoshop",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Zea's Eatery Website",
      description:
        "Web application that ordering system of a restaurant called Zea. Users can order Breakfast, Lunch, Dinner and Snacks in the restaurant. The system will help the restaurant  manage orders from customers in an efficient and faster  way. The system also shows the available food and the price of the food so that customers can know and can decide what to order easily",
      tags: [
        {
          name: "Php",
          color: "blue-text-gradient",
        },
        {
          name: "Sql",
          color: "green-text-gradient",
        },
        {
          name: "CSS/Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    
    {
      name: "Pos of Challenger Singapore",
      description:
        "A robust and efficient Point of Sale system designed for Challenger Singapore, facilitating seamless customer transactions, inventory management, and sales reporting.",
      tags: [
     
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
      
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    
  ];
    const arts = [
   

    
  ];
  
  export { services, technologies, experiences, testimonials, projects, arts };