module.exports = (req, res, next) => {
    try {
        if (!req.body.code || !req.body.name) {
            throw new Error(`not valid product`);
        }
        next();
    } catch (e) {
        console.log(e.message);
    }
}
