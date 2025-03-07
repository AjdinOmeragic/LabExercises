# Web Development Course

This repository contains notes for the Web Development Course

---

## 1. Core Web Concepts Week 1

NOTES: Yooo Test branches are cool they show up in Github

### Full-Stack Overview

- **Frontend:**
  - Technologies: HTML (structure), CSS (style/layout), JavaScript (interactivity).
  - Frameworks: Bootstrap (responsive, mobile-first design).
  - Role: Handles everything the user sees and interacts with.
- **Backend:**
  - Technologies: Server-side languages (PHP, Node.js, Python, etc.) and databases (MySQL, PostgreSQL, etc.).
  - Role: Manages server logic, dynamic content, data processing, and storage.
- **Full-Stack:**
  - Combines both frontend and backend skills for complete application development.

### Web Fundamentals & Networking

- **Internet vs. Web:**
  - **Internet:** Global network of interconnected devices.
  - **Web:** Collection of interlinked documents and applications accessible via browsers.
- **Key Terms:**
  - **URL (Uniform Resource Locator):** Address used to locate resources on the Internet.
  - **IP (Internet Protocol) Address:** Unique identifier for devices (IPv4, IPv6).
  - **DNS (Domain Name System):** Translates domain names (e.g., google.com) into IP addresses.
  - **HTTP (HyperText Transfer Protocol) & HTTPS (HTTP Secure):** Protocols for data communication; HTTPS uses SSL/TLS encryption for security.
  - **SSL (Secure Socket Layer) / TLS (Transport Layer Security):** Protocols for encrypting data between browsers and servers.
  - **Ports:** Virtual endpoints (e.g., 8080) that organize network communication.
- **Request-Response Cycle:**
  - The browser sends a request (using methods like GET, POST, PUT, DELETE), and the server responds with the requested data.

---

## 2. Development Environment & Tools

### Local Server & XAMPP

- **XAMPP:**
  - A local server environment that simplifies development by bundling:
    - **X:** Cross-Platform support (Windows, Linux, macOS).
    - **A:** Apache web server (handles HTTP requests).
    - **M:** MySQL database (stores application data).
    - **P:** PHP (server-side scripting for dynamic content).
    - **P:** Perl (scripting for additional functionality).
  - **Usage:** Start Apache via the XAMPP control panel and verify setup by accessing `localhost/dashboard/`.

### Version Control & Collaboration

- **Git:**
  - A version control system to track changes, manage code history, support branching, and collaborate.
- **GitHub:**
  - A cloud platform for hosting Git repositories, managing code, and collaborating with team members.
- **Basic Git Commands:**
  - `git init` – initialize a repository.
  - `git add .` – stage changes.
  - `git commit -m "message"` – commit changes.
  - `git push origin main` / `git pull` – synchronize with remote repositories.

---

## 3. Practical Implementation: HTML, CSS, JavaScript & Bootstrap

### HTML & CSS Essentials

- **HTML:**
  - Fundamental elements include headings, paragraphs, links, and images.
- **CSS:**
  - Methods: Inline, internal, and external stylesheets.
  - **Selectors & Specificity:**
    - Inline Styles (style="") → 1000 points
    - ID Selector (#id) → 100 points
    - Class, Attribute, Pseudo-class → 10 points
    - Element Selector (div, p, h1) → 1 point
    - Universal Selector (\*) → 0 points

### JavaScript Basics

- **Usage:**
  - Adds dynamic behavior and interactivity.
- **Key Concepts:**
  - Variable declarations (`var`, `let`, `const`), data types (primitive and non-primitive), functions, events (click, mouseover, key events), and DOM manipulation.
- **Inclusion:**
  - Can be added inline, via `<script>` tags, or by linking an external JavaScript file.

### Bootstrap Framework

- **Features:**
  - Provides predesigned UI components and a flexible grid system for responsive design.
- **Considerations:**
  - While offering rapid development, customization may be needed to avoid a generic look.

### Static vs. Dynamic Websites

- **Static Websites:**
  - Fixed content using HTML, CSS, and JavaScript.
- **Dynamic Websites (Web Apps):**
  - Generate interactive content on the fly using server-side processing.
