---
title: Dynamic QR Tool
description: Dynamic QR code generator with analytics, user profiles, and logo customization.
date: 2025-06-01
tags: ["nodejs", "react", "postgresql", "aws", "azure", "nginx", "oauth"]
repoLink: "https://github.com/arkagme/dynamicqr_backend"
liveLink: "https://qr.arkagme.me/"
featured: false
pinned: false
stars: 0
contributors: 0
---

# Dynamic QR Tool

**Dynamic QR Tool** is a production-ready QR platform that lets users create, manage, and track dynamic QR codes with rich analytics and branding.

## Features

- **Dynamic QR Codes**: Create QR codes that can be redirected to new URLs without re-printing.
- **User Profiles & Auth**: Google OAuth login, user dashboards, and per-user QR management.
- **Analytics & Tracking**: Request-level logging with daily request counts, referrers, and device breakdowns (300+ daily requests in production).
- **Custom Branding**: Upload logos and customize QR appearance, served via CDN.
- **Production Deployment**: Hardened deployment with rate limiting, SSL, and custom domain routing.

## Tech Stack

- Node.js / Express (REST APIs, analytics pipeline)
- PostgreSQL (users, QR codes, events)
- React.js + Tailwind CSS (dashboard UI, Figma-based design implementation)
- Azure VM (primary hosting)
- AWS EC2 + AWS RDS (earlier deployments and DB hosting)
- Nginx (reverse proxy, rate limiting, SSL)
- CDN / object storage for logo assets
