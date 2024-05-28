import React,{useState} from 'react'
import './home.css'

const Home = () => {

    // const [booksData, setBooksData] = useState();

    // const getBooksData = async() =>{
    //     const data = await setBooksData
    // }

    const handleChange = () =>{

    }

  return (
          <div className='container'>
              <div>
              <h1>Prapti's Book Finder</h1>
              <input type='search' placeholder='Enter book name' onChange={() => handleChange()} />
              </div>
          </div>
  )
}

export default Home
