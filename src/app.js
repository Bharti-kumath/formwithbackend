const express = require("express")
const path = require("path")
const app = express()
const hbs = require("hbs")
require("./db/conn")
const Register = require("./models/register")
const { json } = require("express")


// const DB = "mongodb+srv://bharti_145:uiop890@@@cluster0.p1kwf.mongodb.net/form1?retryWrites=true&w=majority"

const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(static_path))
app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partial_path)

app.get("/", (req, res) => {
  res.render("./index")
})
app.post("/", async (req, res) => {
  try {
    const password = req.body.password
    const cpassword = req.body.confirmpassword

    if (password === cpassword) {

      const registerEmployee = new Register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        age: req.body.age,
        password:password,
        confirmpassword:cpassword
      })

      const registered = await registerEmployee.save()
      console.log(registered)
      res.status(201).render("ticcc")
    } else {
      res.send("password are not matching")
    }
  } catch (err) {
    res.status(400).send(err)
    console.log(err)

  }
})


app.listen(port, () => {
  console.log(`connection is setup at ${port}`)
})