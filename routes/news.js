const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')


newsr.get('/',async(req,res)=>{
    try {
        var url = 'https://gnews.io/api/v4/top-headlines?' +
          'country=in&' +
          'lang=en&' +
          'token=a17d6a33fbc2ca818fc09a49b8ad2f70';

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        //var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=2c6bfa81c2e8403da6eff5d85b8d1432`
        var url = `https://gnews.io/api/v4/search?q=${search}&token=a17d6a33fbc2ca818fc09a49b8ad2f70`
        
        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


module.exports=newsr