const router = require('express').Router()

router.get('/', (req,res) => {
  let places = [{
    name: 'Tarantelli\'s',
    city: 'Wilmington',
    state: 'NC',
    cuisines: 'Italian',
    pic: '/images/tarantellis.jpg'
  }, {
    name: 'Szechuan 132',
    city: 'Wilmington',
    state: 'NC',
    cuisines: 'chinese, thai',
    pic: '/images/szechuan132.jpg'
  }]  
  res.render('places/index', { places })  
})

module.exports = router




