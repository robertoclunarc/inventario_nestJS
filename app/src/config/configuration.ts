export default  () => ({
    MYSQL_SERVER: process.env.DESA_MYSQL_SERVER,
    MYSQL_USER: process.env.DESA_MYSQL_USER,    
    MYSQL_DB: process.env.DESA_MYSQL_DB,      
    MYSQL_PW: process.env.DESA_MYSQL_PASS,
    MYSQL_PORT: parseInt(process.env.DESA_MYSQL_PORT),
})
