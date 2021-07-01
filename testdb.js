const db = require('./models')
db.connect()

const drinkCRUD = async() => {
    try{
        // CREATE
        const newDrink = await new db.Drink({
            name: 'Chocolate Milk',
            rating: 9
        })

        await newDrink.save()

        // READ
        const foundDrink = await db.Drink.findOne({
            name: 'Chocolate Milk'
        })

        // UPDATE

        foundDrink.name = 'Choco Milk'

        await foundDrink.save()

        // DESTROY
        const deletedDrink = await db.Drink.deleteOne({
            name: 'Choco Milk'
        })

        console.log('deleted drink', deletedDrink)
    } catch (err) {
        console.log(err)
    }
}

drinkCRUD()