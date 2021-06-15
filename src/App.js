import React, { useState } from 'react'
import Accordion from './components/Acoordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

export default () => {

    const [optionSelected, setOptionSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <button onClick={ () => setShowDropdown(!showDropdown) }>
                Toggle dropdown
            </button>
            { 
                showDropdown ?
                    <Dropdown 
                        selected={optionSelected} 
                        onSelectedChange={setOptionSelected} 
                        options={options} 
                    />
                : null
            }  
        </div>
    )
}