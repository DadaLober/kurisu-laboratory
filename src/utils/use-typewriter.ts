import { useState, useEffect } from 'react'

export const useTypewriter = (texts: string[], speed = 75, pause = 2000) => {
    const [displayedText, setDisplayedText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        const currentText = texts[textIndex]
        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + currentText[charIndex])
                setCharIndex(prev => prev + 1)
            }, speed)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('')
                setCharIndex(0)
                setTextIndex((textIndex + 1) % texts.length)
            }, pause)
            return () => clearTimeout(timeout)
        }
    }, [charIndex, textIndex, texts, speed, pause])

    return displayedText
}
