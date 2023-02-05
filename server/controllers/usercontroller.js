const jwt = require("jsonwebtoken");
const cookie = require("cookie");

exports.userLogin = async (req, res) => {
    try {
        const email = req.body.uemail;
        const password = req.body.upassword;
        const admin = {
            email: email,
            password: password
        }

        if (admin === null) {
            return res.status(401).json("Invalid Credentials");
        }
        let token = jwt.sign({ admin }, "secret");
        console.log(cookie);
        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            httpOnly: false,
            maxAge: 3600,
            secure: true,
            path: "/"
        }))
        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json("Incorrect Password");
    }
};
