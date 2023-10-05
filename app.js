
import express from 'express'
import axios from 'axios'
import * as path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const api = 'https://restcountries.com/v3.1/name/'

// get request with country name passed in through url
app.get('/api/country/:countryName', async (req, res) => {

    // try return respond with data from country in url
    // if fails throw error and respond with not found
    try{
        const country = req.params.countryName
        const response = await axios.get(api + country)
        const data = response.data

        res.send(data)
    }
    catch(error) {
        console.error(error)
        res.send('not found')
    }
})


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname + '/public')))

export default app