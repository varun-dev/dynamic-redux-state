import GoldenLayout from 'golden-layout'
import {Provider} from 'react-redux'
import {IncrementButtonContainer} from './IncrementButton'
import {DecrementButtonContainer} from './DecrementButton'
import {TestComponentContainer} from './TestComponent'

class MenuItem extends React.Component {
    componentDidMount () {
        this.props.afterMount(this.dom)
    }

    render () {
        return <li ref={el => this.dom = el}>{this.props.children}</li>
    }
}

class GoldenLayoutWrapper extends React.Component {
    componentDidMount() {
        // Build basic golden-layout config
        const config = {
            content: [{
                type: 'row',
                content: [{
                    type: 'react-component',
                    component: 'TestComponentContainer',
                },{
                    type: 'react-component',
                    component: 'IncrementButtonContainer'
                },{
                    type: 'react-component',
                    component: 'DecrementButtonContainer'
                },
                {
                    type:'component',
                    componentName: 'example',
                    componentState: { text: 'Component 1' }
                }]
            }]
        }

        function wrapComponent(Component, store) {
            class Wrapped extends React.Component {
                render() {
                    return (
                        <Provider store={store}>
                            <Component {...this.props}/>
                        </Provider>
                    )
                }
            }
            return Wrapped
        }

        var layout = new GoldenLayout(config, this.layout)
        layout.registerComponent('IncrementButtonContainer', 
                                 wrapComponent(IncrementButtonContainer, this.context.store)
        )
        layout.registerComponent('DecrementButtonContainer',
                                 wrapComponent(DecrementButtonContainer, this.context.store)
        )
        layout.registerComponent('TestComponentContainer',
                                 wrapComponent(TestComponentContainer, this.context.store)
        )
        layout.registerComponent( 'example', function( container, state ){
            container.getElement().html( '<h2>' + state.text + '</h2>')
        })

        layout.init()

        window.addEventListener('resize', () => {
            layout.updateSize()
        })

        const afterMount = (title, text) => element => {
            const newItemConfig = {
                title,
                type: 'component',
                componentName: 'example',
                componentState: { text }
            }

            layout.createDragSource( element, newItemConfig )
        }

        ReactDOM.render(<MenuItem afterMount={afterMount('Title', 'Text')} title='Title'>text</MenuItem>, this.menu)
    }

    render() {
        return (
            <div>
                <ul id="menuContainer" ref={el => this.menu = el}></ul>
                <div id='layoutContainer' ref={el => this.layout = el}/>
            </div>
        )
    }
}

// ContextTypes must be defined in order to pass the redux store to exist in
// "this.context". The redux store is given to GoldenLayoutWrapper from its
// surrounding <Provider> in index.jsx.
GoldenLayoutWrapper.contextTypes = {
    store: React.PropTypes.object.isRequired
}


export default GoldenLayoutWrapper
