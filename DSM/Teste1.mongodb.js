use("FATEC")
db.NBA.find({"player_name":"Ray Allen"});

use("FATEC")
db.NBA.find({"college":"Connecticut"}).projection({_id: 0, player_name:1, age:1, season:1}).
    sort({player_name: 1})

