// Superhero constructor function
function Superhero(name, secretIdentity, powers, weakness) {
  // Instance properties
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.powers = powers;
  this.weakness = weakness;
}

// Prototypes
Superhero.prototype.usePower = function (powerName) {
  console.log(`${this.name} uses ${powerName}!`);
};

Superhero.prototype.revealIdentity = function () {
  console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

// Superheroes array
const superheroes = [
  new Superhero(
    "SuperCoder",
    "Alice Smith",
    ["coding", "debugging", "problem-solving"],
    "coffee addiction"
  ),
  new Superhero(
    "MegaMaker",
    "John Doe",
    ["building", "inventing", "designing"],
    "perfectionism"
  ),
  new Superhero(
    "TechTitan",
    "Emily Brown",
    ["hacking", "robotics"],
    "overheating"
  ),
];

superheroes.forEach((hero) => {
  hero.revealIdentity();
  hero.usePower(hero.powers[0]);
});

let superheroNames = superheroes.map((hero) => hero.name);
console.log("Superhero Names:", superheroNames);

let heroesWithCodingPower = superheroes.filter((hero) =>
  hero.powers.includes("coding")
);
console.log(
  "Heroes with Coding Power:",
  heroesWithCodingPower.map((hero) => hero.name)
);

// Supervillains array
const supervillains = [
  new Superhero(
    "CodeDestroyer",
    "Michael Johnson",
    ["coding destruction", "debugger sabotage"],
    "antivirus software"
  ),
  new Superhero(
    "BugMaker",
    "Jane Doe",
    ["creating bugs", "crashing systems"],
    "perfect code"
  ),
  new Superhero(
    "VirusViper",
    "Samuel Clark",
    ["spreading viruses", "phishing"],
    "firewall"
  ),
];

supervillains.forEach((villain) => {
  villain.revealIdentity();
  villain.usePower(villain.powers[0]);
});

let supervillainNames = supervillains.map((villain) => villain.name);
console.log("Supervillain Names:", supervillainNames);

let villainsWithCodingDestructionPower = supervillains.filter((villain) =>
  villain.powers.includes("coding destruction")
);
console.log(
  "Villains with Coding Destruction Power:",
  villainsWithCodingDestructionPower.map((villain) => villain.name)
);
