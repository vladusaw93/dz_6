const {errorHandler} = require(`../errors`);


const bcrypt = require(`bcrypt`);

module.exports =  (hashedPass, pass) => {
    try {
       return  bcrypt.compare(pass, hashedPass);
    } catch (e) {
        console.log(e);
    }
}
