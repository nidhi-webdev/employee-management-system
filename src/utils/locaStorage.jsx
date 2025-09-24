const employees = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile and analyze Q3 sales data for review.",
                "taskDate": "2025-09-10",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project requirements with client.",
                "taskDate": "2025-09-15",
                "category": "Meeting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Follow-up Emails",
                "taskDescription": "Send follow-up emails to potential leads.",
                "taskDate": "2025-09-05",
                "category": "Communication",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "123",
        "tastCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Design Mockups",
                "taskDescription": "Create UI mockups for the new dashboard feature.",
                "taskDate": "2025-09-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Presentation",
                "taskDescription": "Present design concepts to the product team.",
                "taskDate": "2025-09-18",
                "category": "Presentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Revise Wireframes",
                "taskDescription": "Update wireframes based on client feedback.",
                "taskDate": "2025-09-20",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "User Research",
                "taskDescription": "Conduct user interviews to validate design ideas.",
                "taskDate": "2025-09-25",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "mike.jordan@example.com",
        "password": "123",
        "tastCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from junior developers.",
                "taskDate": "2025-09-07",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "API Integration",
                "taskDescription": "Integrate payment gateway API with backend.",
                "taskDate": "2025-09-14",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixes",
                "taskDescription": "Fix reported bugs in user login module.",
                "taskDate": "2025-09-16",
                "category": "Maintenance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "System Testing",
                "taskDescription": "Perform system testing for the new release.",
                "taskDate": "2025-09-22",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "lisa.wong@example.com",
        "password": "123",
        "tastCounts": {
            "active": 4,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "HR Orientation",
                "taskDescription": "Conduct orientation for new employees.",
                "taskDate": "2025-09-09",
                "category": "HR",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Policy Drafting",
                "taskDescription": "Draft remote work policy updates.",
                "taskDate": "2025-09-17",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Payroll Processing",
                "taskDescription": "Process payroll for September.",
                "taskDate": "2025-09-28",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "raj.kumar@example.com",
        "password": "123",
        "tastCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitor strategies for Q4.",
                "taskDate": "2025-09-08",
                "category": "Research",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Campaign Launch",
                "taskDescription": "Launch new digital ad campaign.",
                "taskDate": "2025-09-13",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Content Writing",
                "taskDescription": "Prepare blog posts for September.",
                "taskDate": "2025-09-19",
                "category": "Content",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Social Media Updates",
                "taskDescription": "Update company social media with campaign material.",
                "taskDate": "2025-09-21",
                "category": "Social Media",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Audit",
                "taskDescription": "Conduct SEO audit of the website.",
                "taskDate": "2025-09-30",
                "category": "SEO",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}]


export const setLocalStorage = () => {
    localStorage.setItem('Employees', JSON.stringify(employees))
    localStorage.setItem('Admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('Employees'))
    const admin = JSON.parse(localStorage.getItem('Admin'))
    return { employees, admin }
}