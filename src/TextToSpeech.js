import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('en-US');

    const handleSynthesize = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language;
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Speech Synthesis not supported in this browser.');
        }
    };

    return (
        <div>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Enter text here"
            />
            <br />
            <label>
                Select Language:
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en-US">English (US)</option>
                    <option value="hi-IN">Hindi (India)</option>
                    <option value="bn-IN">Bengali (India)</option>
                    <option value="es-ES">Spanish (Spain)</option>
                    <option value="fr-FR">French (France)</option>
                   
                </select>
            </label>
            <br />
            <button onClick={handleSynthesize}>Synthesize Speech</button>
        </div>
    );
};

export default TextToSpeech;
