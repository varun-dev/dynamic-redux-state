..work in progress

# Dynamic Redux State

This example demonstrates
- dynamic redux state paths
- how to use multiple instances of reducers
- usage of vslint, my other project for linting. Notice the scripts in package.json
- code spliting (..coming soon)

### Setup
```
$ npm install
$ npm start

--> http://localhost:8080

```

![image](https://user-images.githubusercontent.com/359805/42211232-ff19c702-7eaa-11e8-8678-8b328789334a.png)

The example uses Golden Layout as a window manager and consists of a panel called Counter. Add more instances of the Counter panel by dragging the label from left bar and notice the redux state changes. The dynamic path gets created and destroyed as we add and remove panels. This is achieved by extending functionality of redux connect API.

#### Pending todos
- code splitting example
- implement panel destroy for removing state and reducers


#### External refernces

https://github.com/andrewcapodieci/golden-layout-react-redux

https://github.com/erikras/multireducer
