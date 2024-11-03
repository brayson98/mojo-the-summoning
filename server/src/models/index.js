const  User  = require("./User");
const  Card  = require("./Card")
const  Attack  = require("./Attack")
const  Deck  = require("./Deck")
// import the rest of your models above

// set up the associations here

User.hasOne(Deck, { foreignKey: "userId" });
Deck.belongsTo(User, { foreignKey: "userId" });


Deck.hasMany(Card, { foreignKey: "deckId" });
Card.belongsTo(Deck, { foreignKey: "deckId" });


Card.belongsToMany(Attack, { through: "CardAttacks" });
Attack.belongsToMany(Card, { through: "CardAttacks" });

// and then export them all below
module.exports =  {User, Attack, Card, Deck};
