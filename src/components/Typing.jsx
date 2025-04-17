import { useState, useEffect } from 'react';
import './styles/speedtyping.css';

const Typing = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    setCharCount(text.length);

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);

    if (text.length === 1) {
      setStartTime(new Date());
    }

    if (startTime && text.length > 1) {
      const minutesPassed = (new Date() - startTime) / 1000 / 60;
      const typingSpeed = Math.round(words.length / minutesPassed);
      setSpeed(typingSpeed);
    }

    if (text.length === 0) {
      setStartTime(null);
      setSpeed(0);
    }
  }, [text]);

  return (
    <div className="typing-container">
      <h2><span className='typing-title'>Typing </span>Tracker</h2>
      <hr />
      <textarea
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start Typing..."
      ></textarea>

      <div className="typing-info">
        <p>Characters: {charCount}</p>
        <p>Words: {wordCount}</p>
        <h2>Typing Speed: {speed} WPM</h2>
      </div>
    </div>
  );
};

export default Typing;
