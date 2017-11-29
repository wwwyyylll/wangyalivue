const router = new VueRouter({
    linkActiveClass:"aa",
    routes :[
        { path:'/', component: shouye ,
            children:[ { path:'',component:first }]},
        { path:'/info', component: info,
            children:[ { path:'',component:con },{path:'/con/:id',component:content1}],

        },
        { path:'*', redirect:{path: "/"} },
        { path:'/doc', component: doc,
         children:[
             { path:'', components: {a:doc1,b:doc2} }
             ]
        },
        { path:'/login',component:login }
    ]
})