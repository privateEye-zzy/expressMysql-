import Sequelize from 'sequelize'
const config = {
	database:'zzy',
	user: 'root',
	pwd: 'zzy123'
}
const sequelize = new Sequelize(config['database'], config['user'], config['pwd'], {dialect: 'mysql'})
sequelize.authenticate().then(() => {
    console.log('数据库连接成功...')
}).catch(err => {console.error('数据库连接失败...', err)})
module.exports = sequelize