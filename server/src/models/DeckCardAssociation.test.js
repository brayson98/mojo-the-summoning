const { Deck, Card } = require(".");
const db = require("../db/config");

describe("Deck-Card Association", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should allow a Deck to have multiple Cards", async () => {
    const deck = await Deck.create({ name: "Deck1", xp: 100 });
    const card1 = await Card.create({ name: "Card1", mojo: 50, stamina: 30, deckId: deck.id });
    const card2 = await Card.create({ name: "Card2", mojo: 60, stamina: 40, deckId: deck.id });

    const cards = await deck.getCards();
    expect(cards.length).toBe(2);
    
  });

  it("should associate each Card with one Deck", async () => {
    const deck = await Deck.create({ name: "Deck2", xp: 200 });
    const card = await Card.create({ name: "Card3", mojo: 70, stamina: 50 });

    await deck.addCard(card);
    const cardDeck = await card.getDeck();

    expect(cardDeck).toBeDefined();
    
  });
});
