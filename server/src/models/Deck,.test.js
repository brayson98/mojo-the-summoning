const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./index");
const db = require("../db/config");

let deck;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "Starter Deck", xp: 100 });
});

afterAll(async () => await db.close());

describe("Deck Model", () => {
  it("has an id", async () => {
    expect(deck).toHaveProperty("id");
  });

  it("has a name", async () => {
    expect(deck).toHaveProperty("name", "Starter Deck");
  });

  it("has an xp attribute", async () => {
    expect(deck).toHaveProperty("xp", 100);
  });

  it("name is a string", () => {
    expect(typeof deck.name).toBe("string");
  });

  it("xp is an integer", () => {
    expect(typeof deck.xp).toBe("number");
  });


 
});
