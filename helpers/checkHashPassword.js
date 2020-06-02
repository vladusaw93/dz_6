const {errorHandler} = require(`../errors`);
const {errors: {NOTEXIST}} = require(`../constants`)
const bcrypt = require(`bcrypt`);

module.exports = async (hashedPass, pass) => {
    const isPassEquals = await bcrypt.compare(pass, hashedPass);

    if (!isPassEquals) {
        throw new Error(NOTEXIST);
    }
}
