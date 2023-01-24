const FormModel  = require("../models/adminJobmodel") 

const Job = async(req,res) =>{

    const { company_name,position,contract,location} = req.body;
    console.log(company_name,position,contract,location);
    try {
        const newJob =  new FormModel({
            company_name,
            position,
            contract,
            location
        })
     
        await newJob.save()
         res.send({"message":"Job posted successfully" , newJob}).status(200)
    } catch (error) {
            res.send(error)
    }
}

const getAlljobs = async(req,res) =>{

        try {
            let jobs = await JobModel.find()
             res.send(jobs)
        } catch (error) {
            res.send(error)
        }

}

module.exports = {
    Job,
    getAlljobs
}