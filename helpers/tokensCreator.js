const jwt = require(`jsonwebtoken`);
const {tokenEnum: {JWTCREATE, JWTREFRESH}} = require(`../constants`)

module.exports = () => {
    const accessedToken = jwt.sign({}, JWTCREATE, {expiresIn: `10d`});
    const refreshedToken = jwt.sign({}, JWTREFRESH, {expiresIn: `10d`});

    return {accessedToken, refreshedToken}
}
