export default  () => ({
    MYSQL_SERVER: process.env.MYSQL_SERVER,
    MYSQL_USER: process.env.MYSQL_USER,    
    MYSQL_DB: process.env.MYSQL_DB,      
    MYSQL_PW: process.env.MYSQL_PW,
    MYSQL_PORT: parseInt(process.env.MYSQL_PORT),
})
