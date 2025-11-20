# Terraform + React on GCP Demo 🚀

A simple demonstration project that deploys a **React** application to **Google Cloud Platform (GCP)** using **Terraform**.

The architecture uses a **Google Cloud Storage (GCS)** bucket configured as a static website to host the React application. This is a cost-effective and high-performance pattern for hosting Single Page Applications (SPAs).

## 📂 Project Structure

- `react-app/`: The frontend React application (created with Vite).
- `main.tf`: Terraform configuration for GCP resources (Storage Bucket, IAM).
- `variables.tf`: Input variables for Terraform.
- `outputs.tf`: Output values (e.g., the website URL).

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v20+)
- **[Terraform](https://www.terraform.io/)** (v1.0+)
- **[Google Cloud SDK](https://cloud.google.com/sdk/docs/install)** (gcloud)
# Professional Task Manager

A clean, professional to-do list application built with React and Vite.

## Features

- ✅ Add, complete, and delete tasks
- � Auto-save to localStorage (tasks persist across sessions)
- 📊 Real-time completion counter
- 🎨 Professional, corporate design
- 📱 Fully responsive layout

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Clean, professional styling
- **localStorage** - Client-side data persistence

## Running Locally

1. Navigate to the react-app directory:
   ```bash
   cd react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
react-app/
├── src/
│   ├── App.jsx          # Main component with task logic
│   ├── App.css          # Professional styling
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
└── package.json
```

## Design

The app features a clean, professional design with:
- White card on purple gradient background
- Subtle animations and transitions
- Professional blue color scheme
- Clean typography with proper spacing
- Responsive design for all screen sizes
