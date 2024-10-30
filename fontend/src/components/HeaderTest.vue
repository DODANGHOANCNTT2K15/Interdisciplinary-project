<template>
<header>
    <div id="header_cover">
        <div class="cover">
            <router-link to="/" id="logo" style="height: 100%;">
                <img src="../../public/img/logo-01.png" height="100%" alt="Logo">
            </router-link>
            <div class="header_title">
                <h1>Hệ thống thi trực tuyến</h1>
            </div>
        </div>
        <div class="cover">
            <div class="header_authencation">
                <h1>Guest(khách)</h1>
            </div>
            <div class="header_question_menu" @click="$emit('toggle-sidebar')"> 
                <i class="fas fa-bars" style="color: gray;"></i>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
  name: 'HeaderTest',
};
</script>

<style scoped>
#header_cover{
    height: 70px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 3%;
    padding-right: 3%;
    box-sizing: border-box;
    width: 100%;
}
.cover{
    height: 100%;
    display: flex;
    align-items: center;
}
.cover h1{
    margin-left: 25px;
    margin-right: 20px;
}
.header_question_menu{
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
}
h1{
    color: white;
    font-size: 20px;
}
.header_title>h1{
    font-size: 30px;
}
.header_question_menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_question_menu i, .header_question_menu svg {
  font-size: 24px; 
  color: #333333; 
  font-weight: bolder;
}
</style>