import Index from '../less/index';
import List from '../less/list';
import Wode from '../less/wode';
import Detail from '../less/detail';
import Detail2 from '../less/user/useradd';
import DetailBook from '../less/user/useradd2';

export default [
    {
        path:'/',
        name:'App',
        component:Index,
        exact:true
    },
    {path:'/list',name:'List',component:List},
    {path:'/wode',name:'Wode',component:Wode},
    {
        path:'/detail',
        name:'Detail',
        component: Detail,
        children: [
            {
                path: '/detail/',
                component: Detail2,
            },
            {
                path: '/detail/useradd2',
                component:DetailBook,
            }
        ]
    },
]