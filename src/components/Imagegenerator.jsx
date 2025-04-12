import React, { useRef, useState } from 'react';
import defaultai from '../assests/defaultai.jpg';
import './styles/imagestyles.css';

const Imagegenerator = () => {
    const [imgUrl, setUrl] = useState("/");
    const inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") return;

        const prompt = inputRef.current.value;
        const apiKey = process.env.REACT_APP_AI_IMAGE;

        

        const formData = new FormData();
        formData.append("text", prompt); // DeepAI expects 'text' as key

        try {
            const response = await fetch("https://api.deepai.org/api/text2img", {
                method: "POST",
                headers: {
                    "api-key": apiKey,
                    // Don't add 'Content-Type' here — fetch sets it automatically for FormData
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data);

            if (data && data.output_url) {
                setUrl(data.output_url);
            } else {
                console.log("No image returned from API.");
            }
        } catch (error) {
            console.error("Error during API call:", error);
        }
    };

    return (
        <div className='ai-container'>
            <div className="ai-header">
                AI Image <span>Generator</span>
            </div>
            <div className="notice">
                <p>*The api used here is from deepai and there is no free plan use! Logic is working fine, but when prompt is entered, there is 401 error of Unauthorized access meaning deepai is not letting us access the api! To use the api I would have to purchase a plan first, which I have not done yet.</p>
            </div>
            <div className="ai-image-box">
                <div className="ai-image">
                    <img
                        src={imgUrl === "/" ? defaultai : imgUrl}
                        alt="Generated AI"
                    />
                </div>
            </div>

            <div className="ai-search">
                <input
                    type="text"
                    className='ai-search-input'
                    ref={inputRef}
                    placeholder='Describe what you want to see!'
                />
                <div className="ai-gen-btn" onClick={imageGenerator}>
                    Generate
                </div>
            </div>
        </div>
    );
};

export default Imagegenerator;
