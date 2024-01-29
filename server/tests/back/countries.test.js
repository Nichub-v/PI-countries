const countries = "http://localhost:3001/countries"
const axios = require("axios");

it("Debe responder con un array de objetos", async () => {
    const {data} = await axios.get(countries)
    expect(Array.isArray(data)).toBe(true)
}) 

it("Debe responder con todos los países", async () => {
    const {data} = await axios.get(countries)
    expect(data.length).toBe(250)
})

it("Debe responder con el país especificado por params", async () => {
    const {data} = await axios.get(countries + "/90")
    expect(Number(data.id)).toBe(90)
})

it("Debe responder con el País buscado", async () => {
    const {data} = await axios.get(countries + "/?name=Argen")
    expect(data.some((obj) => {return obj.name.common === "Argentina"})).toBe(true)
    expect(data.some((obj) => {return obj.name.common === "Argentina"})).not.toBe(false)
})

it("Debe ser case insensitive", async () => {
    const {data} = await axios.get(countries + "/?name=chile")
    expect(data.some((obj) => {return obj.name.common === "Chile"})).toBe(true)
    expect(data.some((obj) => {return obj.name.common === "Chile"})).not.toBe(false)
})

it("Debe retornar varios países que coincidan", async () => {
    const {data} = await axios.get(countries + "/?name=chi")
    expect(data.some((obj) => {return obj.name.common === "Chile"})).toBe(true)
    
    expect(data.some((obj) => {return obj.name.common === "China"})).toBe(true)

    expect(data.some((obj) => {return obj.name.common === "Ecuador"})).not.toBe(true)
})

it("Debe retornar la cantidad de países especificada en el query Limit", async () => {
    const {data} = await axios.get(countries + "/?name=the&&limit=5")
    expect(Number(data.length)).toBe(5)
})
