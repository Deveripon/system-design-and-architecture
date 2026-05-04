# Contributing to System Design Mastery

First off, thank you for considering contributing to System Design Mastery! It's people like you that make open-source such a great community.

## 🧠 How Can I Contribute?

### 1. Adding/Improving Content
The core of this platform is its educational content. You can contribute by:
- Adding new system design topics or case studies (e.g., "Designing Uber").
- Improving the Bengali/English explanations in `lib/course-data.ts`.
- Adding new MCQs, assignments, or architectural diagrams to the topic pages.

### 2. UI & Frontend Development
- Fixing bugs or responsiveness issues.
- Adding new UI components. **Important:** Any new UI must strictly adhere to the project's aesthetic. Please read the [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) before making styling decisions.

### 3. Reporting Bugs
If you find a bug, please open an issue on GitHub. Include:
- A clear description of the bug.
- Steps to reproduce the behavior.
- Expected behavior.
- Screenshots (if applicable).

---

## 🛠 Development Workflow

### 1. Fork & Clone
Fork the repository to your own GitHub account and clone it to your local machine:
```bash
git clone https://github.com/YOUR-USERNAME/system-design-and-architecture.git
cd system-design-and-architecture
```

### 2. Create a Branch
Create a new branch for your feature or bugfix. Use a descriptive name:
```bash
git checkout -b feature/add-new-topic
# or
git checkout -b fix/header-alignment
```

### 3. Make Changes
Make your changes in your local environment. Run the development server to verify everything looks good:
```bash
pnpm dev
```

### 4. Commit Standards
We follow [Conventional Commits](https://www.conventionalcommits.org/). Please format your commit messages accordingly:
- `feat: added new load balancing topic`
- `fix: resolved alignment issue in topic header`
- `docs: updated readme with new instructions`
- `style: updated ghost button border colors`

### 5. Submit a Pull Request
Push your branch to your fork and submit a Pull Request against the `main` branch of the original repository. 
- Provide a clear PR description explaining the "why" and "what" of your changes.
- If it's a UI change, attach "Before" and "After" screenshots in light and dark mode.

---

## 🎨 UI & Design Rules
Before submitting a PR that alters the UI, please ensure you have read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). 
- Do not use rounded corners.
- Use `font-mono` for technical data.
- Ensure your components support `dark:` tailwind variants.

Thank you for helping us build the best system design learning platform!
