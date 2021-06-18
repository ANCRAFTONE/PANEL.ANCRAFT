from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI() #API.ANCRAFT.ONE


@app.get("/")
async def root():
    return {"ancraft": "Hello World"}
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/s/{s}")
async def root(s):
    import pymysql

    dbfrom = ''

    conn = pymysql.connect(host="api.ancraft.one", user="ANCRAFT", password="", database="ANCRAFT", charset="utf8")
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM `sell` WHERE `name` LIKE \'%{0}%\''.format(s)) #sql搜尋指令
    data = cursor.fetchall()
    conn.close


    item = []
    for i in data: #每次處理一列
        key = str(i[1]) 
        l = {'name':'','price':'','image':'','by':''} #記分板
        l["name"] = i[1]
        l["price"] = i[2]
        l["image"] = i[3]
        l["by"] = i[4]
        item.append(l) #加入json
    if(len(item) <= 0 ):
        item = "{沒有結果}"
    return item




@app.get("/by/{id}")
async def root(id):
    import pymysql

    dbfrom = ''

    conn = pymysql.connect(host="api.ancraft.one", user="ANCRAFT", password="", database="ANCRAFT", charset="utf8")
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM `sell` WHERE `by` LIKE \'%{0}%\''.format(id)) #sql搜尋指令
    data = cursor.fetchall() #儲存查詢結果
    conn.close


    item = []
    for i in data: #每次處理一列
        key = str(i[1]) 
        l = {'name':'','price':'','image':'','by':''} #記分板
        l["name"] = i[1]
        l["price"] = i[2]
        l["image"] = i[3]
        l["by"] = i[4]
        item.append(l) #加入json
    if(len(item) <= 0 ):
        item = "{沒有結果}"
    return item