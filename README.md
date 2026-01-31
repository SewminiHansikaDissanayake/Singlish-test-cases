# SwiftTranslator Automation Testing Project

## Assignment 1 - IT3040 ITPM

This project contains automated tests for the SwiftTranslator (Singlish to Sinhala conversion) system using Playwright.

## Project Overview

- **Total Test Cases**: 35
  - Positive Functional Tests: 24
  - Negative Functional Tests: 10
  - UI Tests: 1

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation Instructions

### Step 1: Extract the Project
```bash
# Extract the zip file to your desired location
# Navigate to the project directory
cd assignment1_project
```

### Step 2: Install Dependencies
```bash
# Install all npm dependencies
npm install

# Install Playwright browsers
npx playwright install
```

This will install:
- Playwright test framework
- Chromium browser for testing

## Running the Tests

### Run All Tests (Headless Mode)
```bash
npm test
```

### Run Tests with Browser Visible
```bash
npm run test:headed
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```

### View Test Report
After running tests, view the HTML report:
```bash
npm run test:report
```

## Project Structure

```
assignment1_project/
├── tests/
│   └── translator.spec.js      # All test cases
├── playwright.config.js         # Playwright configuration
├── package.json                 # Project dependencies
├── README.md                    # This file
└── .gitignore                   # Git ignore file
```

## Test Coverage

The test suite covers the following categories:

### 1. Sentence Structures
- Simple sentences
- Compound sentences
- Complex sentences

### 2. Sentence Forms
- Interrogative (questions)
- Imperative (commands)
- Positive and negative forms

### 3. Daily Language Usage
- Greetings, requests, and responses
- Polite vs informal phrasing
- Frequently used expressions

### 4. Word Combinations
- Multi-word expressions
- Repeated words for emphasis
- Joined vs segmented variations

### 5. Grammatical Forms
- Tense variations (past, present, future)
- Negation patterns
- Singular/plural and pronoun variations

### 6. Input Length Variations
- Short inputs (≤30 characters)
- Medium inputs (31-299 characters)
- Long inputs (≥300 characters)

### 7. Mixed Language Content
- English technical/brand terms
- Place names and common English words
- Punctuation and formatting

### 8. Informal Language
- Slang and colloquial phrasing

### 9. UI Testing
- Real-time output updating

## Test Results

Test results are automatically generated in the `playwright-report` folder after each test run. The Excel file contains detailed results for each test case including:
- Test Case ID
- Input
- Expected Output
- Actual Output
- Pass/Fail Status
- Detailed justification

## Troubleshooting

### Issue: Tests fail to start
**Solution**: Ensure all dependencies are installed:
```bash
npm install
npx playwright install
```

### Issue: Browser doesn't open
**Solution**: Run with headed mode to see what's happening:
```bash
npm run test:headed
```

### Issue: Network timeout errors
**Solution**: Check your internet connection and try again. The tests require access to https://www.swifttranslator.com/

## Notes

- Tests run sequentially (not in parallel) to avoid overwhelming the translation service
- Each test includes a wait time to allow for real-time translation processing
- The system being tested may have limitations with extreme slang, joined words, and complex informal expressions

## Author Information

- **Course**: IT3040 - ITPM
- **Assignment**: Assignment 1
- **Semester**: Semester 1, Year 3

## Git Repository

The complete project is available in the Git repository (link provided separately in repository_link.txt).

## Support

For issues or questions:
1. Check the test report in `playwright-report`
2. Review the test code in `tests/translator.spec.js`
3. Ensure all prerequisites are correctly installed
IT23316140
