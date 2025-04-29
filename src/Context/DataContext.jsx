import React, { createContext } from 'react'
export const DataContext = createContext();


const DataProvider = ( {children} ) => {

    
//  async function summarizeText(text) {
//     const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
//     const API_TOKEN = process.env.REACT_APP_HUGGINGFACE_TOKEN;
  
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: text }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log(data);
  
//       if (data && data.length > 0 && data[0].summary_text) {
//         return data[0].summary_text;
//       } else {
//         throw new Error("No summary returned");
//       }
  
//     } catch (error) {
//       console.error("Summarization error:", error);
//       throw error;
//     }
//   }
  
  
  
    return (
    <div>
      <DataContext.Provider value={{
            // summarizeText
      }}>


      </DataContext.Provider>

      
    </div>
  )
}

export default DataProvider
