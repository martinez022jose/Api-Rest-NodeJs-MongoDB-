const app = require('./src/app');

app.listen( app.get('port'), ()=>{
    console.log("listening on port", app.get('port'));
})