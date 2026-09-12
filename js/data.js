/* ============================================================
   SAB 备考通 — 内容数据文件
   本文件是全部课程内容的"数据库":8 个单元、课文讲解、
   术语卡片、测试题目都在这里维护。想增补/修改内容,只需要
   编辑这个文件里的 JS 对象,不需要碰其他任何代码。
   参考大纲来源:多家托斯卡纳大区认可的 SAB(原 REC)培训机构
   公开课程说明及 Regione Toscana 食品经营者培训页面整理,
   内容为学习辅助归纳,并非官方原题,请以线下课程/官方资料为准。
   ============================================================ */

// ---------- 1. 单元列表 ----------
const UNITS = [
  {
    id: "u1",
    icon: "📜",
    title: "开业资质与经营许可",
    titleIt: "Requisiti amministrativi e SCIA",
    summary: "开一家酒吧/餐厅需要什么资质、SCIA是什么、经营场所和执照要求",
  },
  {
    id: "u2",
    icon: "🧫",
    title: "食品卫生与 HACCP",
    titleIt: "Igiene alimentare e sistema HACCP",
    summary: "自我控制体系、关键控制点、过敏原标识、冷链与交叉污染",
  },
  {
    id: "u3",
    icon: "🍇",
    title: "食品饮料商品学",
    titleIt: "Merceologia degli alimenti e delle bevande",
    summary: "食品分类与保存、标签解读、酒精饮料分类与度数常识",
  },
  {
    id: "u4",
    icon: "🍷",
    title: "酒精销售法规与负责任服务",
    titleIt: "Vendita di alcolici e somministrazione responsabile",
    summary: "未成年人禁售、售酒时段限制、酒驾红线、经营者的责任",
  },
  {
    id: "u5",
    icon: "🦺",
    title: "工作场所安全 D.Lgs. 81/08",
    titleIt: "Sicurezza sul lavoro",
    summary: "雇主义务、风险评估文件 DVR、防护装备、消防与急救常识",
  },
  {
    id: "u6",
    icon: "🧑‍🤝‍🧑",
    title: "劳动法与人事管理",
    titleIt: "Diritto del lavoro e gestione del personale",
    summary: "合同类型、行业合同 CCNL、工时休假、用工基本规则",
  },
  {
    id: "u7",
    icon: "⚖️",
    title: "民商法、税务与消费者权益",
    titleIt: "Diritto civile, fiscale e tutela del consumatore",
    summary: "个体户与公司、发票税务常识、经营者的民刑事责任、消费者保护",
  },
  {
    id: "u8",
    icon: "📈",
    title: "经营管理与市场营销",
    titleIt: "Gestione d'impresa e marketing",
    summary: "菜单定价、成本核算、进货库存、线上口碑与本地营销",
  },
];

// ---------- 2. 课文内容（讲解 + 术语卡片） ----------
const LESSONS = {
  u1: {
    intro: "这一单元讲的是「入场券」:法律上你凭什么可以开一家提供食品饮料的场所。核心是 SAB 资质本身的作用,以及开业前必须完成的行政手续。",
    sections: [
      {
        heading: "SAB 资质是什么、为什么需要它",
        points: [
          "SAB(Somministrazione Alimenti e Bevande)是意大利经营食品饮料现场消费场所(酒吧、餐厅、Pizzeria 等)所需的「职业资质」之一。",
          "老名字叫 REC(Registro Esercenti il Commercio),2012年后各大区逐步改用 SAB/SAB 课程认定,全国互认。",
          "满足以下任一条件即视为具备资质,不必上课:相关专业的高中文凭/大学学位;此前已在 REC 登记过同类目;此前已合法从事过该活动一定年限。都不满足的人,通过参加并通过 SAB 课程+考试来获得资质。",
          "资质证明的是「专业能力」,不等于「营业执照」本身——开业还需要完成后面提到的行政申报。",
        ],
      },
      {
        heading: "开业需要走的行政流程",
        points: [
          "SCIA(Segnalazione Certificata di Inizio Attività,营业开始认证申报)是目前意大利开业最常见的方式:向市政府(Comune/SUAP)申报后即可立即开始经营,行政机关事后核查。",
          "申报前要确认:经营场所的「用途分类」(destinazione d'uso)必须允许商业/餐饮用途,不能在纯住宅用途的房屋里直接开餐饮。",
          "还需要考虑:是否需要占用公共空间摆放外摆桌椅(occupazione di suolo pubblico,需单独申请)、招牌广告许可、消防合规（视规模可能需要 CPI 消防合格证）。",
          "经营者需要满足「道德要求」(requisiti morali):比如没有被判处特定类型的刑事处罚、未被采取反黑手党预防措施等。",
          "企业还需在工商登记局(Registro delle Imprese / Camera di Commercio)登记,并根据经营形式选择个体户或公司。",
        ],
      },
      {
        heading: "经营场所类型速览",
        points: [
          "Bar / Pubblico esercizio 类:以饮品、简餐为主。",
          "Ristorante / Trattoria / Pizzeria:以正餐服务为主，通常要求更完整的厨房与卫生设施。",
          "Circolo privato（私人俱乐部）:只对会员开放，管理规则与面向公众的营业场所不同，但仍需遵守食品卫生法规。",
        ],
      },
    ],
    glossary: [
      { term: "SAB", full: "Somministrazione di Alimenti e Bevande", zh: "食品饮料现场经营资质，本考试所对应的资质名称。" },
      { term: "SCIA", full: "Segnalazione Certificata di Inizio Attività", zh: "「认证申报即可开业」制度：申报后立刻可以营业，行政机关事后检查是否合规。" },
      { term: "SUAP", full: "Sportello Unico per le Attività Produttive", zh: "市政府受理各类经营活动申请的「单一窗口」部门。" },
      { term: "Destinazione d'uso", full: "—", zh: "房屋/场地在城市规划中被登记允许的使用用途（如住宅、商业、餐饮等）。" },
      { term: "Requisiti morali", full: "—", zh: "开办经营活动要求申请人具备的「品行/资格」条件，例如无相关刑事犯罪记录。" },
      { term: "Registro delle Imprese", full: "—", zh: "工商企业登记簿，所有企业都需要在当地商会登记。" },
      { term: "Occupazione di suolo pubblico", full: "—", zh: "占用公共道路/广场空间（比如摆外摆桌椅），需要单独申请许可并缴费。" },
      { term: "CPI", full: "Certificato di Prevenzione Incendi", zh: "消防预防合格证，达到一定规模或风险等级的场所需要取得。" },
    ],
  },

  u2: {
    intro: "食品卫生和 HACCP 是 SAB 考试的重头戏之一。理解「自我控制」这个理念，比死记硬背条文更重要：你要证明自己有能力主动识别和控制食品安全风险。",
    sections: [
      {
        heading: "自我控制体系（Autocontrollo）与 HACCP",
        points: [
          "欧盟《852/2004号条例》要求所有食品经营者建立「自我控制体系」，而 HACCP（Hazard Analysis and Critical Control Points，危害分析与关键控制点）是实现自我控制最核心的工具。",
          "HACCP 不是一份文件而是一套「思考方法」：先识别流程中每一步可能出现的生物、化学、物理风险，再找出哪些步骤是「关键控制点」（CCP），并对这些点设定监控标准和纠正措施。",
          "经典的 HACCP 有 7 大原则：①危害分析 ②确定关键控制点(CCP) ③设定临界限值 ④建立监控程序 ⑤制定纠正措施 ⑥建立核实程序 ⑦建立文件记录制度。",
          "小型经营者通常可以采用简化版自我控制手册（结合行业指南 Manuali di Buona Prassi Igienica），不必逐条重新发明。",
        ],
      },
      {
        heading: "温度、冷链与交叉污染",
        points: [
          "易腐食品要全程维持「冷链」（catena del freddo）：冷藏一般 0-4℃，冷冻 -18℃以下；温度记录要留存备查。",
          "「交叉污染」（contaminazione crociata）指细菌等有害物质从一种食物/表面转移到另一种本来安全的食物上，常见于生熟食共用刀具/砧板、储存时生食滴落到熟食上等情况。",
          "预防交叉污染的基本做法：生熟分开存放、分开使用工具、正确的洗手和台面消毒、按「先进先出」（FIFO）轮换库存。",
        ],
      },
      {
        heading: "过敏原标识与可追溯性",
        points: [
          "《欧盟1169/2011号条例》要求对堂食/外卖菜品中的14种主要过敏原（如麸质、乳制品、坚果、甲壳类、鸡蛋、大豆等）进行标注说明，顾客可以询问，经营者必须能够准确告知。",
          "「可追溯性」（rintracciabilità）要求经营者能够说明食材的来源（上游供应商）和去向，出现问题时可以快速召回、定位风险范围。",
          "食品从业人员（alimentaristi）需要完成基础的食品卫生培训，这与 SAB 资质是两回事，但常常放在同一批课程中一起学习。",
        ],
      },
    ],
    glossary: [
      { term: "HACCP", full: "Hazard Analysis and Critical Control Points", zh: "危害分析与关键控制点体系，是食品安全自我控制的核心方法论。" },
      { term: "Autocontrollo", full: "—", zh: "「自我控制」：经营者主动识别并管理食品安全风险的法定义务。" },
      { term: "CCP", full: "Punto Critico di Controllo", zh: "关键控制点：流程中如果失控就会导致食品安全风险的关键步骤（如烹饪温度、冷藏温度）。" },
      { term: "Catena del freddo", full: "—", zh: "冷链：易腐食品从采购、运输、储存到销售全程维持规定低温，防止细菌滋生。" },
      { term: "Contaminazione crociata", full: "—", zh: "交叉污染：有害物质从一种食物/器具转移到另一食物，是食源性疾病的常见原因。" },
      { term: "Allergeni", full: "—", zh: "过敏原：法规规定必须标注说明的14种常见致敏成分。" },
      { term: "Rintracciabilità", full: "—", zh: "可追溯性：能说清楚每批食材的来源与流向，便于问题食品的召回定位。" },
      { term: "TMC / scadenza", full: "Termine Minimo di Conservazione / Data di scadenza", zh: "「最佳食用期」（过期不代表不能吃，只是品质可能下降）与「保质截止日期」（过期不得再销售/使用）的区别，属于常考点。" },
      { term: "Alimentarista", full: "—", zh: "接触食品的从业人员，需接受基础食品卫生培训（与 HACCP 手册的建立责任人不完全相同）。" },
    ],
  },

  u3: {
    intro: "商品学部分要求你像一个「行家」一样认识食材和饮品：知道怎么分类、怎么正确保存、标签上写的是什么意思，以及不同酒类的基本常识。",
    sections: [
      {
        heading: "食品分类与保存方式",
        points: [
          "按保存难易可分为：易腐食品（deperibili，如鲜肉、乳制品）、半耐储食品、耐储食品（non deperibili，如干货、罐头）。",
          "常见保存方式：冷藏（refrigerazione）、冷冻（congelamento/surgelazione，工业急冻 surgelazione 与家用慢冻 congelamento 有区别）、真空包装（sottovuoto）、巴氏杀菌（pastorizzazione）、罐装（inscatolamento）。",
          "食品标签（etichetta）必须包含：品名、配料表（含过敏原加粗标注）、净含量、保质期、储存条件、生产者/经销商信息、原产地（部分品类强制）等。",
        ],
      },
      {
        heading: "饮料大类与酒精度常识",
        points: [
          "非酒精饮料（bevande analcoliche）：水、软饮、果汁等。",
          "酒精饮料（bevande alcoliche）按酒精度和酿造方式分为：发酵酒（fermentate，如葡萄酒 vino、啤酒 birra，酒精度通常较低）、蒸馏酒（distillati/liquori，如白兰地、格拉巴酒 grappa、烈酒，酒精度较高)。",
          "酒精度单位是「% vol」（体积酒精度），法律上「酒精饮料」通常指酒精度超过1.2% vol的饮品。",
          "葡萄酒基础分类：按颜色（红/白/桃红）、按含糖量（干型 secco、半干 abboccato、甜型 dolce）、按是否起泡（静止酒 fermo / 起泡酒 spumante，如 Prosecco、Franciacorta）。",
        ],
      },
    ],
    glossary: [
      { term: "Deperibile", full: "—", zh: "易腐食品，需要低温或特殊条件保存，保质期短。" },
      { term: "Sottovuoto", full: "—", zh: "真空包装：抽去包装内空气以延长保存时间的方法。" },
      { term: "Etichettatura", full: "—", zh: "食品标签规范，规定包装上必须标明的信息内容。" },
      { term: "% vol", full: "Percentuale in volume", zh: "酒精度表示单位，指每100毫升饮品中纯酒精的毫升数。" },
      { term: "Distillato", full: "—", zh: "蒸馏酒：通过蒸馏工艺提高酒精浓度得到的烈性酒（如格拉巴酒、白兰地）。" },
      { term: "Vino spumante", full: "—", zh: "起泡葡萄酒，如普罗塞克 Prosecco；与不起泡的「静止酒」（vino fermo）相对。" },
      { term: "Vino secco/dolce", full: "—", zh: "干型/甜型葡萄酒，按残留糖分高低划分。" },
      { term: "Denominazione", full: "—", zh: "食品/酒类的法定命名或原产地标识规则（如 DOP、IGP 等地理标志）。" },
    ],
  },

  u4: {
    intro: "这一单元关注酒精销售中「经营者的红线」：哪些情况绝对不能卖酒、卖酒的时间限制，以及经营者需要承担的相应责任。这是考试中非常具体、也容易出选择题的部分。",
    sections: [
      {
        heading: "禁止向未成年人售酒",
        points: [
          "意大利法律明确禁止向未满18周岁的人出售或提供任何酒精饮料，经营者在无法确认年龄时应要求出示证件。",
          "违反规定不仅面临行政处罚，情节严重或多次违反可能导致营业资质/许可被吊销。",
          "自动售货机销售酒精饮品需要有年龄核实装置或限制，且不得在特定场所（如学校、医院附近）设置。",
        ],
      },
      {
        heading: "售酒时段与场所限制",
        points: [
          "部分类型场所（如高速公路服务区、加油站便利店）在夜间特定时段禁止销售酒精饮品外带，具体时段和规则可能因地方性法规（大区/市政条例）而有差异。",
          "很多市政府针对夜间治安/噪音问题会出台「限酒令」（ordinanze anti-alcol），限制某些区域在深夜销售或饮用酒精饮料，经营者应关注所在市的具体规定。",
        ],
      },
      {
        heading: "负责任的酒精服务与经营者责任",
        points: [
          "「负责任的餐饮服务」（somministrazione responsabile）理念要求经营者关注顾客状态，对明显醉酒的顾客应停止继续供酒。",
          "意大利对驾驶员血液酒精浓度（tasso alcolemico）有严格限制：普通驾驶员上限一般为 0.5 g/L，新手/职业驾驶员为 0（零容忍）。",
          "如果经营者明知顾客已醉酒仍继续供酒，且该顾客随后发生交通事故等意外，经营者可能需要承担一定的连带责任，因此不少场所会张贴「安全饮酒」宣传标识。",
        ],
      },
    ],
    glossary: [
      { term: "Minori", full: "Minori di 18 anni", zh: "未成年人（未满18岁），法律禁止向其出售或提供酒精饮品。" },
      { term: "Tasso alcolemico", full: "—", zh: "血液酒精浓度，是判断是否构成「酒驾」的法定标准。" },
      { term: "Somministrazione responsabile", full: "—", zh: "「负责任的供餐供酒」理念：经营者主动关注顾客饮酒状态，避免继续为已醉酒顾客供酒。" },
      { term: "Ordinanza comunale", full: "—", zh: "市政府颁布的地方性行政命令，常用于规定限酒时段等地方治理措施。" },
      { term: "Distributore automatico", full: "—", zh: "自动售货机，销售酒精饮品的自动售货机需符合年龄核实等特殊规定。" },
    ],
  },

  u5: {
    intro: "职业安全（D.Lgs. 81/08，即2008年第81号法令）关注的是「保护员工」，跟前面讲食品安全保护「顾客」的角度不同，两个体系不要混淆。",
    sections: [
      {
        heading: "雇主的核心义务",
        points: [
          "雇主（datore di lavoro）必须编制风险评估文件 DVR（Documento di Valutazione dei Rischi），系统识别工作场所可能存在的安全和健康风险。",
          "雇主需要指定/任命：RSPP（负责预防保护的服务负责人）、医疗顾问（medico competente，视行业和风险等级而定）、急救和消防负责人（addetti primo soccorso / antincendio），并对相关人员进行专门培训。",
          "员工一方可以选举 RLS（Rappresentante dei Lavoratori per la Sicurezza，劳动者安全代表），代表员工参与安全事务的沟通。",
          "所有新入职员工都必须接受安全培训（formazione generale + specifica），根据行业风险等级（基础/中/高风险）课时要求不同，餐饮住宿业通常属于中等风险行业。",
        ],
      },
      {
        heading: "个人防护装备与常见风险",
        points: [
          "个人防护装备 DPI（Dispositivi di Protezione Individuale）在厨房场景常见的有：防滑鞋、防割手套、隔热手套等。",
          "餐饮场所常见职业风险：滑倒摔伤（地面油污/积水）、烫伤烧伤（厨房热源）、切割伤（刀具/机器）、化学品接触（清洁剂使用不当）、负重伤（搬运货物姿势不当）。",
          "安全标识（segnaletica di sicurezza）用颜色和图形传达信息：红色=禁止/消防设备，黄色=警告，蓝色=强制性指示，绿色=安全/急救/逃生方向。",
        ],
      },
      {
        heading: "消防与紧急情况处理",
        points: [
          "场所应张贴清晰的疏散路线图（planimetria di emergenza）和紧急出口标识，定期组织疏散演练。",
          "灭火器（estintore）需按规定类型配置、定期检验有效期，员工应知道基本使用方法和适用的火灾类型（如油锅起火不能用水浇）。",
        ],
      },
    ],
    glossary: [
      { term: "D.Lgs. 81/08", full: "Decreto Legislativo 81/2008", zh: "意大利职业健康与安全的基本法律，规定雇主和雇员在工作场所安全方面的权利义务。" },
      { term: "DVR", full: "Documento di Valutazione dei Rischi", zh: "风险评估文件，雇主必须编制，系统列出工作场所各类风险及应对措施。" },
      { term: "RSPP", full: "Responsabile del Servizio di Prevenzione e Protezione", zh: "预防保护服务负责人，协助雇主管理安全事务的专业角色。" },
      { term: "RLS", full: "Rappresentante dei Lavoratori per la Sicurezza", zh: "劳动者安全代表，由员工选出，代表员工参与安全沟通。" },
      { term: "DPI", full: "Dispositivi di Protezione Individuale", zh: "个人防护装备，如防滑鞋、手套等。" },
      { term: "Medico competente", full: "—", zh: "职业健康医生顾问，负责对特定风险行业员工进行健康监测。" },
      { term: "Estintore", full: "—", zh: "灭火器，需按规定配置类型并定期检验。" },
    ],
  },

  u6: {
    intro: "这一单元是劳动法基础知识，重点是「合同类型」和「基本用工规则」，帮助未来的经营者理解雇佣员工时该遵守什么。",
    sections: [
      {
        heading: "常见合同类型",
        points: [
          "无固定期限合同（contratto a tempo indeterminato）：默认的标准雇佣形式，保护力度最强。",
          "固定期限合同（contratto a tempo determinato）：有明确到期日，续签和总时长受法律限制。",
          "学徒合同（contratto di apprendistato）：面向青年员工，兼顾工作与培训，通常享受一定的用工成本优惠。",
          "非全日制合同（part-time）：约定工时低于全职标准，餐饮业中很常见（如周末、午晚班兼职）。",
          "季节性合同（lavoro stagionale）：针对旅游餐饮行业旺季用工需求设计的特殊合同类型。",
        ],
      },
      {
        heading: "行业合同 CCNL 与用工基本规则",
        points: [
          "CCNL（Contratto Collettivo Nazionale di Lavoro，全国行业集体合同）由工会和雇主协会谈判达成，规定该行业最低工资、工时、加班费率、假期等标准，餐饮住宿业适用「Turismo - Pubblici Esercizi」相关的CCNL。",
          "标准工时一般为每周40小时，超出部分为加班（straordinario），需按合同约定支付加班费或调休。",
          "员工享有法定带薪年假（ferie）以及各类许可假（permessi，如病假、婚假等），具体天数依合同和工龄而定。",
          "雇主需要为员工建立并维护「统一劳动登记簿」（LUL, Libro Unico del Lavoro）等法定用工记录。",
        ],
      },
    ],
    glossary: [
      { term: "CCNL", full: "Contratto Collettivo Nazionale di Lavoro", zh: "全国行业集体合同，规定该行业的最低工资、工时、假期等标准条款。" },
      { term: "Tempo indeterminato", full: "—", zh: "无固定期限合同，标准长期雇佣形式。" },
      { term: "Tempo determinato", full: "—", zh: "固定期限合同，有明确到期时间，续签次数与总时长受法律限制。" },
      { term: "Apprendistato", full: "—", zh: "学徒合同，面向青年员工，边工作边培训。" },
      { term: "Straordinario", full: "—", zh: "加班，超出合同约定标准工时的工作时间。" },
      { term: "Ferie", full: "—", zh: "法定带薪年假。" },
      { term: "LUL", full: "Libro Unico del Lavoro", zh: "统一劳动登记簿，雇主须依法建立的用工记录文件。" },
    ],
  },

  u7: {
    intro: "这一单元涵盖开公司要懂的基础法律和税务常识，以及经营者对顾客、对社会需要承担的责任边界。",
    sections: [
      {
        heading: "个体户与公司形式",
        points: [
          "个体经营者（ditta individuale）：设立简单，但经营者对企业债务承担无限责任（用个人财产兜底）。",
          "公司形式（如 S.r.l. 有限责任公司）：设立门槛更高，但股东通常仅以出资为限承担有限责任。",
          "任何经营活动开始前都需要申请增值税号（Partita IVA），用于税务申报和开具发票。",
        ],
      },
      {
        heading: "税务基础常识",
        points: [
          "小微经营者可能符合「统一税制」（regime forfettario）条件，按简化方式核算税款，但有营业额上限等适用条件。",
          "餐饮场所必须为每笔交易开具符合规定的凭证：电子发票（fattura elettronica）或收款凭证（documento commerciale，取代了旧式的收银小票 scontrino），供税务部门核查营业收入。",
          "偷逃税、不开具法定凭证属于税务违法行为，会面临行政处罚甚至更严重的法律后果。",
        ],
      },
      {
        heading: "经营者的法律责任与消费者权益保护",
        points: [
          "经营者可能承担三类责任：民事责任（responsabilità civile，如因食品导致顾客受损需要赔偿）、行政责任（responsabilità amministrativa，如违反卫生规定被罚款）、刑事责任（responsabilità penale，如严重危害公共健康的故意/重大过失行为）。",
          "《消费者法典》（Codice del Consumo）保护顾客的知情权（如实标价、菜单信息真实）、健康安全权和售后维权渠道。",
          "顾客对商品/服务有异议时可以投诉或申请调解，经营者应配合处理，保留相关凭证有助于厘清责任。",
        ],
      },
    ],
    glossary: [
      { term: "Ditta individuale", full: "—", zh: "个体经营户，设立简单但债务责任无限。" },
      { term: "S.r.l.", full: "Società a Responsabilità Limitata", zh: "有限责任公司，股东以出资为限承担责任。" },
      { term: "Partita IVA", full: "—", zh: "增值税号，开展经营活动、开具发票的必备税务登记号。" },
      { term: "Regime forfettario", full: "—", zh: "面向小微经营者的简化统一税制，按固定比例核算应纳税所得。" },
      { term: "Fattura elettronica", full: "—", zh: "电子发票，意大利强制推行的正式交易凭证形式。" },
      { term: "Responsabilità civile/penale/amministrativa", full: "—", zh: "经营者可能承担的三类法律责任：民事赔偿、行政处罚、刑事追责。" },
      { term: "Codice del Consumo", full: "—", zh: "《消费者法典》，规定保护消费者权益的基本法律框架。" },
    ],
  },

  u8: {
    intro: "最后一单元跳出法规视角，讲一点点「怎么把店经营好」的基础管理与营销常识，考试占比不高但很实用。",
    sections: [
      {
        heading: "成本与定价基础",
        points: [
          "菜单定价需要覆盖：食材成本（食品成本率 food cost，餐饮业常见目标约在售价的25%-35%之间，具体因业态而异）、人工成本、房租水电等固定成本，并留出合理利润空间。",
          "「盈亏平衡点」（punto di pareggio / break-even）是指收入刚好覆盖全部成本时的营业额或销量，是判断经营是否可持续的基础工具。",
        ],
      },
      {
        heading: "库存与供应商管理",
        points: [
          "遵循「先进先出」（FIFO，First In First Out）原则轮换库存，减少食材过期浪费，这也与前面 HACCP 单元的自我控制要求呼应。",
          "定期盘点库存、比较多个供应商报价、关注食材季节性和本地采购，有助于控制成本和保证品质。",
        ],
      },
      {
        heading: "本地营销与顾客口碑",
        points: [
          "线上点评平台（如 Google 评价、TripAdvisor）对餐饮场所的客流影响很大，及时、专业地回复顾客评价（尤其是负面评价）是基本的经营素养。",
          "社交媒体（Instagram、Facebook等）适合展示菜品、店内氛围和优惠活动，是低成本获客的常见手段。",
          "老顾客维护（如会员优惠、常客问候）的获客成本通常低于持续拉新顾客，值得纳入日常经营考虑。",
        ],
      },
    ],
    glossary: [
      { term: "Food cost", full: "—", zh: "食品成本率：食材成本占菜品售价的比例，是菜单定价的重要参考指标。" },
      { term: "Break-even (punto di pareggio)", full: "—", zh: "盈亏平衡点：收入正好覆盖全部成本的营业水平。" },
      { term: "FIFO", full: "First In First Out", zh: "先进先出：先入库的食材先使用/先出库，减少过期浪费。" },
      { term: "Marketing locale", full: "—", zh: "本地化营销：针对周边客群、结合线上点评和社交媒体的低成本获客方式。" },
    ],
  },
};

// ---------- 3. 题库 ----------
// 题目和选项使用意大利语出题（更贴近真实考试语感），专业词汇后用中文括注帮助理解；
// explain（讲解）保持中文，负责把知识点讲透。
// 每道题结构：{ id, q, options:[4个], answer: 正确选项下标(0-3), explain }
const QUESTIONS = {
  u1: [
    { id: "u1q1", q: "A cosa serve principalmente la qualifica SAB（食品饮料经营资质）?", options: ["Attesta che l'operatore possiede la capacità professionale richiesta per la somministrazione di alimenti e bevande（现场经营食品饮料）", "Certifica che il locale ha superato il collaudo antincendio (CPI，消防合格证)", "Garantisce la piena tracciabilità（可追溯性）di tutti gli ingredienti", "Certifica che il personale ha completato la formazione sulla sicurezza sul lavoro（职场安全培训）"], answer: 0, explain: "SAB（原REC）考察和认定的是「职业专业能力」这一项经营资质要求，其他事项分别对应消防、HACCP、D.Lgs.81/08等不同制度。" },
    { id: "u1q2", q: "In quale caso si è automaticamente esonerati dal corso SAB?", options: ["Si possiede un diploma di scuola superiore o una laurea in una materia attinente al settore", "Si è aperto un chiosco temporaneo nelle vicinanze", "Si ha un amico che lavora nello stesso settore", "Si è partecipato a una fiera gastronomica"], answer: 0, explain: "持有相关专业的学历、此前有REC登记记录、或此前合法从业达到规定年限，均可视为已具备资质，无需再上课。" },
    { id: "u1q3", q: "Qual è la caratteristica principale della SCIA（认证申报即可开业）?", options: ["Dopo la segnalazione si può iniziare subito l'attività; l'amministrazione effettua i controlli successivamente", "Bisogna attendere l'approvazione dell'amministrazione prima di aprire", "Si applica solo alle catene di ristorazione", "È valida solo nel Comune di Milano"], answer: 0, explain: "SCIA（认证申报）允许经营者申报后立即开始活动，行政机关通过事后检查确认是否合规，是简化行政程序的一种方式。" },
    { id: "u1q4", q: "Quale delle seguenti riguarda la verifica del locale prima dell'apertura?", options: ["Verificare che la destinazione d'uso（城市规划用途分类）urbanistica del locale consenta l'attività commerciale/di somministrazione", "Il gruppo sanguigno del titolare", "Se il menu è scritto in italiano", "L'età media della clientela"], answer: 0, explain: "destinazione d'uso决定了这块场地在城市规划上是否允许被用作商业/餐饮经营，是开业前的基本前提条件之一。" },
    { id: "u1q5", q: "Riguardo ai «requisiti morali»（品行/资格要求）, quale affermazione è corretta?", options: ["Sono requisiti di legge relativi alla condotta/idoneità del richiedente, ad esempio l'assenza di determinati precedenti penali", "Sono solo un consiglio del settore, non obbligatorio", "Si applicano solo alle società, non alle ditte individuali（个体经营户）", "Non hanno alcuna relazione con la possibilità di aprire l'attività"], answer: 0, explain: "requisiti morali 是法定的经营资质要求之一，例如未被判处特定刑事处罚、未被采取反黑手党预防措施等，是能否获得经营资质的硬性条件。" },
    { id: "u1q6", q: "Per occupare il marciapiede davanti al locale con tavolini (dehors), di norma è necessario:", options: ["Richiedere separatamente l'autorizzazione per l'occupazione di suolo pubblico（占用公共空间许可）", "Non serve alcuna pratica, si può occupare liberamente", "Basta avvisare a voce i vicini", "Serve solo in inverno"], answer: 0, explain: "占用公共道路/广场空间摆放外摆桌椅属于占用公共空间，需要单独申请许可并按规定缴费，不是自动包含在营业许可中的。" },
    { id: "u1q7", q: "Indipendentemente dalla forma giuridica scelta (ditta individuale o società), all'apertura è sempre necessario:", options: ["Iscriversi al Registro delle Imprese（工商企业登记簿）", "Iscriversi come struttura cinque stelle presso l'ente del turismo", "Versare una quota associativa all'associazione dei consumatori", "Registrare il programma dei corsi presso il Ministero dell'Istruzione"], answer: 0, explain: "无论采用哪种企业形式，都必须在当地商会的工商企业登记簿完成登记，这是企业合法存在的基础手续之一。" },
    { id: "u1q8", q: "Cosa indica la sigla SUAP（市政单一窗口）?", options: ["Lo sportello unico del Comune che riceve le domande relative alle attività produttive", "Una marca di birra artigianale locale", "Un marchio di certificazione per la sicurezza alimentare", "Un modello di catena di ristorazione"], answer: 0, explain: "SUAP（Sportello Unico per le Attività Produttive）是市政府为简化行政流程设立的“单一窗口”，集中受理各类经营活动相关申请。" },
  ],

  u2: [
    { id: "u2q1", q: "Qual è l'obiettivo principale del sistema HACCP（危害分析与关键控制点体系）?", options: ["Individuare e tenere sotto controllo in modo sistematico i rischi per la sicurezza alimentare lungo la produzione/lavorazione/somministrazione", "Migliorare il punteggio di gradimento del sapore dei piatti", "Ridurre il costo dell'affitto del locale", "Aumentare la visibilità sui social media"], answer: 0, explain: "HACCP 是一套用于识别、评估和控制食品安全风险的方法论，目标是保证食品安全，而非涉及口味、成本或营销层面的问题。" },
    { id: "u2q2", q: "Quale dei seguenti è uno dei sette principi dell'HACCP?", options: ["Individuare i punti critici di controllo (CCP，关键控制点)", "Uniformare il colore delle divise del personale", "Definire il programma punti per i clienti", "Progettare il layout grafico del menu"], answer: 0, explain: "HACCP 七大原则包括危害分析、确定CCP、设定临界限值、建立监控程序、制定纠正措施、建立核实程序、建立文件记录制度，与制服、积分、菜单设计无关。" },
    { id: "u2q3", q: "Qual è la situazione più tipica di «contaminazione crociata»（交叉污染）?", options: ["Usare lo stesso tagliere o coltello per alimenti crudi e cotti", "Usare stoviglie di marche diverse", "Avere sul menu sia piatti di carne che vegetariani", "La musica in cucina è troppo alta"], answer: 0, explain: "交叉污染指有害微生物从一种食物/表面转移到另一本来安全的食物，生熟食共用砧板/刀具是最典型的高风险场景之一。" },
    { id: "u2q4", q: "Per gli alimenti deperibili（易腐食品）, la temperatura di refrigerazione consigliata è generalmente:", options: ["Circa 0-4°C", "Circa 15-20°C", "Sotto i -30°C", "Va bene la temperatura ambiente"], answer: 0, explain: "易腐食品冷藏一般维持在0-4℃左右以抑制细菌繁殖，冷冻则要求-18℃以下，室温或过高温度都会加速食品变质。" },
    { id: "u2q5", q: "L'obbligo di indicare gli allergeni（过敏原）si basa principalmente su:", options: ["Il Regolamento UE 1169/2011 sull'informazione ai consumatori sui prodotti alimentari", "Un accordo volontario tra i locali, senza alcun obbligo di legge", "Solo sui prodotti destinati all'esportazione", "Solo sui prodotti confezionati, non sui piatti serviti al tavolo"], answer: 0, explain: "《欧盟1169/2011号条例》要求包括堂食在内的食品信息（含过敏原）需要能够被顾客获知，经营者必须能够准确说明堂食菜品是否含有常见过敏原。" },
    { id: "u2q6", q: "Cosa si intende principalmente per «rintracciabilità»（可追溯性）?", options: ["La capacità di risalire alla provenienza e alla destinazione di ogni lotto di materie prime, per facilitare il ritiro in caso di problemi", "La capacità di tracciare le abitudini di consumo dei clienti per il marketing", "La capacità di registrare le presenze del personale", "La capacità di calcolare l'incasso giornaliero"], answer: 0, explain: "可追溯性是食品安全管理的重要概念，强调经营者要能说清楚原料“从哪来、到哪去”，一旦出现问题可以快速定位和处理，而非涉及顾客数据或财务统计。" },
    { id: "u2q7", q: "Qual è la differenza tra il Termine Minimo di Conservazione (TMC，最佳食用期) e la data di scadenza（保质截止日期）?", options: ["Superato il TMC l'alimento può comunque essere consumato, anche se la qualità può calare; superata la scadenza non può più essere venduto/utilizzato", "I due termini hanno esattamente lo stesso significato, cambia solo il nome", "Il TMC si applica solo alle bevande, la scadenza solo ai solidi", "Il TMC ha un valore legale superiore alla scadenza"], answer: 0, explain: "TMC标注的是“最佳品质保持期限”，过期后食品品质可能下降但通常仍可安全食用；而scadenza是硬性的保质截止日期，过期后不得再销售或使用，二者法律含义不同。" },
    { id: "u2q8", q: "Quale formazione di base deve seguire un «alimentarista»（食品从业人员）?", options: ["La formazione di base sull'igiene alimentare/HACCP", "La formazione per capo squadra antincendio", "La formazione sulla dichiarazione fiscale", "La formazione per la patente di guida"], answer: 0, explain: "接触食品的从业人员需要接受食品卫生相关的基础培训，这与HACCP自我控制体系的建立密切相关，但与消防、税务、驾驶培训是不同的制度。" },
  ],

  u3: [
    { id: "u3q1", q: "Quale caratteristica ha un alimento «deperibile»（易腐食品）?", options: ["Ha una durata di conservazione breve e richiede generalmente refrigerazione o condizioni particolari", "Può essere conservato a tempo indeterminato a temperatura ambiente", "Comprende solo i surgelati", "Comprende solo le bevande alcoliche"], answer: 0, explain: "易腐食品（如鲜肉、乳制品）容易变质，保存期短，通常需要冷藏或其他特殊条件延缓变质，与冷冻食品、酒精饮品不能等同。" },
    { id: "u3q2", q: "Quale delle seguenti informazioni deve generalmente comparire sull'etichettatura（食品标签规范）di un alimento?", options: ["L'elenco degli ingredienti (con gli allergeni evidenziati) e il termine di conservazione", "Il numero di cellulare personale del gestore", "La recensione dell'ultimo cliente", "Il turno di lavoro del personale"], answer: 0, explain: "食品标签的法定必备信息通常包括品名、配料表（过敏原需突出标注）、净含量、保质期/最佳食用期、储存条件、生产者信息等，与员工排班、顾客评价等无关。" },
    { id: "u3q3", q: "Dal punto di vista legale, una «bevanda alcolica» è generalmente definita come una bevanda con gradazione superiore a:", options: ["1,2% vol（体积酒精度）", "10% vol", "40% vol", "Qualsiasi traccia di alcol non conta come bevanda alcolica"], answer: 0, explain: "法律上通常将酒精度超过1.2% vol的饮品界定为“酒精饮料”，这是判断相关销售限制（如禁止向未成年人出售）是否适用的基础标准之一。" },
    { id: "u3q4", q: "Quale dei seguenti gruppi appartiene ai «distillati»（蒸馏酒）?", options: ["Grappa, brandy", "Birra comune", "Succo di mela", "Acqua minerale"], answer: 0, explain: "格拉巴酒、白兰地等属于通过蒸馏工艺提高酒精浓度得到的烈性酒，而啤酒属于发酵酒，苹果汁和矿泉水属于非酒精饮料。" },
    { id: "u3q5", q: "Cosa indica «vino spumante»（起泡葡萄酒）?", options: ["Un vino frizzante, come il Prosecco", "Un vino fermo, senza bollicine", "Un tipo di birra", "Un tipo di distillato"], answer: 0, explain: "spumante 指起泡葡萄酒，与静止无气泡的“vino fermo”相对，普罗塞克（Prosecco）就是典型的意大利起泡酒代表。" },
    { id: "u3q6", q: "Cosa indica l'unità «% vol»?", options: ["La percentuale in volume di alcol puro presente in 100 ml di bevanda", "Il contenuto nutrizionale totale dell'alimento", "La durata di conservazione dell'alimento", "Un'unità di peso dell'alimento"], answer: 0, explain: "% vol 是酒精度的标准表示方式，指每100毫升饮品中含有多少毫升的纯酒精，与营养成分、保质期、重量单位无关。" },
    { id: "u3q7", q: "Come si chiama la tecnica industriale di congelamento rapido?", options: ["Surgelazione（工业急速冷冻）", "Pastorizzazione（巴氏杀菌）", "Fermentazione（发酵）", "Distillazione（蒸馏）"], answer: 0, explain: "Surgelazione 指工业化的急速冷冻技术，能更好地保持食品的组织结构和品质；家用较慢速的冷冻一般称为congelamento；巴氏杀菌和发酵、蒸馏是不同的工艺概念。" },
    { id: "u3q8", q: "In base al contenuto zuccherino, oltre a secco e abboccato, il vino può essere classificato come:", options: ["Dolce", "Spumante", "Riserva", "Barricato"], answer: 0, explain: "按含糖量葡萄酒常分为干型、半干、甜型三档；起泡/静止是按是否含气泡分类，陈年/桶陈则是描述酿造和陈化方式，属于不同的分类维度。" },
    { id: "u3q9", q: "Qual è la funzione principale del confezionamento «sottovuoto»（真空包装）?", options: ["Rimuovere l'aria dalla confezione per rallentare il deterioramento e prolungare la conservazione", "Rendere il colore dell'alimento più vivace", "Ridurre il valore nutrizionale dell'alimento", "È usato solo per prodotti non alimentari"], answer: 0, explain: "真空包装通过抽去包装内空气减少氧化和微生物繁殖的条件，从而延缓食品变质、延长保存时间，与食品外观颜色或营养价值本身无直接关系。" },
  ],

  u4: [
    { id: "u4q1", q: "La legge italiana vieta la vendita o somministrazione di bevande alcoliche ai minori（未成年人）di:", options: ["18 anni", "16 anni", "21 anni", "Non esiste alcun limite di età"], answer: 0, explain: "意大利法律明确规定禁止向未满18周岁的人出售或提供任何酒精饮料，经营者在无法确认年龄时应要求顾客出示证件核实。" },
    { id: "u4q2", q: "Il limite legale del tasso alcolemico（血液酒精浓度）per un conducente ordinario è generalmente:", options: ["0,5 g/L", "1,5 g/L", "3,0 g/L", "Non esiste alcun limite"], answer: 0, explain: "意大利对普通驾驶员的血液酒精浓度上限一般为0.5 g/L，而新手驾驶员/职业驾驶员的标准更严格，通常为零容忍（0）。" },
    { id: "u4q3", q: "Il principio della «somministrazione responsabile»（负责任供应）richiede al gestore di:", options: ["Prestare attenzione allo stato del cliente e interrompere la somministrazione a chi è visibilmente ubriaco", "Promuovere il più possibile bevande ad alta gradazione per aumentare l'incasso", "Occuparsi solo dei clienti abituali, ignorando gli sconosciuti", "Applicarsi solo nel weekend"], answer: 0, explain: "负责任供应服务是一种经营理念和法律期待，要求经营者主动关注顾客的饮酒状态，避免继续向已经明显醉酒的顾客供酒，而不是片面追求销售额。" },
    { id: "u4q4", q: "Riguardo alle ordinanze comunali（市政地方法令）«anti-alcol», quale affermazione è corretta?", options: ["Sono provvedimenti amministrativi locali; le regole specifiche variano da comune a comune, il gestore deve informarsi su quelle locali", "Sono uguali in tutta Italia, senza differenze tra città", "Valgono solo in estate", "Non vincolano il gestore, riguardano solo i singoli individui"], answer: 0, explain: "限酒令是市政府基于治安、噪音等考虑颁布的地方性行政命令，不同城市的具体时段和范围可能不同，经营者需要关注并遵守所在地的规定。" },
    { id: "u4q5", q: "Se il gestore continua a servire alcolici a un cliente palesemente ubriaco e questi provoca poi un incidente stradale, il gestore può:", options: ["Essere chiamato a rispondere in via concorrente", "Non essere in alcun modo coinvolto", "Dover solo scusarsi verbalmente", "Non avere alcuna responsabilità, ricade tutto sul cliente"], answer: 0, explain: "如果经营者在明知顾客已醉酒的情况下仍继续供酒，且该顾客随后发生意外，经营者可能需要承担一定的连带责任，这也是很多场所张贴“安全饮酒”提示的原因之一。" },
    { id: "u4q6", q: "I distributori automatici（自动售货机）che vendono bevande alcoliche devono generalmente:", options: ["Avere un meccanismo di verifica dell'età e non essere installati vicino a scuole, ospedali, ecc.", "Poter essere installati ovunque senza alcuna restrizione", "Essere attivi solo di notte", "Vendere solo vino, mai superalcolici"], answer: 0, explain: "自动售货机销售酒精饮品需符合年龄核实等特殊规定，且不得设置在学校、医院附近等敏感场所，以防止未成年人轻易购买。" },
  ],

  u5: [
    { id: "u5q1", q: "Cosa disciplina principalmente il D.Lgs. 81/08（职业安全法）?", options: ["La salute e la sicurezza dei lavoratori nei luoghi di lavoro", "Il sistema di autocontrollo dell'igiene alimentare", "La procedura di dichiarazione fiscale del locale", "Le regole per la definizione dei prezzi del menu"], answer: 0, explain: "D.Lgs. 81/08 是意大利职业健康与安全的基本法律，核心目的是保护劳动者在工作场所的安全与健康，与食品卫生、税务、定价属于不同法律体系。" },
    { id: "u5q2", q: "Cos'è il DVR（风险评估文件）(Documento di Valutazione dei Rischi)?", options: ["Il documento che il datore di lavoro deve obbligatoriamente redigere", "Il testo del contratto di lavoro del dipendente", "Il registro dei reclami dei clienti", "L'elenco degli acquisti alimentari"], answer: 0, explain: "DVR是雇主依法必须编制的文件，系统识别工作场所可能存在的安全和健康风险，并制定相应的预防和应对措施。" },
    { id: "u5q3", q: "Chi è l'RLS（劳动者安全代表）(Rappresentante dei Lavoratori per la Sicurezza)?", options: ["Il rappresentante eletto dai lavoratori per partecipare al dialogo sulla sicurezza", "Una società di consulenza sulla sicurezza nominata direttamente dal datore di lavoro", "Un ispettore inviato dal governo in azienda", "Il referente dei vigili del fuoco"], answer: 0, explain: "RLS由劳动者选举产生，代表员工在安全事务上与雇主进行沟通协商，是员工一方的安全代表角色，区别于雇主任命的RSPP或外部机构。" },
    { id: "u5q4", q: "Quali DPI（个人防护装备）sono comuni in ambito cucina?", options: ["Scarpe antiscivolo, guanti antitaglio, guanti termici", "Cuffie, occhiali da sole", "Giacca e cravatta", "Semplici ciabatte"], answer: 0, explain: "厨房作业涉及湿滑地面、锋利刀具、高温设备等风险，因此防滑鞋、防割手套、隔热手套等是常见且必要的个人防护装备。" },
    { id: "u5q5", q: "Nella segnaletica di sicurezza, il colore rosso indica generalmente:", options: ["Divieto o posizione delle attrezzature antincendio", "Direzione dell'uscita di sicurezza", "Obbligo di indossare un dispositivo", "Un'informazione generica"], answer: 0, explain: "安全标识的颜色有约定俗成的含义：红色代表禁止/消防设备，黄色代表警告，蓝色代表强制性指示，绿色代表安全/急救/逃生方向。" },
    { id: "u5q6", q: "Riguardo l'uso dell'estintore（灭火器）, quale affermazione è corretta?", options: ["Un incendio da olio/frittura non va spento direttamente con acqua; serve un mezzo estinguente adeguato", "Qualsiasi tipo di incendio può essere spento direttamente con acqua", "L'estintore non necessita di alcun controllo, può essere usato all'infinito", "Il personale non ha bisogno di alcuna nozione base antincendio"], answer: 0, explain: "油锅（油脂类）起火用水浇灭反而会引发剧烈飞溅甚至爆燃，应使用适当类型的灭火器材（如干粉、专用灭火毯等），员工应具备基本消防常识。" },
    { id: "u5q7", q: "Nella classificazione del rischio professionale, il settore della ristorazione è generalmente considerato:", options: ["Un settore a rischio medio", "Un settore a rischio zero, senza necessità di formazione sulla sicurezza", "Solo lo standard più alto, un sistema del tutto diverso dagli altri settori", "Questa classificazione non si applica alla ristorazione"], answer: 0, explain: "餐饮住宿业通常被划分为中等风险行业，对应的安全培训课时要求介于低风险和高风险行业之间，仍然需要完成规定的安全培训。" },
  ],

  u6: [
    { id: "u6q1", q: "Cosa indica il «contratto a tempo indeterminato»（无固定期限合同）?", options: ["La forma standard di assunzione senza scadenza prestabilita", "Un contratto temporaneo di un solo giorno", "Un contratto riservato solo agli stagisti", "Un accordo di collaborazione come libero professionista"], answer: 0, explain: "无固定期限合同是意大利劳动法中默认的标准雇佣形式，相比固定期限合同保护力度更强，也是长期稳定用工的主要合同类型。" },
    { id: "u6q2", q: "Qual è la funzione del CCNL（全国行业集体合同）(Contratto Collettivo Nazionale di Lavoro)?", options: ["Stabilire le condizioni minime del settore: retribuzione, orario, ferie, ecc.", "È solo una raccomandazione interna non vincolante dell'associazione di categoria", "Si applica solo alle aziende pubbliche", "Non ha alcuna relazione con il settore turistico-alberghiero"], answer: 0, explain: "CCNL是由工会与雇主协会谈判达成的全国性行业集体合同，规定该行业适用的最低工资、工时、加班费率、假期等基本劳动标准，餐饮住宿业有专门适用的CCNL。" },
    { id: "u6q3", q: "Quale caratteristica ha il contratto di «apprendistato»（学徒合同）?", options: ["È rivolto ai giovani lavoratori, che uniscono lavoro e formazione", "È riservato solo a lavoratori over 50", "Vieta il pagamento di qualsiasi retribuzione", "Deve avere una durata superiore a 10 anni"], answer: 0, explain: "学徒合同主要面向青年员工，特点是在工作的同时接受职业培训，通常在用工成本上也有相应的优惠政策，与年龄超过50岁或超长期限等描述不符。" },
    { id: "u6q4", q: "Riguardo allo «straordinario»（加班）, quale affermazione è corretta?", options: ["Indica le ore lavorate oltre l'orario standard previsto dal contratto, di norma retribuite con una maggiorazione o compensate con riposo", "È l'orario base che ogni dipendente deve svolgere ogni giorno", "Non è soggetto ad alcuna regola di legge o contrattuale", "Può riguardare solo i dirigenti"], answer: 0, explain: "加班指超出合同约定标准工时之外的工作时间，法律和CCNL通常都会规定相应的加班费率或调休安排，并非不受约束或仅限管理层。" },
    { id: "u6q5", q: "Cos'è il LUL（统一劳动登记簿）(Libro Unico del Lavoro)?", options: ["Il registro unico del lavoro che il datore di lavoro deve tenere per legge", "Il registro dei reclami dei clienti", "Il registro di carico delle merci alimentari", "Il registro delle prove antincendio"], answer: 0, explain: "LUL是意大利法律要求雇主建立和维护的统一劳动登记簿，用于记录员工的工时、工资等法定用工信息，与顾客意见、食品进货、消防记录是不同的文件。" },
  ],

  u7: [
    { id: "u7q1", q: "Qual è una caratteristica principale della «ditta individuale»（个体经营户）?", options: ["Costituzione semplice, ma il titolare risponde con responsabilità illimitata per i debiti dell'attività", "Ha una soglia di costituzione più alta rispetto a una società", "I soci rispondono per natura in modo limitato", "Non è necessario richiedere la partita IVA"], answer: 0, explain: "个体经营户设立手续相对简单，但经营者需要以个人财产对企业债务承担无限责任，这与股东责任有限的公司形式（如S.r.l.）形成对比，且同样需要申请Partita IVA。" },
    { id: "u7q2", q: "Cos'è la «Partita IVA»（增值税号）?", options: ["Il numero identificativo fiscale usato per la dichiarazione delle imposte e l'emissione delle fatture", "Il nome di una catena di ristorazione", "Il numero della tessera fedeltà del cliente", "Un codice di certificazione della sicurezza alimentare"], answer: 0, explain: "Partita IVA是意大利经营活动开始前必须申请的增值税税号，是税务申报和开具发票的基础，与品牌名称、会员卡号、食品安全认证无关。" },
    { id: "u7q3", q: "A chi si applica il «regime forfettario»（小微经营者简化税制）?", options: ["Ai piccoli operatori che soddisfano determinati requisiti (ad esempio un fatturato entro un certo limite)", "A tutte le grandi catene di ristorazione", "Solo alle organizzazioni no-profit", "Solo alle imprese di import-export"], answer: 0, explain: "统一税制（regime forfettario）是面向符合特定条件（如营业额低于规定上限）的小微经营者的简化税收核算方式，大型企业通常不适用。" },
    { id: "u7q4", q: "Attualmente, per ogni transazione in un locale italiano, il documento fiscale generalmente da emettere è:", options: ["La fattura elettronica（电子发票）o il documento commerciale", "Un semplice appunto scritto a mano", "Nessun documento, basta la conferma verbale", "Un documento solo se il cliente lo richiede espressamente"], answer: 0, explain: "意大利已推行电子发票制度，日常零售交易通常需要开具符合规定的收款凭证（取代旧式收银小票），用于税务核查，不能仅凭口头确认或完全省略。" },
    { id: "u7q5", q: "Se un cliente subisce un danno alla salute a causa di un problema alimentare, il gestore può dover rispondere:", options: ["In via civile（民事责任）(risarcimento), e nei casi più gravi anche in via penale（刑事责任）", "Al massimo con un richiamo verbale", "Senza alcuna responsabilità", "Ne risponde solo il cliente stesso"], answer: 0, explain: "经营者若因食品安全问题给顾客造成损害，通常需要承担民事赔偿责任；如果存在故意或重大过失且情节严重，还可能涉及刑事责任，并非完全免责。" },
    { id: "u7q6", q: "Cosa tutela principalmente il Codice del Consumo（消费者法典）?", options: ["Il diritto all'informazione, alla sicurezza e alle vie di tutela post-vendita del consumatore", "Solo i segreti commerciali del gestore", "Solo le transazioni online, non i locali fisici", "Solo le dimensioni standard delle confezioni"], answer: 0, explain: "《消费者法典》是保护消费者权益的基础性法律框架，覆盖知情权（如实标价、真实菜单信息）、健康安全权和投诉/维权渠道，线上线下交易均适用。" },
  ],

  u8: [
    { id: "u8q1", q: "Cosa indica generalmente il «food cost»（食品成本率）?", options: ["La percentuale del costo degli ingredienti rispetto al prezzo di vendita del piatto", "La percentuale dello stipendio del personale sul costo totale", "La percentuale dell'affitto sul costo totale", "La spesa media per cliente"], answer: 0, explain: "食品成本率（food cost）是指食材成本占菜品售价的比例，是菜单定价时的重要参考指标之一，与员工工资、房租、顾客消费额是不同的概念。" },
    { id: "u8q2", q: "Cosa indica il «punto di pareggio»（盈亏平衡点）(break-even)?", options: ["Il livello di fatturato al quale i ricavi coprono esattamente tutti i costi", "Il livello di fatturato che massimizza il profitto", "L'incasso del primo giorno di apertura", "Il livello di massima soddisfazione del personale"], answer: 0, explain: "盈亏平衡点是财务分析中的基础概念，指收入正好等于全部成本（不亏不赚）时对应的营业额或销量水平，用于判断经营是否可持续。" },
    { id: "u8q3", q: "Cosa significa il principio FIFO（先进先出）(First In First Out) nella gestione del magazzino?", options: ["Le merci entrate per prime vengono utilizzate/uscite per prime, riducendo gli sprechi da scadenza", "Si usano prima le merci arrivate per ultime", "Tutte le merci si usano contemporaneamente, senza un ordine", "Si applica solo alle bevande alcoliche"], answer: 0, explain: "FIFO（先进先出）是库存轮换的基本原则，要求先入库的食材优先被使用，从而减少因存放过久导致的过期浪费，适用于各类食材和物资管理。" },
    { id: "u8q4", q: "Riguardo all'effetto delle recensioni online (ad esempio su Google) sull'attività, quale affermazione è più corretta?", options: ["Hanno un impatto significativo sull'affluenza; rispondere in modo tempestivo e professionale (soprattutto alle recensioni negative) è una buona pratica gestionale di base", "Non hanno alcun impatto reale, si possono ignorare", "Vale la pena rispondere solo alle recensioni a cinque stelle, quelle negative si possono ignorare", "Riguardano solo le grandi catene, non i piccoli locali indipendenti"], answer: 0, explain: "线上点评平台在当下对餐饮场所的客流有显著影响，及时且专业地回复顾客评价（尤其是负面评价）通常被视为基本的经营素养，不论门店规模大小都值得重视。" },
  ],
};

// ---------- 4. 徽章定义（用于成就系统） ----------
const BADGES = [
  { id: "first_lesson", icon: "📖", name: "初学者", desc: "完成第一个单元的课文学习" },
  { id: "all_lessons", icon: "🎓", name: "全能选手", desc: "完成全部8个单元的课文学习" },
  { id: "first_pass", icon: "✅", name: "小有所成", desc: "任意单元测试得分达到80%以上" },
  { id: "perfect_score", icon: "🏆", name: "满分王者", desc: "任意一次测试获得100%满分" },
  { id: "streak_3", icon: "🔥", name: "三天打卡", desc: "连续3天登录学习" },
  { id: "streak_7", icon: "🌟", name: "一周坚持", desc: "连续7天登录学习" },
  { id: "wrongbook_clear", icon: "🧹", name: "扫除错题", desc: "把错题本里的题目全部重新做对" },
  { id: "xp_500", icon: "💎", name: "积累500经验", desc: "累计获得500点经验值" },
];
