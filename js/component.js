var snav=Vue.component("snav",{
    template:`
         <ul class="custom-nav">
            <router-link v-for="(item,key) in datanav" :key="key" :to="item.url" tag="li" exact>{{item.title}}</router-link>
            <router-link to="/login" v-if="!islogin" tag="li">login</router-link>
       
       <span v-if="islogin" class="info" @click="show">
       {{name}}
            <span  class="logout" v-show="isshow" @click="logout">退出</span>
       </span>
         </ul>
    `,
    data(){
        return {
            datanav:[
                {title:"首页",url:"/"},
                {title:"公司简介",url:"/info"},
                {title:"文档介绍",url:"/doc"},
            ],
            islogin:false,
            name:"",
            isshow:false
        }
    },
    created(){
        this.name=this.get("login","name");
        this.islogin=this.get("login","name");
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        logout(){
            this.del("login");
            router.push("/")
        }
    }
})
var login=Vue.component("login",{
    template:`
<div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-icon mui-icon-undo" @click="back"></a>
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='name' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>

			<div class="mui-content-padded">
				<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="submit">登录</button>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div>
	</div>
    `,
    methods:{
        back(){
            router.push("/");
        },
        submit(){

            var obj={"name":document.querySelector("#name").value}
            this.save("login",obj);
            router.push("/doc")
        }

    }

})
var index=Vue.component("index",{
    template:`
    <div>
        <con></con>
        <!--<router-view></router-view>-->
    </div>
    `
})
var shouye=Vue.component("shouye",{
    template:`
     <div>
      <snav></snav>
    
     <router-view></router-view>
   
     </div>
    `
})
var first=Vue.component("first",{
    template:`
    <div>
         <div><img src="img/a.jpg" alt="" class="img"></div>
    </div>
    `
})
var doc=Vue.component("doc",{
    template:`
<div>
       <snav></snav>
       <div>
       <router-view class="left" name="a"></router-view>
       <router-view class="right" name="b"></router-view>
      </div>
</div>
    `,

    beforeRouteEnter(to,from,next){

        next(function(vm){
            if(!vm.get("login","name")){
                router.push("/login");
            }
        })
    }
})
var doc1=Vue.component("doc1",{
    template:`
     <div>
      <ul>
        <router-link to="#one" tag="li">vue</router-link>
        <router-link to="#two" tag="li">php</router-link>
        <router-link to="#three" tag="li">nodejs</router-link>
      </ul>
    </div>
    `
})
var doc2=Vue.component("doc2",{
    template:`
<div>
     <div id="one">one</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div>vue</div>
     <div id="two">two</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div>php</div>
     <div id="three">three</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
     <div>nodejs</div>
</div>
    `,
    watch:{
        $route(){
            var hash=this.$route.hash.slice(1);
            var vm=this
                function animate () {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({ tweeningNumber:document.querySelector(".right").scrollTop})
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .to({ tweeningNumber: (document.querySelector("#"+hash).offsetTop)-44 }, 500)
                    .onUpdate(function () {
                        document.querySelector(".right").scrollTop = this.tweeningNumber.toFixed(0)
                    })
                    .start()
                animate()
            }
        }
})
var info=Vue.component("info",{
    template:`
<div>
     <snav></snav>
     <transition name="dd" mode="out-in">
     <router-view></router-view>
     </transition>
</div>
    `
})
var con=Vue.component("con",{
    template:`
    <div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
        <router-link to="/con/1">
            <img class="mui-media-object mui-pull-left" src="img/311366.jpg">
            <div class="mui-media-body">
                幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/con/2">
            <img class="mui-media-object mui-pull-left" src="img/311369.jpg">
            <div class="mui-media-body">
                木屋
                <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
            </div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media">
        <router-link to="/con/3">
            <img class="mui-media-object mui-pull-left" src="img/311856.jpg">
            <div class="mui-media-body">
                CBD
                <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
            </div>
        </router-link>
    </li>
</ul>
</div>
    `,
    beforeRouteEnter(to,from,next){
        console.log(1);
        next();
    },
    beforeRouteLeave(to,from,next){
        console.log(2);
        next();
    }
})
var content1=Vue.component("content1",{
    template:`
    <div>
    {{$route.params.id}}fghfdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
     </div>
    `
})