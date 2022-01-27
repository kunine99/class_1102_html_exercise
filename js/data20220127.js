const dataStore = [
  {
    "id": 1,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "一米特創藝美食館",
    "address": "宜蘭縣蘇澳鎮祥和路199號",
    "tel": "03-9907779#500",
    "web": "www.onemit.com.tw/"
  },
  {
    "id": 2,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "台灣足鞋健康知識館",
    "address": "宜蘭縣五結鄉中興村中里路18號",
    "tel": "03-9500551#501",
    "web": "www.drfoot.com.tw"
  },
  {
    "id": 3,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "安永心食館",
    "address": "宜蘭縣蘇澳鎮中山路二段415號",
    "tel": "03-9953399",
    "web": "www.anyomuseum.com/"
  },
  {
    "id": 4,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "亞典蛋糕密碼館",
    "address": "宜蘭縣宜蘭市梅洲二路122號",
    "tel": "03-9286777",
    "web": "www.rden.com.tw"
  },
  {
    "id": 5,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "宜蘭餅發明館",
    "address": "宜蘭縣蘇澳鎮海山西路369號",
    "tel": "03-9905999",
    "web": "www.diy-icake.com.tw"
  },
  {
    "id": 6,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "金車噶瑪蘭威士忌酒廠",
    "address": "宜蘭縣員山鄉員山路二段326號",
    "tel": "03-9229000#1104",
    "web": "www.kavalanshisky.com"
  },
  {
    "id": 7,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "博士鴨觀光工廠",
    "address": "宜蘭縣五結鄉福興村新五路1-1號",
    "tel": "03-9606051",
    "web": "www.dr-duck.com.tw/"
  },
  {
    "id": 8,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "菌寶貝博物館",
    "address": "宜蘭縣宜蘭市梅洲一路22號",
    "tel": "03-9281168",
    "web": "www.bio-nin.com.tw"
  },
  {
    "id": 9,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "綺麗博物館",
    "address": "宜蘭縣蘇澳鎮利工一路一段6號",
    "tel": "03-9905388",
    "web": "tw.cljewels.com/index_down.php"
  },
  {
    "id": 10,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "臺灣菸酒股份有限公司宜蘭酒廠觀光工廠",
    "address": "宜蘭縣宜蘭市舊城西路3號",
    "tel": "03-9355526#461",
    "web": "event.ttl-eshop.com.tw/yl/"
  },
  {
    "id": 11,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "蜡藝蜡筆城堡",
    "address": "宜蘭縣蘇澳鎮海山西路500號",
    "tel": "03-9907101",
    "web": "www.lucky-art.com.tw"
  },
  {
    "id": 12,
    "area": "北部",
    "district": "宜蘭縣",
    "name": "橘之鄉蜜餞觀光工廠",
    "address": "宜蘭縣宜蘭市梅洲二路33號",
    "tel": "03-9285758",
    "web": "www.agrioz.com.tw"
  },
  {
    "id": 13,
    "area": "北部",
    "district": "基隆市",
    "name": "一太e衛浴觀光工廠",
    "address": "基隆市安樂區大武崙工業區武訓街51號",
    "tel": "02-24342111#503",
    "web": "www.itai.com.tw"
  },
  {
    "id": 14,
    "area": "北部",
    "district": "新北市",
    "name": "大黑松小倆口牛軋糖創意博物館",
    "address": "新北市土城區自強街31之2號",
    "tel": "02-22687222#111",
    "web": "www.9420.com.tw"
  },
  {
    "id": 15,
    "area": "北部",
    "district": "新北市",
    "name": "工研益壽多文化館",
    "address": "新北市淡水區行忠路168號",
    "tel": "02-27781981",
    "web": "www.kongyen.com.tw"
  },
  {
    "id": 16,
    "area": "北部",
    "district": "新北市",
    "name": "手信坊創意和?子文化館",
    "address": "新北市土城區國際路55號",
    "tel": "02-82620506",
    "web": "www.3ssf.com.tw/factory/index.html"
  },
  {
    "id": 17,
    "area": "北部",
    "district": "新北市",
    "name": "王子創意文具國",
    "address": "新北市林口區粉寮路一段86號",
    "tel": "02-25783927",
    "web": "www.princecst.com.tw"
  },
  {
    "id": 18,
    "area": "北部",
    "district": "新北市",
    "name": "王鼎時間科藝體驗館",
    "address": "新北市土城區大暖路136號",
    "tel": "02-22682999",
    "web": "www.atopwatch.com/factory/"
  },
  {
    "id": 19,
    "area": "北部",
    "district": "新北市",
    "name": "台灣不二衛生套知識館",
    "address": "新北市淡水區行忠路132號",
    "tel": "02-37655005",
    "web": "www.fulex.com.tw/center/index.html"
  },
  {
    "id": 20,
    "area": "北部",
    "district": "新北市",
    "name": "玉美人孕婦裝觀光工廠",
    "address": "新北市板橋區四川路２段16巷10號5樓",
    "tel": "02-89669762#13",
    "web": "www.ymr.com.tw"
  },
  {
    "id": 21,
    "area": "北部",
    "district": "新北市",
    "name": "吳福洋襪子故事館",
    "address": "新北市林口區工二工業區工九路3號",
    "tel": "02-26035008",
    "web": "www.wufuyang.com"
  },
  {
    "id": 22,
    "area": "北部",
    "district": "新北市",
    "name": "宏洲磁磚觀光工廠",
    "address": "新北市鶯歌區中正三路230巷16號",
    "tel": "02-86782788",
    "web": "www.hjtilemuseum.com.tw"
  },
  {
    "id": 23,
    "area": "北部",
    "district": "新北市",
    "name": "亞洛美精靈國度 AROMATE WONDERLAND",
    "address": "新北市鶯歌區中正三路156巷59號",
    "tel": "02-26772170",
    "web": "www.aromate-w.com/index.html"
  },
  {
    "id": 24,
    "area": "北部",
    "district": "新北市",
    "name": "茶山房肥皂文化體驗館",
    "address": "新北市三峽區白雞64之11號",
    "tel": "02-26714400",
    "web": "www.teasoap.com.tw"
  },
  {
    "id": 25,
    "area": "北部",
    "district": "新北市",
    "name": "許新旺陶瓷紀念博物館",
    "address": "新北市鶯歌區尖山埔路81號",
    "tel": "02-26789571",
    "web": "www.shus.com.tw"
  },
  {
    "id": 26,
    "area": "北部",
    "district": "新北市",
    "name": "連淨綠色科技概念館",
    "address": "新北市新店區寶興路45巷9弄2號",
    "tel": "0800-585598",
    "web": "www.aconpure.com/en/index.php/tourism-factory2"
  },
  {
    "id": 27,
    "area": "北部",
    "district": "新北市",
    "name": "聖瑪莉丹麥麵包莊園",
    "address": "新北市土城區中山路21號",
    "tel": "02-22689600",
    "web": "www.sunmerry.com.tw/garden/"
  },
  {
    "id": 28,
    "area": "北部",
    "district": "新北市",
    "name": "維格餅家 鳳梨酥夢工場",
    "address": "新北市五股區成泰路一段87號",
    "tel": "02-22919122",
    "web": "www.taiwan-vigor.com.tw"
  },
  {
    "id": 29,
    "area": "北部",
    "district": "桃園市",
    "name": "GFun機能服飾紡織生活館",
    "address": "桃園市觀音區樹林里工業六路3號",
    "tel": "0800-038838",
    "web": "www.gfun.com.tw/"
  },
  {
    "id": 30,
    "area": "北部",
    "district": "桃園市",
    "name": "大溪老茶廠",
    "address": "桃園市大溪區復興路二段732巷80號",
    "tel": "03-3825089",
    "web": "www.daxitea.com"
  },
  {
    "id": 31,
    "area": "北部",
    "district": "桃園市",
    "name": "太平洋自行車博物館",
    "address": "桃園市新屋區永安里永福路686號",
    "tel": "03-4861231#312",
    "web": "www.pacificcyclesmuseum.com/"
  },
  {
    "id": 32,
    "area": "北部",
    "district": "桃園市",
    "name": "卡司．蒂菈樂園",
    "address": "桃園市蘆竹區宏竹村大竹北路90-66號",
    "tel": "03-2551999",
    "web": "www.castella-land.com.tw/"
  },
  {
    "id": 33,
    "area": "北部",
    "district": "桃園市",
    "name": "巧克力共和國",
    "address": "桃園市八德區介壽路二段巧克力街底(巧克力共和國",
    "tel": "03-3656555#777",
    "web": "www.republicofchocolate.com.tw/index.aspx"
  },
  {
    "id": 34,
    "area": "北部",
    "district": "桃園市",
    "name": "江記豆腐乳文化館",
    "address": "桃園市中壢區月眉路2段248巷85號",
    "tel": "03-4986018",
    "web": "www.xpl.com.tw"
  },
  {
    "id": 35,
    "area": "北部",
    "district": "桃園市",
    "name": "老K舒眠文化館",
    "address": "桃園市新屋區梅高路３段97號",
    "tel": "03-4205050",
    "web": "www.kingbedhaha.com.tw"
  },
  {
    "id": 36,
    "area": "北部",
    "district": "桃園市",
    "name": "東和音樂體驗館",
    "address": "桃園市大溪區信義路226號",
    "tel": "03-3882215#210",
    "web": "www.music4fun.com.tw"
  },
  {
    "id": 37,
    "area": "北部",
    "district": "桃園市",
    "name": "南僑桃園觀光體驗工廠",
    "address": "桃園市龜山區興邦路35號",
    "tel": "03-2630264",
    "web": "www.namchow.com.tw"
  },
  {
    "id": 38,
    "area": "北部",
    "district": "桃園市",
    "name": "祥儀機器人夢工廠  未來館",
    "address": "桃園市桃園區桃鶯路461號",
    "tel": "03-3623452",
    "web": "robot.shayangye.com/"
  },
  {
    "id": 39,
    "area": "北部",
    "district": "桃園市",
    "name": "蛋寶生技不老村",
    "address": "桃園市平鎮區金陵路三段105號",
    "tel": "0800-655600",
    "web": "www.tntbio.com/"
  },
  {
    "id": 40,
    "area": "北部",
    "district": "桃園市",
    "name": "郭元益糕餅博物館",
    "address": "桃園市楊梅區幼獅工業區青年路9巷1號",
    "tel": "03-4962201#1",
    "web": "www.kuos.com/museum/"
  },
  {
    "id": 41,
    "area": "北部",
    "district": "桃園市",
    "name": "雅聞魅力博覽館",
    "address": "桃園市楊梅區中山北路1段21巷1號",
    "tel": "03-4883800",
    "web": "www.arwin.com.tw"
  },
  {
    "id": 42,
    "area": "北部",
    "district": "桃園市",
    "name": "源友咖啡文化園區",
    "address": "桃園市平鎮區工業五路8號",
    "tel": "03-4697387#1032",
    "web": "alphastore.iwopop.com/page57"
  },
  {
    "id": 43,
    "area": "北部",
    "district": "桃園市",
    "name": "義美生產‧生態‧生活廠區",
    "address": "桃園市蘆竹區南工路一段11號",
    "tel": "03-3117525",
    "web": "www.imeifoods.com.tw"
  },
  {
    "id": 44,
    "area": "北部",
    "district": "桃園市",
    "name": "葡萄王健康活力能量館",
    "address": "桃園市平鎮區金陵路二段402號",
    "tel": "03-4572121",
    "web": "www.grapeking.com.tw"
  },
  {
    "id": 45,
    "area": "北部",
    "district": "桃園市",
    "name": "臺灣菸酒(股)公司桃園觀光酒廠",
    "address": "桃園市龜山區文化一路55號",
    "tel": "03-3283001#340",
    "web": "event.ttl-eshop.com.tw/lk/"
  },
  {
    "id": 46,
    "area": "北部",
    "district": "新竹市",
    "name": "春池綠能玻璃觀光工廠",
    "address": "新竹市香山區牛埔南路372號",
    "tel": "03-5389165",
    "web": "www.hcspg.com.tw"
  },
  {
    "id": 47,
    "area": "北部",
    "district": "新竹縣",
    "name": "濟生Beauty兩岸觀光生醫美學健康館",
    "address": "新竹縣湖口鄉新竹工業區實踐路3號",
    "tel": "0800-213568",
    "web": "www.cscp.com.tw"
  },
  {
    "id": 48,
    "area": "中部",
    "district": "苗栗縣",
    "name": "四方鮮乳酪故事館",
    "address": "苗栗縣竹南鎮大厝里九鄰大厝59之12號",
    "tel": "037-472609",
    "web": "www.fourways.com.tw"
  },
  {
    "id": 49,
    "area": "中部",
    "district": "苗栗縣",
    "name": "立康健康養生觀光工廠",
    "address": "苗栗縣頭份市蘆竹里工業路55號",
    "tel": "037-629888",
    "web": "www.likang.com.tw"
  },
  {
    "id": 50,
    "area": "中部",
    "district": "苗栗縣",
    "name": "竹南啤酒觀光工廠",
    "address": "苗栗縣竹南鎮崎頂里15鄰和興路345號",
    "tel": "037-583001#700",
    "web": "event.ttl-eshop.com.tw/jn/"
  },
  {
    "id": 51,
    "area": "中部",
    "district": "苗栗縣",
    "name": "冠軍綠概念館",
    "address": "苗栗縣造橋鄉豐湖村一鄰乳姑山2號",
    "tel": "037-583775#1322",
    "web": "www.champion.com.tw"
  },
  {
    "id": 52,
    "area": "中部",
    "district": "苗栗縣",
    "name": "雅聞七里香玫瑰森林",
    "address": "苗栗縣頭屋鄉明德村明德路226號",
    "tel": "037-256588",
    "web": "www.arwin.com.tw"
  },
  {
    "id": 53,
    "area": "中部",
    "district": "苗栗縣",
    "name": "臺鹽通霄觀光園區",
    "address": "苗栗縣通霄鎮內島里122號",
    "tel": "037-792121#825",
    "web": "tesf.tybio.com.tw/"
  },
  {
    "id": 54,
    "area": "中部",
    "district": "苗栗縣",
    "name": "裕隆車之道體驗中心",
    "address": "苗栗縣三義鄉西湖村伯公坑39之1號",
    "tel": "037871801＃2888",
    "web": "tour.yulon-motor.com.tw"
  },
  {
    "id": 55,
    "area": "中部",
    "district": "台中市",
    "name": "台灣味噌釀造文化館",
    "address": "台中市豐原區三村里西勢路701號",
    "tel": "04-25320279",
    "web": "www.weijung.com"
  },
  {
    "id": 56,
    "area": "中部",
    "district": "台中市",
    "name": "台灣氣球博物館",
    "address": "台中市神岡區大豐路5段505號",
    "tel": "04-25284525",
    "web": "www.prolloon.com.tw"
  },
  {
    "id": 57,
    "area": "中部",
    "district": "台中市",
    "name": "阿聰師芋頭文化館",
    "address": "台中市大安區福興里興安路168號",
    "tel": "04-26713077",
    "web": "www.o-nongs.com.tw"
  },
  {
    "id": 58,
    "area": "中部",
    "district": "台中市",
    "name": "烏日啤酒觀光工廠",
    "address": "台中市烏日區光華街1號",
    "tel": "04-23381216",
    "web": "event.ttl-eshop.com.tw/wz/index.aspx"
  },
  {
    "id": 59,
    "area": "中部",
    "district": "台中市",
    "name": "張連昌薩克斯風博物館",
    "address": "台中市后里區公安路330之1號",
    "tel": "04-25562363",
    "web": "www.sax.org.tw"
  },
  {
    "id": 60,
    "area": "中部",
    "district": "台中市",
    "name": "臺灣印刷探索館",
    "address": "台中市大里區中興路一段288號",
    "tel": "04-24951001",
    "web": "twin.ppmof.gov.tw"
  },
  {
    "id": 61,
    "area": "中部",
    "district": "台中市",
    "name": "臺灣菸酒股份有限公司臺中觀光酒廠",
    "address": "台中市西屯區協和里工業28路2號",
    "tel": "04-23501318#431",
    "web": "event.ttl-eshop.com.tw/tc"
  },
  {
    "id": 62,
    "area": "中部",
    "district": "台中市",
    "name": "鞋寶觀光工廠",
    "address": "台中市西屯區工業區8路11號",
    "tel": "04-23505773",
    "web": "shoeswonderland.bestmotion.com"
  },
  {
    "id": 63,
    "area": "中部",
    "district": "台中市",
    "name": "寶熊漁樂館",
    "address": "台中市潭子區中山路三段11號",
    "tel": "04-35013338",
    "web": "www.okumamuseum.com.tw"
  },
  {
    "id": 64,
    "area": "中部",
    "district": "彰化縣",
    "name": "水銡利廚衛生活村",
    "address": "彰化縣秀水鄉下崙村育民巷2號",
    "tel": "04-7682712",
    "web": "mizuworld.com.tw"
  },
  {
    "id": 65,
    "area": "中部",
    "district": "彰化縣",
    "name": "台塑生醫健康悠活館",
    "address": "彰化縣彰化市中山路三段359號",
    "tel": "04-7236101#371",
    "web": "www.fbyoho.com.tw"
  },
  {
    "id": 66,
    "area": "中部",
    "district": "彰化縣",
    "name": "台灣手套博物館",
    "address": "彰化縣社頭鄉織襪一路8號",
    "tel": "04-8313551",
    "web": "www.good-hand.com.tw/"
  },
  {
    "id": 67,
    "area": "中部",
    "district": "彰化縣",
    "name": "台灣玻璃館",
    "address": "彰化縣鹿港鎮鹿工南四路30號",
    "tel": "04-7811299#266",
    "web": "www.timingjump.com.tw"
  },
  {
    "id": 68,
    "area": "中部",
    "district": "彰化縣",
    "name": "台灣穀堡",
    "address": "彰化縣埤頭鄉彰水路二段526號",
    "tel": "04-8926088",
    "web": "www.ricecastle.com.tw"
  },
  {
    "id": 69,
    "area": "中部",
    "district": "彰化縣",
    "name": "台灣優格餅乾學院",
    "address": "彰化縣線西鄉草豐路501巷5號",
    "tel": "04-7589501",
    "web": "schoolofcookie.blogspot.tw/"
  },
  {
    "id": 70,
    "area": "中部",
    "district": "彰化縣",
    "name": "白蘭氏健康博物館",
    "address": "彰化縣鹿港鎮彰濱工業區鹿工路18號",
    "tel": "04-7810077",
    "web": "www.brands.com.tw/museum/index.html"
  },
  {
    "id": 71,
    "area": "中部",
    "district": "彰化縣",
    "name": "卷木森活館",
    "address": "彰化縣鹿港鎮工業東三路6號",
    "tel": "04-7812018",
    "web": "jw-garden.com.tw"
  },
  {
    "id": 72,
    "area": "中部",
    "district": "彰化縣",
    "name": "華新MASK創意生活館",
    "address": "彰化縣田中鎮中州路2段751號",
    "tel": "04-8761226",
    "web": "www.motexmask.com"
  },
  {
    "id": 73,
    "area": "中部",
    "district": "彰化縣",
    "name": "愛玩色創意館",
    "address": "彰化縣北斗鎮中寮里三號路296號",
    "tel": "04-8886016",
    "web": "colortaiwan.com.tw"
  },
  {
    "id": 74,
    "area": "中部",
    "district": "彰化縣",
    "name": "樂活襪之鄉博物館",
    "address": "彰化縣社頭鄉社石路559號",
    "tel": "04-8720522",
    "web": "www.loho.com.tw"
  },
  {
    "id": 75,
    "area": "中部",
    "district": "彰化縣",
    "name": "緞帶王觀光工廠",
    "address": "彰化縣鹿港鎮鹿工路15號",
    "tel": "04-7813366",
    "web": "www.ribbon888.com"
  },
  {
    "id": 76,
    "area": "中部",
    "district": "彰化縣",
    "name": "興麥蛋捲烘焙王國",
    "address": "彰化縣線西鄉和線路741巷5號",
    "tel": "04-7588389",
    "web": "www.ximai.com.tw"
  },
  {
    "id": 77,
    "area": "中部",
    "district": "彰化縣",
    "name": "襪仔王觀光工廠",
    "address": "彰化縣田中鎮頂潭里員集路3段440巷16弄1號",
    "tel": "04-8749909",
    "web": "www.soxlink.com.tw/soxking/"
  },
  {
    "id": 78,
    "area": "中部",
    "district": "南投縣",
    "name": "Jijibanana集元果觀光工廠",
    "address": "南投縣集集鎮富山里5鄰大坪巷38號",
    "tel": "049-2764562",
    "web": "www.jijibanana.net"
  },
  {
    "id": 79,
    "area": "中部",
    "district": "南投縣",
    "name": "水里蛇窯陶藝文化園區",
    "address": "南投縣水里鄉頂崁村水信路一段512巷21號",
    "tel": "049-2770967",
    "web": "www.snakekiln.com.tw"
  },
  {
    "id": 80,
    "area": "中部",
    "district": "南投縣",
    "name": "台灣麻糬主題?",
    "address": "南投縣南投市自強三路3號",
    "tel": "049-2261123",
    "web": "www.taiwanmochi.com.tw/"
  },
  {
    "id": 81,
    "area": "中部",
    "district": "南投縣",
    "name": "光遠燈籠觀光工廠",
    "address": "南投縣竹山鎮延平二路11號",
    "tel": "049-2642394",
    "web": "www.ever-shine.com.tw"
  },
  {
    "id": 82,
    "area": "中部",
    "district": "南投縣",
    "name": "妮娜巧克力夢想城堡",
    "address": "南投縣埔里鎮桃米32號",
    "tel": "049-2919528",
    "web": "www.conas.com.tw"
  },
  {
    "id": 83,
    "area": "中部",
    "district": "南投縣",
    "name": "旺根城-藏傘閣觀光工廠",
    "address": "南投縣竹山鎮延平路10號",
    "tel": "049-2643411",
    "web": "www.outlooking.com.tw"
  },
  {
    "id": 84,
    "area": "中部",
    "district": "南投縣",
    "name": "果寶歡酵觀光工廠 GuoBAO",
    "address": "南投縣埔里鎮珠格里下湳巷15號",
    "tel": "049-299-1207",
    "web": "www.twfruit.com.tw"
  },
  {
    "id": 85,
    "area": "中部",
    "district": "南投縣",
    "name": "采棉居寢飾文化?",
    "address": "南投縣竹山鎮延平一路12號",
    "tel": "049-2642166",
    "web": "www.cheauwei.com.tw"
  },
  {
    "id": 86,
    "area": "中部",
    "district": "南投縣",
    "name": "香里活力豬品牌文化館",
    "address": "南投縣南投市南崗工業區仁和路3號",
    "tel": "049-2259999#204",
    "web": "www.shanglee.com.tw"
  },
  {
    "id": 87,
    "area": "中部",
    "district": "南投縣",
    "name": "造紙龍手創館",
    "address": "南投縣埔里鎮溪南里隆生路118-2號",
    "tel": "049-2902989",
    "web": "www.pulipaper.com/diy/"
  },
  {
    "id": 88,
    "area": "中部",
    "district": "南投縣",
    "name": "遊山茶訪",
    "address": "南投縣竹山鎮延平路19號",
    "tel": "049-2643919",
    "web": "www.yoshantea.com"
  },
  {
    "id": 89,
    "area": "中部",
    "district": "南投縣",
    "name": "臺灣菸酒股份有限公司南投觀光酒廠",
    "address": "南投市軍功里東山路82號",
    "tel": "049-2234171",
    "web": "event.ttl-eshop.com.tw/nt/"
  },
  {
    "id": 90,
    "area": "中部",
    "district": "南投縣",
    "name": "臺灣菸酒股份有限公司埔里觀光酒廠",
    "address": "南投縣埔里鎮中山路三段219號",
    "tel": "049-2984006#456",
    "web": "event.ttl-eshop.com.tw/pl/"
  },
  {
    "id": 91,
    "area": "中部",
    "district": "南投縣",
    "name": "廣興紙寮",
    "address": "南投縣埔里鎮鐵山里鐵山路310號",
    "tel": "049-2913037",
    "web": "www.taiwanpaper.com.tw"
  },
  {
    "id": 92,
    "area": "中部",
    "district": "雲林縣",
    "name": "丸莊醬油觀光工廠",
    "address": "雲林縣西螺鎮延平路25號",
    "tel": "05-5863666",
    "web": "www.wuanchuang.com.tw"
  },
  {
    "id": 93,
    "area": "中部",
    "district": "雲林縣",
    "name": "大同醬油黑金釀造館",
    "address": "雲林縣斗六市斗工二路39號",
    "tel": "05-5576899",
    "web": "www.wretch.cc/blog/tatung1911"
  },
  {
    "id": 94,
    "area": "中部",
    "district": "雲林縣",
    "name": "台灣鯛生態創意園區",
    "address": "雲林縣口湖鄉崙東村民生路1-88號",
    "tel": "05-7993996",
    "web": "www.kf-fish.com/tw/subweb2/index.html"
  },
  {
    "id": 95,
    "area": "中部",
    "district": "雲林縣",
    "name": "良作工場農業文創館",
    "address": "雲林縣大埤鄉豐田路57號",
    "tel": "05-5529586",
    "web": "www.nextland.com.tw"
  },
  {
    "id": 96,
    "area": "中部",
    "district": "雲林縣",
    "name": "朝露魚舖觀光工廠",
    "address": "雲林縣斗六市斗工六路6號",
    "tel": "05-5575989#122",
    "web": "www.chaolou.com.tw"
  },
  {
    "id": 97,
    "area": "中部",
    "district": "雲林縣",
    "name": "塔吉特千層蛋糕大使館",
    "address": "雲林縣斗六市榴中里工業路118號",
    "tel": "05-5574516",
    "web": "www.jelly.com.tw/embssy.php"
  },
  {
    "id": 98,
    "area": "中部",
    "district": "雲林縣",
    "name": "源順芝麻觀光油廠",
    "address": "雲林縣土庫鎮成功路1-62號",
    "tel": "05-6622574",
    "web": "www.god-bene.com.tw/"
  },
  {
    "id": 99,
    "area": "中部",
    "district": "雲林縣",
    "name": "福祿壽觀光酒廠",
    "address": "雲林縣古坑鄉中山路11號",
    "tel": "05-5823106",
    "web": "museum.fortunebrewery.com.tw"
  },
  {
    "id": 100,
    "area": "中部",
    "district": "雲林縣",
    "name": "興隆毛巾觀光工廠",
    "address": "雲林縣虎尾鎮埒內里84-1號",
    "tel": "05-6226008",
    "web": "www.sltowel.com.tw"
  },
  {
    "id": 101,
    "area": "南部",
    "district": "嘉義縣",
    "name": "月桃故事館",
    "address": "嘉義市東區保忠一街359號",
    "tel": "05-2766399",
    "web": "sgsh.mmweb.tw"
  },
  {
    "id": 102,
    "area": "南部",
    "district": "嘉義縣",
    "name": "卡普秀醫美研發中心",
    "address": "嘉義縣民雄鄉民雄工業區成功五街3號",
    "tel": "0800-520668",
    "web": "www.facebook.com/TS.capsule"
  },
  {
    "id": 103,
    "area": "南部",
    "district": "嘉義縣",
    "name": "卡羅爾銅管樂器觀光工廠",
    "address": "嘉義縣大林鎮中坑里1鄰大埔美園區20路3號",
    "tel": "05-2953688",
    "web": "www.carolbrasstourismfactory.com"
  },
  {
    "id": 104,
    "area": "南部",
    "district": "嘉義縣",
    "name": "民雄金桔觀光工廠",
    "address": "嘉義縣民雄鄉三興村陳厝寮7鄰38號",
    "tel": "05-2720351",
    "web": "www.kingezi.com.tw"
  },
  {
    "id": 105,
    "area": "南部",
    "district": "嘉義縣",
    "name": "余順豐花生觀光工廠",
    "address": "嘉義縣東石鄉蔦松村湖底路20之28號",
    "tel": "0800-088662",
    "web": "www.yuyuanfarm.com/"
  },
  {
    "id": 106,
    "area": "南部",
    "district": "嘉義縣",
    "name": "梅問屋梅子元氣館",
    "address": "嘉義縣梅山鄉中山路527號",
    "tel": "0800-606060",
    "web": "www.plummyume.com.tw"
  },
  {
    "id": 107,
    "area": "南部",
    "district": "嘉義縣",
    "name": "臺灣菸酒股份有限公司嘉義觀光酒廠",
    "address": "嘉義縣民雄鄉福樂村中山路4號",
    "tel": "05-2215721",
    "web": "event.ttl-eshop.com.tw/cy/"
  },
  {
    "id": 108,
    "area": "南部",
    "district": "台南市",
    "name": "天一中藥生活化園區",
    "address": "台南市官田區二鎮里工業路31號",
    "tel": "06-6985800",
    "web": "www.itenergy.com.tw"
  },
  {
    "id": 109,
    "area": "南部",
    "district": "台南市",
    "name": "卡多利亞良食故事館",
    "address": "台南市後壁區後壁里42-26號",
    "tel": "06-6874762",
    "web": "6.www.cadozea.url.tw/"
  },
  {
    "id": 110,
    "area": "南部",
    "district": "台南市",
    "name": "台灣金屬創意館",
    "address": "台南市永康區永科環路598號",
    "tel": "06-2030728",
    "web": "www.tmcm-no1.com.tw"
  },
  {
    "id": 111,
    "area": "南部",
    "district": "台南市",
    "name": "瓜瓜園地瓜生態故事館",
    "address": "台南市新化區中正路127巷31號",
    "tel": "06-5902966",
    "web": "www.kky.com.tw"
  },
  {
    "id": 112,
    "area": "南部",
    "district": "台南市",
    "name": "立康中草藥產業文化館",
    "address": "台南市永康區環工路29號",
    "tel": "06-2335356",
    "web": "www.herbalmed.com.tw"
  },
  {
    "id": 113,
    "area": "南部",
    "district": "台南市",
    "name": "和明織品文化館",
    "address": "台南市七股區大埕里大埕189號(坤進廠)",
    "tel": "06-7875288",
    "web": "www.hermin.com/hmtm/"
  },
  {
    "id": 114,
    "area": "南部",
    "district": "台南市",
    "name": "奇美食品幸福工廠",
    "address": "台南市仁德區機場路1008號",
    "tel": "06-2698588",
    "web": "www.happychimei.com.tw"
  },
  {
    "id": 115,
    "area": "南部",
    "district": "台南市",
    "name": "彼緹娃藝術蛋糕觀光工廠",
    "address": "台南市佳里區民安里同安寮1之1號",
    "tel": "06-7236328",
    "web": "www.beautiful-baby.com.tw/"
  },
  {
    "id": 116,
    "area": "南部",
    "district": "台南市",
    "name": "東和蜂文化觀光工廠",
    "address": "台南市東山區東正里1-18號",
    "tel": "06-6800773",
    "web": "www.thbc.com.tw"
  },
  {
    "id": 117,
    "area": "南部",
    "district": "台南市",
    "name": "美雅家具觀光工廠",
    "address": "台南市白河區甘宅里101-1號",
    "tel": "06-6817456",
    "web": "www.meiyafurniture.com.tw/"
  },
  {
    "id": 118,
    "area": "南部",
    "district": "台南市",
    "name": "虹泰水凝膠世界",
    "address": "台南市仁德區中正路3段523巷116號",
    "tel": "06-2724880",
    "web": "www.hometech.tw"
  },
  {
    "id": 119,
    "area": "南部",
    "district": "台南市",
    "name": "國王家族羽絨服飾觀光工廠",
    "address": "台南市佳里區同安寮2-8號",
    "tel": "06-7213380",
    "web": "www.kingsfamily-down.com.tw/"
  },
  {
    "id": 120,
    "area": "南部",
    "district": "台南市",
    "name": "康那香不織布創意王國",
    "address": "台南市將軍區三吉里三吉66之1號",
    "tel": "06-7941573",
    "web": "www.knh.com.tw/"
  },
  {
    "id": 121,
    "area": "南部",
    "district": "台南市",
    "name": "港香蘭綠色健康知識館",
    "address": "台南市新市區南科一路1號",
    "tel": "06-5052505",
    "web": "www.biotanico.com.tw"
  },
  {
    "id": 122,
    "area": "南部",
    "district": "台南市",
    "name": "華美光學eye玩視界",
    "address": "台南市安定區中沙里沙崙30號",
    "tel": "06-5937597#6802",
    "web": "www.eyecol.com"
  },
  {
    "id": 123,
    "area": "南部",
    "district": "台南市",
    "name": "黑橋牌香腸博物館",
    "address": "台南市南區新忠路2號",
    "tel": "06-2616990",
    "web": "www.blackbridge.com.tw/mus1.html"
  },
  {
    "id": 124,
    "area": "南部",
    "district": "台南市",
    "name": "新百祿燕窩觀光工廠",
    "address": "台南市南區新和路38號",
    "tel": "06-2650924",
    "web": "www.facebook.com/sinbailu"
  },
  {
    "id": 125,
    "area": "南部",
    "district": "台南市",
    "name": "腳的眼鏡足部科學體驗中心(紅崴觀光工廠)",
    "address": "台南市安南區鹽田里工業一路23號1樓",
    "tel": "06-2380713#267",
    "web": "www.goodarch2u.com/tourism/index.php"
  },
  {
    "id": 126,
    "area": "南部",
    "district": "台南市",
    "name": "臺南．家具產業博物館",
    "address": "台南市仁德區二仁路１段315巷50號",
    "tel": "06-2661193",
    "web": "www.fmmit.com.tw/index.php"
  },
  {
    "id": 127,
    "area": "南部",
    "district": "台南市",
    "name": "臺灣菸酒股份有限公司善化啤酒廠",
    "address": "台南市善化區成功路2號",
    "tel": "06-5838511#431",
    "web": "event.ttl-eshop.com.tw/sh/index.aspx"
  },
  {
    "id": 128,
    "area": "南部",
    "district": "台南市",
    "name": "臺灣菸酒股份有限公司隆田觀光酒廠",
    "address": "台南市官田區中華路一段335號",
    "tel": "06-5791311#521",
    "web": "event.ttl-eshop.com.tw/lt/"
  },
  {
    "id": 129,
    "area": "南部",
    "district": "台南市",
    "name": "麗豐微酵館",
    "address": "台南市官田區二鎮里工業路48號",
    "tel": "0800-882-789",
    "web": "www.microfer.com.tw"
  },
  {
    "id": 130,
    "area": "南部",
    "district": "高雄市",
    "name": "FLOMO富樂夢橡皮擦觀光工廠",
    "address": "高雄市湖內區中山路二段42號",
    "tel": "07-6996173",
    "web": "www.flomo.com.tw/flomo/museum"
  },
  {
    "id": 131,
    "area": "南部",
    "district": "高雄市",
    "name": "台灣滷味博物館",
    "address": "高雄市岡山區本工一路25號",
    "tel": "07-6229800",
    "web": "www.de-food.com.tw"
  },
  {
    "id": 132,
    "area": "南部",
    "district": "高雄市",
    "name": "宏裕行花枝丸館",
    "address": "高雄市前鎮區新生路240號",
    "tel": "07-8111319",
    "web": "www.hongyu-food.com.tw/"
  },
  {
    "id": 133,
    "area": "南部",
    "district": "高雄市",
    "name": "珍芳烏魚子見學工廠",
    "address": "高雄市前鎮區新衙路296巷81弄13號",
    "tel": "07-8227488",
    "web": "www.a-ten588.com.tw"
  },
  {
    "id": 134,
    "area": "南部",
    "district": "高雄市",
    "name": "紅頂穀創穀物文創樂園",
    "address": "高雄市左營區民族一路709號",
    "tel": "07-3460333",
    "web": "www.redbarn709.com"
  },
  {
    "id": 135,
    "area": "南部",
    "district": "高雄市",
    "name": "彪琥台灣鞋故事館",
    "address": "高雄市三民區民族一路335巷43-1號",
    "tel": "07-3892246#109",
    "web": "www.puhu.com.tw"
  },
  {
    "id": 136,
    "area": "南部",
    "district": "高雄市",
    "name": "裕賀牛??工廠",
    "address": "高雄市燕巢區大仁路68號",
    "tel": "07-6151606",
    "web": "www.beefschool.com.tw"
  },
  {
    "id": 137,
    "area": "南部",
    "district": "屏東縣",
    "name": "天明製藥農科觀光藥廠",
    "address": "屏東縣長治鄉德和村神農路3號",
    "tel": "08-7629666",
    "web": "www.tcmm.com.tw"
  },
  {
    "id": 138,
    "area": "南部",
    "district": "屏東縣",
    "name": "萬寶祿酵素品牌文化館",
    "address": "屏東縣長治鄉德和村神農路17號",
    "tel": "08-7624988",
    "web": "www.onepower.com.tw"
  },
  {
    "id": 139,
    "area": "南部",
    "district": "屏東縣",
    "name": "臺灣菸酒股份有限公司屏東觀光酒廠",
    "address": "屏東縣內埔鄉建國路34號",
    "tel": "08-7781640",
    "web": "event.ttl-eshop.com.tw/pt/"
  },
  {
    "id": 140,
    "area": "南部",
    "district": "屏東縣",
    "name": "鮮饌道海洋食品文化館",
    "address": "屏東縣林邊鄉成功路122號",
    "tel": "08-8752229",
    "web": "www.jyfood.com.tw"
  },
  {
    "id": 141,
    "area": "東部",
    "district": "台東縣",
    "name": "池上鄉農會觀光工廠金色豐收館",
    "address": "台東縣池上鄉新興村7鄰85-6號",
    "tel": "089-865936",
    "web": "csfa.org.tw/"
  },
  {
    "id": 142,
    "area": "東部",
    "district": "花蓮縣",
    "name": "香又香便當調查局",
    "address": "花蓮縣花蓮市美工路15號",
    "tel": "03-8228111",
    "web": "www.canmorer.com/demo/bandang/"
  },
  {
    "id": 143,
    "area": "東部",
    "district": "花蓮縣",
    "name": "臺灣菸酒股份有限公司花蓮觀光酒廠",
    "address": "花蓮市美工路6號",
    "tel": "03-8222130",
    "web": "event.ttl-eshop.com.tw/hl/"
  },
  {
    "id": 144,
    "area": "離島",
    "district": "金門縣",
    "name": "陳金福號貢糖觀光工廠",
    "address": "金門縣金城鎮東門里伯玉路一段90號",
    "tel": "082-321414",
    "web": "www.km321414.com.tw"
  }
]