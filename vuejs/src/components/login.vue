<template>
    <div class="login">
        <form class="Frame" >
            <router-link to="/">返回首页</router-link>
            账户&nbsp;<input type="text"  id="Frame_user"  v-model="username"/><br />
            密码&nbsp;<input type="text"  id="Frame_pass"  v-model="password"/><br />
            <input type="button"  value="登陆" @click="login" />&nbsp;&nbsp;
            <input type="button"  value="注册" @click="reg" />               
        </form>  	
    </div>
</template>
<script>
    export default{      
        data(){
            return{
                userdata:[],
                password:'',
                username:'',
                user:{}
            }
        },
        methods:{
            // 登陆
            login(){
                // 取原始数据
                this.$http({
                url:'http://localhost:3000/user_read',
                methods:'get'
                }).then(res=>{
                    // 保留原始数据
                    this.userdata = res.data;
                    // 将原始数据的json格式变为对象键值对格式并保存到user对象中
                    for(var i = 0;i<this.userdata.length;i++){
                        for(var name in this.userdata[i]){
                            this.user[name]=this.userdata[i][name]
                        }
                    }
                    if (this.user[this.username]) {
                        if (this.user[this.username]===this.password) {
                            alert('{error:0,msg:"登陆成功"}');                       
                        } else {
                            alert('{error:0,msg:"密码或用户名不正确"}')                       
                        }
                    }else{
                        alert('{error:1,msg:"用户名不存在"}')
                    }                                                               
                })            
            },
            reg(){
            // 注册
                if (this.user[this.username]) {
                    alert('用户名已存在')
                } else {
                    this.$http({
                        url:'http://localhost:3000/user_add',
                        methods:'get',
                        params:{username:this.username,password:this.password}
                    }).then(res=>{
                        alert(res.data);
                    })                   
                }              
            }
        }
    }

</script>