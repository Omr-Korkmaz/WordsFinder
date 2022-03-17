const express =  require('express');
const fetch = require('node-fetch');

const router = express.Router();


router.get('/:word', (req, res) => {
    const word = req.params.word;
    console.log(word);
    
    const url =  'https://api.dictionaryapi.dev/api/v2/entries/en/'+word;
    console.log(url);
   

    fetch(url)
      .then(response => { return response.json(); })
        .then(data => { 
          console.log(data); 
          res.send({data});        
        })
          .catch(err => { console.log(err); });        
});

module.exports = router;