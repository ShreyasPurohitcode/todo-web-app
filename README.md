# Todo App - React + Terraform on GCP

A professional todo list application built with React, demonstrating infrastructure-as-code deployment to Google Cloud Platform using Terraform.

## 🎯 Project Overview

This project showcases:
- **Frontend**: Modern React todo app with localStorage persistence
- **Infrastructure**: Automated deployment to GCP using Terraform
- **Hosting**: Static website hosting on Google Cloud Storage

## ✨ App Features

- ✅ Add, complete, and delete tasks
- 💾 Auto-save to localStorage (persists across sessions)
- 📊 Real-time completion counter
- 🎨 Professional, corporate design
- 📱 Fully responsive layout

## 🛠 Tech Stack

**Frontend:**
- React 19 with hooks
- Vite (build tool & dev server)
- CSS3 with modern styling

**Infrastructure:**
- Terraform
- Google Cloud Platform (GCP)
- Google Cloud Storage (static hosting)

## 📂 Project Structure

```
todo-web-app/
├── react-app/              # React application
│   ├── src/
│   │   ├── App.jsx        # Main component
│   │   ├── App.css        # Styling
│   │   └── index.css      # Global styles
│   └── package.json
├── main.tf                # Terraform configuration
├── variables.tf           # Input variables
├── outputs.tf             # Output values
└── terraform.tfvars.example
```

---

## 🚀 Quick Start - Local Development

### Prerequisites
- Node.js 20+ installed
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShreyasPurohitcode/todo-web-app.git
   cd todo-web-app
   ```

2. **Navigate to the React app:**
   ```bash
   cd react-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the dev server:**
   ```bash
   npm run dev
   ```

5. **Open:** http://localhost:5173

---

## ☁️ Deploy to GCP with Terraform

### Prerequisites
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
- [Terraform](https://www.terraform.io/downloads) installed
- GCP project with billing enabled
- Authenticated with GCP: `gcloud auth application-default login`

### Deployment Steps

#### 1. Build the React App

```bash
cd react-app
npm install
npm run build
cd ..
```

This creates a `react-app/dist/` folder with production-ready files.

#### 2. Configure Terraform

Create a `terraform.tfvars` file:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` with your values:

```hcl
project_id  = "your-gcp-project-id"
bucket_name = "your-globally-unique-bucket-name"
region      = "us-central1"  # optional
```

> **Note:** The bucket name must be globally unique across all of GCP.

#### 3. Initialize Terraform

```bash
terraform init
```

#### 4. Preview Changes

```bash
terraform plan
```

#### 5. Deploy

```bash
terraform apply
```

Type `yes` when prompted to confirm.

#### 6. Access Your Website

After deployment completes, Terraform will output the website URL:

```
website_url = "https://storage.googleapis.com/your-bucket-name/index.html"
```

Click the URL to view your deployed app! 🎉

---

## 🧹 Cleanup

To avoid GCP charges, destroy all resources when done:

```bash
terraform destroy
```

Type `yes` to confirm.

---

## 📖 What Gets Deployed

Terraform creates the following GCP resources:

1. **Google Cloud Storage Bucket**
   - Configured for static website hosting
   - Public read access for all users
   - Serves `index.html` as the main page

2. **Bucket IAM Permissions**
   - Grants `allUsers` the `roles/storage.objectViewer` role
   - Enables public access to website files

3. **Static Assets Upload**
   - Automatically uploads all files from `react-app/dist/`
   - Sets appropriate content types (HTML, CSS, JS, images)

## 🎨 Design Philosophy

The app features a clean, professional corporate design:
- White card on purple gradient background
- Subtle animations and transitions
- Professional blue accent color (#667eea)
- Responsive for all screen sizes

## 🔒 Security Notes

- The GCS bucket is publicly accessible (required for static hosting)
- No sensitive data should be stored in the app (uses only local storage)
- Configure appropriate IAM policies for production use

## 📝 License

MIT License - free to use for learning and portfolio projects!

---

**Made with ❤️ using React, Vite, and Terraform**
