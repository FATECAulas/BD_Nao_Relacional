use("FATEC")
db.pokémon.updateOne(
  {Name: "Tandemaus"},
  {$set: {Name:"Maushould"}}
)