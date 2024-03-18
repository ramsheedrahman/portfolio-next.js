import React from "react";

const ProfileCard = ({ title, items }) => {
  return (
    <div className="max-w-full mx-auto text-white rounded-xl overflow-hidden shadow-md m-4  ring-1 ring-gray-700 sm:w-full ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{title}</div>
        <ul className="list-disc list-inside mt-4 ">
          {items.map((item, index) => (
            <li key={index} className="text-gray-400">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Profile = () => {
  const skills = ["Html","Css","Tailwind CSS","JavaScript", "React", "Node.js", "MongoDB","Python","git"];
  const education = ["Bachelor in Commerce ,Kannur University",];
  const certificates = ["MERN Stack Developer, Entri Elavate", 'Post Gradution of Diploma in Computer Application' ];

  return (
   
    <div className=" flex-wrap justify-center md:grid md:grid-cols-3 gap-3 ">
      <ProfileCard title="Skills" items={skills} />
      <ProfileCard title="Education" items={education} />
      <ProfileCard title="Certificates" items={certificates} />
    </div>
    
  );
};

export default Profile;
