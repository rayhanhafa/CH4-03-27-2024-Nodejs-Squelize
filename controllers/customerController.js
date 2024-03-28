const { Customer } = require("../models");

const createCustomer = async (req, res) => {
    //destructuting object
    const { name, age, email, city } = req.body

    try {
        const newCustomer = await Customer.create({
            name,
            email,
            age,
            city,
        })

        res.status(200).json({
            status: "succes",
            data: {
                newCustomer
            }
        })
    } catch (err) {
        console.log(err.message)
    }
}


module.exports = {
    createCustomer,
}
