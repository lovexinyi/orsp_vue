<template>
  <div class="mo-div">
    <div class="center">
      <ul>
        <li>
          <span class="col-md-4" style="padding-left: 0">当前密码：</span>
          <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="16" v-model="current_password" @change="reset" @blur="checkOldPassword">
        </li>
        <p class="p1">
          <span class="sp1">密码不能为空</span>
          <span class="sp2">密码错误，请重新输入</span>
          <i>1</i>
        </p>

        <li>
          <span class="col-md-4" style="padding-left: 0">新密码：</span>
          <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="16" v-model="new_password" @change="checkFormat">
        </li>
        <p class="p2">
          <span class="sp1">密码长度不能小于8，大于16</span>
          <i>2</i>
        </p>

        <li>
          <span class="col-md-4" style="padding-left: 0">确认密码：</span>
          <input type="password" class="col-md-8" style="text-align: left; width: 200px; padding-left: 0;padding-right: 0" maxlength="16" v-model="new_password_verify" @change="confirmPassword">
        </li>
        <p class="p3">
          <span>两次密码不一致，请重新输入</span>
          <i>3</i>
        </p>
      </ul>
      <div class="footer">
        <div class="del" @click="cancel">取消</div>
        <div class="sub" @click="push">保存</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  props:["telephone"],
  data () {
    return {
      res:"",
      current_password:'',
      new_password:'',
      new_password_verify:'',
    }
  },
  methods:{
    checkOldPassword:function(){
      if(this.current_password == ""){
        $(".mo-div ul .p1 .sp1")[0].style.display="inline-block"
      }
    },
    checkFormat:function(){
      if(this.new_password.length<8||this.new_password.length>16){
        $(".mo-div ul .p2 .sp1").css("display","inline-block")
      }
      else{
        $(".mo-div ul .p2 .sp1 ").css("display","none")
      }
    },
    confirmPassword:function(){
      if(this.new_password != this.new_password_verify){
        $(".mo-div ul .p3 span").css("display","inline-block")
      }
      else{
        $(".mo-div ul .p3 span").css("display","none")
      }
    },
    reset:function(){
      $(".mo-div ul p span").css("display","none")
    },
    push:function () {
      console.log("保存>>>>>");
      var vm=this;
      if(this.current_password){
        if(this.new_password){
          if(this.new_password == this.new_password_verify){
              axios({
                url:"http://127.0.0.1:8000/user/changepsd/",
                method:"post",
                data:{
                  "telephone":this.telephone,
                  "current_password":this.current_password,  //这个密码是用户输入的，不一定正确
                  "new_password":this.new_password,
                  "new_password_verify":this.new_password_verify
                }
              })
                .then(function (response) {
                  vm.res=response.data;
                  // 255代表密码验证正确
                  if(vm.res.code=="211") {
                    alert("密码修改成功");
                    $('#change').modal('hide');
                    // $("#change").modal({show:true, backdrop:'static'});
                    // $("#change").remove()
                  }
                  else if(vm.res.code=="514"){
                    alert("密码错误")
                  }
                })
                .catch(function (error) {
                  console.log(error);
                })
          }
          else{
              $(".mo-div ul .p3 span").css("display","inline-block")  //确认密码为空时提示
          }
        }
        else{
          $(".mo-div ul .p2 .sp1").css("display","inline-block");  //新密码为空时提示新密码不能为空
        }
      }
      else{
        $(".mo-div ul .p1 .sp1")[0].style.display="inline-block" //密码为空时提示密码不能为空
      }
    },
    cancel:function () {
      $('#change').modal('hide');
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mo-div{
    height: 180px;
  }
  .mo-div ul,.mo-div ul li{
    list-style: none;
  }
  .mo-div ul li{
    font-size: 12px;
    color: #333;
    margin-left: 40px;
    height: 26px;
  }
  .mo-div ul li span:nth-child(1){
    text-align: right;
  }
  .mo-div ul li:nth-child(2),.mo-div ul li:nth-child(3){

  }
  .mo-div ul p{
    font-size: 10px;
    color: red;
    text-indent: 5px;
  }
  .mo-div ul p span{
    display: none;
  }
  .mo-div ul p i{
    opacity: 0;
  }
  .footer div{
    border-radius: 4px;
    display: inline-block;
    width: 80px;
    color: white;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor:pointer;
    font-size: 14px;
    font-weight: 400;
  }
  .footer .del{
    border: 1px solid #ccc;
    margin-left: 20px;
    margin-right: 30px;
    color: #333;
    background-color: #fff;
  }
  .footer .sub{
    background-color: #337AB7;
  }
  .footer .sub:hover{
    background-color: #2d5389;
  }
</style>
