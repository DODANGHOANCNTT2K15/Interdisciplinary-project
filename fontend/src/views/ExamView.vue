<template>
<main>
    <div class="div-title">
        <h1>Thư viện đề thi</h1>
    </div>
    <div class="main_exams">
        <div class="catergory_exams">
            <ul>
                <li>Tấ cả</li>
                <li>IELTS Academic</li>
                <li>IELTS General</li>
                <li>TOEIC</li>
                <li>HSK 1</li>
                <li>HSK 2</li>
                <li>HSK 3</li>
                <li>HSK 4</li>
                <li>HSK 5</li>
                <li>HSK 6</li>
                <li>TOPIK I</li>
                <li>TOPIK II</li>
                <li>Toán THPTQG</li>
                <li>Tiếng Anh THPTQG</li>
                <li>Sinh học THPTQG</li>
            </ul>
        </div>
        <div id="exams_search">
            <form action="" id="search_form">
                <input type="text" placeholder="Nhập từ khóa bạn muốn tìm kiếm: tên sách, dạng câu hỏi ...">
                <button type="submit">Tìm kiếm</button>
            </form>
        </div>
        <div class="exams_cover_card">
            <div class="card">
                <h3>IELTS Simulation</h3>
                <h3>Listening test 1</h3>
                <div class="info">
                    <span class="icon"><i class="fas fa-clock"></i> 40 phút</span>
                    <span>|</span>
                    <span class="icon"><i class="fas fa-users"></i> 697092</span>
                    <span>|</span>
                    <span class="icon"><i class="fas fa-comments"></i> 2114</span>
                </div>
                <p>4 phần thi | 40 câu hỏi</p>
                <div class="tags">
                    <span class="tag">#IELTS Academic</span>
                    <span class="tag">#Listening</span>
                </div>
                <button class="details-btn">Chi tiết</button>
            </div>
            <div class="card">
                <h3>IELTS Simulation</h3>
                <h3>Listening test 1</h3>
                <div class="info">
                    <span class="icon"><i class="fas fa-clock"></i> 40 phút</span>
                    <span>|</span>
                    <span class="icon"><i class="fas fa-users"></i> 697092</span>
                    <span>|</span>
                    <span class="icon"><i class="fas fa-comments"></i> 2114</span>
                </div>
                <p>4 phần thi | 40 câu hỏi</p>
                <div class="tags">
                    <span class="tag">#IELTS Academic</span>
                    <span class="tag">#Listening</span>
                </div>
                <button class="details-btn">Chi tiết</button>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default{
    name: "ExamView",
}
</script>

<style scoped>
.main_exams{
    padding-left: 12%;
    padding-right: 12%;
    padding-top: 40px;
}

.catergory_exams ul li{
    list-style: none;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    background-color: #4e4e4e;
    color: white;
    font-weight: bolder;
    margin-left: 10px;
    margin-bottom: 10px;
}
.catergory_exams ul li:hover{
    background-color: orangered;
}
.catergory_exams ul{
    display: flex;
    flex-wrap: wrap;
}
#exams_search{
    margin-top: 20px;
    margin-bottom: 50px;
}
#search_form input{
    width: 88%;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    margin-right: 1%;
}
#search_form button{
    width: 10%;
    height: 40px;
    color: white;
    background-color: #e74f0e;
    font-weight: bolder;
    font-size: 15px;
}

/* Card container */
.exams_cover_card{
    display: flex;
}
.card {
  width: 200px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: left;
  font-family: Arial, sans-serif;
  margin-bottom: 25px;
  margin: 20px;
}

.card h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #333;
}

.info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 10px;
}

.icon {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.icon i {
  margin-right: 5px;
}

.card p {
  font-size: 14px;
  color: #555;
  margin: 0 0 10px;
}

.tags {
  margin-bottom: 10px;
}

.tag {
  display: inline-block;
  background-color: #e3f2fd;
  color: #1a73e8;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
}

.details-btn {
  display: block;
  width: 100%;
  padding: 8px;
  text-align: center;
  color: #1a73e8;
  background-color: transparent;
  border: 1px solid #1a73e8;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.details-btn:hover {
  background-color: #1a73e8;
  color: #fff;
}
</style>