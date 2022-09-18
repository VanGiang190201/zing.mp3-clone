import config from '~/config';
import Home from '~/pages/Home';
import MyMusic from '~/pages/MyMusic';
import ZingChart from '~/pages/ZingChart';
import Radio from '~/pages/Radio';
import Follow from '~/pages/Follow';

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
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
