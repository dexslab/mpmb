var iFileName = "ha-gunslinger.js";
RequiredSheetVersion("13.0.6");
SourceList["HA:G"] = {
    name: "Heavy Arms: Gunslinger",
    abbreviation: "HA:G",
    group: "Heavy Arms",
    url: "https://www.heavyarms.com/products/gunslinger?variant=40542343102628",
    date: "2021/08/30",
};

AmmoList["ha:rounds"] = {
    name: "Rounds",
    source: ["HA-Gunslinger", 10],
    icon: "Bullets",
    weight: 0.05,
    invName: "Rounds",
    alternatives: [
        "ha:rounds",
        /^(?=.*rounds).*$/i,
        "ha:heat_seekers",
        /^(?=.*heat)(?=.*seekers).*$/i,
        "ha:incendiary",
        /^(?=.*incendiary).*$/i,
        "ha:silvered",
        /^(?=.*silvered).*$/i,
    ],
};

GearList["ha:rounds"] = {
    infoname: "Rounds, (20) [3 gp]",
    name: "Rounds",
    amount: 20,
    weight: 1,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:heat_seekers"] = {
    name: "Heat Seekers",
    source: ["HA-Gunslinger", 10],
    icon: "Bullets",
    weight: 0.05,
    invName: "Heat Seekers",
    alternatives: ["heat seekers", /^(?=.*heat)(?=.*seekers).*$/i],
};

GearList["ha:heat_seekers"] = {
    infoname: "Heat Seekers, (20) [100 gp]",
    name: "Heat Seekers",
    amount: 20,
    weight: 1,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:incendiary"] = {
    name: "Incendiary",
    source: ["HA-Gunslinger", 10],
    icon: "Bullets",
    weight: 0.05,
    invName: "Incendiary",
    alternatives: ["incendiary", /^(?=.*incendiary).*$/i],
};

GearList["ha:incendiaries"] = {
    infoname: "Incendiaries, (20) [100 gp]",
    name: "Incediaries",
    amount: 20,
    weight: 1,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:silvered"] = {
    name: "Silvered",
    source: ["HA-Gunslinger", 10],

    icon: "Bullets",
    weight: 0.05,
    invName: "Round, Silvered",
    alternatives: ["silvered", /^(?=.*silvered).*$/i],
};

GearList["ha:silvered"] = {
    infoname: "Silvered, (20) [50 gp]",
    name: "Silvered",
    amount: 20,
    weight: 1,
    type: "ammunition",
    source: ["HA:G", 10],
};

AmmoList["ha:shotshells"] = {
    name: "Shotshells",
    source: ["HA-Gunslinger", 10],

    icon: "Bullets",
    weight: 0.05,
    display: 6,
    invName: "Shotshells",
    alternatives: [
        "shotshells",
        "shotgun shell",
        /^(?=.*shotshells).*$/i,
        "ha:heat_seekers",
        /^(?=.*heat)(?=.*seekers).*$/i,
        "ha:incendiary",
        /^(?=.*incendiary).*$/i,
        "ha:silvered",
        /^(?=.*silvered).*$/i,
    ],
};

GearList["ha:shotshells"] = {
    infoname: "Shotshells, (20) [3 gp]",
    name: "Shotshells",
    amount: 20,
    weight: 1,
    type: "ammunition",
    source: ["HA:G", 10],
};

WeaponsList["ha:pistol_hand_cannon"] = {
    name: "Pistol, hand cannon",
    source: ["HA:G", 10],

    regExpSearch: /^(?=.*pistol)(?=.*hand)(?=.*cannon).*$/i,
    ability: 2,
    type: "Firearms",
    list: "firearm",
    damage: [1, 8, "piercing"],
    range: "60/180 ft",
    description: "Ammunition, kick (12), loud, reload (6 shots)",
    weight: 3,
    modifiers: [1, ""],
    ammo: "ha:rounds",
};

WeaponsList["ha:pistol_side_arm"] = {
    name: "Pistol, Sidearm",
    source: ["HA:G", 10],

    ability: 2,
    regExpSearch: /^(?=.*pistol)(?=.*sidearm).*$/i,
    type: "Firearms",
    list: "firearm",
    damage: [1, 6, "piercing"],
    range: "40/120 ft",
    description: "Ammunition, loud, pocket , reload (6 shots)",
    weight: 2,
    modifiers: [1, ""],
    ammo: "ha:rounds",
};

WeaponsList["ha:rifle"] = {
    name: "Rifle, repeating",
    source: ["HA:G", 10],
    ability: 2,
    regExpSearch: /^(?=.*rifle)(?=.*repeating).*$/i,
    type: "Firearms",
    list: "firearm",
    damage: [1, 10, "piercing"],
    range: "150/450 ft",
    description: "Ammunition, loud, reload (6 shots), two-handed",
    weight: 8,
    modifiers: [1, ""],
    ammo: "ha:rounds",
};

WeaponsList["ha:shotgun_repeating"] = {
    name: "Shotgun, repeating",
    source: ["HA:G", 10],
    regExpSearch: /^(?=.*shotgun)(?=.*repeating).*$/i,
    type: "Firearms",
    list: "firearm",
    ability: 2,
    damage: [1, 10, "piercing"],
    range: "20/30 ft",
    description: "Ammunition, loud, reload (6 shots), special, two-handed",
    weight: 7,
    modifiers: [1, ""],
    ammo: "ha:shotshells",
    special: true,
};

WeaponsList["ha:shotgun_sawed"] = {
    name: "Shotgun, sawed-off",
    source: ["HA:G", 10],
    regExpSearch: /^(?=.*shotgun)(?=.*sawed).*$/i,
    type: "Firearms",
    ability: 2,
    damage: [1, 10, "piercing"],
    range: "10/20 ft",
    description: "Ammunition, kick (14), loud, reload (2 shots), special",
    list: "ranged",
    weight: 7,
    modifiers: [1, ""],
    ammo: "ha:shotshells",
    special: true,
};

MagicItemsList["ace of spades"] = {
    name: "Ace of Spades",
    sortname: "Ace of Spades",
    nameTest: /^(?=.*ace)(?=.*spade).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "very rare",
    weight: 3,
    allowDuplicates: true,
    description: "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        'I gain a +2 bonus to attack and damage rolls made with\n this magic weapon.\n\n Firefly. When I kill a hostile creature with a critical\n hit using this weapon, the target explodes in a sudden conflagration,\n as if a fireball spell were cast centered on it.\n\n Inscription: "Read \'em and weep"',
};

MagicItemsList["bad juju"] = {
    name: "Bad Juju",
    sortname: "Bad Juju",
    nameTest: /^(?=.*bad)(?=.*juju).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "rare",
    weight: 3,
    allowDuplicates: true,
    attunement: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Ghostbuster. While holding this weapon, I can\n see into the Ethereal Plane within 60 feet of me.\n Furthermore, attacks with this weapon can hit targets on\n the Ethereal Plane.",
};

MagicItemsList["boomstick"] = {
    name: "Boomstick",
    sortname: "Boomstick",
    nameTest: /^(?=.*boomstick).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "rare",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        'I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Fireball. While I am holding this weapon, I can\nuse my action to cast the fireball spell from it. Once used,\nthis property can\'t be used again until the following dawn.\n\nInscription: "Shop smart"',
};

MagicItemsList["borealis"] = {
    name: "Borealis",
    sortname: "Borealis",
    nameTest: /^(?=.*borealis).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "uncommon",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Prism. While I am holding this weapon, I can take\n a bonus action to change its damage type to acid, cold,\n fire, lightning, or poison. This effect lasts until I use this\n property again or I dismiss it as a bonus action.",
};

MagicItemsList["good medicine"] = {
    name: "Good Medicine",
    sortname: "Good Medicine",
    nameTest: /^(?=.*good)(?=.*medicine).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "rare",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description:
        "I gain a +1 bonus to attack and damage rolls made with this magic weapon. When I score a critical hit with this weapon during combat, I can forgo rolling any number of additional damage dice granted by my Bad Medicine feature. When I do so, choose another creature within 10 feet of the original target and roll the forgone dice. The chosen creature regains hit points equal to the result + my Wisdom modifier (minimum of 1 hit point). This property has no effect on Constructs or Undead.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon. When I score a critical hit with this\n weapon during combat, I can forgo rolling any number\n of additional damage dice granted by my Bad Medicine\n feature. When I do so, choose another creature within\n 10 feet of the original target and roll the forgone dice.\n The chosen creature regains hit points equal to the result\n + my Wisdom modifier (minimum of 1 hit point). This\n property has no effect on Constructs or Undead.\n Inscription: \u201CJust what the doctor ordered\u201D",
};

MagicItemsList["iconoclast"] = {
    name: "Iconoclast",
    sortname: "Iconoclast",
    nameTest: /^(?=.*iconoclast).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "very rare",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +2 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        'I gain a +2 bonus to attack and damage rolls made with\n this magic weapon.\n\n Kingslayer. When I score a critical hit with this weapon,\nif the target has the Legendary Resistance trait, it loses\none use of that trait if it has any uses remaining.\n\nInscription: "If it ain\'t broke, break it"',
};

MagicItemsList["lawgiver"] = {
    name: "Lawgiver",
    sortname: "Lawgiver",
    nameTest: /^(?=.*lawgiver).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "rare",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n   \n Death Sentence. If a creature that isn't attuned to this\nweapon attempts to make an attack with it, the weapon\ncasts the disintegrate spell on that creature before the attack\nis made.",
};

MagicItemsList["little rascal"] = {
    name: "Little Rascal",
    sortname: "Little Rascal",
    nameTest: /^(?=.*little)(?=.*rascal).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "uncommon",
    weight: 2,
    attunement: true,
    allowDuplicates: true,
    description:
        "Underdog. When I hit a Large or larger creature with an attack using this weapon, the target takes an extra 1d6 damage of the weapon's type.",
    descriptionFull:
        "Underdog. When I hit a Large or larger creature with\n an attack using this weapon, the target takes an extra 1d6\n damage of the weapon's type.",
};

MagicItemsList["old faithful"] = {
    name: "Old Faithful",
    sortname: "Old Faithful",
    nameTest: /^(?=.*old)(?=.*faithf).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "uncommon",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Sureshot. I ignore the loading and reload properties\nof this weapon.",
};

MagicItemsList["pilgrims path"] = {
    name: "Pilgrim's Path",
    sortname: "Pilgrim's Path",
    nameTest: /^(?=.*pilgram)(?=.*path).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "very rare",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description:
        "I gain a +2 bonus to attack and damage rolls made with this magic weapon. Whenever score a critical hit with it, I can regain 2 expended grit points, instead of 1.",
    descriptionFull:
        "I gain a +2 bonus to attack and damage rolls made with\n this magic weapon. Whenever score a critical hit with it,\n I can regain 2 expended grit points, instead of 1.",
};

MagicItemsList["showstopper"] = {
    name: "Showstopper",
    sortname: "Showstopper",
    nameTest: /^(?=.*showstopper).*$/i,
    source: ["HA:G", 12],

    type: "weapon",
    rarity: "legendary",
    weight: 7,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +3 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +3 bonus to attack and damage rolls made with\n this magic weapon.\n\n Curtain Call. When I score a critical hit with this\n weapon, the target must succeed on a Constitution saving\n throw or be reduced to 0 hit points.\n\n Inscription: \u201CShow's over\u201D",
};

MagicItemsList["the long view"] = {
    name: "The Long View",
    sortname: "Long View, The",
    nameTest: /^(?=.*long)(?=.*view).*$/i,
    source: ["HA:G", 12],
    type: "weapon",
    rarity: "uncommon",
    weight: 3,
    attunement: true,
    allowDuplicates: true,
    description: "I gain a +1 bonus to attack and damage rolls made with this magic weapon.",
    descriptionFull:
        "I gain a +1 bonus to attack and damage rolls made with\n this magic weapon.\n\n Hawkeye. Attacking at long range doesn't impose disadvantage\non my ranged attack rolls made with this weapon.",
};

FeatsList["bully"] = {
    name: "Bully",
    source: ["HA:G", 10],
    prerequisite: "Proficiency with at least one firearm",
    allowDuplicates: true,
    description:
        "I am adept at using firearms in close quarters, gaining the following benefits:\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on my ranged attack rolls.\n \u2022 Once per turn, when I hit a creature within 10 feet of me with a ranged attack using a firearm, I can force the target to make a Strength saving throw (DC equal to 8 + my proficiency bonus + my Dexterity modifier). On a failed save, I push the target 5 feet away from I and knock it prone.",
    descriptionFull:
        "I am adept at using firearms in close quarters, gaining the following benefits:\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on my ranged attack rolls.\n \u2022 Once per turn, when I hit a creature within 10 feet of me with a ranged attack using a firearm, I can force the target to make a Strength saving throw (DC equal to 8 + my proficiency bonus + my Dexterity modifier). On a failed save, I push the target 5 feet away from I and knock it prone.",
};

FeatsList["marksman"] = {
    name: "Marksman",
    source: ["HA:G", 10],
    prerequisite: "",
    allowDuplicates: true,
    description:
        "I am an expert at hitting my mark with ranged weapons, gaining the following benefits:\n \u2022 Being prone doesn't impose disadvantage on my ranged weapon attacks.\n \u2022 Attacking a prone target doesn't impose disadvantage on my ranged weapon attack rolls if the target is within my weapon's normal range.\n \u2022 If I haven't moved since the start of my turn, I can use a bonus action to steady my aim. Until the end of my next turn, I have advantage on the next ranged weapon attack roll I make. This effect ends early if I move or take damage.",
    descriptionFull:
        "I am an expert at hitting my mark with ranged weapons, gaining the following benefits:\n \u2022 Being prone doesn't impose disadvantage on my ranged weapon attacks.\n \u2022 Attacking a prone target doesn't impose disadvantage on my ranged weapon attack rolls if the target is within my weapon's normal range.\n \u2022 If I haven't moved since the start of my turn, I can use a bonus action to steady my aim. Until the end of my next turn, I have advantage on the next ranged weapon attack roll I make. This effect ends early if I move or take damage.",
};

FeatsList["pistolero"] = {
    name: "Pistolero",
    source: ["HA:G", 10],
    prerequisite: "Proficiency with pistols",
    allowDuplicates: true,
    description:
        "my speed and skill with a six-gun is unmatched. I gain the following benefits:\n \u2022 When I take the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a pistol I am holding in my other hand.\n \u2022 If I am surprised at the beginning of combat and aren't incapacitated, I can act normally on my first turn, but only if I attack with a pistol before doing anything else on that turn.",
    descriptionFull:
        "my speed and skill with a six-gun is unmatched. I gain the following benefits:\n \u2022 When I take the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a pistol I am holding in my other hand.\n \u2022 If I am surprised at the beginning of combat and aren't incapacitated, I can act normally on my first turn, but only if I attack with a pistol before doing anything else on that turn.",
};

ClassList["gunslinger"] = {
    name: "Gunslinger",
    regExpSearch: /^(?=.*gunslinger).*$/i,
    source: ["HA:G", 5],
    primaryAbility: "Dexterity",
    prereqs: "Dexterity 13 and Wisdom 13",
    die: 8,
    improvements: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    saves: ["Dex", "Cha"],
    skills: [
        "\n\n " +
            toUni("Gunslinger") +
            ": Choose two from Animal Handling, Athletics, Insight, Intimidation, Perception, Sleight of Hand, Stealth, and Survival",
    ],
    toolProfs: {
        primary: [],
        secondary: [], // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
    },

    armor: [
        [true, false, false, false],
        [true, false, false, false],
    ],

    weapons: [
        [true, false, ["firearms", "whips"]],
        [true, false, ["firearms", "whips"]],
    ],

    equipment:
        "Gunslinger starting equipment:\n  \u2022 leather armor and a simple weapon of my choice;\n  \u2022 a sidearm and 20 rounds;\n  \u2022 (a) a hand cannon and 20 rounds or (b) a repeating rifle and 20 rounds or (c) a sawed-off shotgun and 20 shotshells;\n  \u2022 A dungeoneer's pack -or- an explorer's pack.\n\nIf I forgo this starting equipment, as well as the items offered by my background, I start with 6d4 \xD7 10 gp to buy my equipment",
    subclasses: [
        "Gunslinger Trails",
        ["maverick", "beastrider", "enforcer", "preacher", "revelator"],
    ],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],

    features: {
        deadeye: {
            name: "Deadeye",
            source: ["HA:G", 6],
            minlevel: 1,
            description:
                "In combat, I find my flow with deadly efficiency.\n Whenever I hit a creature with a ranged weapon attack,\n the lowest number I must roll on the d20 to score a critical\n hit with subsequent ranged weapon attacks decreases\n by one. I can gain this benefit multiple times, but it can't\n reduce the threshold for scoring a critical hit below 16.\n I lose this benefit if I miss with an attack, I become\n incapacitated, or if my turn ends and I haven't\n attacked a creature since my last turn.\n From 14th level, whenever I gain this benefit, I\n can gain it one additional time, but it still can't reduce the\n threshold for scoring a critical hit below 16.",
        },
        "bad medicine": {
            name: "Bad Medicine",
            source: ["HA:G", 6],
            minlevel: 1,
            description:
                "I can roll one additional weapon damage die when determining\n the extra damage for a critical hit with a firearm.\n The number of additional dice increases as I gain levels\n in this class, as shown in the Bad Medicine column of the\n Gunslinger table.",
        },
        grit: {
            name: "Grit",
            source: ["HA:G", 6],
            minlevel: 2,
            description:
                "The hard-fought battles of my past have instilled in I a\n wellspring of resolve, which is represented by grit points.\n I have a number of grit points equal to 1 + my Wisdom\n modifier (minimum of 1 point).\n I can spend these points to fuel various grit features.\n I start knowing four such features: Buck Up, Bullet\n Time, Covering Fire, and Dodge Roll. I learn more grit\n features as I gain levels in this class.\n When I spend a grit point, it is unavailable until I\n regain it. I regain 1 expended grit point whenever I\n score a critical hit against a hostile creature, and I regain\n all expended grit points when I finish a short or\n long rest.",
            choices: ["buck up", "bullet time", "covering fire", "dodge roll"],

            choicesNotInMenu: true,
            "buck up": {
                name: "Buck up",
                description:
                    "I can spend 1 grit point as a bonus action to spend one\n or more Hit Dice, following the normal rules for regaining\n hit points using Hit Dice. The maximum number of Hit\n Dice I can spend each time I use this feature equals\n my proficiency bonus.", //required;
            },

            "bullet time": {
                name: "Bullet Time",
                description:
                    "When a creature I can see makes a ranged attack against\n me, I can spend 1 grit point to impose disadvantage on\n the attack roll.",
            },
            "covering fire": {
                name: "Covering Fire",
                description:
                    "While I am holding a firearm, when a creature I can\n see within 60 feet of me makes an attack against a creature\n other than me, I can spend 1 grit point as a reaction\n to impose disadvantage on the attack roll.",
            },
            "dodge roll": {
                name: "Protection Fighting Style",
                description:
                    "When a creature I can see makes a ranged attack against\n me, I can spend 1 grit point to impose disadvantage on\n the attack roll.",
            },
        },
        "extra attack": {
            name: "Extra Attack",
            source: ["HA:G", 6],
            minlevel: 5,
            description:
                "I can attack twice, instead of once, whenever I take the Attack action on my turn.",
        },
        "lock n load": {
            name: "Lock N' Load",
            source: ["HA:G", 6],
            minlevel: 5,
            description:
                "I can load or reload a firearm I am holding as part of my move or my action.",
        },
        "ace in the hole": {
            name: "Ace in the Hole",
            source: ["HA:G", 6],
            minlevel: 7,
            description:
                "Once per turn when I miss with an attack roll, I can spend 1 grit point to add my Wisdom modifier to the roll, potentially turning the miss into a hit.",
        },
        "born lucky": {
            name: "Born Lucky",
            source: ["HA:G", 6],
            minlevel: 9,
            description:
                "When I am forced to make a saving throw, I can spend 1 grit point to make it with advantage.",
        },
        "frontier justice": {
            name: "Frontier Justice",
            source: ["HA:G", 6],
            minlevel: 11,
            description:
                "When a creature I can see willingly moves into a space within 10 feet of me while I am wielding a firearm, I can use my reaction to make one ranged weapon attack against that creature.",
        },
        skullcracker: {
            name: "Skullcracker",
            source: ["HA:G", 6],
            minlevel: 13,
            description:
                "When I deal damage with a ranged weapon attack to a creature that is concentrating, the target has disadvantage on the saving throw it makes to maintain its concentration. If the attack is a critical hit, the target automatically fails this saving throw.",
        },
        "cheat death": {
            name: "Cheat Death",
            source: ["HA:G", 6],
            minlevel: 15,
            description:
                "When I am reduced to 0 hit points but not killed outright, I can spend 1 grit point to drop to 1 hit point instead. Each time I do so, I gain 1 level of exhaustion.",
        },
        "true grit": {
            name: "True Grit",
            source: ["HA:G", 6],
            minlevel: 18,
            description:
                "When I start my turn and have no grit points remaining, I regain 1 grit point.",
        },
        "golden gun": {
            name: "Golden Gun",
            source: ["HA:G", 6],
            minlevel: 20,
            description:
                "I have advantage on ranged weapon attack rolls while the threshold for scoring a critical hit is 16 or lower.",
        },
    },
};

AddSubClass("gunslinger", "ha:gsmaverick", {
    regExpSearch: /^(?=.*maverick).*$/i,
    subname: "Maverick",
    source: ["HA:G", 7],
    fullname: "Maverick",
    features: {
        subclassfeature1: {
            name: "Wild Card",
            source: ["HA:G", 7],
            minlevel: 3,
            description:
                "my inscrutable manner veils my intentions. I gain\n proficiency in the Intimidation skill. If I already have\n this proficiency, I gain proficiency in the Persuasion\n skill or one skill of my choice from the gunslinger skill list\n instead. my proficiency bonus is doubled for any ability\n check I make against an intelligent creature that uses\n Intimidation while I am carrying a weapon.",
        },
        subclassfeature2: {
            name: "Snapshot",
            source: ["HA:G", 7],
            minlevel: 3,
            description:
                "When I roll initiative, I can spend 1 grit point as a\n reaction to draw a firearm and make one ranged attack\n with it against a creature or object I can see.",
        },
        subclassfeature3: {
            name: "Rough and Tumble",
            source: ["HA:G", 7],
            minlevel: 6,
            description:
                "I can use a bonus action to dash an object I am holding\n against a creature within 5 feet of me. The target must\n succeed on a Constitution saving throw (DC equal to 8 +\n my proficiency bonus + my Dexterity modifier) or be\n blinded until the end of my turn.",
        },
        subclassfeature4: {
            name: "Notorious",
            source: ["HA:G", 7],
            minlevel: 10,
            description:
                "Dramatic tales of my virtue or villainy have traveled far\n enough to establish a well-known alias. Whenever I\n make a Charisma check against a creature that is aware\n of my alias, I can treat a d20 roll of 9 or lower as a 10.",
        },
        subclassfeature5: {
            name: "High Noon",
            source: ["HA:G", 7],
            minlevel: 17,
            description:
                "I can target up to six creatures or objects I can see\n with my Snapshot, making a separate attack roll for each.",
        },
    },
});

AddSubClass("gunslinger", "ha:gsbeastrider", {
    regExpSearch: /^(?=.*beastrider).*$/i,
    subname: "Beastrider",
    source: ["HA:G", 8],
    fullname: "Beastrider",
    features: {
        subclassfeature1: {
            name: "To the Manor Born",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "Whether through hard work or natural talent, I possess\n a level and breadth of skill few can match. I gain proficiency\n in two skills of my choice from the gunslinger skill\n list, one of which should be Animal Handling if I am not\n already proficient in it.\n In addition, choose one of my skill proficiencies. my\n proficiency bonus is doubled for any ability check I make\n that uses the chosen skill.",
        },
        subclassfeature2: {
            name: "Broncbuster",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "As an action, I can touch a Beast that is at least one\n size larger than I and that has an appropriate anatomy\n to serve as a mount. It must succeed on a Wisdom saving\n throw (DC equal to 8 + my proficiency bonus + my\n Wisdom modifier) or become charmed by I until I\n dismiss it, I use this feature to charm a different creature,\n or I die. While charmed in this way, the target is\n friendly to I and acts under my control while I am\n riding it. A creature that successfully saves against this\n effect is immune to it for 24 hours, after which time it can\n be affected again. A creature I am fighting automatically\n succeeds on the saving throw. See book for more details.",
        },
        subclassfeature3: {
            name: "Rough Rider",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "Whenever I take the Attack action, I can forgo one of\n the attacks from that action to command a mount I am\n controlling to use its action to make one weapon attack,\n choosing from those in its stat block.",
        },
        subclassfeature4: {
            name: "Rider's Reflexes",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "When a creature I can see hits my mount with an attack,\n I can spend 1 grit point as a reaction to halve the\n attack's damage against it.",
        },
        subclassfeature5: {
            name: "Blazing Saddles",
            source: ["HA:G", 8],
            minlevel: 10,
            description:
                "While I am mounted and aren't incapacitated, my\n mount ignores difficult terrain. Furthermore, whenever\n my mount takes the Dash action, it gains additional movement\n equal to my walking speed.",
        },
        subclassfeature6: {
            name: "Air Superiority",
            source: ["HA:G", 8],
            minlevel: 17,
            description:
                "Bestride my mount, I soar, I am the eagle. When\n I use my Covering Fire while flying, I can make\n one ranged weapon attack against the attacking creature\n as part of the same reaction, provided the target is within\n my weapon's range.",
        },
    },
});

AddSubClass("gunslinger", "ha:gsenforcer", {
    regExpSearch: /^(?=.*enforcer).*$/i,
    subname: "Enforcer",
    source: ["HA:G", 8],
    fullname: "Enforcer",
    features: {
        subclassfeature1: {
            name: "Bloodhound",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "I learn the telltale signs of dishonesty and evasiveness.\n I gain proficiency in the Insight skill. If I already have\n this proficiency, I gain proficiency in another skill of my\n choice from the gunslinger skill list instead. my proficiency\n bonus is doubled for any ability check I make to determine\n the motive or intent of a Humanoid that uses Insight.",
        },
        subclassfeature2: {
            name: "Double Tough",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "I know how to roll with the punches, so to speak.\n Whenever I regain hit points during combat, I gain\n the same number of temporary hit points. These temporary\n hit points last until the end of my next turn.",
        },
        subclassfeature3: {
            name: "Unforgiven",
            source: ["HA:G", 8],
            minlevel: 3,
            description:
                "If my first attack on my turn hits a creature that attacked\n I or targeted I with a spell or other harmful\n effect since the end of my last turn, I can roll one additional\n weapon damage die and add it to the damage of\n my attack.",
        },
        subclassfeature4: {
            name: "Sharp Eye",
            source: ["HA:G", 8],
            minlevel: 6,
            description:
                "Experience and necessity have honed my ability to\n discern my surroundings at a glance. I can take the\n Search action as a bonus action on my turn.\n In addition, while I am resting, or I am engaged in\n another activity while traveling (such as foraging, navigating,\n or tracking), I remain alert to danger.",
        },
        subclassfeature5: {
            name: "Hard Case",
            source: ["HA:G", 8],
            minlevel: 10,
            description:
                "While I have temporary hit points, I can't be charmed\n or frightened. Furthermore, when I use my Buck Up,\n I can make a saving throw to end one effect on myself\n that is causing I to be charmed or frightened.",
        },
        subclassfeature6: {
            name: "King of the Hill",
            source: ["HA:G", 8],
            minlevel: 17,
            description:
                "Once per turn, I can spend 1 grit point to use my\n Frontier Justice feature without using my reaction.",
        },
    },
});

AddSubClass("gunslinger", "ha:gspreacher", {
    regExpSearch: /^(?=.*preacher).*$/i,
    subname: "Preacher",
    source: ["HA:G", 9],
    fullname: "Preacher",
    features: {
        subclassfeature1: {
            name: "Man of the Cloth",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "I have proven myself worthy to take my god's holy\n vows. I gain proficiency in the Religion skill. If I already\n have this proficiency, I gain proficiency in one\n skill of my choice from the gunslinger skill list instead.\n In addition, I learn two cantrips of my choice from\n the cleric spell list. Wisdom is my spellcasting ability for\n these spells.",
        },
        subclassfeature2: {
            name: "Sacrifice",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "Through the ardency of my faith, I can heal others at\n a cost to myself. When I use my Buck Up, I can\n choose another creature within 60 feet of me that I\n can see to regain hit points instead of me. For each Hit\n Die spent, roll the die and add my Wisdom modifier to it.\n The target regains hit points equal to the total (minimum\n of 1 hit point). This feature has no effect on Constructs\n or Undead.",
        },
        subclassfeature3: {
            name: "Strength of Spirit",
            source: ["HA:G", 7],
            minlevel: 6,
            description:
                "my unwavering resolve is a balm to my spirit. At the end\n of a long rest, I regain all spent Hit Dice, instead of up\n to half my total number of them.",
        },
        subclassfeature4: {
            name: "Cleanse",
            source: ["HA:G", 7],
            minlevel: 10,
            description:
                "Whenever I restore hit points to a creature using my\n Buck Up or my Sacrifice, it also ends the blinded, deafened,\n and poisoned conditions on the target, and cures\n any diseases or poisons affecting it.",
        },
        subclassfeature5: {
            name: "Revitalize",
            source: ["HA:G", 7],
            minlevel: 17,
            description:
                "I can target a creature that has been dead for no longer\n than one minute with my Sacrifice. When I do so, the\n target returns to life if its soul is free and willing, regaining\n hit points from Sacrifice normally. This ability can't restore\n to life a creature that has died of old age or is a Construct\n or an Undead, nor can it restore any missing body parts. A\n creature can be returned to life in this way no more than\n once between long rests.",
        },
    },
});

AddSubClass("gunslinger", "ha:gsrevelator", {
    regExpSearch: /^(?=.*revelator).*$/i,
    subname: "Revelator",
    source: ["HA:G", 9],
    fullname: "Revelator",
    features: {
        subclassfeature1: {
            name: "Path of the Righteous",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "I arm myself with knowledge of evil and its crooked\n ways. I gain proficiency in one of the following skills of\n my choice: Arcana, History, or Religion. my proficiency\n bonus is doubled for any Intelligence check I make to\n recall information about Fiends or Undead.",
        },
        subclassfeature2: {
            name: "Consecrate Arms",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "As an action, I can touch a willing creature and utter\n a prayer to sanctify it. Whenever that creature hits with a\n weapon attack, the attack deals radiant damage instead of\n the weapon's normal damage type. This benefit lasts until\n the creature dismisses it (no action required), the creature\n dies, or it finishes a short or long rest.\n I can use this feature a number of times equal to my\n Wisdom modifier (minimum of once), and I regain all\n expended uses when I finish a long rest.",
        },
        subclassfeature3: {
            name: "Baptism of Fire",
            source: ["HA:G", 9],
            minlevel: 3,
            description:
                "With holy fire I deliver judgment unto my enemies.\n When I hit a creature with a ranged weapon attack while\n benefiting from my Consecrate Arms, I can spend 1\n grit point to deal 1d8 radiant damage to the target, in addition\n to the weapon's damage. The damage increases by\n 1d8 if the target is a Fiend or an Undead.",
        },
        subclassfeature4: {
            name: "Dead Reckoning",
            source: ["HA:G", 9],
            minlevel: 6,
            description:
                "I develop a keen instinct for the presence or influence\n of outsiders and undead. I am always under the effect\n of a detect evil and good spell, and I always know when\n I am in the lair of an Aberration, Celestial, Elemental,\n Fey, Fiend, or Undead.",
        },
        subclassfeature5: {
            name: "Spirit Shackles",
            source: ["HA:G", 9],
            minlevel: 10,
            description:
                "When a creature I can see within 60 feet of me attempts\n to travel using teleportation or by extradimensional or interplanar\n means, I can spend 1 grit point as a reaction\n to force the creature to make a Charisma saving throw\n (DC equal to 8 + my proficiency bonus + my Wisdom\n modifier). On a failed save, the attempt at travel fails and\n is wasted.",
        },
        subclassfeature6: {
            name: "Ashes to Ashes",
            source: ["HA:G", 9],
            minlevel: 17,
            description:
                "Whenever I deal damage to a Fiend or an Undead with\n a weapon attack while benefiting from my Consecrate\n Arms, the target is destroyed if the damage reduces it to\n 50 hit points or fewer.",
        },
    },
});
