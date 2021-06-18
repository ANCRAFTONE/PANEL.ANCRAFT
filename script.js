///api.ancraft.one

//get() //首次執行

function get() {
s = $("#s").val();//取得key
const api = 'http://127.0.0.1:19132/s/' + s;
document.title = s+"-搜尋結果"; //設定標題
$.ajax({
  type: "GET",
  url: api,
  dataType: "json",
  crossDomain : true,
  beforeSend: function(){
    // request api.ancraft.one
  },
  success: function (response) {
    const jsond = [];
    jsond.push(...response);//儲存json到列表中
    lodata(jsond);
  },
  error: function (thrownError) {
    console.log(thrownError);
  }
});

function lodata(jsond) { //處理數據
  
  
	// console.log(jsond);
	var name = [], standard_deviation = []; //分類資料種
  var price = [], by = [], img = [],sho = [],store = [];

	for (var i=0; i<jsond.length; i++) {
		row = jsond[i];const shopkeeper = row['by'].split('-');
		name.push( row['name'] );
		price.push( row['price'] );
		store.push( shopkeeper[0] );
		by.push( row['by'] );
    sho.push( shopkeeper[1] );
    img.push( row['image'] );
    // console.log(row)
	}
	makePlotly( name, price, by, store, sho, standard_deviation, jsond );
  stats(name,price,by,img,store,sho,jsond);
}

function makePlotly(name, price, by, store, sho, standard_deviation, jsond ){

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
    labels: _.compact(store),
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

function stats(name,price,by,img,store,sho,jsond){
  price.forEach(function(v,i,a){
    a[i] = v.replace(/,/g, "");
  });
//$("#data_1").text(jsond.length); //搜尋到的數量
//$("#data_2").text(Math.max(...price));
//$("#data_3").text(Math.max(...price)-Math.min(...price))
//$("#data_4").text(Math.min(...price));
var data = {
  "data_1":"0",
  "data_2":"0",
  "data_3":"0",
  "data_4":"0",
};
anime({
  targets: data,
  data_1: jsond.length,
  data_2: Math.max(...price),
  data_3: Math.max(...price)-Math.min(...price),
  data_4: Math.min(...price),
  round: 1,
  easing: 'easeInOutExpo',
  delay: 300,
  update: function(){
    $("#data_1").html(data['data_1']);
    $("#data_2").html(data['data_2']);
    $("#data_3").html(data['data_3']);
    $("#data_4").html(data['data_4']);
  }
});

};//statsend



};//get




