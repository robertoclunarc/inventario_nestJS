export default  () => ({
    MYSQL_SERVER: process.env.MYSQL_SERVER || 'localhost',
    MYSQL_USER: process.env.MYSQL_USER || 'root',    
    MYSQL_DB: process.env.MYSQL_DB || 'intranet',      
    MYSQL_PW: process.env.MYSQL_PW || '.4C3r04dm1n',
    MYSQL_PORT: parseInt(process.env.MYSQL_PORT) || 3306,
})