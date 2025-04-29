import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import { MdSummarize,MdOutlineGTranslate } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const Summarize = () => {
  const {
    summarizeText,
    translateText,
    summarizedText,
    translatedText,
    detectLanguage,
    detectedLanguage,
    loading,
    error,
  } = useContext(DataContext);

  const [inputText, setInputText] = useState('');

  const handleSummarize = () => {
    summarizeText(inputText);
  };

  const handleTranslate = () => {
    translateText(inputText, 'es'); // Translate to Spanish
  };

  const handleDetectLanguage = () => {
    detectLanguage(inputText);
  };

  return (
    <div>

      <div className='bg-[#F4F8D3] py-4 h-screen relative  text-[#F75A5A]' >
      {/* header */}
      <div className=''>
        <h1 className='text-center text-xl font-bold'>FavAI</h1>
      </div>

{/* body */}
        <div className='flex justify-center items-center h-screen  '>

        <div className='flex flex-col gap-4 '>
          <h1 className='font-bold text-2xl'>Summarize, Detect Language, Translate</h1>

          <input type="text " 
          className='w-full border py-2 px-2'
          placeholder='Enter text here...'
          value={inputText}
          rows={6}
        cols={50}
          onChange={(e)=> setInputText(e.target.value)}
          />

<div>
        <button 
        className='cursor-pointer'
        onClick={handleSummarize} disabled={loading}>
          <MdSummarize />
        </button>
        <button 
        className='cursor-pointer'
        onClick={handleTranslate} disabled={loading}>
          <MdOutlineGTranslate />
        </button>
        <button
        className='cursor-pointer'
        onClick={handleDetectLanguage} disabled={loading}>
          < GrLanguage />
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summarizedText && <p><strong>Summary:</strong> {summarizedText}</p>}
      {translatedText && <p><strong>Translation:</strong> {translatedText}</p>}
      {detectedLanguage && <p><strong>Detected Language:</strong> {detectedLanguage}</p>}

        </div>
        </div>
        

      </div>
      
     

      

     
    </div>
  );
};

export default Summarize;
