const express = require('express')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()
app.use(express.json())
const dbPath = path.join(__dirname, 'assignment2.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}
initializeDBAndServer()

const customers = [
  {
    email: 'anurag11@yopmail.com',
    name: 'anurag',
  },
  {
    email: 'sameer11@yopmail.com',
    name: 'sameer',
  },
  {
    email: 'ravi11@yopmail.com',
    name: 'ravi',
  },
  {
    email: 'akash11@yopmail.com',
    name: 'akash',
  },
  {
    email: 'anjali11@yopmail.com',
    name: 'anjali',
  },
  {
    email: 'santosh11@yopmail.com',
    name: 'santosh',
  },
]
