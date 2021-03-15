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
    getUser,
    returnProduct,
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
        getUser(req.session.passport.user._id).then((data) => {
            if (data.err) {
                res.json({ err: true, errMess: data.errMess });
            } else {
                res.json({ data, status: 200 });
            }
        });
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
        <p>Імя ${options.name}</p>
        <p>Email ${options.email}</p>
        <p>Тема: ${options.title}</p>
        <p>Повідомлення: ${options.text}</p>
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
    const age = typeof req.body.age === "number" ? req.body.age : "";
    const id = req.body.id;
    updateUser(name, phone, gender, surname, age, id).then((data) => {
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.put("/return", async (req, res) => {
    const product = req.body.product;
    const id = req.body.id;
    let returnP = await returnProduct(product, id).then((data) =>
        data.status === "Returned" ? data.userId : { err: true }
    );
    if (!returnP) {
        return;
    }

    await getProductsSell(returnP).then((data) => {
        console.log(data);
        if (data.err) {
            res.json({ err: true, errMess: data.errMess });
        } else {
            res.json(data);
        }
    });
});

router.put("/cancel", async (req, res) => {
    const product = req.body.product;
    const id = req.body.id;
    let cancelP = await returnProduct(product, id).then((data) =>
        data.status === "Canceled" ? data.userId : { err: true }
    );
    if (!cancelP) {
        return;
    }

    await getProductsSell(cancelP).then((data) => {
        console.log(data);
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

router.post("/buyProducts/", async (req, res) => {
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
        subject: "Покупки",
        html: `
        <p>Вітаємо з покупками</p>
        <p>Імя ${options.name}</p>
        <p>Прізвище ${options.surname}</p>
        <p>Телефон ${options.phone}</p>
        <p>Адреса доставки ${options.city}</p>
        <p>Відділення пошти ${options.novaPosta}</p>
        <p>Побажання ${options.note}</p>
        <p>Ви купили</p>
        ${products.productsBucket.map((el) => {
            return `
                    <div>
                        <p>Назва товару ${el.name}</p>
                        <p>Ціна товару ${el.price}</p>
                        <p>Кількість товару ${el.count}</p>
                        <a href=${process.env.SERVER_API}product/${el._id}/З покупок/${el.name}>Детальніше про товар</a>
                    </div>
                    `;
        })}
        `,
    };
    const adress = `${options.city} ${options.novaPosta}`;
    let list = await createBuyListSell(options.id, options.email, products.productsBucket, adress);

    let sell = await sellCountCalculate(products);

    if (list.success && sell.success) {
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.json({ err: false, status: 404, comment: "User not found" });
            } else {
                res.json({ success: true });
            }
        });
    } else {
        res.json({ err: false, errMess: [list.errMess, sell.errMess] });
    }
});

router.get("/getCountSellProducts/:id", (req, res) => {
    const id = req.params.id;
    getProductsSell(id).then((data) => {
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
        subject: "Підтвердження пошти",
        html: `
        <p>Вітаю, будь-ласка підтвердіть електронну пошту.</p>
        <a href=${process.env.SERVER_API}callback/:${id}>Підтвердити</a>
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
