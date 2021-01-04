const { Router } = require('express');
const {
    getProductTitle,
    getProductsSubtitle,
    getProductsList,
    getProductInfo,
    getNews,
    updateUser,
    getNewsID,
    getProductListSearch,
    getProductListSearchAll,
    getProductList,
    addProduct,
    getProductsLikeOrBuy,
    sellCountCalculate,
    createBuyListSell,
    getProductsSell,
    verifyUser
} = require('../services/userService.js');
const nodemailer = require('nodemailer');
const router = Router();


router.get('/getProductTitle', (req, res) => {
    
    getProductTitle().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"Error"});
        }
    })
})

router.get('/getProductsSubtitle/:id', (req, res) => {
    const id = req.params.id.slice(1);

    getProductsSubtitle(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"Error"});
        }
    })
})
//Why it this ??
// router.get('/getProductsList/:id', (req, res) => {
//     const id = req.params.id.slice(1);
//     console.log('here33')
//     getProductsList(id).then((r)=>{
//         if (r) {
//             res.json(r);
//         } else {
//             res.json({err:false,status:404,comment:"Error"});
//         }
//     })
// })

router.get('/getProduct/:id', (req, res) => {
    const id = req.params.id.slice(1);

    getProductInfo(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Not found this product"});
        }
    })
})


router.get('/isAuth',(req,res)=>{
        if(req.session.passport === undefined){
             res.json({status:400})
        }else if (req.session.passport.user !== undefined){
            res.json({status:200,user:req.session.passport.user})
        }
})


router.post('/sendText/', (req, res) => {
    const options = req.body.options;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatHi.help@gmail.com',
          pass: 'qwerty123456!@#Q' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'chathi.help@gmail.com',
        to: 'chathi.help@gmail.com',
        subject: 'Help',
        html: `
        <p>Hi Messsege</p>
        <p>Name ${options.name}</p>
        <p>Email ${options.email}</p>
        <p>Title: ${options.title}</p>
        <p>Text: ${options.text}</p>
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({err:true,status:404,comment:error});
        } else {
            res.json({success:true});
        }
      });

})


router.get('/getNews/:number', (req, res) => {
    const number =req.params.number
    getNews(number).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
})

router.put("/changeInfo", (req, res)=>{
    const name = req.body.name
    const phone = req.body.phone
    const gender = req.body.gender
    const surname = req.body.surname
    const age = req.body.age
    const id = req.body.id
    updateUser(name,phone,gender,surname,age,id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
});


router.get('/getNewsID/:id', (req, res) => {
    const id =req.params.id
    getNewsID(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
})


router.get('/getProductListSearch/:id', (req, res) => {
    const id =req.params.id
    getProductListSearch(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})
router.get('/getProductListSearch/', (req, res) => {
    getProductListSearchAll().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.get('/getProductList/:id', (req, res) => {
    const id = req.params.id;
    getProductList(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.put("/addProduct", (req, res)=>{
    const newLikeProducts = req.body.newLikeProducts
    const set = new Set(newLikeProducts)
    const id = req.body.id;
    addProduct(id,[...set]).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

router.post('/getProductsLike/', (req, res) => {
    const ids = req.body.ids;
    getProductsLikeOrBuy(ids).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.post('/getProductsBucket/', (req, res) => {
    const ids = req.body.ids;
    getProductsLikeOrBuy(ids).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.post('/buyProducts/', (req, res) => {
    const options = req.body.options;
    const products = req.body.products;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatHi.help@gmail.com',
          pass: 'qwerty123456!@#Q' // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'chathi.help@gmail.com',
        to: `${options.email},chathi.help@gmail.com`,
        subject: 'Buy Check',
        html: `
        <p>Hi this is your check list</p>
        <p>Name ${options.name}</p>
        <p>Surname ${options.surname}</p>
        <p>Phone ${options.phone}</p>
        <p>Adress City ${options.city}</p>
        <p>Poshta ${options.novaPosta}</p>
        <p>Note ${options.note}</p>
        <p>You Buy</p>
        ${
            products.productsBucket.map(el=>{
                return (`
                    <div>
                        <p>Name ${el.name}</p>
                        <p>Price ${el.price}</p>
                        <p>Count ${el.count}</p>
                        <a href=http://localhost:3000/product/:${el.idProduct}/:FromMyBilling/:${el.name}>More</a>
                    </div>
                    `
                )
            })
        }
        `
      };

      createBuyListSell(options.email,products.productsBucket)

      sellCountCalculate(products)

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({err:false,status:404,comment:"User not found"});
        } else {
            res.json({success:true});
        }
      });

})

router.get('/getCountSellProducts/:email', (req, res) => {
    const email = req.params.email;
    getProductsSell(email).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"With this Email not found products"});
        }
    })
})

router.post('/emailVerify/', (req, res) => {
    const email = req.body.email;
    const id = req.body.id;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chatHi.help@gmail.com',
          pass: 'qwerty123456!@#Q'
        }
      });
      
      const mailOptions = {
        from: 'chathi.help@gmail.com',
        to: `${email}`,
        subject: 'Verify Email',
        html: `
        <p>Hi please verify email</p>
        <a href=http://localhost:3000/callback/:${id}>Verify</a>
        `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            res.json({err:false,status:404,comment:"User not found"});
        } else {
            res.json({success:true});
        }
      });

})


router.put("/verify", (req, res)=>{
    const id = req.body.id
    
    verifyUser(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({err:false,status:404,comment:"User not found"});
        }
    })
});

module.exports = router;