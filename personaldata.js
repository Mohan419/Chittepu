var express = require('express');
var reddy = require('./personaldatainsert');
var router = express();
var port = 3010;
var bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.post('/personal/data',(req,res)=>{
    if(typeof req.body==='undefined'){
        res.json({result:'0',message:'no requist content'});

    }else{
        reddy.insertpersonalInfo(req.body,result => {
            if(result.status === 400) {
              res.statusCode = result.status;
              res.send(result.data.message);
              return;
            }
            res.json(result.data);
          });

    }
}),
router.delete('/personaldelete/data',(req,res)=>{
    if(typeof req.body==='undefined'){
        res.json({result:'0',message:'no requist content'});

    }else{
        reddy.deletepersonalInfo(req.body,result => {
            if(result.status === 400) {
              res.statusCode = result.status;
              res.send(result.data.message);
              return;
            }
            res.json(result.data);
          });

    }
}),
router.post('/personalupdate/data',(req,res)=>{
    if(typeof req.body==='undefined'){
        res.json({result:'0',message:'no requist content'});

    }else{
        reddy.updatepersonalInfo(req.body,result => {
            if(result.status === 400) {
              res.statusCode = result.status;
              res.send(result.data.message);
              return;
            }
            res.json(result.data);
          });

    }
})
router.listen(port,(req,res)=>{
    console.log(`the easy way of program ${port}!`);
})