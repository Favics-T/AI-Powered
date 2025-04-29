import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataContext'


const Summarize = () => {
    const {summarizeText} = useContext(DataContext);
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    // const handleSummarize = async () => {
    //     setLoading(true);
    //     try {
    //       const result = await summarizeText(inputText);
    //       setSummary(result);
    //     } catch (error) {
    //       setSummary("Failed to summarize. Please try again.");
    //     }
    //     setLoading(false);
    //   };

  return (
    <div className='text-[#F8F8E1]'>
        <div>

        {/* <div>
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to summarize"
      ></textarea>
      <br />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      <div>
        <h3>Summary:</h3>
        <p>{summary}</p>
      </div>
    </div> */}

        </div>
      
    </div>
  )
}

export default Summarize
