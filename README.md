# Lineage2RTool
This is a tool to help with grinding in Lineage 2 : Revolution.

For now, I have build only for Android. (in the folder release)

Mobile version is made with React-Native, desktop will be made with React + Electron.

Appendix are more for the dev than anything, not related to the app itself.

(I know the Icon is not the most original thing. It's something I made in 3 minutes so give me a break on that one)

If you want to add something not listed on this readme, just fork, make it, then create a pull request.

I hope that this project could make things easier for everyone in the community, so I'll be glad if some people bring out new ideas. If you can't code, just create an issue.

## Features
- [X] Monster Codex Search
  You can search for a specific codex using the name, location, etc. You will get all the info on the codex(es) that fit the criteria.
- [X] Exp Grind Calculator
  Allows to calculate how much time it would take to get to the next level with your current level, % exp and a exp made in X second.
  Example => level : 120, exp% : 56.54, Exp made in : 100, seconds : 5. That would take 23h 43m 10s to reach the next level.
- [X] Shortcut to websites
  You can access 4 websites related to the game (2 from wich I took the data to do the previous features), namely ; PlayL2R, L2R Fansite, The official Forum and Reddit.
- [ ] Internalization with [react-i18next](https://react.i18next.com/).
- [ ] Skill information depending on class and race
- [ ] Info about equipement, ressources needed for upgrade, etc.

## To do (that is not a feature)
- [ ] Better Navigations, better graphics, better icon
- [ ] Desktop Application

## Supported version of devices:
[Readme of React-Native](https://github.com/facebook/react-native)
- Android 4.1 (API 16)
- Apple iOS 8.0.

Desktop :
Should run on anything Microsoft/Apple/Linux with a GUI, it's made with Electron (If you don't know what is a GUI, you have it :)).


## Appendix A => node_modules fixes :
### react-native-progress:
#### Fix 1
change :

{formatText(progressValue)}

in line 187 at Circle.js (node_modules\react-native-progress\Circle.js) to :

{progress ? formatText(progress._value) : this.forceUpdate()}
