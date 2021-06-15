import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Convert = ({ language, text }) => {

    const [translatedText, setTranslatedText] = useState("")
    const [debouncedText, setDebouncedText] = useState(text)

    const api_key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    const url = 'https://translation.googleapis.com/language/translate/v2'

    useEffect(() => {

        const timerId = setTimeout( () => {
            setDebouncedText(text);
        }, 500)

        return () => clearTimeout(timerId)

    }, [text])

    useEffect(() => {

        const doTranslation = async () => {
            const { data } =  await axios.post(url, 
                {}, 
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: api_key
                    }
                }
            )
            setTranslatedText(data.data.translations[0].translatedText)
        }
        doTranslation()
        
    }, [language, debouncedText])

    return (
        <div>
            <label>Output of translation</label>
            <h1 className="ui header">
                {translatedText}
            </h1>
        </div>
    )

}

export default Convert