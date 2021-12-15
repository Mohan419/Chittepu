var persdata = require('./personalschema')
var perQuary = {
    personalinsertQuery: (params) => {
        var work = new persdata({
            firstname: params.firstname,
            lastname: params.lastname,
            age:params.age,
            gmail:params.gmail,
            mobile:params.mobile,
            address:params.address,
            experiance:params.experiance,
            type:params.type,
            company:params.company,
            salary:params.salary
        })
        return work;
    },
    personaldeleteQuery:(params)=>{
        return persdata.deleteOne({lastname:params.lastname})
    },
    personalupdateQuery:(params)=>{
        return persdata.updateOne({mobile:params.mobile},{$set:{experiance:params.experiance}})
    }
}

module.exports = perQuary;
