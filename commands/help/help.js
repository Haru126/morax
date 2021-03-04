module.exports = {
  name: "help",
  code: `
$title[You seek wisdom, very well I shall give it to you]
  $description[

**By my name I shall fullfill our contract.
Now, what is it that you seek**

**Mora huh, hmm. I don't really partake in this world's currency.**
\`economy\`

**You seek my wisdom for something?**
\`tips\`

**Oh you want to do something fun**
\`fun\`

**You want to know what's your standing in this world?**
\`rank\`

**You wish to see your identity as an adventurer?**
\`profile\`

**You want to how to use gnosis in this community?**
\`admin\`

**I was also called Rex Lapis recently but you can choose what to address me**
\`$getServerVar[prefix]prefix\`

__**Partners**__

[Evanuell - Streamer & Content Creator\\](https://www.facebook.com/LAGEvanuellPlayerJuan/)
[Evanuell's Discord Server\\](https://discord.gg/fcn2hNmeWS)
[Yggdrasil Community\\](https://discord.gg/qFtVc6gy8B)
[Yggdrasil Community Facebook page\\](https://www.facebook.com/yggdrasilesportsph/)

__**Donate to help keep Morax running**__

[Patreon\\](https://www.patreon.com/moraxbot)
]
$addTimestamp
$footer[Requested By: $username | USAGE: $getServerVar[prefix]help-<keyword> ;$userAvatar[802414495531401228]]
$author[$username#$discriminator[$authorID];$authorAvatar]
$thumbnail[$userAvatar[802414495531401228]]
    $color[#E8C215]
    $onlyIf[$message==;]`
}
