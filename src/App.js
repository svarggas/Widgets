import React from 'react'
import Accordion from './components/Acoordion'
import Search from './components/Search'

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

export default () => {
    return (
        <div>
            <Search />
        </div>
    )
}