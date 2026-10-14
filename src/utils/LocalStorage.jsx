
const employees = [
  {
    id: 1,
    name: "Ali Khan",
    email: "employee1@gmail.com",
    password: "123",

    taskNumber: 5,
    active: 2,
    newTask: 1,
    completed: 2,
    failed: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        description: "Create a modern and responsive login page for the company website.",
        taskDate: "2026-10-03",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build User Profile",
        description: "Create a profile section where users can view and update their information.",
        taskDate: "2026-10-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        description: "Fix alignment and responsive issues in the website navigation bar.",
        taskDate: "2026-09-30",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Wireframes",
        description: "Prepare wireframes for the new dashboard layout.",
        taskDate: "2026-09-28",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Weekly Report",
        description: "Prepare and submit the weekly progress report to the manager.",
        taskDate: "2026-09-27",
        category: "Report"
      }
    ]
  },

  {
    id: 2,
    name: "Ahmed Raza",
    email: "employee2@gmail.com",
    password: "123",

    taskNumber: 5,
    active: 3,
    newTask: 1,
    completed: 2,
    failed: 0,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Product Cards",
        description: "Design responsive product cards for the products page.",
        taskDate: "2026-10-03",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Search Feature",
        description: "Implement a search feature to help users find products quickly.",
        taskDate: "2026-10-04",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Filter System",
        description: "Add category and price filters to the products page.",
        taskDate: "2026-10-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer Layout",
        description: "Fix spacing and alignment problems in the website footer.",
        taskDate: "2026-09-29",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        description: "Attend the weekly team progress meeting.",
        taskDate: "2026-09-28",
        category: "Meeting"
      }
    ]
  },

  {
    id: 3,
    name: "Hamza Malik",
    email: "employee3@gmail.com",
    password: "123",

    taskNumber: 6,
    active: 3,
    newTask: 1,
    completed: 2,
    failed: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Connect API",
        description: "Connect the frontend application with the backend API.",
        taskDate: "2026-10-03",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Contact Form",
        description: "Create a contact form with validation for user messages.",
        taskDate: "2026-10-04",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Website",
        description: "Improve website loading speed and overall performance.",
        taskDate: "2026-10-05",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login System",
        description: "Test login and logout functionality for different users.",
        taskDate: "2026-09-30",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Backup",
        description: "Create a backup of the project database and verify the files.",
        taskDate: "2026-09-27",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        description: "Review the code submitted by the development team.",
        taskDate: "2026-09-28",
        category: "Development"
      }
    ]
  },

  {
    id: 4,
    name: "Usman Ali",
    email: "employee4@gmail.com",
    password: "123",

    taskNumber: 6,
    active: 3,
    newTask: 1,
    completed: 2,
    failed: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Social Media Post",
        description: "Create a promotional post for the company's social media pages.",
        taskDate: "2026-10-03",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Campaign Banner",
        description: "Design a banner for the upcoming company marketing campaign.",
        taskDate: "2026-10-04",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Plan Instagram Content",
        description: "Prepare a weekly content plan for the company's Instagram account.",
        taskDate: "2026-10-05",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Company Logo",
        description: "Replace the old logo files with the latest company logo.",
        taskDate: "2026-09-29",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        description: "Prepare slides for the monthly team presentation.",
        taskDate: "2026-09-27",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Campaign Report",
        description: "Prepare the monthly marketing campaign performance report.",
        taskDate: "2026-09-25",
        category: "Marketing"
      }
    ]
  },

  {
    id: 5,
    name: "Hassan Ahmed",
    email: "employee5@gmail.com",
    password: "123",

    taskNumber: 7,
    active: 3,
    newTask: 1,
    completed: 3,
    failed: 1,

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add User Profile",
        description: "Create a user profile section with personal information.",
        taskDate: "2026-10-03",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Dark Mode",
        description: "Add dark mode functionality to the employee dashboard.",
        taskDate: "2026-10-04",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Settings Page",
        description: "Build a settings page for user account preferences.",
        taskDate: "2026-10-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Button Styling",
        description: "Fix inconsistent button styles across the application.",
        taskDate: "2026-09-30",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Responsive Design",
        description: "Test the website on mobile, tablet and desktop screens.",
        taskDate: "2026-09-28",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Website",
        description: "Deploy the latest version of the website to production.",
        taskDate: "2026-09-26",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Clean Project Files",
        description: "Remove unused files and organize the project structure.",
        taskDate: "2026-09-24",
        category: "Maintenance"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123"
  }
];





export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees , admin}
}

