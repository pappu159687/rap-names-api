const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    
    'raftar':{
        'age': 34,
        'birthName': 'Dilin Nair',
        'birthLocation': 'Trivandrum, Kerala, India'
    },

    '21 Savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'badshah':{
        'age': 37,
        'birthName': 'Aditya Prateek Singh Sisodia',
        'birthLocation': 'Delhi, India'
    },

    'honey singh':{
        'age': 39,
        'birthName': 'Hirdesh Singh',
        'birthLocation': 'Karampura, New Delhi, India'
    },

    'eminen':{
        'age': 50,
        'birthName': 'Marshall Bruce Mathers',
        'birthLocation': 'Missouri, U.S.'
    },

    'unknown':{
        'age': 'Not Found',
        'birthName': 'Not Found',
        'birthLocation': 'Not Found'
    }

}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rappersName',(request, response)=>{
   const rapperName =  request.params.rappersName.toLowerCase()
//    console.log(rappers[rapperName].age)
    // response.json(rapperName)

    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT,()=>{
console.log(`The server is running on port ${PORT}! Better Go Catch It!`)
})