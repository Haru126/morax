module.exports = {
  name: "help",
  code: `
$title[You seek power, very well I shall give it to you]
  $description[

**By my name I shall fullfill our contract.
Now, what is it that you seek**

\`$getServerVar[prefix]take\` - take mora (*\`$getServerVar[prefix]take\` @mention amount*)

\`$getServerVar[prefix]give\` - give mora (*\`$getServerVar[prefix]give\` @mention amount*)

]
$addTimestamp
$footer[| Requested By: $username |;$userAvatar[802414495531401228]]
$author[$username#$discriminator[$authorID];$authorAvatar]
$thumbnail[$userAvatar[802414495531401228]]
    $color[#E8C215]
    $onlyIf[$message==admin;]
`
}