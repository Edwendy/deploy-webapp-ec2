# DevOps Portfolio - EC2 Deployment

A professional portfolio website for a DevOps Engineer, deployed to AWS EC2 using GitHub Actions.

## Project Structure

```
deploy-webapp-ec2/
├── .github/
│   └── workflows/
│       └── ec2-deploy.yaml     # GitHub Actions deployment workflow
├── src/
│   └── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css           # Stylesheet
│   └── images/
│       └── me.jpeg             # Profile image
├── .gitattributes
└── README.md
```

## Features

- Responsive portfolio design
- Professional DevOps engineer showcase
- Animated UI elements
- Mobile-friendly layout
- Automated deployment to EC2

## Deployment

The application is automatically deployed to EC2 when changes are pushed to the main branch using GitHub Actions.

### Prerequisites

- AWS EC2 instance
- GitHub repository secrets configured:
  - `EC2_SSH_KEY`: Private SSH key for EC2 access
  - `HOST_DNS`: EC2 instance public DNS/IP
- GitHub repository variables:
  - `EC2_USER`: EC2 username (e.g., ubuntu)
  - `TARGET_DIR`: Target directory on EC2 (e.g., home)

### Local Development

1. Clone the repository
2. Open `src/index.html` in a web browser
3. Make changes to files in `src/` and `assets/` directories
4. Push to main branch to trigger deployment

## Technologies Used

- HTML5
- CSS3 (with animations and gradients)
- GitHub Actions
- AWS EC2
- Apache Web Server