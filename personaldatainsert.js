
var perQuary = require('./personalquary');
var personalInfo = {
    insertpersonalInfo:(params,callback) =>{
        console.log(params);
        let insertQuery = perQuary.personalinsertQuery(params);
        insertQuery.save((inserted)=>{
            console.log(inserted);
            if(!inserted){
                return callback({
                    status : 200,
                    data : {
                        response : 3,
                        message : "Data Inserted Successfully"
                    }
                })
            }else{
                return callback({
                    status : 200,
                    data : {
                        response : 0,
                        message : "Data Inserted Failure"
                    }
                })
            }
        })
    },
    deletepersonalInfo:(params,callback) =>{
        console.log(params);
        let deleteQuery = perQuary.personaldeleteQuery(params);
        deleteQuery.then((deleted)=>{
            console.log(deleted);
            if(deleted){
                return callback({
                    status : 200,
                    data : {
                        response : 3,
                        message : "Data deleted Successfully"
                    }
                })
            }else{
                return callback({
                    status : 200,
                    data : {
                        response : 0,
                        message : "Data deleted Failure"
                    }
                })
            }
        })
    },
    updatepersonalInfo:(params,callback) =>{
        console.log(params);
        let updateQuery = perQuary.personalupdateQuery(params);
        updateQuery.then((updated)=>{
            console.log(updated);
            if(updated){
                return callback({
                    status : 200,
                    data : {
                        response : 3,
                        message : "Data updated Successfully"
                    }
                })
            }else{
                return callback({
                    status : 200,
                    data : {
                        response : 0,
                        message : "Data updated Failure"
                    }
                })
            }
        })
    }
}
module.exports=personalInfo;