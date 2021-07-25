# admin

[![Netlify Status](https://api.netlify.com/api/v1/badges/aed0736c-40f7-41bf-afe6-4a23a6788dd2/deploy-status)](https://app.netlify.com/sites/net/deploys)


利用HTML CSS JS與API運作，適合多種系統、平台的管理面板。
可快速使用，輕巧，跨平台支援。

- °。 [`adoring-ptolemy-b3167e`](net.netlify.app)

# 示範
![](https://i.imgur.com/qPMhcY3.png)

# 結構
```bash=
admin                       
├─ API                      
│  ├─ main.py               
│  ├─ start.anc             
│  └─ ViA.json              
├─ NET                      
│  └─ asset                 
│     └─ panel              
│        ├─ page            
│        │  ├─ list.css     
│        │  ├─ list.html    
│        │  ├─ list.js      
│        │  └─ status.html  
│        ├─ content.js      
│        ├─ index.html      
│        ├─ Reveal.js       
│        ├─ script.js       
│        └─ style.css       
├─ test                     
│  ├─ script.js             
│  ├─ style.css             
│  └─ test.dash.html        
├─ index.html               
├─ netlify.toml             
└─ README.md                

```


# 設計

 * 數據統計
 * 調整參數
 * 內容管理
 * a
### 在設計方面引用了幾種想法

#### 多功能

接管伺服器設定與調整參數操作，集成數據可視化功能，為供應商更好的解決方案

#### 模塊化

可加裝插件或頁面，調整分區策略，畫布排版，數據chart。訂製個性化面板

#### 跨平台

在行動設備、桌面平台、嵌入式系統中都能啟用的功能


# 翻譯
