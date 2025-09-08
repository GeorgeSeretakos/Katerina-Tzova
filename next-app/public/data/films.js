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
      title: "Elia & Maurizio – Wedding Trailer",
      provider: "youtube",
      url: "https://youtu.be/RBJSHJeI0So?si=nvggAYYhoACLG-FJ",
      // thumbnail: "https://img.youtube.com/vi/RBJSHJeI0So/hqdefault.jpg",
      thumbnail: "/images/weddings/37.jpg"
    },
    {
      id: "wed-2",
      title: "Mel & Sof - Wedding Teaser",
      provider: "youtube",
      url: "https://youtu.be/pd9GvbADJN4?si=vkOeHu_tdMkZ2-3y",
      // thumbnail: "https://img.youtube.com/vi/pd9GvbADJN4/hqdefault.jpg",
      thumbnail: "/images/weddings/16.jpg"
    },
    {
      id: "wed-3",
      title: "Thodoris & Maria - Santorini Clip",
      provider: "youtube",
      url: "https://youtu.be/eHx0k1jIdeo?si=X55abJuqYnT5pGg4",
      // thumbnail: "https://img.youtube.com/vi/eHx0k1jIdeo/hqdefault.jpg",
      thumbnail: "/images/weddings/32.jpg"
    },
    {
      id: "wed-4",
      title: "Xristina & Nikos",
      provider: "youtube",
      url: "https://youtu.be/ykZOGUaPPbI?si=WVJnCbaOUyn_vxs2",
      // thumbnail: "https://img.youtube.com/vi/ykZOGUaPPbI/hqdefault.jpg",
      thumbnail: "/images/weddings/40.jpg"
    },
    {
      id: "wed-5",
      title: "Argyro & Vaggelis",
      provider: "youtube",
      url: "https://youtu.be/pKZm4mlBCSk?si=s8xpT_Y7XrFmvddS ",
      // thumbnail: "https://img.youtube.com/vi/pKZm4mlBCSk/hqdefault.jpg",
      thumbnail: "/images/weddings/8.jpg"
    },
    {
      id: "wed-6",
      title: "Vasilis & Zoe",
      provider: "youtube",
      url: "https://youtu.be/k2x7ETkexxE?si=sA03ahnUunx_jE_4",
      // thumbnail: "https://img.youtube.com/vi/k2x7ETkexxE/hqdefault.jpg",
      thumbnail: "/images/weddings/47.jpg"
    },
  ],

  baptisms: [
    {
      id: "bap-1",
      title: "Clelia",
      provider: "youtube",
      url: "https://youtu.be/Iiy02zum8nc?si=FevAe09zUHKlhKKT",
      // thumbnail: "https://img.youtube.com/vi/Iiy02zum8nc/hqdefault.jpg",
      thumbnail: "/images/baptisms/60.jpg"
    },
    {
      id: "bap-2",
      title: "Nefeli",
      provider: "youtube",
      url: "https://youtu.be/TNsXG05x1eM?si=wb3ovG7UI0k8Gehi",
      // thumbnail: "https://img.youtube.com/vi/TNsXG05x1eM/hqdefault.jpg",
      thumbnail: "/images/baptisms/11.jpg"
    },
    {
      id: "bap-3",
      title: "Yorgia - Paraskevi",
      provider: "youtube",
      url: "https://youtu.be/3WRtc23hd-A?si=d9RhwQGhcezD_Ih8",
      // thumbnail: "https://img.youtube.com/vi/3WRtc23hd-A/hqdefault.jpg",
      thumbnail: "/images/baptisms/56.jpg"
    },
    {
      id: "bap-4",
      title: "Dimitris - Orfeas",
      provider: "youtube",
      url: "https://youtu.be/zphKThaox1A?si=whbIzdtG9jXaVe8O",
      // thumbnail: "https://img.youtube.com/vi/zphKThaox1A/hqdefault.jpg",
      thumbnail: "/images/baptisms/33.jpg"
    },
    {
      id: "bap-5",
      title: "Theologos",
      provider: "youtube",
      url: "https://youtu.be/87mUlBWa9gU?si=ZARlSCJkI-4LVmaE",
      // thumbnail: "https://img.youtube.com/vi/87mUlBWa9gU/hqdefault.jpg",
      thumbnail: "/images/baptisms/45.jpg"
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
  ]
};
