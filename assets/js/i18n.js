var I18N = (function () {
  var translations = {
    'zh-CN': {
      'nav-home': '首页',
      'nav-projects': '漫游此园',
      'nav-philosophy': '园之生长',
      'nav-about': '关于我们',
      'nav-contact': '联系我们',
      'hero-brand': '荔仙园',
      'hero-tagline': '岭南山地园林，博古烁今，雍容典雅。<br>因山就势，层脊叠檐，古木森森，流水潺潺。<br>曲径通幽，步移景换，精雕细琢，巧夺天工。<br>其峥嵘格局与周边五叠岭的万亩古荔林<br>及巍峨山势融为一体，<br>给人以源远流长、气象万千之感。',
      'footer-copyright': '© 峯境景观规划设计有限公司 版权所有',
      'projects-heading': '漫游此园',
      'projects-subtitle': '每座园林，皆为天地与人心之间的一次对话',
      'section-outdoor': '室 外 之 景',
      'section-indoor': '室 内 之 境',
      'phil-heading': '园之生长',
      'phil-intro': '一片荒芜，慢慢长成园',
      'phil-h1': '引言',
      'phil-h1-p1': '一座园子，不是建成的，是长成的。<br>从第一铲土落下，到枝叶交叠成荫，<br>时间在这里缓慢地做着它自己的事。<br>石头住下来，苔藓爬上来，树木学会了风的语言。<br>它至今仍在生长——每一个春天都带来新的故事。',
      'draft-title': '笔尖构园',
      'draft-desc': '这组草图记录了岭南私家园林的构思推敲。<br>空间的疏密、视线的开合、光影的来去，<br>在纸面上反复丈量之后，才落定成园。',
      'plant-title': '植树',
      'plant-desc': '荔园内种有古荔树、乌榄树、凤凰木。<br>看似简单的树种，其实是画龙点睛、立意高深呐。<br>这是个有使命、有灵魂的园林！',
      'stonecraft-title': '置石',
      'stonecraft-desc': '水系上无数颇有名堂的巨型灵石、仙石、奇石分布其上。<br>从选料到巨石安装，充分体现了置石艺术的最高水平。',
      'brick-title': '砖瓦砌筑',
      'brick-desc': '青砖红瓦，不取速成之巧。<br>每一块都经过精细鎅磨、严丝合缝地拼合，<br>让墙体得以呼吸，屋顶得以久经风雨。',
      'stonefab-title': '石材制装',
      'stonefab-desc': '墙外柱廊、墙体立柱和门窗外框，基本上都用完整的石材。<br>这些石材在材质和色泽的统一、表面打凿的细密、拼合的结构感，都十分到位。',
      'wood-title': '木作工艺',
      'wood-desc': '传统榫卯造就这扇柚木满州窗，大大小小的彩色琉璃嵌于原色窗格之间。<br>古朴雅致，文士风流，望之便生怀旧之情。',
      'craft-title': '三雕两塑',
      'craft-desc': '这里四处可见的“三雕两塑”（即砖雕、木雕、石雕、灰塑、陶塑）。<br>品相都是超凡脱俗，均出自传承千年的名家手笔。<br>“荔仙园”乃玲珑秘境也。',
      'conference-note': '该作品收录于中国文化遗产大会论文集中',
      'phil-cta-text': '了解这些理念背后的造园者',
      'cta-about': '关于我们',
      'about-heading': '李华根',
      'designer-tag': '园林设计师',
      'heritage-text': '深研《园冶》《长物志》《花镜》等典籍，精通叠山理水、花木配置、建筑营造之古法。每年走访江南、岭南、北方园林实地，以脚步丈量中国园林千年之变与不变。',
      'contact-intro': '若您有意打造传世的中式园林，欢迎通过邮箱与我们取得联系',
      'brand-name': '峯境园林',
      'location-gz': '广东 · 广州',
      'location-gd': '广东',
      'location-bj': '北京',
      'projects-cta-text': '了解造园过程',
      'projects-lixian-quote': '欧阳修在《蝶恋花》一词中叹“庭院深深深几许？”荔仙园，不仅深，而且远。',
      'lotus-pond-title': '荷花池',
      'lotus-pond-desc': '池面风来，荷香暗度。碧波照影间，游鱼戏水，是为园中最清幽处。',
      'lotus-pond-bridge-desc': '廊桥横卧，水波荡漾。天光云影共徘徊，桥影与花影相映成趣。',
      'moon-gate-title': '月洞',
      'moon-gate-desc': '圆门如月，框出一方天地。步入门洞，便见另一番洞天。',
      'fangsheng-title': '方胜',
      'fangsheng-desc': '方门为框，圆月为景。一方一圆之间，尽显天圆地方之古意。',
      'xiulou-title': '主楼',
      'xiulou-desc': '飞檐翘角，雕棂画梁。登楼小坐，满园佳色尽收眼底。',
      'lotus-stone-title': '荷花石',
      'lotus-stone-desc': '新竹高于旧竹枝，全凭老干为扶持。<br>明年再有新生者，代代儿孙绕荷池。<br>这是业主对儿孙的精神传承。',
      'corridor-title': '廊道',
      'corridor-desc': '游廊曲折，移步换景，串联全园之美。',
      'grey-sculpture-title': '灰塑',
      'grey-sculpture-desc': '岭南传统工艺之精华，屋顶灰塑栩栩如生。',
      'manchurian-1-title': '满洲玻璃窗（一）',
      'manchurian-1-desc': '彩色琉璃嵌于原木窗格之间，古朴雅致，文士风流。',
      'manchurian-title': '满洲玻璃窗',
      'manchurian-2-title': '满洲玻璃窗（二）',
      'manchurian-2-desc': '光影流转间，彩色琉璃绘就满园春色。',
      'living-room-title': '会客厅',
      'living-room-desc': '文人雅集之所，琴棋书画，茶香袅袅。',
      'about-years-text': '二十八年潜心于中国古典岭南园林之研究与营造',
      'about-bio-text': '一九八九年毕业于广东省建筑工程学院，师从多位园艺师和工匠，长期沉浸于广东岭南园林的现场施工、修复、研究。致力于将古典造园智慧融入当代私家园林营造，将传统材料及工艺与现代材料技术巧妙结合，为海内外藏家、建筑师及高净值私宅业精心设计打造专属的中式岭南园林空间，传承专属的文脉家园。',
      'timeline-1-year': '1998年以来',
      'timeline-1': '东莞、肇庆、广州、顺德、重庆、北京、昆明、贵阳、遵义、宜春等地多个私家庭院设计及施工',
      'timeline-2': '成立财神园林设计工作室',
      'timeline-3': '广州增城荔仙园项目',
      'timeline-4': '成为中国古建筑园林艺术协会成员',
      'timeline-5': '中国文化遗产大会发表岭南园林新论（论文）',
      'timeline-6': '参与广州城中村改造多个祠堂修缮工程设计',
      'timeline-7': '参与广州陈家祠古建筑修缮工程研学',
      'timeline-8': '成立峯境园林规划设计公司',
      'featured-tag': '项目概览',
      'featured-title': '每座园林，皆为天地与人心之间的一次对话',
      'featured-desc': '岭南山地园林之典范，因山就势，博古烁今。五叠岭下，万亩荔林相拥，藏一方传世之园。',
      'philosophy-teaser-tag': '造园过程',
      'philosophy-teaser-title': '一座园子，不是建成的，是长成的',
      'philosophy-teaser-desc': '从第一铲土落下，到枝叶交叠成荫，时间在这里缓慢地做着它自己的事。石头住下来，苔藓爬上来，树木学会了风的语言。',
      'mobile-lang-label': '语言'
    },
    'zh-TW': {
      'nav-home': '首頁',
      'nav-projects': '漫遊此園',
      'nav-philosophy': '園之生長',
      'nav-about': '關於我們',
      'nav-contact': '聯繫我們',
      'hero-brand': '荔仙園',
      'hero-tagline': '嶺南山地園林，博古爍今，雍容典雅。<br>因山就勢，層脊疊檐，古木森森，流水潺潺。<br>曲徑通幽，步移景換，精雕細琢，巧奪天工。<br>其崢嶸格局與周邊五疊嶺的萬畝古荔林<br>及巍峨山勢融為一體，<br>給人以源遠流長、氣象萬千之感。',
      'footer-copyright': '© 峯境景觀規劃設計有限公司 版權所有',
      'projects-heading': '漫遊此園',
      'projects-subtitle': '每座園林，皆為天地與人心之間的一次對話',
      'section-outdoor': '室 外 之 景',
      'section-indoor': '室 內 之 境',
      'phil-heading': '園之生長',
      'phil-intro': '一片荒蕪，慢慢長成園',
      'phil-h1': '引言',
      'phil-h1-p1': '一座園子，不是建成的，是長成的。<br>從第一剷土落下，到枝葉交疊成蔭，<br>時間在這裡緩慢地做著它自己的事。<br>石頭住下來，苔蘚爬上來，樹木學會了風的語言。<br>它至今仍在生長——每一個春天都帶來新的故事。',
      'draft-title': '筆尖構園',
      'draft-desc': '這組草圖記錄了嶺南私家園林的構思推敲。<br>空間的疏密、視線的開合、光影的來去，<br>在紙面上反覆丈量之後，才落定成園。',
      'plant-title': '植樹',
      'plant-desc': '荔園內種有古荔樹、烏欖樹、鳳凰木。<br>看似簡單的樹種，其實是畫龍點睛、立意高深吶。<br>這是個有使命、有靈魂的園林！',
      'stonecraft-title': '置石',
      'stonecraft-desc': '水系上無數頗有名堂的巨型靈石、仙石、奇石分佈其上。<br>從選料到巨石安裝，充分體現了置石藝術的最高水平。',
      'brick-title': '磚瓦砌築',
      'brick-desc': '青磚紅瓦，不取速成之巧。<br>每一塊都經過精細鎅磨、嚴絲合縫地拼合，<br>讓牆體得以呼吸，屋頂得以久經風雨。',
      'stonefab-title': '石材制裝',
      'stonefab-desc': '牆外柱廊、牆體立柱和門窗外框，基本上都用完整的石材。<br>這些石材在材質和色澤的統一、表面打鑿的細密、拼合的結構感，都十分到位。',
      'wood-title': '木作工藝',
      'wood-desc': '傳統榫卯造就這扇柚木滿州窗，大大小小的彩色琉璃嵌於原色窗格之間。<br>古樸雅致，文士風流，望之便生懷舊之情。',
      'craft-title': '三雕兩塑',
      'craft-desc': '這裡四處可見的「三雕兩塑」（即磚雕、木雕、石雕、灰塑、陶塑）。<br>品相都是超凡脫俗，均出自傳承千年的名家手筆。<br>「荔仙園」乃玲瓏秘境也。',
      'conference-note': '該作品收錄於中國文化遺產大會論文集中',
      'phil-cta-text': '了解這些理念背後的造園者',
      'cta-about': '關於我們',
      'about-heading': '李華根',
      'designer-tag': '園林設計師',
      'heritage-text': '深研《園冶》《長物志》《花鏡》等典籍，精通疊山理水、花木配置、營造之古法。每年走訪江南、嶺南、北方園林實地，以腳步丈量中國園林千年之變與不變。',
      'contact-intro': '若您有意打造傳世的中式園林，歡迎通過郵箱與我們取得聯繫',
      'brand-name': '峯境園林',
      'location-gz': '廣東 · 廣州',
      'location-gd': '廣東',
      'location-bj': '北京',
      'projects-cta-text': '了解造園過程',
      'projects-lixian-quote': '歐陽修在《蝶戀花》一詞中嘆“庭院深深深幾許？”荔仙園，不僅深，而且遠。',
      'lotus-pond-title': '荷花池',
      'lotus-pond-desc': '池面風來，荷香暗度。碧波照影間，游魚戲水，是為園中最清幽處。',
      'lotus-pond-bridge-desc': '廊橋橫臥，水波蕩漾。天光雲影共徘徊，橋影與花影相映成趣。',
      'moon-gate-title': '月洞',
      'moon-gate-desc': '圓門如月，框出一方天地。步入門洞，便見另一番洞天。',
      'fangsheng-title': '方勝',
      'fangsheng-desc': '方門為框，圓月為景。一方一圓之間，盡顯天圓地方之古意。',
      'xiulou-title': '主樓',
      'xiulou-desc': '飛簷翹角，雕欞畫樑。登樓小坐，滿園佳色盡收眼底。',
      'lotus-stone-title': '荷花石',
      'lotus-stone-desc': '新竹高於舊竹枝，全憑老幹為扶持。<br>明年再有新生者，代代兒孫繞荷池。<br>這是業主對兒孫的精神傳承。',
      'corridor-title': '廊道',
      'corridor-desc': '遊廊曲折，移步換景，串聯全園之美。',
      'grey-sculpture-title': '灰塑',
      'grey-sculpture-desc': '嶺南傳統工藝之精華，屋頂灰塑栩栩如生。',
      'manchurian-1-title': '滿洲玻璃窗（一）',
      'manchurian-1-desc': '彩色琉璃嵌於原木窗格之間，古樸雅致，文士風流。',
      'manchurian-title': '滿洲玻璃窗',
      'manchurian-2-title': '滿洲玻璃窗（二）',
      'manchurian-2-desc': '光影流轉間，彩色琉璃繪就滿園春色。',
      'living-room-title': '會客廳',
      'living-room-desc': '文人雅集之所，琴棋書畫，茶香裊裊。',
      'about-years-text': '二十八年潛心於中國古典嶺南園林之研究與營造',
      'about-bio-text': '一九八九年畢業於廣東省建築工程學院，師從多位園藝師和工匠，長期沉浸於廣東嶺南園林的現場施工、修復、研究。致力於將古典造園智慧融入當代私家園林營造，將傳統材料及工藝與現代材料技術巧妙結合，為海內外藏家、建築師及高淨值私宅業精心設計打造專屬的中式嶺南園林空間，傳承專屬的文脈家園。',
      'timeline-1-year': '1998年以來',
      'timeline-1': '東莞、肇慶、廣州、順德、重慶、北京、昆明、貴陽、遵義、宜春等地多個私家庭院設計及施工',
      'timeline-2': '成立財神園林設計工作室',
      'timeline-3': '廣州增城荔仙園項目',
      'timeline-4': '成為中國古建築園林藝術協會成員',
      'timeline-5': '中國文化遺產大會發表嶺南園林新論（論文）',
      'timeline-6': '參與廣州城中村改造多個祠堂修繕工程設計',
      'timeline-7': '參與廣州陳家祠古建築修繕工程研學',
      'timeline-8': '成立峯境園林規劃設計公司',
      'featured-tag': '項目概覽',
      'featured-title': '每座園林，皆為天地與人心之間的一次對話',
      'featured-desc': '嶺南山地園林之典範，因山就勢，博古爍今。五疊嶺下，萬畝荔林相擁，藏一方傳世之園。',
      'philosophy-teaser-tag': '造園過程',
      'philosophy-teaser-title': '一座園子，不是建成的，是長成的',
      'philosophy-teaser-desc': '從第一剷土落下，到枝葉交疊成蔭，時間在這裡緩慢地做著它自己的事。石頭住下來，苔蘚爬上來，樹木學會了風的語言。',
      'mobile-lang-label': '語言'
    },
    'en': {
      'nav-home': 'Home',
      'nav-projects': 'Explore',
      'nav-philosophy': 'Growth',
      'nav-about': 'About',
      'nav-contact': 'Contact',
      'hero-brand': 'Lixian Garden',
      'hero-tagline': 'A Lingnan mountain garden, bridging ancient wisdom with contemporary elegance.<br>Built along the natural contours, with layered ridges and cascading eaves.<br>Ancient trees stand tall, streams murmur softly.<br>Winding paths reveal new vistas at every turn.<br>Its grandeur merges seamlessly with the surrounding lychee forests<br>and majestic mountains —<br>a timeless landscape of profound beauty.',
      'footer-copyright': '© Fengjing Landscape Planning & Design Co., Ltd. All rights reserved',
      'projects-heading': 'Explore the Garden',
      'projects-subtitle': 'Every garden is a dialogue between heaven, earth, and the human heart',
      'section-outdoor': 'Exterior',
      'section-indoor': 'Interior',
      'phil-heading': 'The Growth of a Garden',
      'phil-intro': 'From barren land to a garden that grows slowly',
      'phil-h1': 'Introduction',
      'phil-h1-p1': 'A garden grows, not built.<br>From first soil to shade, time works slowly.<br>Stones settle, moss climbs, trees learn wind —<br>each spring brings new tales.',
      'draft-title': 'Design Sketches',
      'draft-desc': 'These sketches trace the design process of a Lingnan garden —<br>space, views, and light, all refined on paper before taking shape.',
      'plant-title': 'Planting',
      'plant-desc': 'Ancient lychee trees, black olives, and flame trees populate the garden.<br>Simple selection reveals profound intent.<br>This is a garden with a mission and a soul.',
      'stonecraft-title': 'Stone Arrangement',
      'stonecraft-desc': 'Countless famous spirit stones, immortal stones,<br>and marvelous stones grace the waterways.<br>From selection to installation,<br>this represents the pinnacle of stone arrangement art.',
      'brick-title': 'Brick Masonry',
      'brick-desc': 'Green-bricks and red-tiles spurn modern shortcuts.<br>Each piece is finely dressed and tightly jointed,<br>so walls breathe and roofs endure through seasons.',
      'stonefab-title': 'Stone Fabrication',
      'stonefab-desc': 'Exterior colonnades, wall columns, and frames are all solid stone.<br>Their material and color are unified, surfaces finely chiseled,<br>and joints structurally cohesive.',
      'wood-title': 'Wood Craftsmanship',
      'wood-desc': 'Traditional mortise-and-tenon joinery creates teak Manchurian windows.<br>Colorful glass pieces of various sizes nestle within natural wood lattice.<br>An air of scholarly elegance and nostalgic charm.',
      'craft-title': 'Three Carvings & Two Sculptures',
      'craft-desc': 'The "Three Carvings & Two Sculptures" can be found everywhere —<br>brick, wood, stone, grey, and ceramic.<br>Master craftsmen ensure extraordinary quality.<br>Lixian Garden is a realm of exquisite beauty.',
      'conference-note': 'This work is featured in the China Cultural Heritage Conference Proceedings',
      'phil-cta-text': 'Meet the garden designer behind these philosophies',
      'cta-about': 'About Us',
      'about-heading': 'Li Huagen',
      'designer-tag': 'Garden Designer',
      'heritage-text': 'Deeply studied in classical texts such as Yuanye, Zhangwu Zhi, and Huajing. Master of ancient methods in rockery construction, water management, planting design, and architecture. Each year visits gardens across Jiangnan, Lingnan, and Northern China — measuring the thousand years of change and continuity in Chinese gardens with every step.',
      'contact-intro': 'If you wish to create a timeless Chinese garden, please contact us via email',
      'brand-name': 'Fengjing Garden',
      'location-gz': 'Guangdong · Guangzhou',
      'location-gd': 'Guangdong',
      'location-bj': 'Beijing',
      'projects-cta-text': 'Discover the Garden’s Making',
      'projects-lixian-quote': 'Ouyang Xiu once sighed in his poem <i>Butterflies in Love with Flowers</i>: “How deep, how deep is the courtyard?”<br>Lixian Garden is not only deep, but also far-reaching.',
      'lotus-pond-title': 'Lotus Pond',
      'lotus-pond-desc': 'A breeze drifts across the water, lotus fragrance softly carried. Amidst jade-green reflections, fish play in the depths — the most secluded corner of the garden.',
      'lotus-pond-bridge-desc': 'A covered bridge lies across the ripples. Sky and clouds linger on the water; the bridge’s shadow dances with the flowers.',
      'moon-gate-title': 'Moon Gate',
      'moon-gate-desc': 'The round gate, like a moon, frames a world within. Step through, and another realm appears.',
      'fangsheng-title': 'Fang Sheng',
      'fangsheng-desc': 'A square gate as the frame, a round moon as the scene. Between the square and the round, the ancient wisdom of “round heaven, square earth” is fully revealed.',
      'xiulou-title': 'Main Pavilion',
      'xiulou-desc': 'Flying eaves and upturned corners, carved lattice and painted beams. A moment’s rest atop the pavilion reveals the garden’s full splendor.',
      'lotus-stone-title': 'Lotus Stone',
      'lotus-stone-desc': "New bamboo grows taller than the old, relying entirely on the old stalks for support.<br>Next year there will be new growth, with generations of descendants surrounding the lotus pond.<br>This is the owner's spiritual inheritance for their descendants.",
      'corridor-title': 'Winding Corridor',
      'corridor-desc': 'The winding corridor twists and turns; each step reveals new scenery, threading together the garden’s beauty.',
      'grey-sculpture-title': 'Grey Sculpture',
      'grey-sculpture-desc': 'The essence of Lingnan’s traditional craft — rooftop grey sculptures, lifelike in every detail.',
      'manchurian-1-title': 'Manchurian Glass Window (I)',
      'manchurian-1-desc': 'Colorful glazing set within natural wood lattice — rustic elegance and scholarly grace.',
      'manchurian-title': 'Manchurian Glass Window',
      'manchurian-2-title': 'Manchurian Glass Window (II)',
      'manchurian-2-desc': 'As light and shadow shift, the colorful glazing paints the garden’s spring across the room.',
      'living-room-title': 'Reception Hall',
      'living-room-desc': 'A gathering place for scholars — zither, chess, calligraphy, painting, and curling tea fragrance.',
      'about-years-text': 'Twenty-eight years devoted to the study and craft of classical Chinese Lingnan gardens',
      'about-bio-text': 'Graduated in 1989 from Guangdong Construction Engineering College, having apprenticed with master horticulturists and craftsmen. Long immersed in the on-site construction, restoration, and study of Lingnan gardens. Dedicated to weaving classical garden wisdom into contemporary private garden design — merging traditional materials and craftsmanship with modern technology to craft bespoke Chinese Lingnan gardens for collectors, architects, and discerning homeowners worldwide, carrying forward a cultural legacy.',
      'timeline-1-year': 'Since 1998',
      'timeline-1': 'Designed and built numerous private gardens across Dongguan, Zhaoqing, Guangzhou, Shunde, Chongqing, Beijing, Kunming, Guiyang, Zunyi, and Yichun',
      'timeline-2': 'Founded Caishen Garden Design Studio',
      'timeline-3': 'Lixian Garden project, Zengcheng, Guangzhou',
      'timeline-4': 'Became a member of the China Ancient Architecture and Garden Art Association',
      'timeline-5': 'Published “A New Discourse on Lingnan Gardens” at the China Cultural Heritage Conference',
      'timeline-6': 'Participated in the restoration design of several ancestral halls within Guangzhou’s urban village renewal',
      'timeline-7': 'Engaged in field study of the Chen Clan Academy restoration in Guangzhou',
      'timeline-8': 'Founded Fengjing Garden Planning & Design Co., Ltd.',
      'featured-tag': 'Project Overview',
      'featured-title': 'Every garden is a dialogue between heaven, earth, and the human heart',
      'featured-desc': 'A masterpiece of Lingnan mountain garden design — built to the land’s contours, ancient wisdom made new. Beneath the Five-Ridge Mountains, embraced by ten thousand mu of lychee forests, a timeless garden is hidden.',
      'philosophy-teaser-tag': 'Garden Making',
      'philosophy-teaser-title': 'A garden is not built — it grows',
      'philosophy-teaser-desc': 'From the first shovel of earth to the canopy of interwoven branches, time works its quiet magic here. Stones settle in, moss creeps up, trees learn the language of wind.',
      'mobile-lang-label': 'Language'
    }
  };

  var currentLang = 'zh-CN';

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('preferred-lang', lang); } catch (e) {}

    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (key.indexOf('-desc') !== -1 || key.indexOf('-tagline') !== -1 || key.indexOf('p1') !== -1 || key.indexOf('-quote') !== -1) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    var langBtns = document.querySelectorAll('.lang-option');
    langBtns.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function init() {
    try {
      var saved = localStorage.getItem('preferred-lang');
      if (saved && translations[saved]) {
        setLang(saved);
      } else {
        setLang('zh-CN');
      }
    } catch (e) {
      setLang('zh-CN');
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    setLang: setLang,
    getLang: function () { return currentLang; },
    t: function (key) { return translations[currentLang][key] || key; }
  };
})();


