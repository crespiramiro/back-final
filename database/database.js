const mongoose = require('mongoose')

const dbConnection = async () => {

    try {

        await mongoose.connect('mongodb+srv://crespiramiro:iS7yyuxVJazpsOgn@cluster1.bk1uykl.mongodb.net/')
        console.log('Database succesfully connected');
    }

    catch (error) {
        throw new Error ('error initializing the db')
    }
};

module.exports = dbConnection;
