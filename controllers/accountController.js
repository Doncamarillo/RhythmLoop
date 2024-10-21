const Account = require('../models/account')

const getAllAccounts = async (req,res) => {
    try {
        const accounts = await Account.find ()
        res.json(accounts)
    } catch (error) {
        return res.status (500).send(error.message)
    }
    }

const getAccountById = async (req,res) => {
    try {
        const {id} = req.params
        const account = await Account.findById(id)
        if (category) {
            return res.json(category)
        }
        return res.status (404).send('Account does not exist')
    } catch (error) {
        return res.status (500).send(error.message);
    }
    
}
const createAccount = async (req, res) => {
    try {
        const account = await new Account(req.body)
        await account.save()
        return res.status(201).json({
            account,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateAccount = async (req,res) => {
    try {
        let {id} = req.params
        let category = await Account.findByIdAndUpdate (id, req.body,{new:true})
        if (account) {
            return res.status(200).json(account)
        }
        throw new Error('Account not found')
    } catch (error) {
            return res.status (500).send(error.message)
        }
    }

    const deleteAccount = async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Account.findByIdAndDelete(id)
            if (deleted) {
                return res.status(200).send("Account deleted");
            }
            throw new Error("Account not found");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    module.exports = {
        getAllAccounts,
        getAccountById,
        createAccount,
        updateAccount,
        deleteAccount
    }
    
