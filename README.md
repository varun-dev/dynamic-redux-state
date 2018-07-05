..work in progress

# Dynamic Redux State

This example demonstrates how to
- implement dynamic redux state paths
- have multiple instances of reducers

Run `npm install`, then `npm run dev` and point your browser to `localhost:8080` to run the example.

The example uses Golden Layout as a window manager and consists of a panel called Counter.
One instance of this panel is already open on load. Add more instances of the Counter
panel by dragging the label from left bar and notice the redux state changes

- Every panel's state resides at path `panels.PanelName.ID`. This path gets created and destroyed as
we add and remove panels.
- The panel path is set in the react context for components to access their own states
- The panel path is also set in component's `ownProps` and redux actions for reducers to set the state
for the relevant panel. This is implemented by extending functionaliy of redux connect API.


![image](https://user-images.githubusercontent.com/359805/42211232-ff19c702-7eaa-11e8-8678-8b328789334a.png)


#### Pending todos
- implement panel destroy for removing state and reducers
- fix the warning on setState while dragging a new panel
- create an action for adding new panel
- fix mutation issue with dynamically adding state path 

#### External refernces
https://github.com/andrewcapodieci/golden-layout-react-redux
https://github.com/erikras/multireducer
