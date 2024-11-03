const { User, Deck } = require(".");
const db = require("../db/config");

describe("User-Deck Association", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should allow a User to create a Deck", async () => {
    const user = await User.create({ username: "user1" });
    const deck = await Deck.create({ name: "Deck1", xp: 100, userId: user.id });
    const userDeck = await user.getDeck();

    expect(userDeck).toBeDefined();
    expect(userDeck.name).toBe("Deck1");
  });

  it("should associate a Deck with a User", async () => {
    const deck = await Deck.create({ name: "Deck2", xp: 200 });
    const user = await User.create({ username: "user2" });
    await user.setDeck(deck);

    const deckUser = await deck.getUser();
    expect(deckUser).toBeDefined();
    expect(deckUser.username).toBe("user2");
  });
});
