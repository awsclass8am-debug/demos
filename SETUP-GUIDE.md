# Helpalot Academy – Complete Setup Guide

## Default Admin Login
- **Email:** admin@helpalot.help  
- **Password:** admin123

---

## Step 1 – Firebase Console Setup

### 1a. Enable Authentication
1. Go to https://console.firebase.google.com → Your project → **Build → Authentication**
2. Click **Get Started** → **Email/Password** → Enable → Save

### 1b. Create Firestore Database
1. Go to **Build → Firestore Database**
2. Click **Create database** → Start in **Test mode** (or Production mode)
3. Choose your region → Done

### 1c. Set Firestore Rules
1. In Firestore → Click the **Rules** tab
2. Copy everything from `firestore.rules` file in this folder
3. Paste it → Click **Publish**

---

## Step 2 – Create Admin Account

1. Open `Helpalot-Academy-Admin-Login.html` in your browser
2. The email and password are pre-filled as `admin@helpalot.help` / `admin123`
3. Click **"Create Admin Account (First Time Only)"**
4. You'll see a success message
5. Now click **"Login to Admin Dashboard"**

> ⚠️ Do this ONLY ONCE. After the account exists, just use Login.

---

## Step 3 – Host the Website

Upload all files to any hosting service:

### Option A – Firebase Hosting (Recommended, Free)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # select your project, set public dir to "."
firebase deploy
```

### Option B – Netlify (Free)
1. Go to https://netlify.com
2. Drag & drop the entire website folder

### Option C – Hostinger / cPanel
1. Upload all files via File Manager or FTP
2. Extract to `public_html`

---

## Page List & URLs

| Page | File | Who uses it |
|------|------|-------------|
| Landing Page | `Helpalot-Academy.html` | Everyone |
| All Programs | `Helpalot-Academy-Programs.html` | Everyone |
| Blogs | `Helpalot-Academy-Blogs.html` | Everyone |
| Student Register | `Helpalot-Academy-Register.html` | New students |
| Student Login | `Helpalot-Academy-Login.html` | Students |
| Student Dashboard | `Helpalot-Academy-Dashboard.html` | Approved students |
| Admin Login | `Helpalot-Academy-Admin-Login.html` | Admin only |
| Admin Dashboard | `Helpalot-Academy-Admin.html` | Admin only |
| Trainer Dashboard | `Helpalot-Academy-Trainer.html` | Trainers |
| Certificate View | `Helpalot-Academy-Certificate.html?id=CERT_ID` | Public (for verification) |

---

## How the System Works

### Student Flow:
1. Student visits `Helpalot-Academy-Register.html` → fills form → submits
2. Admin sees them in **Pending Applications** → Clicks **Accept**
3. Student gets approved → Can now login via `Helpalot-Academy-Login.html`
4. Student accesses dashboard → sees today's class, tasks, content, leaderboard

### Admin Flow (admin@helpalot.help / admin123):
- **Students tab** → View / approve / reject registrations
- **Assignments tab** → Assign tasks to all or specific students
- **Learning Content tab** → Add YouTube / PDF / Drive links
- **Classes/Meetings tab** → Schedule daily 7PM class with link
- **Submissions tab** → View all student task submissions
- **Certificates tab** → Issue certificates to completed students
- **Support Tickets tab** → Resolve student support issues
- **Trainers tab** → Add trainer accounts

### Trainer Flow:
1. Admin adds trainer email in **Trainers tab**
2. Trainer creates Firebase account (via Register page or Firebase Console)
3. Trainer logs in at `Helpalot-Academy-Trainer.html`
4. Can schedule classes, upload content, assign tasks, mark attendance, review submissions

---

## Firestore Collections Created Automatically

| Collection | Purpose |
|-----------|---------|
| `students` | All student profiles + status (pending/approved/rejected) |
| `tasks` | Assignments created by admin/trainer |
| `content` | Learning materials (videos, PDFs, links) |
| `meetings` | Scheduled live class sessions |
| `submissions` | Student task submissions |
| `announcements` | Notices posted to all students |
| `certificates` | Issued certificates with unique cert numbers |
| `courses` | Course/program listings |
| `trainers` | Trainer profiles |
| `attendance` | Daily attendance records |
| `tickets` | Student support tickets |

---

## Helpalot Skill Score

Currently initialized to `0` on registration. To auto-calculate, update the student's `skillScore` field in Firestore:

**Formula (suggested):**
```
Skill Score = 
  (Attendance % × 3) +           // max 300
  (Tasks completed × 10) +       // max 300
  (Project score × 2) +          // max 200
  Mentor feedback score           // max 200
= max 1000
```

You can update this manually via the Admin Dashboard or build a Cloud Function to calculate it automatically.

---

## Custom Domain

After hosting, to use `academy.helpalot.help`:
1. Go to your domain registrar → Add CNAME record pointing to your hosting
2. In Firebase Hosting → Add Custom Domain → Follow steps

---

## Support

Contact: academy@helpalot.help

---
*Built with Firebase + Bootstrap + Helpalot Design System*  
*© 2025 Helpalot Academy*
