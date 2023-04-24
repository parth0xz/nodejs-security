const bcrypt = require('bcryptjs')

const securePassword = async (password) =>{
    const passwordHash = await bcrypt.hash(password,10) //default hash is 10 we can make it last till 12 rounds
    console.log(passwordHash)
    const passwordMatch = await bcrypt.compare(password,passwordHash) //check passwordHash is matching in db
    console.log(passwordMatch)

}
securePassword("parth@123")
