import React from "react";
import EventCard from "../components/EventCard";
import { Rivierapics } from "../components/Rivierapics";
import { Rivierapics2 } from "../components/Rivierapics2";

import { useEffect } from "react";
export const Events = () => {
  const events = [
    {
      title: "MotoStudent Spain",
      date: "15-10-25 to 19-10-25",
      location: "Spain",
      type: "International Competition",
      description:
        "MotoStudent is a premier international competition that pushes university teams to innovate and excel in the field of motorcycle design and engineering. As participants, we immerse ourselves in the complete development cycle of a prototype race motorcycle, from concept and design to manufacturing and performance testing.",
      achievements: [
        "33rd overall out of 54 teams (2018)",
        "6th best rookie squad",
        "1st in Asia",
      ],
      highlight:
        "WE ARE PROUD TO ANNOUNCE WE ARE GOING TO MOTOSTUDENT SPAIN 2025 WITH A NEW IC PROTOTYPE",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "FMAE MotoStudent India",
      date: "October last week",
      location: "India",
      type: "National Competition",
      description:
        "FMAE MotoStudent India is a national-level platform that challenges students to design and build high-performance motorcycles tailored for Indian tracks. Our participation in this event allows us to apply theoretical knowledge to practical scenarios, honing our engineering and project management skills.",
      achievements: [
        "1st in design and endurance (2022-2023)",
        "Overall First runner-up",
      ],
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Riviera",
      date: "20-02-24 to 23-02-24",
      location: "VIT",
      type: "Cultural Festival",
      description:
        "At Rivera, our team showcases innovative tech demonstrations, linking projects to the fest's themes of creativity and technology. We present workshops and exhibitions related to AI-powered systems and cobot integration in industries.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Gravitas",
      date: "27-09-2024 to 29-09-2024",
      location: "VIT",
      type: "Technical Festival",
      description:
        "At Gravitas, we participate in hackathons and technical challenges, tackling real-world problems to optimize industrial processes. This event emphasizes project-based learning and practical solutions.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "IANC",
      date: "TBA",
      location: "VIT",
      type: "Industry-Academia Conclave",
      description:
        "At the Industry-Academia Networking Conclave, we engage with industry leaders and present solutions related to automation and AI-driven industrial efficiency, discussing sustainable technologies, robotics, and cobot systems.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    },
  ];
  useEffect(() => {
    document.title = `RevMechanics - Rev Till You Die`;
  });
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Journey & Upcoming Events
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            From international competitions to local showcases, we're making our
            mark in the world of motorcycle engineering and innovation.
          </p>
        </div>
        <Rivierapics />
        <div className="grid gap-10 md:grid-cols-2 pt-12 pb-12 justify-center lg:grid-cols-3 mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        <Rivierapics2 />
      </div>
    </section>
  );
};
