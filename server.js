// memanggil express
const express = require("express")

// membuat object app dari express
const app = express()

// panggil router member
const member = require("./router/member")

app.use("/api/member", member)


// panggil router paket
const paket = require("./router/paket")

app.use("/api/paket", paket)

// panggil router users
const users = require("./router/users")

app.use("/api/users", users)

// panggil router transaksi
const transaksi = require("./router/transaksi")

app.use("/api/transaksi", transaksi)

// panggil router login
const { login } = require("./router/login")

app.use("/api/login", login)

// membuat port
app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})