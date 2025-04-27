import React, { createContext } from 'react'
export const DataContext = createContext();


const DataProvider = ( {children} ) => {
  
  
    return (
    <div>
      <DataContext.Provider value={{

      }}>

        
      </DataContext.Provider>

      
    </div>
  )
}

export default DataProvider
