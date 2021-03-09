const emailjs = require("emailjs-com");
const { Router } = require("express");
const {
    getProductTitle,
    getProductsSubtitle,
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
    verifyUser,
    deleteAccount,
} = require("../services/userService.js");
const nodemailer = require("nodemailer");
const router = Router();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.EMAIL_ID,
    process.env.EMAIL_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: process.env.EMAIL_REFRESH,
});

router.get("/getProductTitle", (req, res) => {
    getProductTitle().then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/getProductsSubtitle/:id", (req, res) => {
    const id = req.params.id.slice(1);

    getProductsSubtitle(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/getProduct/:id", (req, res) => {
    const id = req.params.id.slice(1);

    getProductInfo(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/isAuth", (req, res) => {
    if (req.session.passport === undefined) {
        res.json({ status: 400 });
    } else if (req.session.passport.user !== undefined) {
        console.log(req.session.passport.user);
        res.json({ status: 200, user: req.session.passport.user });
    }
});

router.post("/sendText/", (req, res) => {
    const options = req.body.options;
    const accessToken = oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
        service: "gmail",
        // auth: {
        //     user: process.env.EMAIL_ADRESS,
        //     pass: process.env.EMAIL_PASSWORD,
        // },
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_ADRESS,
            clientId: process.env.EMAIL_ID,
            clientSecret: process.env.EMAIL_SECRET,
            refreshToken: process.env.EMAIL_REFRESH,
            accessToken: accessToken,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_ADRESS,
        to: process.env.EMAIL_ADRESS,
        subject: "Help",
        html: `
        <p>Hi Messsege</p>
        <p>Name ${options.name}</p>
        <p>Email ${options.email}</p>
        <p>Title: ${options.title}</p>
        <p>Text: ${options.text}</p>
        `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ err: true, status: 404, comment: error });
        } else {
            res.json({ success: true });
        }
    });
});

router.get("/getNews/:number", (req, res) => {
    const number = req.params.number;
    getNews(number).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.put("/changeInfo", (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const surname = req.body.surname;
    const age = req.body.age;
    const id = req.body.id;
    updateUser(name, phone, gender, surname, age, id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/getNewsID/:id", (req, res) => {
    const id = req.params.id;
    getNewsID(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/getProductListSearch/:id", (req, res) => {
    const id = req.params.id;
    getProductListSearch(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});
router.get("/getProductListSearch/", (req, res) => {
    getProductListSearchAll().then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.get("/getProductList/:id", (req, res) => {
    const id = req.params.id;
    getProductList(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.put("/addProduct", (req, res) => {
    const newLikeProducts = req.body.newLikeProducts;
    const set = new Set(newLikeProducts);
    const id = req.body.id;
    addProduct(id, [...set]).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.post("/getProductsLike/", (req, res) => {
    const ids = req.body.ids;
    getProductsLikeOrBuy(ids).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.post("/getProductsBucket/", (req, res) => {
    const ids = req.body.ids;
    getProductsLikeOrBuy(ids).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.post("/buyProducts/", (req, res) => {
    const options = req.body.options;
    const products = req.body.products;
    const accessToken = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        // auth: {
        //     user: process.env.EMAIL_ADRESS,
        //     pass: process.env.EMAIL_PASSWORD,
        // },
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_ADRESS,
            clientId: process.env.EMAIL_ID,
            clientSecret: process.env.EMAIL_SECRET,
            refreshToken: process.env.EMAIL_REFRESH,
            accessToken: accessToken,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_ADRESS,
        to: `${options.email},${process.env.EMAIL_ADRESS}`,
        subject: "Buy Check",
        html: `
        <p>Hi this is your check list</p>
        <p>Name ${options.name}</p>
        <p>Surname ${options.surname}</p>
        <p>Phone ${options.phone}</p>
        <p>Adress City ${options.city}</p>
        <p>Poshta ${options.novaPosta}</p>
        <p>Note ${options.note}</p>
        <p>You Buy</p>
        ${products.productsBucket.map((el) => {
            return `
                    <div>
                        <p>Name ${el.name}</p>
                        <p>Price ${el.price}</p>
                        <p>Count ${el.count}</p>
                        <a href=${process.env.SERVER_API}product/${el._id}/:FromMyBilling/:${el.name}>More</a>
                    </div>
                    `;
        })}
        `,
    };
    const adress = `${options.city} ${options.novaPosta}`;
    createBuyListSell(options.id, options.email, products.productsBucket, adress);

    sellCountCalculate(products);

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ err: false, status: 404, comment: "User not found" });
        } else {
            res.json({ success: true });
        }
    });
});

router.get("/getCountSellProducts/:email", (req, res) => {
    const email = req.params.email;
    getProductsSell(email).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.post("/emailVerify/", (req, res) => {
    const email = req.body.email;
    const id = req.body.id;
    const accessToken = oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
        service: "gmail",
        // auth: {
        //     user: process.env.EMAIL_ADRESS,
        //     pass: process.env.EMAIL_PASSWORD,
        // },
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_ADRESS,
            clientId: process.env.EMAIL_ID,
            clientSecret: process.env.EMAIL_SECRET,
            refreshToken: process.env.EMAIL_REFRESH,
            accessToken: accessToken,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_ADRESS,
        to: `${email}`,
        subject: "Verify Email",
        html: `
        <p>Hi please verify email</p>
        <a href=${process.env.SERVER_API}callback/:${id}>Verify</a>
        `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({ err: false, status: 404, comment: "User not found" });
        } else {
            res.json({ success: true });
        }
    });
});

router.put("/verify", (req, res) => {
    const id = req.body.id;

    verifyUser(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.put("/removeProductLike", (req, res) => {
    const newLikeProducts = req.body.data;
    const set = new Set(newLikeProducts);
    const id = req.body.id;
    addProduct(id, [...set]).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.delete("/deleteAccount/:id", (req, res) => {
    const id = req.params.id;
    deleteAccount(id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

module.exports = router;
