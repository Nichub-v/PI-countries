const activities = "http://localhost:3001/activities"
const axios = require("axios");

it("Debe responder con un array de objetos", async () => {
    const {data} = await axios.get(activities)
    expect(Array.isArray(data)).toBe(true)
})