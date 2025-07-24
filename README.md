# 🚀 DevOps CI/CD Pipeline - AWS EC2 Deployment

[![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazon-ec2&logoColor=white)](https://aws.amazon.com/ec2/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Apache](https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white)](https://httpd.apache.org/)
[![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![SSH](https://img.shields.io/badge/SSH-4D4D4D?style=for-the-badge&logo=openssh&logoColor=white)](https://www.openssh.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-326CE5?style=for-the-badge&logo=gitlab&logoColor=white)](https://about.gitlab.com/topics/ci-cd/)
[![Infrastructure](https://img.shields.io/badge/Infrastructure-FF6B35?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)

> **DevOps Project**: Automated CI/CD pipeline demonstrating Infrastructure as Code, continuous deployment, and cloud automation using GitHub Actions and AWS EC2.

## 📋 Table of Contents

- [🔧 DevOps Features](#-devops-features)
- [🏗️ Infrastructure](#️-infrastructure)
- [⚙️ CI/CD Pipeline](#️-cicd-pipeline)
- [🚀 Deployment Strategy](#-deployment-strategy)
- [📊 Monitoring & Observability](#-monitoring--observability)
- [🛠️ DevOps Tools](#️-devops-tools)
- [🔒 Security & Best Practices](#-security--best-practices)

## 🔧 DevOps Features

### 🚀 CI/CD Pipeline
- **Automated Deployment**: GitHub Actions triggers on push to main branch
- **Infrastructure Provisioning**: Automated Apache web server setup
- **Configuration Management**: Automated file deployment and permissions
- **Zero-Downtime Strategy**: Atomic file replacement during deployment

### 🏗️ Infrastructure as Code
- **Declarative Configuration**: YAML-based GitHub Actions workflow
- **Idempotent Operations**: Safe to run multiple times without side effects
- **Environment Consistency**: Same deployment process across environments
- **Version Control**: All infrastructure changes tracked in Git

### 🔒 Security & Compliance
- **SSH Key Authentication**: Secure server access using private keys
- **Least Privilege Access**: Minimal required permissions for deployment
- **Secrets Management**: GitHub Secrets for sensitive configuration
- **File Permissions**: Proper ownership and access controls

## 🏗️ Infrastructure

```
deploy-webapp-ec2/
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 ec2-deploy.yaml          # CI/CD pipeline configuration
├── 📁 src/
│   └── 📄 index.html                   # Main HTML file
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 📄 style.css                # Main stylesheet
│   ├── 📁 js/
│   │   └── 📄 main.js                  # JavaScript functionality
│   └── 📁 images/
│       └── 🖼️ me.jpeg                  # Profile image
├── 📄 .gitattributes                   # Git configuration
└── 📄 README.md                        # Project documentation
```

## ⚙️ CI/CD Pipeline

### Pipeline Architecture

```yaml
name: Deploy App to EC2
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
      - name: Deploy to EC2
      - name: Configure Infrastructure
```

### Pipeline Stages

1. **Source Control**: Code checkout from GitHub repository
2. **Build**: No build step required for static assets
3. **Deploy**: SSH-based file transfer to EC2 instance
4. **Configure**: Apache installation and configuration
5. **Verify**: Service health checks and permissions

## 🚀 Deployment Strategy

### AWS EC2 Setup

1. **Launch EC2 Instance**
   ```bash
   # Ubuntu 22.04 LTS recommended
   # t2.micro for testing, t3.small for production
   # Security group: Allow HTTP (80) and SSH (22)
   ```

2. **Configure Security Group**
   ```
   Type: HTTP, Port: 80, Source: 0.0.0.0/0
   Type: SSH, Port: 22, Source: Your IP
   ```

### GitHub Secrets Configuration

Navigate to your repository → Settings → Secrets and variables → Actions

**Required Secrets:**
```
EC2_SSH_KEY     # Private SSH key for EC2 access
HOST_DNS        # EC2 instance public DNS or IP
```

**Required Variables:**
```
EC2_USER        # EC2 username (ubuntu for Ubuntu instances)
TARGET_DIR      # Deployment directory (e.g., home)
```

### Deployment Process

1. **Automatic Deployment**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Manual Deployment**
   - Go to Actions tab in GitHub
   - Select "Deploy App to EC2" workflow
   - Click "Run workflow"

### Deployment Pipeline

```mermaid
graph LR
    A[Push to main] --> B[GitHub Actions]
    B --> C[Checkout Code]
    C --> D[Deploy to EC2]
    D --> E[Install Apache]
    E --> F[Copy Files]
    F --> G[Set Permissions]
    G --> H[Live Website]
```

## 📊 Monitoring & Observability

### Infrastructure Monitoring
```bash
# System Health Checks
sudo systemctl status apache2
sudo journalctl -u apache2 -f

# Resource Monitoring
htop
df -h
free -m

# Network Monitoring
ss -tulpn | grep :80
curl -I http://your-ec2-ip
```

### Log Management
```bash
# Apache Access Logs
sudo tail -f /var/log/apache2/access.log

# Apache Error Logs
sudo tail -f /var/log/apache2/error.log

# System Logs
sudo journalctl -xe
```

## 🛠️ DevOps Tools

### Cloud Infrastructure
- **AWS EC2**: Compute instances for hosting
- **Security Groups**: Network access control
- **SSH Key Pairs**: Secure authentication

### CI/CD Tools
- **GitHub Actions**: Automated deployment pipeline
- **SSH Deploy Action**: Secure file transfer
- **GitHub Secrets**: Credential management

### Server Management
- **Apache HTTP Server**: Production web server
- **Ubuntu 22.04 LTS**: Stable Linux distribution
- **systemd**: Service management
- **SSH**: Secure remote administration

## 🔒 Security & Best Practices

### Security Measures
- **SSH Key Authentication**: No password-based access
- **GitHub Secrets**: Encrypted credential storage
- **Least Privilege**: Minimal required permissions
- **Security Groups**: Network-level access control

### DevOps Best Practices
- **Infrastructure as Code**: All changes version controlled
- **Automated Deployment**: Consistent, repeatable deployments
- **Idempotent Operations**: Safe to run multiple times
- **Monitoring & Logging**: Comprehensive observability

### Operational Excellence
```bash
# Security Updates
sudo apt update && sudo apt upgrade -y

# Service Health
sudo systemctl is-active apache2

# Disk Space Monitoring
df -h /var/www/html
```

## 🔄 Pipeline Customization

### Environment Variables
```yaml
# GitHub Repository Variables
EC2_USER: ubuntu          # SSH username
TARGET_DIR: home         # Deployment directory

# GitHub Repository Secrets
EC2_SSH_KEY: |           # Private SSH key
  -----BEGIN OPENSSH PRIVATE KEY-----
  ...
  -----END OPENSSH PRIVATE KEY-----
HOST_DNS: 3.134.107.42   # EC2 public IP/DNS
```

### Workflow Customization
```yaml
# Add environment-specific deployments
strategy:
  matrix:
    environment: [staging, production]
    
# Add health checks
- name: Health Check
  run: curl -f http://${{ secrets.HOST_DNS }} || exit 1
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- 📧 Email: edith.sosu@example.com
- 💼 LinkedIn: [linkedin.com/in/edith-sosu](https://linkedin.com/in/edith-sosu)
- 🔗 GitHub: [github.com/edith-sosu](https://github.com/edith-sosu)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Edith Wendy Sosu*