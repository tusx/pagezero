const sites = {
  searx: {
    title: "Searx",
    link: "https://searx.be",
    tags: ["search-engine"],
    rank: 100000,
  },
  "brave-search": {
    title: "Brave Search",
    link: "https://search.brave.com/",
    tags: ["search-engine"],
    rank: 552,
  },
  duckduckgo: {
    title: "Duckduckgo",
    link: "https://duckduckgo.com",
    tags: ["search-engine"],
    rank: 100000,
  },
  yandex: {
    title: "Yandex",
    link: "https://Yandex.com",
    tags: ["search-engine"],
    rank: 100000,
  },
  bing: {
    title: "Bing",
    link: "https://bing.com",
    tags: ["search-engine"],
    rank: 100000,
  },
  baidu: {
    title: "Baidu",
    link: "https://baidu.com",
    tags: ["search-engine"],
    rank: 100000,
  },
  google: {
    title: "Google",
    link: "https://google.com",
    tags: ["search-engine"],
    rank: 100000,
  },
  ecosia: {
    title: "Ecosia",
    link: "https://ecosia.org",
    tags: ["search-engine"],
    rank: 100000,
  },
  btdig: {
    title: "Btdig",
    link: "https://btdig.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  solidtorrents: {
    title: "Solidtorrents",
    link: "https://solidtorrents.net",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  torrentseeker: {
    title: "Torrentseeker",
    link: "https://torrentseeker.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  animetosho: {
    title: "Animetosho",
    link: "https://animetosho.org",
    tags: ["torrent", "anime"],
    rank: 100000,
  },
  anidex: {
    title: "Anidex",
    link: "https://anidex.info",
    tags: ["torrent", "anime"],
    rank: 2,
  },
  tokyotosho: {
    title: "Tokyotosho",
    link: "https://tokyotosho.info",
    tags: ["torrent", "anime"],
    rank: 2,
  },
  aiosearch: {
    title: "Aiosearch",
    link: "https://aiosearch.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  dirtytorrents: {
    title: "Dirtytorrents",
    link: "https://dirtytorrents.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  bt4g: {
    title: "Bt4g.org",
    link: "https://bt4g.org",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  snowfl: {
    title: "Snowfl",
    link: "https://snowfl.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  bitsearch: {
    title: "Bitsearch",
    link: "https://bitsearch.to",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  btmet: {
    title: "Btmet",
    link: "https://btmet.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  atorrents: {
    title: "Atorrents",
    link: "https://atorrents.com",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  rutor: {
    title: "Rutor",
    link: "http://rutor.info",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  veoble: {
    title: "Veoble",
    link: "https://veoble.com/torrent/",
    tags: ["torrent", "search-engine"],
    rank: 100000,
  },
  faganfinder: {
    title: "Faganfinder",
    link: "https://faganfinder.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  wiby: {
    title: "Wiby",
    link: "https://wiby.me",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  theoldnet: {
    title: "Theoldnet",
    link: "https://theoldnet.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  "trace-moe": {
    title: "Trace.moe",
    link: "https://trace.moe",
    tags: ["other", "search-engine", "anime"],
    rank: 100000,
  },
  filelisting: {
    title: "Filelisting",
    link: "https://filelisting.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  dedigger: {
    title: "Dedigger",
    link: "https://dedigger.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  "mmnt-ru": {
    title: "Mmnt.ru",
    link: "https://mmnt.ru",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  mibbit: {
    title: "Mibbit",
    link: "https://search.mibbit.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  searchftps: {
    title: "Searchftps",
    link: "https://searchftps.net",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  filepursuit: {
    title: "Filepursuit",
    link: "https://filepursuit.com",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  odcrawler: {
    title: "Odcrawler",
    link: "https://odcrawler.xyz",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  "libraries-io": {
    title: "Libraries.io",
    link: "https://libraries.io",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  gifcities: {
    title: "Gifcities",
    link: "https://gifcities.org",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  "shodan-io": {
    title: "Shodan.io",
    link: "https://shodan.io",
    tags: ["other", "search-engine"],
    rank: 100000,
  },
  "ling-online": {
    title: "Ling.online",
    link: "https://ling.online/en/videos/films/",
    tags: ["movie", "tv", "streaming"],
    rank: 100000,
  },
  "tubi-tv": {
    title: "tubi.tv",
    link: "https://tubitv.com",
    tags: ["movie", "tv", "streaming"],
    rank: 100000,
  },
  moviesfoundonline: {
    title: "moviesfoundonline",
    link: "https://moviesfoundonline.com",
    tags: ["movie", "streaming"],
    rank: 100000,
  },
  "contv.com": {
    title: "Contv.com",
    link: "https://contv.com",
    tags: ["anime", "movie", "live", "comic", "streaming"],
    rank: 100000,
  },
  midnightpulp: {
    title: "Midnightpulp",
    link: "https://midnightpulp.com/browse/anime",
    tags: ["anime", "movie", "tv", "streaming"],
    rank: 100000,
  },
  asiancrush: {
    title: "Asiancrush",
    link: "https://asiancrush.com/browse/anime",
    tags: ["anime", "movie", "tv", "streaming"],
    rank: 100000,
  },

  themoviedb: {
    title: "Themoviedb",
    link: "https://themoviedb.org",
    tags: ["movie", "news", "tv", "database"],
    rank: 100000,
  },
  imdb: {
    title: "Imdb",
    link: "https://imdb.com/",
    tags: ["movie", "news", "tv", "database"],
    rank: 100000,
  },
  rottentomatoes: {
    title: "Rottentomatoes",
    link: "https://rottentomatoes.com",
    tags: ["movie", "news", "tv", "database"],
    rank: 100000,
  },
  comingsoon: {
    title: "Comingsoon",
    link: "https://comingsoon.net",
    tags: ["movie", "tv", "news"],
    rank: 100000,
  },
  screenrant: {
    title: "Screenrant",
    link: "https://screenrant.com",
    tags: ["movie", "news", "tv"],
    rank: 100000,
  },
  fmovies: {
    title: "Fmovies",
    link: "https://fmovies.to",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  yesmovies: {
    title: "Yesmovies",
    link: "https://yesmovies.ag",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  zoechip: {
    title: "Zoechip",
    link: "https://zoechip.com",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  "c1ne-co": {
    title: "C1ne.co",
    link: "https://c1ne.co",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  soap2day: {
    title: "Soap2day",
    link: "https://soapgate.org",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  series9: {
    title: "Series9",
    link: "https://series9.la",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  onionplay: {
    title: "Onionplay",
    link: "https://onionplay.se",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  moviestars: {
    title: "Moviestars",
    link: "https://moviestars.to",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  azmovies: {
    title: "AZmovies",
    link: "https://azm.to",
    tags: ["movie", "streaming"],
    rank: 100000,
  },
  himovies: {
    title: "Himovies",
    link: "https://himovies.to",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  ev01: {
    title: "ev01",
    link: "https://ev01.to",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  hdmoviebox: {
    title: "HDmoviebox",
    link: "https://hdmoviebox.org",
    tags: ["movie", "tv", "cartoon", "streaming"],
    rank: 100000,
  },
  "noxx-is": {
    title: "Noxx.is",
    link: "https://noxx.is",
    tags: ["tv", "cartoon", "streaming"],
    rank: 100000,
  },

  srsone: {
    title: "Srsone",
    link: "https://srsone.click",
    tags: ["tv", "cartoon", "streaming"],
    rank: 100000,
  },
  "tvseries-watch": {
    title: "Tvseries.watch",
    link: "https://tvseries.watch",
    tags: ["tv", "cartoon", "streaming"],
    rank: 100000,
  },
  turkish123: {
    title: "Turkish123",
    link: "https://turkish123.com",
    tags: ["tv", "streaming"],
    rank: 100000,
  },
  "archive-org-movie": {
    title: "Archive.org Movies",
    link: "https://archive.org/details/moviesandfilms?tab=collection",
    tags: ["other", "movie", "tv", "streaming"],
    rank: 100000,
  },
  rarefilmm: {
    title: "Rarefilmm",
    link: "https://rarefilmm.com",
    tags: ["other", "movie", "streaming"],
    rank: 100000,
  },
  classiccinemaonline: {
    title: "Classiccinemaonline",
    link: "https://classiccinemaonline.com",
    tags: ["other", "movie", "streaming"],
    rank: 100000,
  },
  thefilmdetective: {
    title: "Thefilmdetective",
    link: "https://thefilmdetective.tv",
    tags: ["other", "movie", "streaming"],
    rank: 100000,
  },
  thewutangcollection: {
    title: "thewutangcollection",
    link: "https://thewutangcollection.com",
    tags: ["other", "movie", "streaming"],
    rank: 100000,
  },

  "Library-of-Congress": {
    title: "Library of Congress",
    link: "https://loc.gov/film-and-videos/",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  footagefarm: {
    title: "footagefarm",
    link: "https://footagefarm.com",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  "Japanese-Animated-Film-Archive": {
    title: "Japanese Animated Film Archive",
    link: "https://animation.filmarchives.jp",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  "Japanese-Film-Archive": {
    title: "Japanese Film Archive",
    link: "https://meiji.filmarchives.jp",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  "jp-films": {
    title: "jp-films",
    link: "https://jp-films.com",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  "nfb-ca": {
    title: "nfb.ca",
    link: "https://nfb.ca",
    tags: ["other", "streaming"],
    rank: 100000,
  },
  myanimelist: {
    title: "Myanimelist",
    link: "https://myanimelist.net",
    tags: ["anime", "news", "database"],
    rank: 100000,
  },
  anidb: {
    title: "Anidb",
    link: "https://anidb.net",
    tags: ["anime", "database"],
    rank: 100000,
  },
  anilist: {
    title: "Anilist",
    link: "https://anilist.co",
    tags: ["anime", "database"],
    rank: 100000,
  },
  anisearch: {
    title: "Anisearch",
    link: "https://anisearch.com",
    tags: ["anime", "database"],
    rank: 100000,
  },
  annict: {
    title: "Annict",
    link: "https://en.annict.com",
    tags: ["anime", "database"],
    rank: 100000,
  },
  "anime-planet": {
    title: "Anime planet",
    link: "https://anime-planet.com",
    tags: ["anime", "database"],
    rank: 100000,
  },
  mangaupdates: {
    title: "Mangaupdates",
    link: "https://mangaupdates.com/releases.html",
    tags: ["manga", "forum"],
    rank: 100000,
  },
  animenewsnetwork: {
    title: "Animenewsnetwork",
    link: "https://animenewsnetwork.com",
    tags: ["anime", "manga", "news"],
    rank: 100000,
  },
  kitsu: {
    title: "Kitsu",
    link: "https://kitsu.io",
    tags: ["anime", "database"],
    rank: 100000,
  },
  otakuusamagazine: {
    title: "Otakuusamagazine",
    link: "https://otakuusamagazine.com",
    tags: ["anime", "manga", "news"],
    rank: 100000,
  },
  funimation: {
    title: "Funimation",
    link: "https://funimation.com",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  crunchyroll: {
    title: "Crunchyroll",
    link: "https://crunchyroll.com",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "tubi-tv-anime": {
    title: "tubi.tv Anime",
    link: "https://tubitv.com/category/anime",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  retrocrush: {
    title: "Retrocrush",
    link: "https://retrocrush.tv",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "pokemon-com": {
    title: "Pokemon.com",
    link: "https://watch.pokemon.com",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "zoro-to": {
    title: "Zoro.to",
    link: "https://zoro.to",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "9anime": {
    title: "9anime",
    link: "https://9anime.to",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "5anime": {
    title: "5anime",
    link: "https://5anime.net",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  genoanime: {
    title: "Genoanime",
    link: "https://genoanime.sbs",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  animepahe: {
    title: "Animepahe",
    link: "https://animepahe.ru",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  animefox: {
    title: "Animefox",
    link: "https://animefox.io",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  anime8: {
    title: "Anime8",
    link: "https://anime8.ru",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "11anime": {
    title: "11anime",
    link: "https://11anime.fr",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  gogoanime: {
    title: "Gogoanime",
    link: "https://gogoanime.lu",
    tags: ["anime", "streaming"],
    rank: 100000,
  },
  "wco-tv": {
    title: "Wco.tv",
    link: "https://wco.tv",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  kisscartoon: {
    title: "kisscartoon",
    link: "https://kisscartoon.help",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  kimcartoon: {
    title: "kimcartoon",
    link: "https://kimcartoon.li",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  toonamiaftermath: {
    title: "Toonamiaftermath",
    link: "https://toonamiaftermath.com",
    tags: ["cartoon", "anime", "movie", "live"],
    rank: 100000,
  },
  "kisscartoon-info": {
    title: "kisscartoon.info",
    link: "https://kisscartoon.info",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  "watchcartoononline-bz": {
    title: "Watchcartoononline.bz",
    link: "https://watchcartoononline.bz",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },

  "diseny-video": {
    title: "Diseny video",
    link: "https://video.disney.com/series/",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  topcartoons: {
    title: "Topcartoons",
    link: "https://topcartoons.tv",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  supercartoons: {
    title: "Supercartoons",
    link: "https://supercartoons.net",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  "b98-tv": {
    title: "B98.tv",
    link: "https://b98.tv",
    tags: ["cartoon", "streaming"],
    rank: 100000,
  },
  aniyomi: {
    title: "Aniyomi",
    link: "https://github.com/jmir1/aniyomi",
    tags: ["other", "anime", "cartoon", "streaming"],
    rank: 100000,
  },
  "themes-moe": {
    title: "Themes.moe",
    link: "https://themes.moe",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "openings-moe": {
    title: "Openings.moe",
    link: "https://openings.moe",
    tags: ["other", "anime"],
    rank: 100000,
  },
  Animeflix: {
    title: "Animeflix",
    link: "https://github.com/chirag-droid/animeflix",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "420-moe": {
    title: "420.moe",
    link: "https://420.moe",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "nik.bot-nu": {
    title: "nik.bot.nu",
    link: "https://nik.bot.nu",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "satania-moe": {
    title: "Satania.moe",
    link: "https://satania.moe",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "Anime-Girls-Holding-Programming-Books": {
    title: "Anime Girls Holding Programming Books",
    link: "https://github.com/laynH/Anime-Girls-Holding-Programming-Books",
    tags: ["other", "anime"],
    rank: 100000,
  },
  fantasyanime: {
    title: "Fantasyanime",
    link: "https://fantasyanime.com",
    tags: ["other", "anime"],
    rank: 100000,
  },
  osanime: {
    title: "Osanime",
    link: "https://osanime.com",
    tags: ["other", "anime"],
    rank: 100000,
  },
  "Banned-cartoons": {
    title: "Banned cartoons",
    link: "https://web.archive.org/web/20170823090710/http://www.rotten.com/library/culture/banned-cartoons",
    tags: ["other", "cartoon"],
    rank: 100000,
  },
  comicsalliance: {
    title: "Comicsalliance",
    link: "https://comicsalliance.com",
    tags: ["comic", "news"],
    rank: 100000,
  },
  "r-comicbooks": {
    title: "r/comicbooks",
    link: "https://reddit.com/r/comicbooks/",
    tags: ["comic", "other"],
    rank: 100000,
  },
  "cbr-com": {
    title: "Cbr.com",
    link: "https://cbr.com",
    tags: ["comic", "news"],
    rank: 100000,
  },
  "ifanboy-com": {
    title: "ifanboy.com",
    link: "https://ifanboy.com",
    tags: ["comic", "news"],
    rank: 100000,
  },
  "manga-tokyo": {
    title: "Manga.tokyo",
    link: "https://manga.tokyo",
    tags: ["manga", "news"],
    rank: 100000,
  },

  "archive-org-comics": {
    title: "Archive.org Comics",
    link: "https://archive.org/details/texts?query=comic",
    tags: ["comic", "online-reading"],
    rank: 100000,
  },
  "readcomiconline-li": {
    title: "Readcomiconline.li",
    link: "https://readcomiconline.li",
    tags: ["comic", "online-reading"],
    rank: 100000,
  },
  "readcomicsonline-ru": {
    title: "Readcomicsonline.ru",
    link: "https://readcomicsonline.ru",
    tags: ["online-reading-sources"],
    rank: 100000,
  },
  comicextra: {
    title: "Comicextra",
    link: "https://comicextra.com",
    tags: ["comic", "online-reading"],
    rank: 100000,
  },
  "viewcomics-me": {
    title: "Viewcomics.me",
    link: "https://viewcomics.me",
    tags: ["comic", "online-reading"],
    rank: 100000,
  },
  "archive-org-manga": {
    title: "Archive.org Manga",
    link: "https://archive.org/details/texts?query=manga",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  kissmanga: {
    title: "kissmanga",
    link: "https://kissmanga.in",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  manga4life: {
    title: "Manga4life",
    link: "https://manga4life.com",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  mangahere: {
    title: "Mangahere",
    link: "https://mangahere.cc",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  "alpha-scans": {
    title: "Alpha Scans",
    link: "https://alpha-scans.org",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  "bato-to": {
    title: "Bato.to",
    link: "https://bato.to",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  "mangasee-net": {
    title: "Mangasee.net",
    link: "https://mangasee.net",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  "mangadex-org": {
    title: "Mangadex.org",
    link: "https://mangadex.org",
    tags: ["manga", "online-reading"],
    rank: 100000,
  },
  tachiyomi: {
    title: "Tachiyomi",
    link: "https://github.com/tachiyomiorg/tachiyomi",
    tags: ["manga", "comic", "local-reading"],
    rank: 100000,
  },
  mcomix: {
    title: "Mcomix",
    link: "https://sourceforge.net/projects/mcomix/",
    tags: ["manga", "comic", "local-reading"],
    rank: 100000,
  },
  OpenComic: {
    title: "OpenComic",
    link: "https://github.com/ollm/OpenComic",
    tags: ["manga", "comic", "local-reading"],
    rank: 100000,
  },
  YACReader: {
    title: "YACReader",
    link: "https://github.com/YACReader/yacreader",
    tags: ["manga", "comic", "local-reading"],
    rank: 100000,
  },
  "r-Marvel": {
    title: "r/Marvel",
    link: "https://reddit.com/r/Marvel/",
    tags: ["other", "comic"],
    rank: 100000,
  },
  "r-DC": {
    title: "r/DC",
    link: "https://reddit.com/r/DC/",
    tags: ["other", "comic"],
    rank: 100000,
  },
  ComicEater: {
    title: "ComicEater",
    link: "https://github.com/kanjieater/ComicEater",
    tags: ["other", "comic"],
    rank: 100000,
  },
  webcomix: {
    title: "Webcomix",
    link: "https://github.com/J-CPelletier/webcomix",
    tags: ["other", "comic"],
    rank: 100000,
  },
  "comicfury-com": {
    title: "comicfury.com",
    link: "https://comicfury.com",
    tags: ["other", "comic"],
    rank: 100000,
  },
  torrentfreak: {
    title: "Torrentfreak",
    link: "https://torrentfreak.com",
    tags: ["torrent", "news"],
    rank: 100000,
  },
  mullvad: {
    title: "Mullvad",
    link: "https://mullvad.net",
    tags: ["vpn"],
    rank: 100000,
  },
  ivpn: {
    title: "Ivpn",
    link: "https://ivpn.net",
    tags: ["vpn"],
    rank: 100000,
  },
  qbittorrent: {
    title: "qbittorrent",
    link: "https://qbittorrent.org",
    tags: ["torrent-client"],
    rank: 100000,
  },
  transmission: {
    title: "Transmission",
    link: "https://transmissionbt.com",
    tags: ["torrent-client"],
    rank: 100000,
  },
  deluge: {
    title: "Deluge",
    link: "https://deluge-torrent.org",
    tags: ["torrent-client"],
    rank: 100000,
  },
  LibreTorrent: {
    title: "LibreTorrent",
    link: "https://gitlab.com/proninyaroslav/libretorrent",
    tags: ["torrent-client"],
    rank: 100000,
  },
  BiglyBT: {
    title: "BiglyBT",
    link: "https://github.com/BiglySoftware/BiglyBT-Android",
    tags: ["torrent-client"],
    rank: 100000,
  },
  "webtor-io": {
    title: "Webtor.io",
    link: "https://webtor.io",
    tags: ["torrent-client"],
    rank: 100000,
  },
  "instant-io": {
    title: "Instant.io",
    link: "https://instant.io",
    tags: ["torrent-client"],
    rank: 100000,
  },
  torrentsafe: {
    title: "Torrentsafe",
    link: "https://torrentsafe.com",
    tags: ["torrent-client"],
    rank: 100000,
  },
  bitport: {
    title: "Bitport",
    link: "https://bitport.io",
    tags: ["torrent-client"],
    rank: 100000,
  },
  bitford: {
    title: "Bitford",
    link: "https://github.com/astro/bitford",
    tags: ["torrent-client"],
    rank: 100000,
  },
  jstorrent: {
    title: "JsTorrent",
    link: "https://github.com/kzahel/jstorrent",
    tags: ["orrent-client"],
    rank: 100000,
  },
  "YTS-mx": {
    title: "YTS.mx",
    link: "https://yts.mx",
    tags: ["torrent", "movie"],
    rank: 100000,
  },
  thepiratebay: {
    title: "Thepiratebay",
    link: "https://proxybay.github.io",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  "1337x": {
    title: "1337x",
    link: "https://1337x.to",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  rarbg: {
    title: "Rarbg",
    link: "https://rarbg.to",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  "NYAA-si": {
    title: "NYAA.si",
    link: "https://nyaa.si",
    tags: ["torrent", "anime"],
    rank: 100000,
  },
  "EZTV-re": {
    title: "EZTV.re",
    link: "https://EZTV.re",
    tags: ["torrent", "tv"],
    rank: 100000,
  },
  "fitgirl-repacks": {
    title: "Fitgirl-Repacks",
    link: "https://fitgirl-repacks.site",
    tags: ["torrent", "game"],
    rank: 100000,
  },
  limetorrents: {
    title: "Limetorrents",
    link: "https://limetorrents.pro",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  torrentgalaxy: {
    title: "Torrentgalaxy",
    link: "https://torrentgalaxy.to",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  torrentdownloads: {
    title: "Torrentdownloads",
    link: "https://torrentdownloads.pro",
    tags: ["torrent", "movie", "tv", "game", "other"],
    rank: 100000,
  },
  "Torrent-Legality": {
    title: "Torrent Legality",
    link: "https://i.imgur.com/eNdboCs.png",
    tags: ["torrent", "other"],
    rank: 100000,
  },
  "predb-ovh": {
    title: "predb.ovh",
    link: "https://predb.ovh",
    tags: ["torrent", "other"],
    rank: 100000,
  },
  "predb-me": {
    title: "predb.me",
    link: "https://predb.me",
    tags: ["torrent", "other"],
    rank: 100000,
  },
  "convert-torrent-to-magnet": {
    title: "convert .torrent to magnet",
    link: "https://nutbread.github.io/t2m/",
    tags: ["torrent", "other"],
    rank: 100000,
  },

  "r-torrents": {
    title: "r/torrents",
    link: "https://reddit.com/r/torrents/",
    tags: ["torrent", "other"],
    rank: 100000,
  },
  "r-VPNTorrents": {
    title: "r/VPNTorrents",
    link: "https://reddit.com/r/VPNTorrents/",
    tags: ["torrent", "other"],
    rank: 100000,
  },
  "mega-nz": {
    title: "Mega.nz",
    link: "https://mega.nz",
    tags: ["cloud-storage"],
    rank: 100000,
  },
  "google drive": {
    title: "Google Drive",
    link: "https://drive.google.com",
    tags: ["cloud-storage"],
    rank: 100000,
  },
  dropbox: {
    title: "Dropbox",
    link: "https://dropbox.com",
    tags: ["cloud-storage"],
    rank: 100000,
  },
  onedrive: {
    title: "Onedrive",
    link: "https://microsoft.com/en-ww/microsoft-365/onedrive/compare-onedrive-plans",
    tags: ["cloud-storage"],
    rank: 100000,
  },
};

// -------------
// -------------

var site_list;
var site_sorted_list;
var active_tags = [];

// ================
// ================

function toggle_me(ele) {
  ele.classList.toggle("btn-success");
  ele.classList.toggle("text-white");
  ele.classList.toggle("btn-outline-primary");

  let tags = add_or_remove_tag(ele);
  let selected_tag_length = tags.length;
  let regex = cnvrt_ary_2_regex(tags);
  let sorted_site_list = get_site_list(regex, selected_tag_length);
  show_linkz(sorted_site_list);

  console.log(sorted_site_list);
  // show_tag(tag);
}

function add_or_remove_tag(ele) {
  let tag = ele.getAttribute("data-tag-show");
  let index = active_tags.indexOf(tag);
  if (index !== -1) {
    active_tags.splice(index, 1);
  } else {
    active_tags.push(tag);
  }
  // console.log(active_tags);
  return active_tags;
}

function show_tag(tag) {
  // let tag = ele.getAttribute("data-tag-show");
  site_list = {};
  for (let site in sites) {
    let site_name = site;
    let one_site = sites[site];
    let tags = one_site["tags"];
    let link = one_site["link"];
    let rank = one_site["rank"];

    if (tags.includes(tag)) {
      site_list[site_name] = rank;
    }
  }
  let sorted = Object.fromEntries(
    Object.entries(site_list).sort((a, b) => a[1] - b[1])
  );
  site_sorted_list = sorted;
  console.log(sorted);
}

function convert_array_2_string(arrays) {
  let string;
  for (let i = 0; i < arrays.length; i++) {
    string += arrays[i];
  }
  return string;
}

function cnvrt_ary_2_regex(arrays) {
  let reg = "";
  for (let i = 0; i < arrays.length; i++) {
    reg += arrays[i] + "|";
  }

  reg = reg.slice(0, -1);

  return reg;
}

function regex_matches(regex, string) {
  // const regex = /search-engin|test/gm;
  // this is fucking crazy, i wasted 3 hrs on this function
  // Alternative syntax using RegExp constructor
  let regex_do = new RegExp(regex, "gm");

  let str = string;
  let m;
  let i = 0;
  while ((m = regex_do.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex_do.lastIndex) {
      regex_do.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      i++;
      // console.log(`Found match, group ${groupIndex}: ${match} : ${i}`);
    });
  }
  // console.log(i);
  return i;
}

function get_site_list(regex, selected_tag_length) {
  site_list = {};
  let i = 0;
  for (let site in sites) {
    i++;
    let site_name = site;
    let one_site = sites[site];
    let tags = convert_array_2_string(one_site["tags"]);
    let rank = one_site["rank"];
    let lenth = regex_matches(regex, tags);
    if (selected_tag_length == lenth) {
      site_list[site_name] = rank;
    }

    // console.log(i);
  }
  let sorted = Object.fromEntries(
    Object.entries(site_list).sort((a, b) => a[1] - b[1])
  );
  site_sorted_list = sorted;
  return site_sorted_list;
}

function show_linkz(array) {
  let div_html = "";
  for (let site in array) {
    let btn = `<div class="btn-group mt-1">
            <a href="${sites[site]["link"]}" target="_blank" type="button" class="btn text-white" style="background-color: rgb(46, 87, 147) !important; --darkreader-inline-bgcolor: #254676;" data-darkreader-inline-bgcolor="">
            ${sites[site]["title"]}
            </a>
            <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split border-start" data-bs-toggle="dropdown" aria-expanded="true">
            <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item">N/A</a></li>
            </ul>
            </div> `;

    div_html += btn;
  }

  document.getElementById("linkz").innerHTML = div_html;
}
