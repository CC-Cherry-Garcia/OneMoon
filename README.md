# oneMoonReactNative

# init

## Getting started locally (for internal team members)

1. Run these commands:

```
$ brew install watchman
$ gem install cocoapods
$ git clone <git-repo>
$ cd <project-dir>

```

2. Add `team-provider-info.json` file to `amplify/` directory. (Get the file through Slack)
3. Run these commands:

```
$ amplify configure
$ amplify init
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use:
❯ dev
master
// Choose defaults for the rest of inital questions

$ yarn
$ cd ios && pod install && cd ..
```

4. Change the world with your awesome code!

## Tech used

- React Native
- AWS Amplify

## Apps used

- Visual Studio Code
- Xcode
- Android Studio
- Sketch
