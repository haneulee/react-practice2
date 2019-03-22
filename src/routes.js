import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Members from "./component/Members";
import TodoList from "./component/TodoList";
import SongList from "./component/Songs/SongList";
import NotFound from "./component/NotFound";
import Player from "./component/Songs/Player";

const songs = [
  {
    id: 1,
    title: "fallin for you",
    musician: "colbie callet",
    youtube_link: "PABUI_EX_hw"
  },
  {
    id: 2,
    title: "can't hurry love",
    musician: "the supremes",
    youtube_link: "EJDPhjQft04"
  },
  {
    id: 3,
    title: "landslide",
    musician: "dixie chicks",
    youtube_link: "V2N7gYom9-A"
  },
  {
    id: 4,
    title: "can't let go",
    musician: "linda ronstadt",
    youtube_link: "P-EpGKXmoe4"
  },
  {
    id: 5,
    title: "doctor my eyes",
    musician: "jackson browne",
    youtube_link: "7JIFKS_1oZk"
  },
  {
    id: 6,
    title: "we gotta get you a woman",
    musician: "todd rundgren",
    youtube_link: "EyUjbBViAGE"
  },
  {
    id: 7,
    title: "hip to my heart",
    musician: "band perry",
    youtube_link: "vpLCFnD9LFo"
  }
];

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/about", component: About },
  { path: "/todolist", component: TodoList },
  { path: "/members", component: Members },
  {
    path: "/songs",
    component: SongList,
    routes: [
      { path: "/songs", exact: true, component: SongList },
      { path: "/:songid", component: Player }
    ]
  },
  { path: "*", component: NotFound }
];

export { routes, songs };
