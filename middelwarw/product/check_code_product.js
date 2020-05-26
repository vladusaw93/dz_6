module.exports = (req, res, next) => {
    try {
        if (!req.body.StrihCode || !req.body.name) {
            throw new Error(`not valid product`);
        }
        next();
    } catch (e) {
        console.log(e.message);
    }
}
