<p align="center">
  <a href="" rel="noopener">
  <img width=200px height=200px src="https://raw.githubusercontent.com/Carljul/mlm-react/develop/src/assets/logo/icon.jpg" alt="Project logo"></a>
</p>

<h3 align="center">EPA</h3>

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/Carljul/mlm-react)](https://github.com/Carljul/mlm-react/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Carljul/mlm-react)](https://github.com/Carljul/mlm-react/pulls)

</div>

---

<p align="center"> EPA is a online store system
    <br> 
</p>

## 📝 Table of Contents

- [Setup](#setup)
- [Test Users](#testusers)
- [How to build app for android](#buildappandroid)

## 🧐 Setup <a name = "setup"></a>

Follow Process to setup in your local environment

### Prerequisites

1. Node
2. Android Studio
3. Text Editor
4. Ionic CLI
5. Capacitor CLI

### Installing

Clone Project and run the following command

```
npm run start
```
The command npm run start will deploy the project in web view

To deploy it in mobile
Add first the android project or the ios project
```
npx cap add android || npx cap add ios
```
Make sure the emulator is running and do this command. it will open the android studio
```
npx cap open android
```
If in android you need to press the play button icon to emulate it in a emulator

## 🧐 Test Users <a name = "testusers"></a>
| Username | Password |
| --------------- | --------------- |
| julcarllselma@gmail.com | testpassword |
| carljulamles@gmail.com | testpassword |

## 🧐 How to build app for Android<a name = "buildappandroid"></a>
Open android studio by running command
```
npx cap open android
```
In android studio menu select the Build and then select Build bundle(s) / APK(s) then select Build APK
At the bottom of your android studio open the Build tab with a hammer icon next to it.
You will see the process of android studio building the app to APK
A floating notification will popout at the right bottom of the screen tap the locate.
It will open a new window containing the app-debug.apk file. That is your apk file