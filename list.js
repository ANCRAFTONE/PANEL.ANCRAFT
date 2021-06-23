///api.ancraft.one

//get() //首次執行

function get() {
s = $("#s").val();//取得key
const api = 'http://127.0.0.1:19132/s/' + s;//api請求地址
document.title = s+"-搜尋結果"; //設定標題
$.ajax({
  type: "GET",
  headers: {},
  url: api,
  dataType: "json",
  crossDomain : true,
  beforeSend: function(){
    // request api.ancraft.one
  },
  success: function (response) { //api請求成功
    const jsond = []; //資料總表
    jsond.push(...response); //儲存json到列表中
    lodata(jsond); //開始處理資料
  },
  error: function (thrownError) {
    console.log(thrownError); //列印錯誤訊息
  }
});

function lodata(jsond) { //處理數據
  
  $(".l").html("")
	// console.log(jsond);
	var name = [], standard_deviation = []; //分類資料
  var price = [], by = [], img = [],sho = [],store = []; //分類資料

	for (var i=0; i<jsond.length; i++) { //循環處理每列資料
		row = jsond[i]; //正在處理列
    const shopkeeper = row['by'].split('-');//切割資料
		name = row['name'] 
		price = row['price'] 
		store = shopkeeper[0] 
		by = row['by'] 
    sho = shopkeeper[1] 
    img = row['image'] 
    // console.log(row)
    tem = `
    <div class="block">
    <h3 id="tag">${name}</h3>
    <div class="image">
    <img src=${img}></img>
    </div>
    <div class="text">
      <p>${price}</p>
      <p>${by}</p>
    </div>
    </div>
    `
    $(".l").append(tem)
	}
	makePlotly( name, price, by, store, sho, standard_deviation, jsond ); //製作圖表
}

function makePlotly(name, price, by, store, sho, standard_deviation, jsond ){ //製作圖形化資料表



};//plotend




ScrollReveal().reveal('.block');
};//get ajax api請求結束


function sidebar() { //側邊導覽切換
  $("body").toggleClass("mode");
};
