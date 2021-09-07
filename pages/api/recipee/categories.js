import axios from "axios"

export default async function handler(req, res) {

    const { category } = req.body

    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category

    try {
        const data = await axios.get(apiUrl)
        const meals = JSON.parse(JSON.stringify(data.data["meals"]))
        // console.log(meals)
        res.status(200).json(meals)
    } catch (e) {
        console.log(e.message)
        res.status(400).end()
    }
}