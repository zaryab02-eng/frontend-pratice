import Card from "./assets/components/Card";

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      title: "Graphic Designer",
      type: ["Full-time", "Flexible schedule"],
      salary: "$150-220k",
      location: "Mountain View, CA",
      posted: "30 days ago",
      saved: true,
    },
    {
      id: 2,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      title: "Frontend Developer",
      type: ["Full-time", "Remote"],
      salary: "$130-200k",
      location: "Menlo Park, CA",
      posted: "15 days ago",
      saved: false,
    },
    {
      id: 3,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      title: "UI/UX Designer",
      type: ["Contract", "Hybrid"],
      salary: "$120-180k",
      location: "Seattle, WA",
      posted: "10 days ago",
      saved: true,
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      title: "Backend Engineer",
      type: ["Full-time", "Flexible hours"],
      salary: "$160-240k",
      location: "Los Gatos, CA",
      posted: "7 days ago",
      saved: false,
    },
    {
      id: 5,
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      title: "Product Designer",
      type: ["Full-time", "On-site"],
      salary: "$140-210k",
      location: "Cupertino, CA",
      posted: "12 days ago",
      saved: true,
    },
    {
      id: 6,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Software Engineer",
      type: ["Full-time", "Remote"],
      salary: "$150-230k",
      location: "Redmond, WA",
      posted: "20 days ago",
      saved: false,
    },
    {
      id: 7,
      company: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      title: "Systems Engineer",
      type: ["Full-time", "On-site"],
      salary: "$170-250k",
      location: "Austin, TX",
      posted: "5 days ago",
      saved: true,
    },
    {
      id: 8,
      company: "Nvidia",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Nvidia_logo.svg",
      title: "AI Researcher",
      type: ["Full-time", "Hybrid"],
      salary: "$180-260k",
      location: "Santa Clara, CA",
      posted: "2 days ago",
      saved: false,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {jobs.map(function (job) {
        return <Card key={job.id} job={job} />;
      })}
    </div>
  );
};

export default App;
