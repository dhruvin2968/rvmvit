import React from 'react';
import EventCard from './EventCard';

const events = [
  {
    title: "Gravitas Technical Festival",
    description: "Participate in hackathons and technical challenges focused on industrial process optimization. Showcase your solutions and compete with the best.",
    date: "April 5-7, 2024",
    image: "/f.jpg",
    category: "Technical"
  },
  {
    title: "IANC Networking Conclave",
    description: "Engage with industry leaders and present innovative solutions in automation and AI-driven industrial efficiency.",
    date: "May 20-21, 2024",
    image: "/event.jpg",
    category: "Networking"
  }
];

const EventsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default EventsList;