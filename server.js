const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]"
});

bot.variables({
  wish: "0",
  welcomechannel: "",
  welcomemessage: "",
  prefix: "m!",
  AFK: "off/",
  time: "",
  chatbot: ""
});
bot.joinCommand({
  channel: "$getServerVar[welcomechannel]",
  code: `
        $title[Welcome to $serverName[$guildID]!]
        $description[
        $username
        
        $getServerVar[welcomemessage]
        
        ]
        $thumbnail[$serverIcon]
        $addTimestamp
        $color[#2F3136]
        `
});
bot.status({
  text: "Mona",
  type: "WATCHING",
  time: 12
});
bot.status({
  text: "over $allMembersCount users",
  type: "WATCHING",
  time: 12
});
bot.status({
  text: "$serverCount guilds",
  type: "WATCHING",
  time: 12
});
bot.status({
  text: "mortals type m!help",
  type: "WATCHING",
  time: 12
});
bot.onJoined();
bot.botJoinCommand({
  channel: "$systemChannelID",
  code: `
    $title[Thanks for Adding me!]
    $description[
    My Prefix is \`m!\`
    
    You can start by doing \`m!help\`
    
    You can change my prefix by using \`m!prefix\`
    ]
   $color[#E8C215]
    $addTimestamp`
});
bot.onGuildJoin();
bot.botJoinCommand({
  channel: "803151208805826582",
  code: `$title[I've Joined a Server. I now serve $serverCount servers!]
    $description[
    Server Name: $serverName
    Member count: $membersCount
    ]
    $color[#E8C215]
    $addTimestamp
    `
});
bot.onMessage();
const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {
  const folder = fs
    .readdirSync(`./commands/${files}/`)
    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {
    const command = require(`./commands/${files}/${commands}`);
    bot.command({
      name: command.name,
      aliases: command.aliases,
      code: command.code,
      nonPrefixed: command.nonPrefixed,
      usage: command.usage,
      description: command.description
    });
  }
}
bot.command({
  name: "eval",
  code: `
  $djsEval[$message]
  $onlyForIDs[483566837888450580;no]
  `
});
bot.command({
  name: "artifsalbedo",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
$textSplit[$sendMessage[{author:Albedo's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction1",
  code: `
 $editMessage[$message[1];{author:Albedo's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction2",
  code: `
 $editMessage[$message[1];{author:Albedo's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction3",
  code: `
$editMessage[$message[1];{author:Albedo's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190446263631873/3_4-set_Archaic_Petra.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction4",
  code: `
$editMessage[$message[1];{author:Albedo's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "suppaxiang",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReactionA,awaitReactionB,awaitReactionC,awaitReactionD;yes]
$textSplit[$sendMessage[{author:Xiangling's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReactionA",
  code: `
 $editMessage[$message[1];{author:Xiangling's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For dps xiangling type artifsxiang} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionB",
  code: `
 $editMessage[$message[1];{author:Xiangling's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For dps xiangling type artifsxiang}
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionC",
  code: `
$editMessage[$message[1];{author:Xiangling's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190402278096896/14_-_4-Set_Exile.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For dps xiangling type artifsxiang}
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionD",
  code: `
$editMessage[$message[1];{author:Xiangling's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190459173437440/7_-_Crimson_Witch__Gladiator.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For dps xiangling type artifsxiang}
]
 `
});

bot.command({
  name: "artifsxiang",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReactiona,awaitReactionb,awaitReactionc;yes]
$textSplit[$sendMessage[{author:Xiangling's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReactiona",
  code: `
 $editMessage[$message[1];{author:Xiangling's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support xiangling type suppaxiang} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionb",
  code: `
 $editMessage[$message[1];{author:Xiangling's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190459173437440/7_-_Crimson_Witch__Gladiator.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support xiangling type suppaxiang}
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionc",
  code: `
$editMessage[$message[1];{author:Xiangling's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support xiangling type suppaxiang}
]
 `
});

bot.command({
  name: "artifstartaglia",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReactionE,awaitReactionF,awaitReactionG;yes]
$textSplit[$sendMessage[{author:Tartaglia's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190436444766218/21_-_Ocean_Conqueror_4-set.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReactionE",
  code: `
 $editMessage[$message[1];{author:Tartaglia's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190436444766218/21_-_Ocean_Conqueror_4-set.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionF",
  code: `
 $editMessage[$message[1];{author:Tartaglia's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190435790454844/22_-_Ocean_Conqueror__Noblesse.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionG",
  code: `
$editMessage[$message[1];{author:Tartaglia's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190399660589056/13_-_Retracing_Bolide.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsganyu",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction10,awaitReaction11;yes]
$textSplit[$sendMessage[{author:Ganyu's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190410435493918/19_-_Wanderer27s_Troupe.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction10",
  code: `
 $editMessage[$message[1];{author:Ganyu's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190410435493918/19_-_Wanderer27s_Troupe.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction11",
  code: `
 $editMessage[$message[1];{author:Ganyu's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411869945897/20_-_Icebreaker.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifszhong",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction12,awaitReaction13,awaitReaction14;yes]
$textSplit[$sendMessage[{author:Tartaglia's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190399660589056/13_-_Retracing_Bolide.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction12",
  code: `
 $editMessage[$message[1];{author:Zhongli's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190399660589056/13_-_Retracing_Bolide.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Zhongli type suppazhong} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction13",
  code: `
 $editMessage[$message[1];{author:Zhongli's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Zhongli type suppazhong}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction14",
  code: `
$editMessage[$message[1];{author:Zhongli's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Zhongli type suppazhong}
]
 `
});

bot.command({
  name: "suppazhong",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReactionX,awaitReactionY;yes]
$textSplit[$sendMessage[{author:Zhongli's Support Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReactionX",
  code: `
 $editMessage[$message[1];{author:Zhongli's Support Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Zhongli type artifszhong} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionY",
  code: `
 $editMessage[$message[1];{author:Zhongli's Support Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190446263631873/3_4-set_Archaic_Petra.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Zhongli type artifszhong}
]
 `
});

bot.command({
  name: "artifsdiluc",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction32,awaitReaction33,awaitReaction34;yes]
$textSplit[$sendMessage[{author:Diluc's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction32",
  code: `
 $editMessage[$message[1];{author:Diluc's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction33",
  code: `
 $editMessage[$message[1];{author:Diluc's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190459173437440/7_-_Crimson_Witch__Gladiator.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction34",
  code: `
 $editMessage[$message[1];{author:Diluc's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsjean",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction40,awaitReaction41,awaitReaction42,awaitReaction201;yes]
$textSplit[$sendMessage[{author:Jean's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190411090591794/18_-_Viridescent_Venerer.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction40",
  code: `
 $editMessage[$message[1];{author:Jean's Support Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411090591794/18_-_Viridescent_Venerer.png {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/ | For DPS Jean type dpsajean)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction41",
  code: `
 $editMessage[$message[1];{author:Jean's Support Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/ | For DPS Jean type dpsajean)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction42",
  code: `
 $editMessage[$message[1];{author:Jean's Support Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Jean type dpsajean}
]
 `
});

bot.awaitedCommand({
  name: "awaitReaction201",
  code: `
 $editMessage[$message[1];{author:Jean's Artifact Guide:$authorAvatar} {image:https://cdn.discordapp.com/attachments/803189896742699009/806162417323212840/136197105_375799006944148_1588218059346851979_o.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "dpsajean",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReactionZ,awaitReactionV;yes]
$textSplit[$sendMessage[{author:Jean's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReactionZ",
  code: `
 $editMessage[$message[1];{author:Jean's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Jean type artifsjean} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReactionV",
  code: `
 $editMessage[$message[1];{author:Jean's Artifacts Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Jean type artifsjean}
]
 `
});

bot.command({
  name: "artifsklee",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction50,awaitReaction51,awaitReaction52;yes]
$textSplit[$sendMessage[{author:Klee's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction50",
  code: `
 $editMessage[$message[1];{author:Klee's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190457261096971/6_-_Crimson_Witch_of_Flames.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction51",
  code: `
 $editMessage[$message[1];{author:Klee's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190459173437440/7_-_Crimson_Witch__Gladiator.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction52",
  code: `
 $editMessage[$message[1];{author:Klee's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190410435493918/19_-_Wanderer27s_Troupe.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifskeqing",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction60,awaitReaction61,awaitReaction62,awaitReaction63;yes]
$textSplit[$sendMessage[{author:Keqing's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction60",
  code: `
 $editMessage[$message[1];{author:Keqing's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction61",
  code: `
 $editMessage[$message[1];{author:Keqing's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190402214789210/15_-_Thundering_Fury.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction62",
  code: `
$editMessage[$message[1];{author:Keqing's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190408808759326/17_-_Thundersoother.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction63",
  code: `
$editMessage[$message[1];{author:Keqing's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsmona",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction70,awaitReaction71;yes]
$textSplit[$sendMessage[{author:Mona's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190435790454844/22_-_Ocean_Conqueror__Noblesse.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction70",
  code: `
 $editMessage[$message[1];{author:Mona's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190435790454844/22_-_Ocean_Conqueror__Noblesse.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Mona type suppamona} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction71",
  code: `
 $editMessage[$message[1];{author:Mona's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190436444766218/21_-_Ocean_Conqueror_4-set.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Mona type suppamona}
]
 `
});

bot.command({
  name: "suppamona",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction80,awaitReaction81,awaitReaction82,awaitReaction83;yes]
$textSplit[$sendMessage[{author:Mona's Support Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction80",
  code: `
 $editMessage[$message[1];{author:Mona's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Mona type artifsmona} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction81",
  code: `
 $editMessage[$message[1];{author:Mona's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Mona type artifsmona}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction82",
  code: `
$editMessage[$message[1];{author:Mona's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190435790454844/22_-_Ocean_Conqueror__Noblesse.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Mona type artifsmona}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction83",
  code: `
$editMessage[$message[1];{author:Mona's Support Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190467369369610/9_-_4_set_Instructor.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Mona type artifsmona}
]
 `
});

bot.command({
  name: "artifsbeidou",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction90,awaitReaction91;yes]
$textSplit[$sendMessage[{author:Beidou's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction90",
  code: `
 $editMessage[$message[1];{author:Beidou's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction91",
  code: `
 $editMessage[$message[1];{author:Beidou's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsbennett",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction92,awaitReaction93;yes]
$textSplit[$sendMessage[{author:Bennet's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction92",
  code: `
 $editMessage[$message[1];{author:Bennet's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Bennet type dpsabennet} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction93",
  code: `
 $editMessage[$message[1];{author:Bennet's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Bennet type dpsabennet}
]
 `
});

bot.command({
  name: "dpsabennett",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction94,awaitReaction95;yes]
$textSplit[$sendMessage[{author:Bennet's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction94",
  code: `
 $editMessage[$message[1];{author:Bennet's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Bennet type artifsbennet} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction95",
  code: `
 $editMessage[$message[1];{author:Bennet's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190459173437440/7_-_Crimson_Witch__Gladiator.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Bennet type artifsbennet}
]
 `
});

bot.command({
  name: "artifschong",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction100,awaitReaction101;yes]
$textSplit[$sendMessage[{author:Chongyun's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png
} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction100",
  code: `
 $editMessage[$message[1];{author:Chongyun's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Chongyun type dpsachong} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction101",
  code: `
 $editMessage[$message[1];{author:Chongyun's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Chongyun type dpsachong}
]
 `
});

bot.command({
  name: "dpsachong",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction102,awaitReaction103;yes]
$textSplit[$sendMessage[{author:Chongyun's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction102",
  code: `
 $editMessage[$message[1];{author:Chongyun's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411869945897/20_-_Icebreaker.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Chongyun type artifschong} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction103",
  code: `
 $editMessage[$message[1];{author:Chongyun's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411869945897/20_-_Icebreaker.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Chongyun type artifschong}
]
 `
});

bot.command({
  name: "artifsfischl",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction110,awaitReaction111,awaitReaction112,awaitReaction113;yes]
$textSplit[$sendMessage[{author:Fischl's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction110",
  code: `
 $editMessage[$message[1];{author:Fischl's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Fischl type dpsafischl} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction111",
  code: `
 $editMessage[$message[1];{author:Fischl's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Fischl type dpsafischl}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction112",
  code: `
$editMessage[$message[1];{author:Fischl's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Fischl type dpsafischl}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction113",
  code: `
$editMessage[$message[1];{author:Fischl's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190402214789210/15_-_Thundering_Fury.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Fischl type dpsafischl}
]
 `
});

bot.command({
  name: "dpsafischl",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction114,awaitReaction114;yes]
$textSplit[$sendMessage[{author:Fischl's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction113",
  code: `
 $editMessage[$message[1];{author:Fischl's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Fischl type artifsfischl} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction114",
  code: `
 $editMessage[$message[1];{author:Fischl's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190404051632128/16_-_Thundering_Fury__Gladiator_Set.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Fischl type artifsfischl}
]
 `
});

bot.command({
  name: "artifsdiona",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction120,awaitReaction121,awaitReaction200;yes]
$textSplit[$sendMessage[{author:Diona's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction120",
  code: `
 $editMessage[$message[1];{author:Diona's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction121",
  code: `
 $editMessage[$message[1];{author:Diona's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction200",
  code: `
 $editMessage[$message[1];{author:Diona's Artifact Guide:$authorAvatar} {image:https://cdn.discordapp.com/attachments/803189896742699009/806162417323212840/136197105_375799006944148_1588218059346851979_o.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifskaeya",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction122,awaitReaction123,awaitReaction124;yes]
$textSplit[$sendMessage[{author:Kaeya's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction122",
  code: `
 $editMessage[$message[1];{author:Kaeya's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction123",
  code: `
 $editMessage[$message[1];{author:Kaeya's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction124",
  code: `
 $editMessage[$message[1];{author:Kaeya's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411869945897/20_-_Icebreaker.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifslisa",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction130,awaitReaction131,awaitReaction132;yes]
$textSplit[$sendMessage[{author:Lisa's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction130",
  code: `
 $editMessage[$message[1];{author:Lisa's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction131",
  code: `
 $editMessage[$message[1];{author:Lisa's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction132",
  code: `
 $editMessage[$message[1];{author:Lisa's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190402214789210/15_-_Thundering_Fury.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsningguang",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction133,awaitReaction134;yes]
$textSplit[$sendMessage[{author:Ningguang's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction133",
  code: `
 $editMessage[$message[1];{author:Ningguang's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction134",
  code: `
 $editMessage[$message[1];{author:Ningguang's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190446263631873/3_4-set_Archaic_Petra.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsnoelle",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction135,awaitReaction136;yes]
$textSplit[$sendMessage[{author:Noelle's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190399660589056/13_-_Retracing_Bolide.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction135",
  code: `
 $editMessage[$message[1];{author:Noelle's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190399660589056/13_-_Retracing_Bolide.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Noelle type suppanoelle} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction136",
  code: `
 $editMessage[$message[1];{author:Noelle's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For Support Noelle type suppanoelle}
]
 `
});

bot.command({
  name: "suppanoelle",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction137,awaitReaction138;yes]
$textSplit[$sendMessage[{author:Noelle's Support Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction137",
  code: `
 $editMessage[$message[1];{author:Noelle's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Noelle type artifsnoelle} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction138",
  code: `
 $editMessage[$message[1];{author:Noelle's Support Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/) | For DPS Noelle type artifsnoelle}
]
 `
});

bot.command({
  name: "artifsrazor",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction140,awaitReaction141;yes]
$textSplit[$sendMessage[{author:Razor's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction140",
  code: `
 $editMessage[$message[1];{author:Razor's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190462726406174/8_-_4-set_Gladiator.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction141",
  code: `
 $editMessage[$message[1];{author:Razor's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190456128634890/5_-_Bloodstained__Gladiator27s_Finale.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifssucrose",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣;awaitReaction142,awaitReaction143;yes]
$textSplit[$sendMessage[{author:Sucrose's Artifact Guide:$authorAvatar} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190411090591794/18_-_Viridescent_Venerer.png
} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction142",
  code: `
 $editMessage[$message[1];{author:Sucrose's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411090591794/18_-_Viridescent_Venerer.png} {color:RANDOM} {description:| Page 1/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction143",
  code: `
 $editMessage[$message[1];{author:Sucrose's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190467369369610/9_-_4_set_Instructor.png} {color:RANDOM} {description:| Page 2/2 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsxingqiu",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction144,awaitReaction145,awaitReaction146;yes]
$textSplit[$sendMessage[{author:Xingqui's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction142",
  code: `
 $editMessage[$message[1];{author:Xingqui's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction145",
  code: `
 $editMessage[$message[1];{author:Xingqui's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction146",
  code: `
 $editMessage[$message[1];{author:Xingqui's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190467369369610/9_-_4_set_Instructor.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsmcanemo",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction150,awaitReaction151,awaitReaction152;yes]
$textSplit[$sendMessage[{author:Anemo MC's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction150",
  code: `
 $editMessage[$message[1];{author:Anemo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction151",
  code: `
 $editMessage[$message[1];{author:Anemo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction152",
  code: `
 $editMessage[$message[1];{author:Anemo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190411090591794/18_-_Viridescent_Venerer.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsmcgeo",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction153,awaitReaction154,awaitReaction155,awaitReaction156;yes]
$textSplit[$sendMessage[{author:Geo MC's Artifact Guide:$authorAvatar} {description:| Page 1/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction153",
  code: `
 $editMessage[$message[1];{author:Geo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction154",
  code: `
 $editMessage[$message[1];{author:Geo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction155",
  code: `
 $editMessage[$message[1];{author:Geo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190446263631873/3_4-set_Archaic_Petra.png} {color:RANDOM} {description:| Page 3/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction156",
  code: `
 $editMessage[$message[1];{author:Geo MC's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190450239569930/4_-_2_Set_Archaic__Gladiator_or_Noblesse.png} {color:RANDOM} {description:| Page 4/4 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "artifsbarbara",
  code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣;awaitReaction160,awaitReaction161,awaitReaction162;yes]
$textSplit[$sendMessage[{author:Barbara's Artifact Guide:$authorAvatar} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "awaitReaction160",
  code: `
 $editMessage[$message[1];{author:Barbara's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190393461932052/11_-_4-Set_Noblesse_Oblige_Main_Stats.png} {color:RANDOM} {description:| Page 1/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)} 
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction161",
  code: `
 $editMessage[$message[1];{author:Barbara's Artifact Guide:$authorAvatar} {image:https://media.discordapp.net/attachments/803189896742699009/803190392819548160/12_-_4-Set_Noblesse_Oblige_Sub_Stats.png} {color:RANDOM} {description:| Page 2/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});
bot.awaitedCommand({
  name: "awaitReaction162",
  code: `
 $editMessage[$message[1];{author:Barbara's Artifact Guide:$authorAvatar} {image:https://cdn.discordapp.com/attachments/803189896742699009/806162417323212840/136197105_375799006944148_1588218059346851979_o.png} {color:RANDOM} {description:| Page 3/3 | [Guide By: Evanuell\\](https://www.facebook.com/EvanuellTV/)}
]
 `
});

bot.command({
  name: "music",
  code: `$reactionCollector[$splitText[1];everyone;24000m;⏸️,⏯️,⏹️,🔊,🔉,🔈;pause,resume,stop,100,50,10;yes]
    $textSplit[$sendMessage[{title: music} {description: 
    ⏸️ = pause song 
⏯️ = resume song 
⏹️ = stop song
🔊 = 100% volume
🔉 = 50% volume
🔈 = 10% volume} {color:RANDOM};yes]; ]`
});
bot.awaitedCommand({
  name: "100",
  code: `$volume[100]`
});

bot.awaitedCommand({
  name: "50",
  code: `$volume[50]`
});

bot.awaitedCommand({
  name: "10",
  code: ` $volume[10]`
});

bot.awaitedCommand({
  name: "pause",
  code: `$pauseSong`
});

bot.awaitedCommand({
  name: "resume",
  code: ` $resumeSong`
});

bot.awaitedCommand({
  name: "stop",
  code: `$stopSong`
});
bot.command({
  name: "queue",
  code: `$reactionCollector[$splitText[1];everyone;10m;◀,▶;queue2,queue1;yes]
$textSplit[$sendMessage[{title:queue}{description:Queue length\\: \`$queueLength\`
$queue
More songs can be played with m!play <song name>}
{footer:for more songs react}
{color:RANDOM};yes];yes] `
});
bot.awaitedCommand({
  name: "queue1",
  code: `$editMessage[$message[1];{title: Queue 2} {description: Current songs in the Queue: **$queueLength**
$queue[2]
Queue Length 11-20}
{color:RANDOM}] 
`
});
// next
bot.awaitedCommand({
  name: "queue2",
  code: ` $editMessage[$message[1];{title:queue}{description:Queue length\\: \`$queueLength\`
$queue
More songs can be played with m!play <song name>}
{footer:for more songs react}
{color:RANDOM}] `
});

//natapos kona ata yung artifs pa check nalang kung may mali :kekw: -0.

//dapat iba iba ung name ah may awaitReaction na iba naman

//for FUN FEATURE STUFF

const Discord = require("discord.js");
const client = new Discord.Client();
const mysql = require("mysql");
const canvacord = require("canvacord");
const prefix = require("discord-prefix");
let defaultPrefix = "m!";
const { Permissions } = require("discord.js");
const flags = [
  "MANAGE_CHANNELS",
  "EMBED_LINKS",
  "ATTACH_FILES",
  "READ_MESSAGE_HISTORY",
  "MANAGE_ROLES",
];
const permissions = new Permissions(flags);
const db = mysql.createConnection({
  host: "eu02-sql.pebblehost.com",
  user: "customer_166639_morax",
  password: "-2dCmgj@RBVl@Zg9xJW7",
  database: "customer_166639_morax"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to Morax Database");
});

client.once("ready", () => {
  const botname = client.user.tag
  console.log(`discord.js ready on ${botname}`);
});
const fs2 = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs2.readdirSync('./discordcommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./discordcommands/${file}`);
	client.commands.set(command.name, command);
}
//commands
client.on("message", async message => {
  let guildPrefix = prefix.getPrefix(message.guild.id);
  if (!guildPrefix) guildPrefix = defaultPrefix;
  try {
    if (message.content.startsWith(guildPrefix) || message.author.bot) {
      const args = message.content.slice(guildPrefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
      var com = message.content.split(" ");
      const target = message.mentions.users.first() || message.author;
      const targetId = target.id;
      if (command === "hello") {
        message.channel.send("hi");
      } else if (command === "ping"){
        client.commands.get('ping').execute(message, args);
      }
      else if (command === "pull") {
        embed(pull("S", message), message);
      } else if (command === "pull10") {
        embed(pull("M", message), message);
      } else if (command === "pull10c") {
        embed(pull("C10", message), message);
      } else if (command === "pull10w") {
        embed(pull("W10", message), message);
      } else if (command === "profile") {
        generateUser(message);
      } else if (command === "help profile") {
        helpProfile(message);
      } else if (command === "ign") {
        if (!args.length) {
          message.channel.send(errembedign);
        } else {
          addIgn(message, com[1]);
        }
      } else if (command === "say"){
        client.commands.get('say').execute(message, args)
      }else if (command === "world") {
        if (!args.length) {
           message.channel.send(errembedwl);
        } else {
          addWorld(message, com[1]);
        }
      } else if (command === "uid") {
        if (!args.length) {
          message.channel.send(errembeduid);
        } else {
          addUid(message, com[1]);
        }
      } else if (command === "sig") {
        var ret = message.content.replace(`${guildPrefix}sig`, "");
        if (!args.length) {
           message.channel.send(errembedsig);
        } else {
          addSignature(message, ret);
        }
      } else if (command === "main") {
        var ret = message.content.replace(`${guildPrefix}main`, "");
        if (!args.length) {
           message.channel.send(errembedmain);
        } else {
          addMain(message, ret);
        }
      } else if (command === "shop") {
        
        client.commands.get('shop').execute(message, args);
        
      } else if (command === "bag") {
        
        client.commands.get('bag').execute(message, args);
        
      } else if (command === "work") {
        
        client.commands.get('work').execute(message, args);
        
      } else if (command === "expe") {
        
        client.commands.get('expedition').execute(message, args);
        
      } else if (command === "bal") {
        
        client.commands.get('bal').execute(message, args);
        
      } else if (command === "dep") {
        
        client.commands.get('dep').execute(message, args);
        
      } else if (command === "depall") {
        
        client.commands.get('alldep').execute(message, args);
        
      } else if (command === "give") {
        
        client.commands.get('give').execute(message, args)
        
      } else if (command === "gift") {
        
        client.commands.get('gift').execute(message, args)
        
      } else if (command === "with") {
        
        client.commands.get('withdraw').execute(message, args)
        
      } else if (command === "slot") {
        client.commands.get('slot').execute(message, args)
      }else if (command === "rob") {      
        if(isKing(message)){
         client.commands.get('rob').execute(message, args);
        } else {
          message.channel.send("You cant use this command! Only a King can rob!");
        }
      } else if (command === "take") {
        
         client.commands.get('take').execute(message, args)
        
      } else if (command === "rank") {
        
        client.commands.get('drank').execute(message, args)
        
      } else if (command === "bg-rank") {
        
        client.commands.get('bg-rank').execute(message)
        
      } else if (command === "prefix") {
        
        const member = message.member.id;
        if (!message.member.hasPermission("MANAGE_ROLES")) {
          message.channel.send("you cant use this command!");
        } else if(!args.length){
          message.channel.send(`You need to input a prefix!`)
        }else {
          client.commands.get('sprefix').execute(message, args)
        }
        
      } else if(command === "testrole"){
        const { guild } = message
       const guildmem = guild.members.cache.get(message.author.id)
       guildmem.roles.add('803616167783563275')
        message.channel.send(`you now have the \`test\` role`)
      } else if(command === "testrole2"){
        const { guild } = message
       const guildmem = guild.members.cache.get(message.author.id)
       if(!guildmem.roles.cache.get(`803616167783563275`)){
         message.channel.send('you need the role before this before getting this role')
       } else {
         message.channel.send(`nice since u hab the role`)
       }
      }else if (command === "getp"){
        
console.log(prefix.getPrefix(message.guild.id));
        
      } else if (command === "timer"){
        
        client.commands.get('timer').execute(message, args);
        
      }
    } else {
      rankSystem(message);
      moraSystem(message);
    }
  } catch (err) {
    console.log(err);
  }
});

//Rights
function hasAdminRights(message) {
  if (
    message.member.roles.cache.has('595102007388405761') ||
    message.member.roles.cache.has('785375323222179850') ||
    message.member.roles.cache.has('798551532148359179')
  ) {
    return true;
  }
  return false;
}

function isBooster(message) {
  if ( message.member.roles.cache.has('598372350215454721'))
   {
    return true;
  }
  return false;
}

function isYggServer(message) {
  if (message.guild.id === '595101715485949952')
   {
    return true;
  }
  return false;
}

function isKing(message) {
  if (message.guild.id === '815151875753639956')
   {
    return true;
  }
  return false;
}


function wordCount(str) {
  return str.split(" ").length;
}

function rankSystem(message) {
  let server = message.guild.id;
  var startDate = new Date().toMysqlFormat();
  db.query(
    "SELECT * FROM ranking where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;
      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO ranking (userid, level, currentXP, maxXP,backgroundLink,xptime,globalId) VALUES ('" +
          message.author.id +
          "'," +
          "'1','20','1000','https://cdn.discordapp.com/attachments/803124930950332416/808880677453692988/Welcome_to_the_world_tree.png'" +
          ",'" +
          startDate +
          "','" +
          server +
          "')";
        db.query(sql, console.log);
      } else {
        var seconds =
          (stringToDate(startDate) -
            stringToDate(rows[0].xptime.toMysqlFormat())) /
          1000;
        if (seconds > 60) {
          var wordXP = wordCount(message.content);
          var userCurrentXP = rows[0].currentXP;
          var userMaxXP = rows[0].maxXP;
          var userLevel = rows[0].level;
          if (wordXP >= 3) {
            if (userLevel < 5) {
              userCurrentXP = userCurrentXP + getRandomXp(50);
            } else {
              userCurrentXP = userCurrentXP + getRandomXp(30);
            }
          }
          if (userCurrentXP >= userMaxXP) {
            userCurrentXP = 0;
            if (userLevel < 3) {
              userMaxXP = userMaxXP * 2;
            } else if (userLevel < 6) {
              userMaxXP = userMaxXP + 2000;
            } else {
              userMaxXP = userMaxXP + 1000;
            }
            userMaxXP = userMaxXP * 2;
            userLevel++;
            const prefix = require("discord-prefix");
            let guildPrefix = prefix.getPrefix(message.guild.id);
            var embed = new Discord.MessageEmbed()
              .setAuthor(
                message.author.username,
                message.author.displayAvatarURL()
              )
              .setTitle(`You just leveled up! You are now level ${userLevel}`)
              .setFooter(`Do ${guildPrefix}rank to check your level!`)
              .setColor("#E8C215");

            message.channel.send(embed);
          }
          sql =
            "UPDATE ranking SET " +
            "currentXP=" +
            userCurrentXP +
            ", " +
            "maxXP=" +
            userMaxXP +
            ", " +
            "xptime='" +
            startDate +
            "', " +
            "level=" +
            userLevel +
            "" +
            " WHERE userid='" +
            message.author.id +
            "' and globalId='" +
            server +
            "'";
          db.query(sql, console.log);
        }
      }
    }
  );
}

function moraSystem(message) {
  var startDate = new Date().toMysqlFormat();
  db.query(
    "SELECT * FROM Economy where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;
      let sql;
      if (rows.length < 1) {
              var mora = getRandomMora();
            sql =
              "INSERT INTO Economy (userid, mora, moraTime) VALUES ('" +
              message.author.id +
              "','" +
              mora +
              "','" +
              startDate +
              "')";

            db.query(sql, console.log);
      } else {
        var word = wordCount(message.content); 
        var seconds =
          (stringToDate(startDate) -
            stringToDate(rows[0].moraTimeChat.toMysqlFormat())) /
          1000;
        if (seconds > 60) {
          var mora = getRandomMoraChat();   
          mora = mora + rows[0].mora;         
          if (word >= 3) {
             sql =
                "UPDATE Economy SET" +
                " mora=" +
                mora +
                "," +
                " moraTimeChat='" +
                startDate +
                "'" +
                " WHERE userid='" +
                message.author.id +
                "'";

              db.query(sql, console.log);
          }
        }
      }
    }
  );
}
// Embeds

const errembedign = new Discord.MessageEmbed()
  .setTitle("You need to provide your IGN!")
  .setColor("#FE2E2E");

const errembeduid = new Discord.MessageEmbed()
  .setTitle("You need to provide your UID!")
  .setColor("#FE2E2E");

const errembedsig = new Discord.MessageEmbed()
  .setTitle("You need to provide a signature!")
  .setColor("#FE2E2E");

const errembedwl = new Discord.MessageEmbed()
  .setTitle("You need to provide your world rank!")
  .setColor("#FE2E2E");

const errembedmain = new Discord.MessageEmbed()
  .setTitle("Type in your main!")
  .setColor("#FE2E2E");

function embed(list, msg) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(
      "Traveller you pulled the following:",
      "https://cdn.discordapp.com/avatars/802414495531401228/9ad55e8acd9ba43057e3707ad49aa6e0.webp?size=2048"
    )
    .setColor("#E8C215")
    .setTimestamp()
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/803124930950332416/804531194384351272/unknown.png"
    );
  list.forEach((values, keys) => {
    embed.addField(values, keys);
  });
  msg.channel.send(embed);
}

function embedProfile(
  msg,
  ign,
  world,
  uid,
  signature,
  main1,
  main2,
  main3,
  main4,
  username,
  displayAvatarURL
) {
  signature = "*" + signature + "*";
  const embed = new Discord.MessageEmbed()
    .setColor("#2F3136")
    .setTitle("Name Card")
    .setThumbnail(displayAvatarURL)
    .addFields(
      {
        name: "\u200B",
        value:
          "\n  **IGN**:   " +
          ign +
          "\n" +
          "\n **World Level:**  " +
          world +
          "\n" +
          "\n**UID:** " +
          uid,
        inline: false
      },
      { name: "\u200B", value: "**Mains:** \n" + main1 + main2 + main3 + main4,},
      { name: "\u200B", value: signature, inline: false }
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG"
    );
  msg.channel.send(embed);
}



// Random Functions

function getRandomMora() {
  return Math.floor(Math.random() * Math.floor(300) + 100);
}

function getRandomMoraChat() {
  return Math.floor(Math.random() * Math.floor(100) + 50);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomXp(max) {
  return Math.floor(Math.random() * Math.floor(max) + 10);
}

// Profile Functions

function generateUser(message, user) {
  var userId = message.author.id;
  let guildPrefix = prefix.getPrefix(message.guild.id);
  var username = message.author.username;
  var displayAvatarURL = message.author.displayAvatarURL();
  if (message.mentions.users.first()) {
    userId = message.mentions.users.first().id;
    username = message.mentions.members.first().user.username;
    displayAvatarURL = message.mentions.members.first().user.displayAvatarURL();
  }
  db.query("SELECT * FROM profile where userid = " + userId, (err, rows) => {
    if (err) throw err;
    if (rows.length < 1) {
      const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name)
        .setTitle("PROFILE SETUP GUIDE")
        .setDescription("*commands on how to setup your profile*")
        .setThumbnail(
          "https://i.pinimg.com/originals/69/5c/e1/695ce151a60105fbc9f16d040516b8f9.jpg"
        )
        .addFields(
          { name: "IGN", value: `\`${guildPrefix}ign Morax\`` },
          { name: "UID", value: `\`${guildPrefix}uid 80123456\`` },
          { name: "WORLD LEVEL", value: `\`${guildPrefix}world 8\`` },
          {
            name: "BEST 4",
            value: `\`${guildPrefix}main zhongli zhongli zhongli zhongli\``
          },
          { name: "SIGNATURE", value: `\`${guildPrefix}sig Im Morax.\`` }
        )
        .setTimestamp()
        .setColor("#E8C215")
        .setFooter(username, displayAvatarURL);
      message.channel.send(embed);
    } else {
      var ign = "Not Set";
      var world = "Not Set";
      var uid = "Not Set";
      var signature = "Not Set";
      var main1 = "Not Set";
      var main2 = "Not Set";
      var main3 = "Not Set";
      var main4 = "Not Set";
      if (rows[0].ign) {
        ign = rows[0].ign;
      }
      if (rows[0].world) {
        world = rows[0].world;
      }
      if (rows[0].uid) {
        uid = rows[0].uid;
      }
      if (rows[0].signature) {
        signature = rows[0].signature;
      }
      if (rows[0].main1) {
        main1 = rows[0].main1;
      }
      if (rows[0].main2) {
        main2 = rows[0].main2;
      }
      if (rows[0].main3) {
        main3 = rows[0].main3;
      }
      if (rows[0].main4) {
        main4 = rows[0].main4;
      }
      embedProfile(
        message,
        ign,
        world,
        uid,
        signature,
        main1,
        main2,
        main3,
        main4,
        username,
        displayAvatarURL
      );
    }
  });
}

function helpProfile(message, user) {
  var userId = message.author.id;
  var username = message.author.username;
  var displayAvatarURL = message.author.displayAvatarURL();
let guildPrefix = prefix.getPrefix(message.guild.id);
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
    .setTitle("PROFILE SETUP GUIDE")
    .setDescription("*commands on how to setup your profile*")
    .setThumbnail(
      "https://i.pinimg.com/originals/69/5c/e1/695ce151a60105fbc9f16d040516b8f9.jpg"
    )
    .addFields(
      { name: "IGN", value: `\`${guildPrefix}ign Morax\`` },
      { name: "UID", value: `\`${guildPrefix}uid 80123456\`` },
      { name: "WORLD LEVEL", value: `\`${guildPrefix}world 8\`` },
      {
        name: "BEST 4",
        value: `\`${prefix}main zhongli zhongli zhongli zhongli\``
      },
      { name: "SIGNATURE", value: `\`${guildPrefix}sig Im Morax.\`` }
    )
    .setTimestamp()
    .setColor("#E8C215")
    .setFooter(username, displayAvatarURL);
  message.channel.send(embed);
}

function addIgn(message, ign) {
  const args = message.content.slice(prefix.length).split(/ +/);

  const ignembed = new Discord.MessageEmbed()
    .setDescription("Successfully set your IGN to " + args[1])
    .setAuthor("Profile Set-up", message.author.displayAvatarURL())
    .setImage(
      "https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG"
    )
    .setColor("#E8C215");

  db.query(
    "SELECT * FROM profile where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;

      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO profile (userid, ign) VALUES ('" +
          message.author.id +
          "','" +
          ign +
          "')";
      } else {
        sql =
          "UPDATE profile SET ign='" +
          ign +
          "' WHERE userid='" +
          message.author.id +
          "'";
      }
      db.query(sql, console.log);
      message.channel.send(ignembed);
    }
  );
}

function addWorld(message, world) {
  const args = message.content.slice(prefix.length).split(/ +/);

  const worldembed = new Discord.MessageEmbed()
    .setDescription("Successfully set your World Level to " + args[1])
    .setAuthor("Profile Set-up", message.author.displayAvatarURL())
    .setImage(
      "https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG"
    )
    .setColor("#E8C215");
  db.query(
    "SELECT * FROM profile where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;

      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO profile (userid, world) VALUES ('" +
          message.author.id +
          "','" +
          world +
          "')";
      } else {
        sql =
          "UPDATE profile SET world='" +
          world +
          "' WHERE userid='" +
          message.author.id +
          "'";
      }
      db.query(sql, console.log);
      message.channel.send(worldembed);
    }
  );
}

function addUid(message, uid) {
  const args = message.content.slice(prefix.length).split(/ +/);

  const uidembed = new Discord.MessageEmbed()
    .setDescription("Successfully set your UID to " + args[1])
    .setAuthor("Profile Set-up", message.author.displayAvatarURL())
    .setImage(
      "https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG"
    )
    .setColor("#E8C215");
  db.query(
    "SELECT * FROM profile where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;

      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO profile (userid, uid) VALUES ('" +
          message.author.id +
          "','" +
          uid +
          "')";
      } else {
        sql =
          "UPDATE profile SET uid='" +
          uid +
          "' WHERE userid='" +
          message.author.id +
          "'";
      }
      db.query(sql, console.log);
      message.channel.send(uidembed);
    }
  );
}

function addSignature(message, Signature) {
  const prefix = require("discord-prefix");
  let guildPrefix = prefix.getPrefix(message.guild.id);
  const args = message.content.slice(guildPrefix.length).split(/ +/);

  const sigembed = new Discord.MessageEmbed()
    .setDescription("Successfully set your signature to " + args[1])
    .setAuthor("Profile Set-up", message.author.displayAvatarURL())
    .setImage(
      "https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG"
    )
    .setColor("#E8C215");
  db.query(
    "SELECT * FROM profile where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;

      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO profile (userid, signature) VALUES ('" +
          message.author.id +
          "','" +
          Signature.substring(1) +
          "')";
      } else {
        sql =
          "UPDATE profile SET signature='" +
          Signature.substring(1) +
          "' WHERE userid='" +
          message.author.id +
          "'";
      }
      db.query(sql, console.log);
      message.channel.send(sigembed);
    }
  );
}

function addMain(message, main) {
  db.query(
    "SELECT * FROM profile where userid = " + message.author.id,
    (err, rows) => {
      if (err) throw err;
      var charMain = main.split(" ");
      let sql;
      if (rows.length < 1) {
        sql =
          "INSERT INTO profile (userid, main1, main2, main3, main4) VALUES ('" +
          message.author.id +
          "','" +
          character(charMain[1]) +
          character(charMain[2]) +
          character(charMain[3]) +
          character(charMain[4]);
        ("')");
      } else {
        sql =
          "UPDATE profile SET" +
          " main1='" +
          character(charMain[1]) +
          "'," +
          "main2='" +
          character(charMain[2]) +
          "'," +
          "main3='" +
          character(charMain[3]) +
          "'," +
          "main4='" +
          character(charMain[4]) +
          "'" +
          "WHERE userid='" +
          message.author.id +
          "'";
      }
      db.query(sql, console.log);
      const embed = new Discord.MessageEmbed()
       .setAuthor(message.author.tag, message.author.displayAvatarURL())
       .setColor('#E8C215')
      .setDescription(`Sucessfully set your mains to ${character(charMain[1])} ${character(charMain[2])} ${character(charMain[3])} ${character(charMain[4])}`)
      message.channel.send(embed);
    }
  );
}

function character(char) {
  switch (char) {
    case "lumine":
      return "<:lumine:803865319503691776>";
      break;
    case "aether":
      return "<:aether:813651387253784607>";
      break;
    case "albedo":
      return "<:albedo:803865318379749377>";
      break;
    case "amber":
      return "<:amber:803865319675658260>";
      break;
    case "barbara":
      return "<:barbara:803865318828802060>";
      break;
    case "beidou":
      return "<:beidou:803865319411548180>";
      break;
    case "bennett":
      return "<:bennett:803865203833962506>";
      break;
    case "chongyun":
      return "<:chong:803865319533838367>";
      break;
    case "diluc":
      return "<:diluc:803865175388192769>";
      break;
    case "diona":
      return "<:diona:803865319025672202>";
      break;
    case "fischl":
      return "<:Fishcldeath:803863141975851008>";
      break;
    case "ganyu":
      return "<:ganyu:803865254622658561>";
      break;
    case "jean":
      return "<:jean:803865254903545868>";
      break;
    case "kaeya":
      return "<:kaeya:803865318614106173>";
      break;
    case "keqing":
      return "<:keqing:803865319994556426>";
      break;
    case "klee":
      return "<:klee:803865194584342528>";
      break;
    case "lisa":
      return "<:lisa:803865319982104596>";
      break;
    case "mona":
      return "<:mona:803865216134807562>";
      break;
    case "ningguang":
      return "<:ning:803865318417760298>";
      break;
    case "noelle":
      return "<:noelle:803865319960477697>";
      break;
    case "qiqi":
      return "<:qiqi:803865318945587220>";
      break;
    case "razor":
      return "<:razorchibi:803862970790707211>";
      break;
    case "sucrose":
      return "<:sucrose:803865319738441778>";
      break;
    case "tartaglia":
      return "<:childe:803865231289221152>";
      break;
    case "venti":
      return "<:venti:804181247948619828>";
      break;
    case "xiangling":
      return "<:xiang:803865319105888296>";
      break;
    case "xingqiu":
      return "<:xingqui:803865223995850812>";
      break;
    case "xinyan":
      return "<:xinyan:803865318283018291>";
      break;
    case "zhongli":
      return "<:zhong:803865319033536522>";
      break;
    case "xiao":
      return "<:xiao:806042352938254366>";
      break;
  }
}

// Simulation
function pull(type, message) {
  if (type === "S") {
    var mp = new Map();

    if (getRandomInt(2) === 1) {
      var pull = characterList().split("-");
      mp.set(pull[0], pull[1]);
    } else {
      var pull = weaponList().split("-");
      mp.set(pull[0], pull[1]);
    }
    return mp;
  } else if (type === "M") {
    var mp = new Map();
    for (var x = 1; x <= 10; x++) {
      var prefix = "th";
      if (getRandomInt(2) === 1) {
        var pull = characterList().split("-");
        if (mp.has(pull[0])) {
          if (x === 1) {
            prefix = "st";
          } else if (x === 2) {
            prefix = "nd";
          } else if (x === 3) {
            prefix = "rd";
          }
          mp.set(pull[0] + " " + x + prefix, pull[1]);
        } else {
          mp.set(pull[0], pull[1]);
        }
      } else {
        var pull = weaponList().split("-");
        if (mp.has(pull[0])) {
          if (x === 1) {
            prefix = "st";
          } else if (x === 2) {
            prefix = "nd";
          } else if (x === 3) {
            prefix = "rd";
          }
          mp.set(pull[0] + " " + x + prefix, pull[1]);
        } else {
          mp.set(pull[0], pull[1]);
        }
      }
    }
    return mp;
  } else if (type === "C10") {
    var mp = new Map();
    for (var x = 1; x <= 10; x++) {
      var char = characterList();
      var pull = char.split("-");
      var prefix = "th";
      if (mp.has(pull[0])) {
        if (x === 1) {
          prefix = "st";
        } else if (x === 2) {
          prefix = "nd";
        } else if (x === 3) {
          prefix = "rd";
        }
        mp.set(pull[0] + " " + x + prefix, pull[1]);
      } else {
        mp.set(pull[0], pull[1]);
      }
    }
    return mp;
  } else if (type === "W10") {
    var mp = new Map();
    for (var x = 1; x <= 10; x++) {
      var pull = weaponList().split("-");
      var prefix = "th";
      if (mp.has(pull[0])) {
        if (x === 1) {
          prefix = "st";
        } else if (x === 2) {
          prefix = "nd";
        } else if (x === 3) {
          prefix = "rd";
        }
        mp.set(pull[0] + " " + x + prefix, pull[1]);
      } else {
        mp.set(pull[0], pull[1]);
      }
    }
    return mp;
  }
}

function characterList() {
  switch (getRandomInt(28)) {
    case 1:
      return "Albedo-★★★★★";
      break;
    case 2:
      return "Amber-★★★★";
      break;
    case 3:
      return "Barbara-★★★★";
      break;
    case 4:
      return "Beidou-★★★★";
      break;
    case 5:
      return "Bennett-★★★★";
      break;
    case 6:
      return "Chongyun-★★★★";
      break;
    case 7:
      return "Diluc-★★★★★";
      break;
    case 8:
      return "Diona-★★★★";
      break;
    case 9:
      return "Fischl-★★★★";
      break;
    case 10:
      return "Ganyu-★★★★★";
      break;
    case 11:
      return "Jean-★★★★★";
      break;
    case 12:
      return "Kaeya-★★★★";
      break;
    case 13:
      return "Keqing-★★★★★";
      break;
    case 14:
      return "Klee-★★★★★";
      break;
    case 15:
      return "Lisa-★★★★";
      break;
    case 16:
      return "Mona-★★★★★";
      break;
    case 17:
      return "Ningguang-★★★★";
      break;
    case 18:
      return "Noelle-★★★★";
      break;
    case 19:
      return "Qiqi-★★★★★";
      break;
    case 20:
      return "Razor-★★★★";
      break;
    case 21:
      return "Sucrose-★★★★";
      break;
    case 22:
      return "Tartaglia-★★★★★";
      break;
    case 23:
      return "Venti-★★★★★";
      break;
    case 24:
      return "Xiangling-★★★★";
      break;
    case 25:
      return "Xiao-★★★★★";
      break;
    case 26:
      return "Xingqiu-★★★★";
      break;
    case 27:
      return "Xinyan-★★★★";
      break;
    case 28:
      return "Zhongli-★★★★★";
      break;
  }
}

function weaponList() {
  switch (getRandomInt(28)) {
    case 1:
      return "Aquila Favonia-★★★★★";
      break;
    case 2:
      return "Skyward Blade-★★★★★";
      break;
    case 3:
      return "Summit Shaper-★★★★★";
      break;
    case 4:
      return "Blackcliff Longsword-★★★★";
      break;
    case 5:
      return "Lions Roar-★★★★";
      break;
    case 6:
      return "Favonius Sword-★★★★";
      break;
    case 7:
      return "The Flute-★★★★★";
      break;
    case 8:
      return "Sacrificial Sword-★★★★";
      break;
    case 9:
      return "Fillet Blade-★★★";
      break;
    case 10:
      return "Cool Steel-★★★";
      break;
    case 11:
      return "Harbinger of Dawn-★★★";
      break;
    case 12:
      return "Skyrider Sword-★★★";
      break;
    case 13:
      return "Skyward Pride-★★★★★";
      break;
    case 14:
      return "The Unforged-★★★★★";
      break;
    case 15:
      return "Wolfs Gravestone-★★★★★";
      break;
    case 16:
      return "Royal Greatsword-★★★★★";
      break;
    case 17:
      return "Favonius Greatsword-★★★★";
      break;
    case 18:
      return "Rainslasher-★★★★";
      break;
    case 19:
      return "Serpent Spine-★★★★";
      break;
    case 20:
      return "Sacrificial Greatsword-★★★★";
      break;
    case 21:
      return "The Bell-★★★★";
      break;
    case 22:
      return "White Iron Great Sword-★★★";
      break;
    case 23:
      return "Ferrous Shadow-★★★";
      break;
    case 24:
      return "Bloodtainted Greatsword-★★★";
      break;
    case 25:
      return "Debate Club-★★★";
      break;
    case 26:
      return "Skyward Atlas-★★★★★";
      break;
    case 27:
      return "Memory of Dust-★★★★★";
      break;
    case 28:
      return "Lost Prayer to the Sacred Winds-★★★★★";
      break;
  }
}



/**
 * Pad formatter
 **/
function twoDigits(d) {
  if (0 <= d && d < 10) return "0" + d.toString();
  if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
  return d.toString();
}

/**
 * Date formatter
 **/
Date.prototype.toMysqlFormat = function() {
  return (
    this.getUTCFullYear() +
    "-" +
    twoDigits(1 + this.getUTCMonth()) +
    "-" +
    twoDigits(this.getUTCDate()) +
    " " +
    twoDigits(this.getUTCHours()) +
    ":" +
    twoDigits(this.getUTCMinutes()) +
    ":" +
    twoDigits(this.getUTCSeconds())
  );
};

function stringToDate(s) {
  var dateParts = s.split(" ")[0].split("-");
  var timeParts = s.split(" ")[1].split(":");
  var d = new Date(dateParts[0], --dateParts[1], dateParts[2]);
  d.setHours(timeParts[0], timeParts[1], timeParts[2]);

  return d;
}
client.login(process.env.TOKEN);
