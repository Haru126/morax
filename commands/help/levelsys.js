module.exports = {
  name: "help",
  code: `
$title[You seek wisdom, very well I shall give it to you]
  $description[

**By my name I shall fullfill our contract.
Now, what is it that you seek**

\`$getServerVar[prefix]rank\` - View your rank card

\`$getServerVar[prefix]rank-bg\` - Change your rank card's background feature 
(Image should be a link)

]
$addTimestamp
$footer[| Requested By: $username |;$userAvatar[802414495531401228]]
$author[$username#$discriminator[$authorID];$authorAvatar]
$thumbnail[$userAvatar[802414495531401228]]
    $color[#E8C215]
    $onlyIf[$message==rank;]
`
}
