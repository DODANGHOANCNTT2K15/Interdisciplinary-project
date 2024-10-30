<template>
<main>
    <div id="div-authencation">
        <div class="div-title">
            <h1>ROCKET - XÁC THỰC</h1>
        </div>
        <div>
            <div id="login">
                <h1>Đăng nhập</h1>
                <div>
                    <form action="">
                        <label for="">Tên đăng nhập</label>
                        <input type="text" placeholder="TÊN ĐĂNG NHẬP">
                        <label for="">Mật khẩu</label>
                        <input type="text" placeholder="MẬT KHẨU">
                        <div style="display: flex;justify-content: space-between;">
                            <div style="width: 45%;display: flex;align-items: center;">
                                <input type="checkbox"><label>Ghi nhớ đăng nhập</label>
                            </div>
                            <a href="">Quên mật khẩu?</a>
                        </div>
                        <button>ĐĂNG NHẬP</button>
                        <div>
                            <p class="text-white" style="text-align: center;">---- HOẶC -----</p>
                        </div>
                        <button>ĐĂNG NHẬP BẰNG GOOGLE</button>
                    </form>
                </div>
            </div>
            <div style="width: 50px;"></div>
            <div id="signup">
                <h1>Đăng ký</h1>
                <div>
                    <form>
                        <div>
                            <div>
                                <label for="">Họ và tên</label>
                                <input type="text" placeholder="HỌ VÀ TÊN">
                                <label for="">Mật khẩu</label>
                                <input type="text" placeholder="MẬT KHẨU">
                                <label for="">Email</label>
                                <input type="text" placeholder="EMAIL">
                            </div>
                            <div>
                                <label for="">Tên đăng nhập</label>
                                <input type="text" placeholder="TÊN ĐĂNG NHẬP">
                                <label for="">Nhập lai mật khẩu</label>
                                <input type="text" placeholder="NHẬP LẠI MẬT KHẨU">
                                <label for="">Số điện thoại</label>
                                <input type="text" placeholder="SỐ ĐIỆN THOẠI">
                            </div>
                        </div>
                        <button>ĐĂNG KÝ</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
  name: 'LoginView'
};
</script>

<style>
.div-title{
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  rgb(28, 82, 163);
}

.div-title>h1{
    color: white;
    font-size: 30px;
    font-weight: lighter;
}
#div-authencation>div:last-child{
    padding: 5% 15% 5% 15%;
    height: auto;
    display: flex;
    justify-content: center;
}
#div-authencation>div:last-child>div>h1{
    margin-bottom: 20px;
}

#login{
    width: 40%;
}
#div-authencation>div:last-child>#login>div{
    background-color:  rgb(28, 82, 163);
    padding: 25px;
}
#div-authencation>div:last-child>#login>div>form, #div-authencation>div:last-child>#login>div>form label, #div-authencation>div:last-child>#login>div>form>div>a{
    color: white;
    font-weight: bold;
}
#div-authencation>div:last-child>#login>div>form>label, #login>div>form>input{
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    margin-top: 15px;
}
#login>div>form>input{
    padding-left: 10px;
    background-color: white;
}
input[type="checkbox"] {
    width: 20px !important;
    height: 20px !important;
    cursor: pointer;
    accent-color: #007bff;
    margin-right: 10px;
}
#login form > div:nth-child(3)>a{
    text-decoration: dashed;
    width: 45%;
}
#login>div div:last-child{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}  
#login>div button{
    padding: 5px;
    background-color: white;
    font-weight: bold;
    color: #007bff;
    margin: 20px 0px 20px 0px;
    width: 100%;
    height: 40px;
} 

#signup{
    width: 45%;
}

#signup>div{
    background-color: rgba(255, 228, 196, 0.507);
    padding: 20px;
}
#signup>div>form label{
    font-weight: bold;
}
#signup>div>form>div:first-child{
    display: flex;
    justify-content: space-between;
}
#signup>div>form>div:first-child div{
    width: 49%;
}
#signup>div>form>div:first-child div input{
    width: 100%;
    height: 40px;
    padding-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
}
#signup>div>form button{
    width: 100%;
    height: 40px;
    background-color:  rgb(28, 82, 163);
    color: white;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>