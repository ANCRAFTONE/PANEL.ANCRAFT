///api.ancraft.one

//get() //首次執行

function get() { //ajax get api
s = $("#s").val();//取得keyword
const api = 'http://127.0.0.1:19132/s/' + s;//api請求地址
document.title = s + "-的搜尋結果"; //設定標題
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
    template() //模擬展示
  }
});

function lodata(jsond) { //處理數據
  
  
	// console.log(jsond);
	var name = [], standard_deviation = []; //分類資料
  var price = [], by = [], img = [],sho = [],store = []; //分類資料

	for (var i=0; i<jsond.length; i++) { //循環處理每列資料
		row = jsond[i]; //正在處理列
    const shopkeeper = row['by'].split('-');//切割資料
		name.push( row['name'] );
		price.push( row['price'] );
		store.push( shopkeeper[0] );
		by.push( row['by'] );
    sho.push( shopkeeper[1] );
    img.push( row['image'] );
    // console.log(row)
	}
  stats(name,price,by,img,store,sho,jsond); //統計
	makePlot( name, price, by, store, sho, standard_deviation, jsond ); //製作圖表
}



function stats(name,price,by,img,store,sho,jsond){ //製作數據統計
  price.forEach(function(v,i,a){
    a[i] = v.replace(/,/g, ""); //去除逗號
  });

  var data = {
    "data_1":"000",
    "data_2":"000",
    "data_3":"000",
    "data_4":"000",
    "data_5":"000"
  };
  anime({ //統計數字自動增加動畫
    targets: data,
    data_1: jsond.length,
    data_2: Math.max(...price),
    data_3: Math.max(...price)-Math.min(...price),
    data_4: Math.min(...price),
    data_5: jsond.length,
    round: 1,
    easing: 'easeInOutExpo',
    delay: 300,
    update: function(){
      $("#data_1").html(data['data_1']);
      $("#data_2").html(data['data_2']);
      $("#data_3").html(data['data_3']);
      $("#data_4").html(data['data_4']);
      $("#data_5").html(data['data_5']);
    }
  });

  $("#data_1").text(jsond.length); //搜尋到的數量
  $("#data_2").text(Math.max(...price)); 
  $("#data_3").text(Math.max(...price)-Math.min(...price))
  $("#data_4").text(Math.min(...price));
  $("#data_5").text(jsond.length);
};//statsend 統計結束

function template() { //製作展示模型
  var data = {
    "data_1":"000",
    "data_2":"000",
    "data_3":"000",
    "data_4":"000",
    "data_5":"000"
  };
  anime({ //統計數字自動增加動畫
    targets: data,
    data_1: Math.random() * 10000,
    data_2: Math.random() * 10000,
    data_3: Math.random() * 10000,
    data_4: Math.random() * 10000,
    data_5: Math.random() * 10000,
    round: 1,
    easing: 'easeInOutExpo',
    delay: 131,
    update: function(){
      $("#data_1").html(data['data_1']);
      $("#data_2").html(data['data_2']);
      $("#data_3").html(data['data_3']);
      $("#data_4").html(data['data_4']);
      $("#data_5").html(data['data_5']);
    }
  });
}

function makePlot(name, price, by, store, sho, standard_deviation, jsond ){ //製作圖形化資料表

  //商品價格
    var traces = [{
      x: name, 
      y: price,
      type: 'bar',
      marker: {
      color: 'rgb(142,124,195)'
    }
    }];
    Plotly.newPlot('prices', traces, 
      {title: '商品價格(無排序)'});
  
      
  //供應商
    var traces = [{
      x: by, 
      y: name,
      type: 'bar',
      marker: {
      color: 'rgb(142,124,195)'
    }
    }];
    Plotly.newPlot('bys', traces, 
      {title: '供應廠商'});
  
  
  //廠商占比
    var traces = [{
      labels: _.compact(store), //處理錯誤或空值
      type: 'pie',
      automargin: false
      }];
      Plotly.newPlot('pie', traces, 
        {title: '廠商占比'});
  
  
  
  //零售商店
  var traces = [{
    x: sho,
    type: 'histogram',
    cumulative: {enabled: false},
    marker: {
      color: 'rgb(142,124,195)'
    }
    }];
    Plotly.newPlot('anc', traces, 
      {title: '零售店'});
  
  
  
  
  };//plotend

};//ajax get api請求結束


function sidebar() { //側邊導覽切換
  $("body").toggleClass("opennav");
};


$(document).ready(function(){ //按下enter送出請求
  $("input").keyup(function(id){
    if(id.key === "Enter"){get()};//請求api
    });
});
