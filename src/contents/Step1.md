---
title: Getting Started with SolidStart Blog
pubDate: 2024-12-21
description: A guide to setting up and developing a blog with SolidStart and TailwindCSS
tags: ["solidstart", "tutorial", "tailwindcss"]
categories: ["development"]
---

# Getting Started with SolidStart Blog

This guide will walk you through setting up and developing a blog using SolidStart and TailwindCSS.

## Project Setup

First, create a new SolidStart project:

```bash
npm init solid@latest my-blog
cd my-blog
npm install
```

## Key Dependencies

Our blog uses several important packages:

- `@solidjs/start` - The SolidStart framework
- 

tailwindcss

 - For styling
- 

vite-plugin-markdown

 - For markdown processing
- 

unified

, `remark`, `rehype` - For markdown transformation

## Development

Run the development server:

```bash
npm run dev
```

The site will be available at http://localhost:3000

## Project Structure

- 

routes

 - Page components
- 

components

 - Reusable components
- 

contents

 - Markdown blog posts
- 

app.css

 - Global styles
- 

tailwind.config.cjs

 - Tailwind configuration

## Building for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Key Features

- Markdown blog post support
- TailwindCSS styling
- File-based routing
- Server-side rendering