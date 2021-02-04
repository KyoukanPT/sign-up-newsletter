const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing")

const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const userData = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                EMAIL: email,
            }
        }]
    }
    

    mailchimp.setConfig({
        apiKey: "YOUR API KEY",
        server: "YOUR SERVER - EXAMPLE: us1",
    })


    const run = async () => {
        try {
            const response = await mailchimp.lists.batchListMembers("YOUR LIST_ID", userData);
            console.log(response);
            res.sendFile(__dirname + "/success.html")
        } catch (error) {
            console.log(error.status);
            res.sendFile(__dirname + "/failure.html")
        }

    };
    run();
})


app.post("/failure.html", (req, res) => {
    res.redirect("/")
})


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running!")
});
