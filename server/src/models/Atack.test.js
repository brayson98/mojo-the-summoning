const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./index");
const db = require("../db/config");

let attack;

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: "Power Strike",
    mojoCost: 25,
    staminaCost: 15
  });
});

afterAll(async () => await db.close());

describe("Attack Model", () => {
  it("has an id", async () => {
    expect(attack).toHaveProperty("id");
  });

  it("has a title", async () => {
    expect(attack).toHaveProperty("title", "Power Strike");
  });

  it("has a mojoCost attribute", async () => {
    expect(attack).toHaveProperty("mojoCost", 25);
  });

  it("has a staminaCost attribute", async () => {
    expect(attack).toHaveProperty("staminaCost", 15);
  });

  it("title is a string", () => {
    expect(typeof attack.title).toBe("string");
  });

  it("mojoCost is an integer", () => {
    expect(typeof attack.mojoCost).toBe("number");
  });

  it("staminaCost is an integer", () => {
    expect(typeof attack.staminaCost).toBe("number");
  });

 
});
