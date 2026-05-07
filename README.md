# Job Application Tracker Dashboard

A modern React dashboard that helps users track job applications, interviews, offers, and rejections in one place.

## Features

- Add job applications
- Track application status
- Search applications by company or role
- Filter applications by status
- Dashboard statistics
- Delete applications
- Data persistence using localStorage
- Responsive modern UI

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- LocalStorage

## Folder Structure

```txt
job-application-tracker/
├── public/
│   └── demo-preview.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── EmptyState.tsx
│   │   │   └── StatCard.tsx
│   │   └── jobs/
│   │       ├── JobCard.tsx
│   │       ├── JobFilters.tsx
│   │       ├── JobForm.tsx
│   │       └── JobList.tsx
│   ├── data/
│   │   └── sampleJobs.ts
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── job.ts
│   ├── utils/
│   │   └── date.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```
## features
Add new job applications
Track company name, job role, location, status, and notes
Search applications by company or role
Filter applications by status
View dashboard statistics
Delete job applications
Save applications in browser using localStorage
Responsive design for desktop, tablet, and mobile
Clean and modern user interface
Reusable React components
Type-safe code using TypeScript
```
# Tech Stack
| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React        | Frontend library              |
| TypeScript   | Type safety                   |
| Vite         | Fast development setup        |
| CSS3         | Styling and responsive design |
| LocalStorage | Browser data persistence      |
| Git & GitHub | Version control               |

``
How the Project Works

The app stores job application data inside React state.

When a user adds a new job application, the data is saved in the browser using localStorage. This means the data remains available even after refreshing the page.

The user can search applications by company name or role. The user can also filter applications by status such as Applied, Interview, Offer, or Rejected.

The dashboard cards show quick statistics like total applications, interviews, offers, and rejected applications.
```
# Future Improvements

These features can be added later:

Edit job applications
Dark mode
Export applications as CSV
Add priority labels
Add company logo
Add deadline/reminder date
Add drag-and-drop Kanban board
Add authentication
Connect with backend API
Store data in MongoDB
```