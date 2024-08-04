# My Portfolio 🌟

Welcome to my portfolio! This is a dynamic website built using React.js and Node.js to showcase my professional journey, skills, projects, and more. Explore the various sections to learn more about me and my work. 

## 🌐 Live Example
Check out the live version of the portfolio [here](https://your-github-username.github.io/).

## 📚 Sections
- **Summary and About Me** ✨
- **Skills** 🛠️
- **Open Source Projects** 🌟 (Connected with GitHub)
- **Experience** 💼
- **Certifications** 🏆
- **Blogs** ✍️
- **Education** 🎓
- **Contact Me** 📧

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShivamKSah/my-portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd my-portfolio
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```
   The website will open locally on your browser.

## ✏️ Customize Your Portfolio

### Personal Information
Edit the `src/portfolio.js` file to update personal information, experience, education, social media links, certifications, blog information, and contact details.

### Change Icons
1. Visit [Iconify](https://icon-sets.iconify.design/) to find the icon you need.
2. Replace the `fontAwesomeClassName` attribute with the selected icon's name in the `src/portfolio.js` file.

### Use Custom Images
1. Add your image files to the `public/skills` folder.
2. Update the `imageSrc` attribute in the `src/portfolio.js` file and remove or leave the `fontAwesomeClassName` attribute empty.

### Fetch GitHub Information
1. Create a `.env` file in the main directory:
   ```plaintext
   GITHUB_TOKEN=your_token
   GITHUB_USERNAME=your_username
   ```
2. Run the data fetcher:
   ```bash
   node git_data_fetcher.mjs
   ```

## 🌈 Choose a Theme
Edit the `src/theme.js` file to select a color theme:
```javascript
export const chosenTheme = blueTheme;
```

## 🛠 Deployment
1. **Generate a production build:**
   ```bash
   npm run build
   ```
2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact
For any inquiries, please reach out via the contact form on my portfolio website.

---

Happy coding! 🚀
