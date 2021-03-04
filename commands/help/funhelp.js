module.exports = {
  name: "help",
  code: `
$author[You want to do something fun you say?;$authorAvatar]
  $description[

**It's been a few thousand years since I had fun but here's something funny**

**Making someone cry for fun is a tradition of old wouldn't you say**
\`$getServerVar[prefix]cry\`

**This is better if you ACTUALLY have someone to do it with**
\`$getServerVar[prefix]cuddle\`

**Do you even have a partner**
\`$getServerVar[prefix]dance\`

**I hope you're not a lolicon**
\`$getServerVar[prefix]pat\`

**Your lips to mine**
\`$getServerVar[prefix]kiss\`

**Let me feel the warmth of your body**
\`$getServerVar[prefix]hug\`

**Getting someone's attention, I see**
\`$getServerVar[prefix]poke\`

**DO IT**
\`$getServerVar[prefix]slap\`

**You can make someone's day with this**
\`$getServerVar[prefix]smile\`

**Just don't get rough**
\`$getServerVar[prefix]tickle\`

]
$footer[USAGE: $getServerVar[prefix]poke @mention etc.]
$addTimestamp
$color[#E8C215]
$thumbnail[$userAvatar[$clientid]]
$onlyIf[$message==fun;]
`
}