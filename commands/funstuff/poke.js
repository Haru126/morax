module.exports = {
  name: "poke",
  code: `
  $author[Poked $username[$mentioned[1]];$authorAvatar]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $image[$randomText[https://purrbot.site/img/sfw/poke/gif/poke_001.gif;https://purrbot.site/img/sfw/poke/gif/poke_002.gif
  ;https://purrbot.site/img/sfw/poke/gif/poke_003.gif;https://purrbot.site/img/sfw/poke/gif/poke_004.gif
  ;https://purrbot.site/img/sfw/poke/gif/poke_005.gif;https://purrbot.site/img/sfw/poke/gif/poke_006.gif
  ;https://purrbot.site/img/sfw/poke/gif/poke_007.gif;https://purrbot.site/img/sfw/poke/gif/poke_008.gif
  ;https://purrbot.site/img/sfw/poke/gif/poke_009.gif;https://purrbot.site/img/sfw/poke/gif/poke_010.gif]]
  $color[#E8C215]
  $argsCheck[1;Mention someone!]
`,
}
