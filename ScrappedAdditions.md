//collapsable tiles html 
  <button type="button" class="collapsible">1402/01/07 | فروشگاه لبنیات</button>
          <div class="content-box">

            <div class="content">
              <p>قالب سایت فروشگاه لبنی</p>
              <img src="/Images/dairyshop-img1.png" alt="dairyshop screenshot" style="margin-top: 10px ;width: 80%; border: solid 1px #ffffff50; border-radius: 10px;">
              <img src="/Images/dairyshop-img2.png" alt="dairyshop screenshot" style="margin-top: 10px ;width: 80%; border: solid 1px #ffffff50; border-radius: 10px;">
              <a href="https://github.com/APMINERGH/dairyshop_website" target="_blank">
                <button class="source-code-btn">مشاهده سورس کد در گیت هاب</button>
              </a>
            </div>

          </div>

          <button type="button" class="collapsible"> سایت رزومه | 1401/12/21</button>
          <div class="content-box">

            <div class="content">
              <p>اولین قدم جدی من در زمینه طراحی وب , یه سایت رزومه برای نمایش فعالیت هام</p>
              <a href="https://github.com/APMINERGH/portfolio_website" target="_blank">
                <button class="source-code-btn">مشاهده سورس کد در گیت هاب</button>
              </a>
            </div>

          </div>

//collapsable tiles css
.collapsible {
  z-index: 1;
  width: 100%;
  height: 30px;
  background-color: var(--major);
  border: none;
  text-align: center;
  outline: none;
  font-size: 16px;
  font-weight: bold;
}
.active, .collapsible:hover {
  cursor: crosshair;
  background-color: var(--minor);
  color: var(--major);
}
.content-box {
  padding: 8px;
  width: 100%;
  display: none;
  overflow: hidden;
  border: dashed 1px var(--minor);
  border-top: none;
}
.content {
  z-index: 1;
  margin: 20px ;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  font-size: 14px;
}
.source-code-btn {
  margin-top: 10px;
  padding: 4px 8px;
  border-radius: 10px;
  border: dashed 1px var(--minor);
  background-color: var(--major);
  color: var(--minor);
}
.source-code-btn:hover {
  cursor: pointer;
  background-color: var(--hover);
}
.source-code-btn:active {
  background-color: var(--active);
}

//collapsable tiles javascript

//Collapsible Project Tiles---------------------------------------------------
var coll = document.getElementsByClassName("collapsible"), i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";}});}; 