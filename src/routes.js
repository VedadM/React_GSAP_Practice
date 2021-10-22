import App from './App.js';

import Home from './views/Home';
import AnimationTest_1 from './views/AnimationTest_1';
import AnimationTest_2 from './views/AnimationTest_2';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [{
    component: App,
    routes: [{
        path: '/',
        component: Home,
        exact: true,
    },{
        path: '/animation-test-1',
        component: AnimationTest_1,
        exact: true,
    },{
        path: '/animation-test-2',
        component: AnimationTest_2,
        exact: true,
    }]
}];