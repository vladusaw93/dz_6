module.exports = (req, res, next) => {
    try {
        if (!req.body.code) {
            throw new Error(`BAD`);
        }
        next();
    } catch (e) {
        console.log(e.message);
    }
}
