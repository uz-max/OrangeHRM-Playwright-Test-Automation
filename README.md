
# 🧪 OrangeHRM Playwright Automation Framework

## 📌 Project Name
**OrangeHRM Playwright Test Automation**

## 📄 Short Description

This project automates the functional testing of the [OrangeHRM Demo Application](https://opensource-demo.orangehrmlive.com/) using **Playwright with TypeScript**. It follows the **Page Object Model (POM)** design pattern to ensure scalability, maintainability, and reusability.  
It also integrates **AES encryption** to securely store login credentials, with support for CI/CD via **Azure DevOps Pipelines**.

## 🛠 Tech Stack

| Category          | Tools / Libraries                               |
|-------------------|--------------------------------------------------|
| Language          | TypeScript                                       |
| Automation Tool   | [Playwright](https://playwright.dev/)           |
| Test Runner       | `@playwright/test`                               |
| Framework Design  | Page Object Model (POM)                          |
| CI/CD             | Azure DevOps                                     |
| Version Control   | Git, GitHub                                      |
| Security          | AES Encryption, dotenv                           |
| Reporting         | JUnit (Azure), HTML Reports (Playwright)        |
| Notifications     | MS Teams (Optional)                              |
| Environment       | Node.js, Cross-Browser Testing                   |

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/uzair-qa/OrangeHRM-Playwright-Test-Automation.git
   cd OrangeHRM-Playwright-Test-Automation
   ```

2. **Install dependencies**
   ```cmd
   npm install
   ```

3. **Set the secret key (for decrypting credentials)**
   - Choose any key of your choice and set it in your terminal session:
     ```cmd
     set SECRET_KEY="your_secret_key_here"          # For Windows CMD
     export SECRET_KEY="your_secret_key_here"       # For Linux/Mac/PowerShell
     ```

4. **Run the test command (custom npm script for your encrypted key)**
   - Use the command associated with the encrypted credentials (defined in `package.json`):
     ```bash
     npm run your_key_name
     ```
   - Example:
     ```bash
     npm run test_demo_cr_hl
     ```

## 🧪 How to Run Tests

- **Run test suite using encrypted credentials**
  ```bash
  set SECRET_KEY="your_key" && npm run your_encrypted_key
  ```

- **Show HTML Report**
  ```bash
  npx playwright show-report
  ```

## 🔄 CI/CD Pipeline

This framework supports **Azure DevOps Pipelines**:

- **Triggers:** Push to `main` or feature branches
- **Steps:**
  - Install dependencies
  - Set environment variable `SECRET_KEY`
  - Run encrypted test suite via `npm run <key>`
  - Publish JUnit test results
  - (Optional) Send results to MS Teams

📄 Azure pipeline config: `azure-pipelines.yml`

## 📁 Folder Structure

```
├── tests/                  # Test specs
│   ├── login.spec.ts
│   └── dashboard.spec.ts
├── pages/                  # Page Object files
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── PimPage.ts
├── utils/                  # Helper functions (e.g., decrypt)
├── .env                    # Environment config (if used)
├── playwright.config.ts    # Global Playwright config
├── azure-pipelines.yml     # Azure DevOps CI config
├── package.json            # Scripts and dependencies
└── README.md               # Documentation
```

## 👤 Author Info

**Uzair Khan**  
GitHub: [@uzair-qa](https://github.com/uzair-qa/OrangeHRM-Playwright-Test-Automation.git)

## ⚠️ Special Notes

- Target App: [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)
- Credentials are AES-encrypted and stored securely.
- Requires setting `SECRET_KEY` locally or in CI to decrypt credentials.
- Supported Browsers: Chromium, Firefox, WebKit
