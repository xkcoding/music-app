import Recommend from "_v/recommend/Recommend";
import Singer from "_v/singer/Singer";
import Rank from "_v/rank/Rank";
import Search from "_v/search/Search";

export default [
  {
    path: "/",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    component: Recommend
  },
  {
    path: "/singer",
    component: Singer
  },
  {
    path: "/rank",
    component: Rank
  },
  {
    path: "/search",
    component: Search
  }
];
