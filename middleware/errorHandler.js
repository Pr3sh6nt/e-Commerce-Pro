// const errorHandler = (req,res,next) => {
//     if(!req.query.age)
//     {
//         res.send("please provide age!..");
//     }else if(req.query.age < 18){
//         res.send("please provide valid age details!");
//     }else{
//         next();
//     }
// }
// module.exports = errorHandler;

// const express = require('express');
// const app = express();

// app.use((req,res,next) => {
//     console.log('Request Type: ', Date.now());
//     next();
// });

// app.use('/user/:id', (req,res,next) => {
//     console.log('Request Type: ', req.method);
//     next();
// });

// app.get('/user/:id', (req,res,next) => {
//     res.send('USER');
// });

// app.use('/user/:id', (req,res,next) => {
//     console.log('request url: ', req.originalUrl);
//     next();
// },(req,res,next) => {
//     console.log('Request Type: ', req.method);
//     next();
// });

// app.get('/user/:id', (req,res,next) => {
//     console.log('Request Type: ', req.params.id);
//     next();
// }, (req,res,next) => {
//     res.send("User Info:- ");
// });

// app.get('/user/:id', (req,res,next) => {
//     res.send(req.params.id);
// });


// app.get('/user/:id', (req,res,next) => {

//     if(req.params.id === 0){
//         next('route');
//     }else {
//         next();
//     }
// }, (req,res,next) => {
//     res.send('reguler');
// });

// app.get('/user/:id', (req,res,next) => {
//     res.send('special');
// });

// function logOriginalUrl (req,res,next) {
//     console.log('Request URL', req.originalUrl);
//     next();
// }

// function logMethod (req,res,next) {
//     console.log('Request Method: ', req.method);
//     next();
// }

// const logStuff = [logOriginalUrl, logMethod]
// app.get('/user/:id', logStuff ,(req,res,next) => {
//     res.send('User Info');
// })

// const express = require('express');
// const app = express();
// const router = express.Router();


// router.use('/user/:id', (req,res,next) => {
//     console.log('Time', Date.now())
//     next();
// })

// app.use((err,req,res,next) => {
//     console.error(err.stack);
//     res.status(500).json({message: "Something broke!.."});
//     next();
// });

// const express1 = require('express');
// const app1 = express1();
// const cookieParser = require('cookie-parser');

// app.use(cookieParser());


const express = require('express');
const app = express();

app.get('/', (req,res,next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
        if(err){
            next(err);
        }else {
            res.send(data);
        }
    })
});

app.get('/users/:id', async (req,res,next) => {
    const user = await getUserById(req.params.id);
    res.send(user);
});

app.get('/', [
    function (req,res,next){
        fs.writeFile('/inaccessible-path', 'data', next)
    },
    function (req, res) {
        res.send('OK');
    }
]);

app.get('/', (req,res,next) => {
    setTimeout(() => {
        try{
            throw new Error('BROKEN');
        }catch(err) {
           next(err); 
        }
    }, 1000);
});


app.get('/', (req,res,next) => {
    Promise.resolve().then(() => {
         throw new Error('BROKEN')
    }).catch(next)
});


// app.get('/', (req,res,next) => [
//     fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
//         res.locals.data = data
//         next(err);
//     })
// }, 
// function (req,res) {
//     res.locals.data = res.locals.data.split(',')[1]
//     res.send(res.locals.data)
// ])