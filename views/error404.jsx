const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div id='toast'>
          <img src='https://www.tastingtable.com/img/gallery/should-you-actually-be-concerned-about-eating-burnt-toast/l-intro-1660832875.jpg' alt='burnt toast' />
          <div>
          Photo by <a href='https://www.shutterstock.com/image-photo/burnt-toast-sad-face-icon-on-1944766795' alt='Shutterstock'>Patpitchaya</a>
          </div>
        </div>
       
      </main>
    </Def>
  )
}

module.exports = error404