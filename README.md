# ReactNative

## (6/17/2020, Jae)
tab added on welcome screen

### installation of dependencies
npm install @react-navigation/native

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save

npm install @react-navigation/material-top-tabs react-native-tab-view

npm install @react-navigation/stack --save

### Note: I had this annoying issue, but couldn't figure it out.
ERROR
17:15
Error: Problem validating asset fields in app.json. See https://docs.expo.io/
 • Field: splash.image - cannot access file at './assets/splash.png'.
 • Field: icon - cannot access file at './assets/icon.png'.

So, I googled it and found a temporary solution.
I have to type the following (npm start not working)
expo r -c

### (6/18/2020, Jae) error fixed
