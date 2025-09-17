
# Cordova iOS 8 Beta Environment

## About
This project was created as a baseline test environment to validate **Swift Package Manager (SPM)** support in **Cordova iOS 8 (beta)**.  
The goal is to provide a reproducible setup for builds, experiments, and continuous integration.

---

## Acceptance Criteria
- Cordova iOS 8 beta project created and configured successfully.  
- Build of **CordovaLib** works.  
- Project opens and runs in **Xcode** and **iOS Simulator**.  
- Install/run steps are documented for reproducibility.  

---

## Prerequisites
Before starting, make sure you have installed:

- **Node.js** (>= 18.x recommended)  
- **npm** (comes with Node.js)  
- **Xcode** (>= 15.x with iOS Simulator configured)  
- **CocoaPods** (if required by some plugins)  
- **Git**

Check versions:
```bash
node -v
npm -v
xcodebuild -version
git --version
```

---

## Install Cordova CLI
Install Cordova globally:
```bash
npm install -g cordova
```

Verify installation:
```bash
cordova -v
```

---


## Steps Executed in This Test

### Create the project
Create a new Cordova project:
```bash
cordova create cordova-spm-test
cd cordova-spm-test
```

---

### Add iOS 8 (beta) platform
Add the **8.0 beta** iOS platform:

```bash
cordova platform add ios@8.0.0-beta.1-nightly.20250918002324098.sha.91124d18
```

> **Note:** We are using a nightly version of Cordova iOS 8 because the beta version was not installing plugin dependencies correctly.

Check installed platforms:
```bash
cordova platform ls
```

---

### Run in Xcode / iOS Simulator
1. Open the workspace in Xcode:
   ```bash
   open platforms/ios/App.xcworkspace
   ```
2. Select a simulator (e.g., **iPhone 16 Pro**).  
3. Click **Run**.
