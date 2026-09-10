# CSE Undergraduate Portfolio Website

A single-page personal portfolio website built with:

- HTML
- CSS
- Vanilla JavaScript

No framework or build system is required.

---

## 1. Folder Structure

```text
cse-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── Isuru-Sithum-CV.pdf        ← Put your CV here
    │
    └── images/
        ├── profile.jpg            ← Put your main profile photo here
        ├── profile-placeholder.svg
        │
        └── projects/
            ├── academic-tracker.jpg
            ├── travel-journal.jpg
            ├── ai-chatbot.jpg
            └── project-placeholder.svg
```

---

# 2. How to Open the Website

You can simply double-click `index.html`.

For development, it is recommended to open the folder using Visual Studio Code and use the **Live Server** extension.

---

# 3. Changing Your Main Profile Image

Put your image inside:

```text
assets/images/
```

Name it:

```text
profile.jpg
```

If you want another file name, change this line in `index.html`:

```html
<img src="assets/images/profile.jpg">
```

Recommended image:
- Portrait orientation
- At least 800px high
- JPG or PNG

---

# 4. Adding Project Cover Images

Put all project cover images inside:

```text
assets/images/projects/
```

Example:

```text
assets/images/projects/my-project.jpg
```

Then open `script.js` and add the same file path to the project's `image` property.

Example:

```javascript
image: "assets/images/projects/my-project.jpg"
```

---

# 5. Adding a New Project

Open `script.js`.

Find:

```javascript
const projects = [
```

Add another project object inside the square brackets:

```javascript
{
  title: "My New Project",
  description: "A short explanation of what this project does.",
  image: "assets/images/projects/my-project.jpg",
  fallback: "assets/images/projects/project-placeholder.svg",
  tags: ["HTML", "CSS", "JavaScript"],
  url: "https://github.com/your-username/your-project"
}
```

IMPORTANT: Put a comma after the previous project object.

---

# 6. Removing a Project

Open `script.js`.

Inside the `projects` array, delete the complete project object.

For example:

```javascript
{
  title: "AI Chatbot",
  ...
}
```

After deleting it, refresh the website.

The website automatically updates because projects are generated using JavaScript.

---

# 7. Editing Personal Details

Most personal information is in `index.html`.

You should edit:

- Name
- Education
- Location
- Email
- Phone number
- About Me text
- Social media links
- Contact details

Use the browser's Find function and search for:

```text
your-email@example.com
```

to quickly find the email placeholders.

---

# 8. Editing Skills

Skills are stored in `script.js`.

Find:

```javascript
const skills = [
```

Each skill has this structure:

```javascript
{
  icon: "⌘",
  title: "Programming Languages",
  text: "Python, Java, C, JavaScript"
}
```

You can add, remove or edit these objects.

---

# 9. Adding Your CV

Put your CV inside:

```text
assets/
```

Name it:

```text
Isuru-Sithum-CV.pdf
```

The Download CV button will then automatically download it.

If you use another filename, edit this line in `index.html`:

```html
<a href="assets/Isuru-Sithum-CV.pdf" download>
```

---

# 10. Important: Contact Form

The current contact form is a visual front-end form.

It does NOT send real emails yet.

Later you can connect it to one of these:

- Formspree
- EmailJS
- Your own backend
- Firebase

This can be added when you are ready to work on the functionality.

---

# 11. Recommended Editing Workflow

1. Open the folder in VS Code.
2. Run the website with Live Server.
3. Replace placeholder images.
4. Edit your personal information in `index.html`.
5. Edit skills and projects in `script.js`.
6. Edit visual styling in `style.css`.

---

## Main Files

| File | Purpose |
|---|---|
| `index.html` | Website structure and personal information |
| `style.css` | Complete visual design and responsive layout |
| `script.js` | Skills, projects, navigation and interactions |
| `assets/images/` | Your main profile image |
| `assets/images/projects/` | Project cover images |

---

You can freely edit and expand this portfolio.


## Updated contact section

The contact section is now details-only. It does not use a message form or backend service.

- Email opens the visitor's email application.
- Phone is clickable on supported devices.
- GitHub and LinkedIn open your profiles.
- Location is displayed as information.

The HTML, CSS and JavaScript were restored from the original portfolio package, then only the contact section and your current personal details/metadata were updated.
