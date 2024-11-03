const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./index");
const db = require("../db/config");

let card;

beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: "Mystic Warrior",
    mojo: 50,
    stamina: 80,
    imgUrl: "http://example.com/mystic-warrior.jpg"
  });
});

afterAll(async () => await db.close());

describe("Card Model", () => {
  it("has an id", async () => {
    expect(card).toHaveProperty("id");
  });

  it("has a name", async () => {
    expect(card).toHaveProperty("name", "Mystic Warrior");
  });

  it("has a mojo attribute", async () => {
    expect(card).toHaveProperty("mojo", 50);
  });

  it("has a stamina attribute", async () => {
    expect(card).toHaveProperty("stamina", 80);
  });

  it("has an imgUrl attribute", async () => {
    expect(card).toHaveProperty("imgUrl", "http://example.com/mystic-warrior.jpg");
  });

  it("name is a string", () => {
    expect(typeof card.name).toBe("string");
  });

  it("mojo is an integer", () => {
    expect(typeof card.mojo).toBe("number");
  });

  it("stamina is an integer", () => {
    expect(typeof card.stamina).toBe("number");
  });

  it("imgUrl is a string", () => {
    expect(typeof card.imgUrl).toBe("string");
  });

 
});
