import React, { useState } from 'react'
import Accordion from './components/Acoordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'
import Modal from './components/modal/Modal'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end js framework'
    },
    {
        title: 'Why React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components and integrating them'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

const App = () => {

    const [selected,setSelected] = useState(options[0])
    const [modalState, setModalState] = useState(false)

    return (
        <div className="ui main container">
            <div className="ui segment">
                <Header />
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <Dropdown 
                        label="Select a color"
                        options={options} 
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                </Route>
                <Route path="/translate">
                    <h3>This option is only available in localhost at port 3000, for Google's API restrictions</h3>
                    <Translate />
                </Route>
                <Route path="/modal">
                    <div className="ui segment">

                        { modalState ? <Modal closeModal={setModalState} /> :

                            <div className="ui two column very grid">
                                <div className="column" style={{width:"30%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                    
                                    <img src={window.location.origin + '/img/molly.png'} 
                                        alt="Filler" 
                                        style={{width:"80%"}}
                                    />
                                </div>
                                <div className="column" style={{width:"70%"}}>
                                    <h2>Section One</h2>
                                    <img src={window.location.origin + '/img/fillerPlain.png'} alt="Filler" width="100%" />

                                    <h2>Section Two</h2>
                                    <img src={window.location.origin + '/img/fillerPlain.png'} alt="Filler" width="100%"/>

                                    <h2>Section Three</h2>
                                    <img src={window.location.origin + '/img/fillerPlain.png'} alt="Filler" width="100%"/>
                                </div>
                            </div>
                        }
                        <br/>
                        <button className="ui primary button fluid" onClick={() => setModalState(!modalState)}>
                            Change view
                        </button>
                    </div>
                </Route>
            </div>
        </div>
    )
}

export default App