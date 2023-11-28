import React from 'react'
import "./Home.css"

function Home() {

    const usersCount = 15;
    return (
        <div>
          <h1>Welcome!</h1>
          <p>
            We hope you enjoy learning React.
          </p>

          <h3>Have a great day!</h3>

          <p>
            {usersCount} users are learning in this session.
          </p>
        </div>
    )
}
export default Home