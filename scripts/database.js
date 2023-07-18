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
            name: "Ace",
            power: "Combustion"
        },
        {
            id: 1,
            name: "Enel",
            power: "Lightning"
        },
        {
            id: 1,
            name: "Teach",
            power: "Darkness"
        },
        {
            id: 1,
            name: "Antlers",
            power: "Reindeer"
        },
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}