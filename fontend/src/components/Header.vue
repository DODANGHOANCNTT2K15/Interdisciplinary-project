<template>
    <header>
        <div id="header-wrapper">
            <div id="header-top">
                <div id="header-phone">
                    <i class="fas fa-phone"></i>
                    <span>0353.546.276</span>
                </div>
                <div id="header-solgan">
                    <span>Rocket - Chúng ta sứng đáng điểm cao hơn</span>
                </div>
                <router-link to="/login" style="text-decoration: none;">
                    <div id="header-authencation">
                        <button>Đăng ký</button>
                        <span>/</span>
                        <button>Đăng nhập</button> 
                    </div>
                </router-link>
            </div>
            <div id="header-main">
                <router-link to="/" id="logo" style="height: 100%;">
                    <img src="../../public/img/logo-01.png" height="100%" alt="Logo">
                </router-link>
                <div id="header-nav">
                    <ul>
                        <li>
                            <router-link to="/about" class="text-white">Về chúng tôi <i class="fas fa-chevron-down"></i></router-link>
                            <ul class="dropdown-content">
                                <li><router-link to="/base" class="text-white">Hệ thống cơ sở</router-link></li>
                                <li><router-link to="/news" class="text-white">Tin tức</router-link></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/course" class="text-white">Khóa học <i class="fas fa-chevron-down"></i></router-link>
                            <ul class="dropdown-content">
                                <li><a href="">FOUNDATION</a></li>
                                <li><a href="">BEGINNER</a></li>
                                <li><a href="">CAMP BOMB</a></li>
                                <li><a href="">SUBMARINE</a></li>
                                <li><a href="">MASTER</a></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/exams" class="text-white">Đề thi</router-link>
                        </li>
                        <li>
                            <a href="" class="text-white">Tài liệu TOEIC <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-content">
                                <li><a href="">Listening & Reading</a></li>
                                <li><a href="">Speaking & Writting</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="header-btn">
                    <div id="btn-test">
                        <button @click="gotoTestOnilne">
                            TEST ONLINE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    height: 128px;
    width: 100vw;  
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

#header-wrapper{
    display: flex;
    flex-wrap: wrap;
}

#header-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    width: 100%;
    background-color: white;
    padding-left: 10vw;
    padding-right: 10vw;
}

#header-top button{
    border: none;
    box-shadow: none;
}

#header-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 92px;
    width: 100%;
    box-sizing: border-box;
    background-color: #333333;
    padding-left: 10vw;
    padding-right: 10vw;
}

#header-nav ul:first-child{
    display: flex;
    
}

#header-nav ul:first-child>li{
    list-style-type: none;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #333333;
}

#header-nav ul:first-child li a:first-child{
    text-decoration: none;
    text-transform: uppercase;
    background-color: #333333;
    font-weight: bolder;
}

#header-nav ul:first-child li a:first-child i{
    background-color: #333333;
    color: white;
}

#header-nav > ul > li{
    position: relative;
}
#header-nav > ul > li > ul {
  display: none; 
  position: absolute;
  top: 100%; 
  left: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  min-width: 180px;
  padding: 10px 0;
  z-index: 1000;
}
#header-nav > ul > li:hover > ul {
  display: block; 
  background-color: #161616;
}
#header-nav > ul > li > ul > li {
  padding: 8px 16px;
  list-style: none;
  background-color: transparent;
}

#header-nav > ul > li > ul > li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  background-color: transparent !important;
}

#header-nav > ul > li > ul > li a:hover {
  color: #eb3c14;
}


#header-btn div:first-child{
    margin-right: 25px;
}

#logo>img{
    background-color: #333333;
}

#header-btn{
    height: 36px;
    width: 180px;
    box-sizing: border-box;
    display: flex;
    background-color: #333333;
}

#btn-search{
    height: 36px;
    width: 36px;
    border-radius: 5px;
}

#btn-search>button{
    height: 100%;
    width: 100%;
    background-color: #333333; 
    border: 0.5px solid rgb(255, 255, 255); 
    border-radius: 5px; 
    cursor: pointer;
}

#btn-search button i {
    color: white; 
}

#btn-test{
    width: 120px;
    height: 36px;
    border: none;
    border-radius: 8px;
}

#btn-test>button{
    width: 100%;
    height: 100%;
    background-color: orangered;
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
}
</style>

<script>
export default {
  name: 'AppHeader',
  methods: {
    gotoTestOnilne() {
        this.$router.push('/test-online');
    },
    handleScroll() {
        const headerMain = document.getElementById('header-main');
        const stickyPoint = headerMain.offsetTop;

        if (window.scrollY > stickyPoint) {
            if (!headerMain.classList.contains('sticky')) {
            headerMain.classList.add('sticky');
            }
        } else {
            headerMain.classList.remove('sticky');
        }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
};
</script>