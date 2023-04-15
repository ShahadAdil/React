import React from 'react'


const user = {title : 'WE HAVE MEALS AND A SET MENU'}
export const UserContext = React.createContext();
const UseContextPage = () => {


  return (
    <div>
        <UserContext.Provider value={user}>

        </UserContext.Provider>
    </div>
  )
}

export default UseContextPage
