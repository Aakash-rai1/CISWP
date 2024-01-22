import React from 'react';

const TeamMemberCard = ({ imageUrl, name, role }) => {
  return (
    <div className="bg-[#D9D9D9] hover:bg-primary hover:drop-shadow-xl relative group ">
      <div className="absolute w-full px-4 py-4 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* card content */}
        <div className="bg-[rgba(255,255,255,0.8)] px-4 py-2">
          <p className="text-title">{name}</p>
          <p className="font-medium text-sm text-[#454242]">{role}</p>
        </div>
      </div>
      <img
        src={imageUrl}
        className="w-full h-full object-cover grayscale transition-all duration-100 hover:filter-none"
        style={{ zIndex: 1 }}
        alt={name}
      />
    </div>
  );
};

export default TeamMemberCard;
