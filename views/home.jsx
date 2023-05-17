const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div id='pizza'>
          <img src='https://www.thursdaynightpizza.com/wp-content/uploads/2022/02/square-1200.png?is-pending-load=1' alt='pizza'/>
          <div>
          Photo by <a href='https://www.thursdaynightpizza.com/about-peggy/'>Peggy</a> on <a href='https://www.thursdaynightpizza.com/goat-cheese-pizza-with-tomato-and-mint/'>Thursday Night Pizza</a>
          </div>
        </div>
        <a href='/places'>
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home