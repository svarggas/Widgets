import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const languages = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {

    const [languageSelected, setLanguageSelected] = useState(languages[0])
    const [text, setText] = useState("")

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter text to be translated
                    </label>
                    <input 
                        value={text} 
                        onChange={event => setText(event.target.value)}
                    />
                </div>
            </div>
            <Dropdown 
                selected={languageSelected} 
                onSelectedChange={setLanguageSelected} 
                options={languages} 
                label={"Select the language"}
            />
            <Convert 
                language={languageSelected}
                text={text}
            />
        </div>
    )

}

export default Translate