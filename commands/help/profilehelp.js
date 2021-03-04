module.exports = {
  name: "help",
  code: `
  $title[Setting out in Teyvat without identity card seems reckless.
You don't know how? Very well, this is what you should do]
  $thumbnail[https://i.pinimg.com/originals/69/5c/e1/695ce151a60105fbc9f16d040516b8f9.jpg]
  $description[
**IGN** - *Set your IGN*
\`$getServerVar[prefix]ign Morax\`

**UID** - *Set your UID*
\`$getServerVar[prefix]uid 888888888\`

**WORLD LEVEL** - *Set your World Level*
\`$getServerVar[prefix]world 69\`

**BEST 4** - *Show your main 4!*
(make sure they're all lowercase, and yes you can pick the same character)
\`$getServerVar[prefix]main zhongli zhongli zhongli zhongli\`

**SIGNATURE** - *Set a signature!*
\`$getServerVar[prefix]sig I will have order\`


**VIEW OTHER PROFILE** - *View @mentioned's profile*
\`$getServerVar[prefix]profile @Morax to see mine :)\`
  ]
  $footer[Make sure to do them one by one!]
  $color[#E8C215]
  $image[https://cdn.discordapp.com/attachments/768710209446346752/782591617693384724/3.PNG]
  $onlyIf[$message==profile;]
  `
}


////////

