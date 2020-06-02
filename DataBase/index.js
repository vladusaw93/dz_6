const Sequelize = require('sequelize');
const fs = require(`fs`);
const path = require(`path`);

module.exports = (() => {

    let instance;

    function InitConnection() {
        const client = new Sequelize(`products`, `root`, `root`, {
            host: `localhost`,
            dialect: `mysql`,
        })

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), `DataBase`, `models`), (error, file) => {
                file.forEach(file => {
                    const [modelName] = file.split(`.`);
                    models[modelName] = client.import(path.join(process.cwd(), `DataBase`, `models`, modelName))
                })
            })
        }

        return{
            setModels: ()=> getModels(),
            getModels: (modelName) => models[modelName],
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = InitConnection();
            }
            return instance;
        }
    }
})();
