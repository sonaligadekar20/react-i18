import React from 'react'
import "./Home.css"
import I18n from './../../utils/I18n'

function Home() {

    // const usersCount = 15;
    return (
        <div>
          <h1>{I18n("welcomeMessage")}</h1>

          <p>{I18n("normalMessage")}</p>

          <h3>{I18n("greetingMessage")}</h3>

          {/* <p>
            {usersCount} users are learning in this session.
          </p> */}
        </div>
    )
}
export default Home