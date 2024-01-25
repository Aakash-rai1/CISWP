import React from "react";
import NewsContent from "./NewsContent";


const news = [
    {
      title: "CISWP researcher leads Canadian committee for development of international standards",
      date: "August 24, 2023",
    },
    {
      title: "CISWP leads workforce training and skills project for Waterloo Region",
      date: "August 24, 2023",
    },
    {
      title: "CISWP researcher leads Canadian committee for development of international standards",
      date: "August 24, 2023",
    },
    {
      title: "CISWP researcher leads Canadian committee for development of international standards",
      date: "August 24, 2023",
    },
    
  ];

const SideNews = () => {
  return (
    <>
      <h2 className="text-title font-bold mt-12 mb-4 font-inter text-xl">News</h2>
      {news.map(({ title, date }, index) => (
        <NewsContent key={index} title={title} date={date} />
      ))}
    </>
  );
};

export default SideNews;
