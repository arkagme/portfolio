---
title: Inbox Insight
description: Email deliverability analyzer that tests how campaigns land across inbox, promotions, or spam.
date: 2025-10-15
tags: ["nodejs", "react", "mongodb", "aws", "email", "analytics"]
repoLink: "https://github.com/arkagme/email-spam-backend"
liveLink: "https://email.arkagme.me/"
featured: true
pinned: true
stars: 0
contributors: 0
---

# Inbox Insight

**Inbox Insight** is an email deliverability analyzer that helps marketers understand where their campaigns actually land—Inbox, Promotions, or Spam—across multiple providers.

## Features

- **Inbox Placement Tests**: Generates unique test addresses and tracks folder placement for each send.
- **Automated Folder Detection**: Detects whether messages land in Primary, Promotions, Updates, or Spam.
- **Real-time Monitoring**: REST APIs that poll and aggregate results, producing shareable reports in under two minutes.
- **Notification System**: Sends email updates when a test run completes or when deliverability drops below a threshold.
- **Web Dashboard**: React-based UI to configure tests, view results, and export reports.

## Tech Stack

- Node.js / Express (backend, polling workers, REST APIs)
- MongoDB (test runs, results, accounts)
- React.js + Tailwind CSS (frontend dashboard)
- AWS EC2 (backend hosting)
- Nginx (reverse proxy and SSL termination)
- Netlify (frontend hosting)
