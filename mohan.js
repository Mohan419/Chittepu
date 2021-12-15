var express =require('express');
var app = express();
var port = 3030;
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.post('/',(req,res)=>{
    if(typeof req.body==='undefined'){
        res.json({result:'0',message:'no request content'})
    }else{
        data.insertinfo(req.body,result=>{
            if(result.status===400){
                res.statusCoded =result.status
                res.send(result.data.message);
                return;
            }
            res.json(tesult.data)
        })
    }
})
app.listen(port,(req,res)=>{

})