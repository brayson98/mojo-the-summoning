const { Card, Attack } = require(".");
const db = require("../db/config");

describe("Card-Attack Association", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  it("should allow a Card to have multiple Attacks", async () => {
    const card = await Card.create({ name: "Warrior", mojo: 50, stamina: 40 });
    const attack1 = await Attack.create({ title: "Punch", mojoCost: 10, staminaCost: 5 });
    const attack2 = await Attack.create({ title: "Kick", mojoCost: 15, staminaCost: 10 });

    await card.addAttacks([attack1, attack2]);
    const attacks = await card.getAttacks();

    expect(attacks.length).toBe(2);
    expect(attacks[0].title).toBe("Punch");
    expect(attacks[1].title).toBe("Kick");
  });

  it("should allow an Attack to belong to multiple Cards", async () => {
    const card1 = await Card.create({ name: "Mage", mojo: 60, stamina: 30 });
    const card2 = await Card.create({ name: "Knight", mojo: 70, stamina: 50 });
    const attack = await Attack.create({ title: "Slash", mojoCost: 20, staminaCost: 15 });

    await attack.addCards([card1, card2]);
    const cards = await attack.getCards();

    expect(cards.length).toBe(2);
    expect(cards[0].name).toBe("Mage");
    expect(cards[1].name).toBe("Knight");
  });
});
