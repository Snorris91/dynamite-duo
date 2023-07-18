const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ], 
    villains: [
        {
            id: 1,
            name: "Fyre",
            power: "Combustion"
        },
        {
            

        },
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}