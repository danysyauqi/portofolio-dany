"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Link from "next/link";


const projectsData = [
    {
      id: 1,
      title: "IoT integrated with Machine Learning",
      description: "Detect parking areas during peak hours",
      image: "/images/projects/1.png",
      tag: ["All", "Youtube"],
      previewUrl: "https://www.youtube.com/watch?v=8pESHJ7g4QE"
    },
    {
      id: 2,
      title: "Object Detection",
      description: "Detects objects in 9 grid areas and displays different LED indicators on each grid",
      image: "/images/projects/2.png",
      tag: ["All", "Youtube"],
      previewUrl: "https://drive.google.com/file/d/1oYXDuH4tFXvENK-ajIHzcXcnRjajPWFE/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Clustering with K-Means Machine Learning",
      description: "Dividing cluster segmentation based on tabular sales data",
      image: "/images/projects/3.png",
      tag: ["All", "GitHub"],
      previewUrl: "https://github.com/danysyauqi/K-Means-Cluster",
    },
    {
      id: 4,
      title: "Data Warehouse Part",
      description: "Database MySql with Node Js, create update read and delete product title and picture",
      image: "/images/projects/4.png",
      tag: ["All", "GitHub"],
      previewUrl: "https://github.com/danysyauqi/picture-warehourse-part",
    },
    {
      id: 5,
      title: "Redesign User Interface",
      description: "Based on website student.upi.edu in this case",
      image: "/images/projects/5.png",
      tag: ["All","GitHub"],
      previewUrl: "https://www.figma.com/file/GxRckRhzbVX0cFMCl8e1rW/SPADA-UPI",
    },
    {
      id: 6,
      title: "Snakes & Ladder Game Developer",
      description: "Based on Java Programming Language & JavaFX library",
      image: "/images/projects/6.png",
      tag: ["All", "GitHub"],
      previewUrl: "https://github.com/danysyauqi/Snake-And-Ladder-JavaFX",
    },
    {
      id: 7,
      title: "Solar panel tracker following the direction of the light's position",
      description: "Control system use LDR sensor and servo motor actuator",
      image: "/images/projects/7.png",
      tag: ["All", "Youtube"],
      previewUrl: "https://drive.google.com/file/d/14QEkit28ME8G23ySworfA8kuEwEUr4-u/view?usp=drivesdk",
    },
    {
      id: 8,
      title: "Line follower robbot",
      description: "Based on arduino uno with infrared sensor and 4 motor dc",
      image: "/images/projects/8.jpg",
      tag: ["All", "Youtube"],
      previewUrl: "https://github.com/danysyauqi/Arduino-Robot-Line-Follower-with-Infrared-Sensor/blob/main/demo.md",
    },
    {
      id: 9,
      title: "Cashir Console App C# Programming Language",
      description: "app to calculate the nominal amount the buyer must pay ",
      image: "/images/projects/9.png",
      tag: ["All", "GitHub"],
      previewUrl: "https://github.com/danysyauqi/CalculatePriceTea",
    },
  ];


const ProjectsSection = () => {
  const[tag,setTag]=useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) =>{
    setTag(newTag)
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

    return (
      <section id="projects">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
          </h2>
        <div className='text-white flex flex-row justify-center item-center gap-2 py-6'>
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} />
          <ProjectTag 
            onClick={handleTagChange} 
            name="Youtube" 
            isSelected={tag === "Youtube"} />
          <ProjectTag 
            onClick={handleTagChange} 
            name="GitHub" 
            isSelected={tag === "GitHub"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };

export default ProjectsSection