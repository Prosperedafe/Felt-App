import React from 'react';
import "../style/page404.css"
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className='page404'>
       <h2>404</h2>
       <h3>There's NOTHING here...</h3>
       <p>maybe the page you are looking for is not here or never existed</p>
       <Link to="/"><span>&#8592;</span> Back to HomePage</Link>
    </div>
  )
}

export default Page404;