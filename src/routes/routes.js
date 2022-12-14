import config from '~/config';
import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';
import NewMusic from '~/pages/NewMusic';
import Category from '~/pages/Category';
import TopMusic from '~/pages/TopMusic';
import PlayList from '~/pages/PlayList';
import { CategoryItem } from '~/pages/Category';

const publicRoutes = [
    {
        path: config.home,
        component: Home,
    },
    {
        path: config.myMusic,
        component: MyMusic,
    },
    {
        path: config.zingChart,
        component: ZingChart,
    },
    {
        path: config.radio,
        component: Radio,
    },
    {
        path: config.follow,
        component: Follow,
    },
    {
        path: config.newMusic,
        component: NewMusic,
    },
    {
        path: config.category,
        component: Category,
    },
    {
        path: config.topMusic,
        component: TopMusic,
    },
    {
        path: config.playList,
        component: PlayList,
    },
    {
        path: config.album,
        component: PlayList,
    },
    {
        path: config.categoryItem,
        component: CategoryItem,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
