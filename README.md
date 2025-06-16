# CV Application Builder

A modern, responsive CV/Resume builder application built with React. Create professional CVs by filling out intuitive forms and see a live preview as you type.

![CV Application](https://img.shields.io/badge/React-18.x-blue)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## 🚀 Features

- **Live Preview**: See your CV update in real-time as you fill out the forms
- **Three Main Sections**: Personal Information, Education, and Experience
- **Add/Edit/Delete**: Easily manage multiple education and work experience entries
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Print Ready**: Optimized print styles for generating PDFs
- **Modern UI**: Clean, professional design with smooth animations
- **Form Validation**: Input validation and placeholder text for better UX

## 📋 Sections

### Personal Information

- Full Name
- Email Address
- Phone Number
- Address/Location

### Education

- School/University Name
- Degree/Qualification
- Start and End Dates
- Location
- Add multiple education entries

### Experience

- Company Name
- Position/Job Title
- Start and End Dates
- Location
- Job Description
- Add multiple work experience entries

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features
- **Vite** - Fast build tool and development server

## 🏗️ Project Structure

```
CV-Application/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Main application styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── components/
│   ├── personalInfoForm.jsx # Personal information form
│   ├── educationForm.jsx    # Education form with CRUD operations
│   ├── experienceForm.jsx   # Experience form with CRUD operations
│   └── cv.jsx               # CV preview component
├── public/
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/txbish/cv-application.git
   cd cv-application
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

## 💡 How to Use

1. **Fill Personal Information**: Start by entering your basic contact details in the Personal Details section
2. **Add Education**: Click the "Add" button in the Education section to add your educational background
3. **Add Experience**: Click the "Add" button in the Experience section to add your work experience
4. **Edit Entries**: Click on any education or experience entry to edit it
5. **Delete Entries**: When editing an entry, use the "Delete" button to remove it
6. **Live Preview**: Watch your CV update in real-time on the right side
7. **Print/Save**: Use your browser's print function (Ctrl+P) to save as PDF

## 🎨 Design Features

- **Two-Column Layout**: Forms on the left, live preview on the right
- **Responsive Grid**: Automatically switches to single column on mobile
- **Smooth Animations**: Hover effects and transitions for better UX
- **Professional Styling**: Clean, modern design suitable for professional use
- **Print Optimization**: Special print styles for clean PDF generation

## 🔧 Customization

### Styling

- Modify `src/App.css` for component-specific styles
- Edit `src/index.css` for global styles and variables
- Color scheme uses CSS custom properties for easy theming

### Adding New Sections

1. Create a new form component in the `components/` directory
2. Add state management in `App.jsx`
3. Include the new section in the CV preview component
4. Add corresponding styles in `App.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum
- Inspired by modern CV/Resume builders
- Icons and design patterns from modern web applications

## 📞 Contact

Tabish Noman Khan - txbishkhxn@gmail.com

Project Link: [https://github.com/txbish/cv-application](https://github.com/txbish/cv-application)

---

**Made with ❤️ using React**
