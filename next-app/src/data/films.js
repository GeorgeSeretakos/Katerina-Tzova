/**
 * Item shape:
 * {
 *   id: string,
 *   title?: string,
 *   provider: "youtube" | "vimeo" | "file",
 *   url: string,          // full watch URL (yt/vimeo) OR direct file URL
 *   thumbnail?: string,   // /images/films/....jpg  (optional but recommended)
 *   aspect?: string       // Tailwind aspect class, defaults to "aspect-video"
 * }
 */

export const filmsByCategory = {
  weddings: [
    {
      id: "wed-1",
      title: "Christina & Nikos",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=ykZOGUaPPbI",
      thumbnail: "/images/thumbnails/weddings/W_Christina_Nikos.jpg"
    },
    {
      id: "wed-2",
      title: "Thodoris & Maria",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=eHx0k1jIdeo",
      thumbnail: "/images/thumbnails/weddings/W_Thodoris+Maria_Samtorini.jpg"
    },
    {
      id: "wed-3",
      title: "Marianna & Kostas",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=r3jpzbzN9N8",
      thumbnail: "/images/thumbnails/weddings/W_Marianna_Kostas.jpg"
    },
    {
      id: "wed-4",
      title: "Lefteris & Glykeria",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=XkFyVM73HmU",
      thumbnail: "/images/thumbnails/weddings/W_LefterisGlykeria.jpg"
    },
    {
      id: "wed-5",
      title: "Vasilis & Zoe",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=k2x7ETkexxE",
      thumbnail: "/images/thumbnails/weddings/W_Vasilis_Zoe.jpg"
    },
    {
      id: "wed-6",
      title: "Sofie & Meletis",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=pd9GvbADJN4",
      thumbnail: "/images/thumbnails/weddings/W_Sofie+Meletis.jpg"
    },
    {
      id: "wed-7",
      title: "Elia & Maurizio",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=RBJSHJeI0So",
      thumbnail: "/images/thumbnails/weddings/W_EliaMaurizio.jpg"
    },
  ],

  baptisms: [
    {
      id: "bap-1",
      title: "Dimitris",
      provider: "vimeo",
      url: "https://vimeo.com/1149916409?fl=ip&fe=ec",
      thumbnail: "/images/thumbnails/baptisms/V_Dimitris_180725.jpg"
    },
    {
      id: "bap-2",
      title: "Ioannis Marios",
      provider: "vimeo",
      url: "https://vimeo.com/1149924847?fl=ip&fe=ec",
      thumbnail: "/images/thumbnails/baptisms/V_IoannisMarios.jpg"
    },
    {
      id: "bap-3",
      title: "Artemis",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=TsrMhnxOMQQ",
      thumbnail: "/images/thumbnails/baptisms/V_Artemis_210925.jpg"
    },
    {
      id: "bap-4",
      title: "Irini",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=Mr6w60CRDY8",
      thumbnail: "/images/thumbnails/baptisms/V_Irini.jpg"
    },
    {
      id: "bap-5",
      title: "Goergia",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=3WRtc23hd-A",
      thumbnail: "/images/thumbnails/baptisms/V_Georgia.jpg"
    },
    {
      id: "bap-6",
      title: "Theologos",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=87mUlBWa9gU",
      thumbnail: "/images/thumbnails/baptisms/V_theologos.jpg"
    },
  ],

  movies: [
    {
      id: "mov-1",
      title: "aPolis trailer",
      provider: "youtube",
      url: "https://youtu.be/lm8UB7nsh-I?si=MdYosDX-PxCiRrWo",
      thumbnail: "https://img.youtube.com/vi/lm8UB7nsh-I/hqdefault.jpg",
      // thumbnail: "/images/movies/37.jpg"
    },
    {
      id: "mov-2",
      title: "I remember everything - trailer",
      provider: "youtube",
      url: "https://youtu.be/vioWBhg3C3U?si=C9nv3zytTNiuaFie",
      thumbnail: "https://img.youtube.com/vi/vioWBhg3C3U/hqdefault.jpg",
      // thumbnail: "/images/movies/37.jpg"
    },
    {
      id: "mov-3",
      title: "Ηχοτοπία της Ελλάδας - trailer",
      provider: "youtube",
      url: "https://youtu.be/BQXgd-CSZF8?si=WMXErBHM0j6JSPTV",
      thumbnail: "https://img.youtube.com/vi/BQXgd-CSZF8/hqdefault.jpg",
      // thumbnail: "/images/movies/37.jpg"
    },
    {
      id: "mov-4",
      title: "Ημερολόγια Εγκλεισμού - trailer",
      provider: "youtube",
      url: "https://youtu.be/zyo-dB_scM8?si=zm2p5s0NmDMgacqh",
      thumbnail: "https://img.youtube.com/vi/zyo-dB_scM8/hqdefault.jpg",
      // thumbnail: "/images/movies/37.jpg"
    },
  ],

  theatre: [
    {
      id: "the-1",
      title: "Το βλέμμα του ψαριού - trailer",
      provider: "youtube",
      url: "https://youtu.be/mD7OJIzJtkU?si=i6rfxsYR7eQ4FX3V",
      thumbnail: "https://img.youtube.com/vi/mD7OJIzJtkU/hqdefault.jpg",
    },
    {
      id: "the-2",
      title: "Άκου Ανθρωπάκο",
      provider: "youtube",
      url: "https://youtu.be/RsKpYrNs1zY?si=7YJhMo45mYHLn_mU",
      thumbnail: "https://img.youtube.com/vi/RsKpYrNs1zY/hqdefault.jpg",
    },
    {
      id: "the-3",
      title: "Λευκό Ρόδο",
      provider: "youtube",
      url: "https://youtu.be/tebfSiAL4X0?si=gpkqr1PubiRg7HFD",
      thumbnail: "https://img.youtube.com/vi/tebfSiAL4X0/hqdefault.jpg",
    },
  ],

  advertisement: [
    {
      id: "adv-1",
      title: "Dance School",
      provider: "youtube",
      url: "https://www.youtube.com/watch?v=HvvWdtTdUEY",
      thumbnail: "/images/advertisement/39.jpg"
    },
    {
      id: "adv-2",
      title: "",
      provider: "",
      url: "https://pithos.okeanos.grnet.gr/public/Vtwz4VChMjSfQVj9IPjmZ5",
      thumbnail: ""
    }
  ]
};
