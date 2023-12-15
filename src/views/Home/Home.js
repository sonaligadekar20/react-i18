import React, { useState } from 'react'
import "./Home.css"
import I18n from './../../utils/I18n'

function Home() {
    const yearsCount = 1930;

    const [lang, setLang] = useState("hi");

    return (
        <div className='message-box'>
          <h1 className='text-center'>{I18n("headingMessage")}</h1>

          <p className='text-message'>{I18n("textMessage", "<yearCount>", yearsCount)}</p>

          <p className='sub-heading'>{I18n("subheadingMessage")}</p>

          <p className='text-message'>{I18n("textMessage1")}</p>

          <h5>{I18n("endMessage") }</h5>

          <select className='lang-box'
          defaultValue={localStorage.getItem("lang")}onChange={(e)=>{
             localStorage.setItem("lang", e.target.value);
             window.location.reload();
          }}>
             <option value="mr">Marathi</option>
             <option value="hi">Hindi</option>
             <option value="en">English</option>
          </select>
          
          <p>
            {/* {I18n("usersStatMessage", "<studentCount>", usersCount)}  */}
          </p>
        </div>
    )
}
export default Home