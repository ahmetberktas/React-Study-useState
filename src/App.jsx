import React, { useState } from 'react'
import Count from './pages/Count/Count'
import Form from './pages/Form/Form'
import './app.css'

const App = () => {
  const [page, setPage] = useState('formPage');
  return (
    <div className='app'>
      <div className='pageChange'>
        <button className='btn btn-primary' onClick={() => setPage("countPage")}>Sayaç Sayfası</button>
        <button className='btn btn-warning' onClick={() => setPage("formPage")}>Form Sayfası</button>
      </div>
        {page === 'countPage' ? <Count></Count> : <Form></Form>}
    </div>
  )
}

export default App