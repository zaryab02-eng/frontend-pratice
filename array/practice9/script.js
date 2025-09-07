const employees = [
  { id: 1, name: "Alice", department: "tech" },
  { id: 2, name: "Bob", department: "sales" },
  { id: 3, name: "Carol", department: "marketing" },
];

const projects = [
  {
    employeeId: 1,
    projectName: "App Redesign",
    hoursWorked: 120,
    status: "completed",
  },
  {
    employeeId: 1,
    projectName: "Bug Fixes",
    hoursWorked: 80,
    status: "ongoing",
  },
  {
    employeeId: 2,
    projectName: "Sales Campaign",
    hoursWorked: 90,
    status: "completed",
  },
  {
    employeeId: 3,
    projectName: "Brand Strategy",
    hoursWorked: 75,
    status: "completed",
  },
];

// Goal: Just show each employee with their total hours
// Expected:
// ["Alice worked 200 hours", "Bob worked 90 hours"]

const result = employees.map((employe) => {
  const employeProjects = projects.filter(
    (project) => employe.id === project.employeeId
  );

  const completedProjects = employeProjects.filter(
    (project) => project.status === "completed" // Fixed typo
  );

  const totalHours = completedProjects.reduce(
    // Use completedProjects
    (sum, project) => sum + project.hoursWorked,
    0
  );
  return `${employe.name} (${employe.department}) worked ${totalHours} completed hours`;
});
console.log(result);
