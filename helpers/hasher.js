const bcrypt = require('bcrypt');

module.exports = (paramToHash) => {
    return bcrypt.hash(paramToHash, 10);
};
