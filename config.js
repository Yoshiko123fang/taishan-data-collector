// ============================================================
//  数据回收网页端 —— 业务配置（你只需改这里）
//  采集端三大模块：① 基本资料  ② 实操任务（任务单·第二部分）
//                  ③ 调查问卷（任务单·第一、三部分）
//  所有内容均配置化：补充"实操六/七/八"只需在 tasks 里加一项，
//  前端表单、汇总表格、Excel、统计图会自动适配，采集地址不变。
// ============================================================

// 1) 基本资料：全部必填、无格式校验
//    type 可选：text | number | email | tel | date | select（select 需提供 options）
const basicInfoFields = [
  { key: 'name',   label: '姓名',     type: 'text', required: true },
  { key: 'school', label: '学校',     type: 'text', required: true },
  { key: 'subject',label: '任教学科', type: 'text', required: true },
  { key: 'grade',  label: '学段',     type: 'text', required: true },
  // 示例：{ key: 'phone', label: '联系电话', type: 'tel', required: false },
];

// 2) 实操任务（任务单·第二部分）
//    pending:true 表示"敬请期待（后续补充）"，前端只展示占位、不出反馈控件
//    images：{ src, caption }，src 指向 public/ 下的图片
//    resources：{ title, url, desc }，url 为空则不渲染链接
//    feedbackQuestion：每个实操环节末尾的反馈问题
const tasks = [
  {
    id: 't1',
    title: '实操一：两个基础工具 —— IMA 知识库 + WorkBuddy',
    intro: 'IMA 知识库是云端个人资料柜，教案、试卷存进去即可检索、可提问；WorkBuddy 能找资料、读文件、直接产出 Word 文档。两者联动：AI 检索资源 → 一键存入知识库。',
    steps: [
      '在 IMA 创建个人/小组知识库，把课件、教案、试卷等资料导入。',
      '用 WorkBuddy 检索网络资源、读取本地文件，直接生成 Word 文档。',
      '把 WorkBuddy 产出的内容回存 IMA 知识库，形成"检索→沉淀"闭环。',
    ],
    images: [],
    resources: [
      { title: 'IMA 知识库（腾讯）官网', url: 'https://ima.qq.com/', desc: '注册并创建知识库，导入多格式资料，基于知识库精准问答、生成教案与课件。' },
      { title: 'WorkBuddy（本机 AI 助手）', url: '', desc: '在本工作区打开 WorkBuddy，让它帮你检索资源、读取文件并直接生成 Word 文档。' },
    ],
    feedbackQuestion: '您是否能用起这两个工具，并实现"AI检索→存入知识库"的联动？',
  },
  {
    id: 't2',
    title: '实操二：一批现成技能（现场装三个最常用）',
    intro: '实操建议现场安装三个最常用技能：①出练习卷 ②班级成绩诊断 ③教案课件全家桶。',
    steps: [
      '① 出练习卷 —— 按粤教版新教材出随堂练习/单元卷，自动带答案解析。',
      '② 班级成绩诊断 —— 上传成绩表生成学情报告。',
      '③ 教案课件全家桶 —— 一份教案连带课件、作业一起出。',
    ],
    images: [],
    resources: [
      { title: '粤教版新教材资源（国家中小学智慧教育平台）', url: 'https://basic.smartedu.cn/', desc: '获取新教材课本、课件与习题参考，作为出题与备课依据。' },
      { title: 'WorkBuddy 技能安装', url: '', desc: '在 WorkBuddy 中按需安装"出练习卷 / 成绩诊断 / 教案课件全家桶"等技能（装不上举手求助）。' },
    ],
    feedbackQuestion: '您是否能完成"安装三个技能并产出一份练习卷或学情报告"？',
  },
  {
    id: 't3',
    title: '实操三：使用心法（素材喂得准，产出才好）',
    intro: '任务单上每步配一句"做什么＋怎么算完成"，老师们照着走不容易卡住。建议按三步走：',
    steps: [
      '① 注册登录 IMA 和 WorkBuddy。',
      '② 照清单装上面三个技能（装不上举手求助）。',
      '③ 以小组为单位，任选新教材一课，用工具产出一份练习卷或课件初稿，即为今日实操成果。',
    ],
    images: [],
    resources: [],
    feedbackQuestion: '您是否完成了"小组产出一份练习卷或课件初稿"的实操成果？',
  },
  {
    id: 't4',
    title: '实操四：结合 IMA 知识库完成教学设计',
    intro: '结合 ima 知识库《智慧教育》《国家中小学智慧教育平台（国平台）》，完成教学设计。',
    steps: [
      '① 定课题—定核心驱动任务—定项目任务—定每个任务的产物和评价标准—定课时（负责学科）【整体构想老师们心中有数】。',
      '② 用 AI 生成教学设计初稿—打磨设计框架—定教学环节—完善教学设计—补齐评价标准。',
    ],
    images: [
      { src: 'task_images/img1.png', caption: '教学设计参考图 1' },
      { src: 'task_images/img2.png', caption: '教学设计参考图 2' },
      { src: 'task_images/img3.png', caption: '教学设计参考图 3' },
      { src: 'task_images/img4.png', caption: '教学设计参考图 4' },
    ],
    resources: [
      { title: '国家中小学智慧教育平台（国平台）', url: 'https://basic.smartedu.cn/', desc: '调取平台课程、教材与教研资源，作为教学设计素材来源。' },
      { title: 'IMA 知识库（腾讯）', url: 'https://ima.qq.com/', desc: '将《智慧教育》《国平台》资料存入知识库，基于知识库生成教学设计初稿。' },
    ],
    feedbackQuestion: '您是否能完成本环节的教学设计（含定课题与 AI 初稿打磨）？',
  },
  {
    id: 't5',
    title: '实操五：利用 Kimi + draw.io 生成教学流程图',
    intro: '先找一张技术样图，给到 Kimi（豆包、元宝等大语言模型），通过三次对话拆解→提炼→复刻，最终导出 draw.io 可导入的 XML，生成标准教学流程图。',
    steps: [
      '第一次对话【拆解】：拆解此教学流程图的框架结构和研究逻辑，详细到所有模块的内容逻辑、文本/数字/样式/颜色、各模块和线条之间的连接设计，以便后面对照复刻同款流程图。',
      '第二次对话【提炼】：根据流程图逻辑与模块关系，深度阅读附件教学设计内容，逐一拆解提炼出无损干净的文字，所有模块与上一步框架严格对应，便于直接复制。',
      '第三次对话【复刻】：保持原结构不变，按解析文字填入流程图合适位置，以可导入 draw.io 代码生成器的 XML 格式导出。',
    ],
    images: [
      { src: 'task_images/img5.png', caption: '技术样图参考（给到 Kimi 的参照图）' },
      { src: 'task_images/img6.png', caption: 'draw.io 产出示例 / XML 导出示意' },
    ],
    resources: [
      { title: 'Kimi 智能助手', url: 'https://kimi.moonshot.cn/', desc: '用大模型拆解流程图框架、提炼文字、生成可导入 draw.io 的 XML 代码。' },
      { title: 'draw.io 在线绘图', url: 'https://app.diagrams.net/', desc: '导入 .drawio 文件、粘贴 Mermaid 或 XML，查看、编辑并导出教学流程图。' },
      { title: '导入步骤', url: '', desc: '访问 app.diagrams.net → 文件 → 打开来自 → 设备 → 选择下载的 .drawio 文件，即可查看、编辑和导出。' },
    ],
    feedbackQuestion: '您是否能用 Kimi + draw.io 生成一张本学科的教学流程图？',
  },
  // —— 以下为"敬请期待"环节，补充内容时把 pending 改为 false 并填好字段即可 ——
  { id: 't6', title: '实操六：用 WorkBuddy 生成 skill', pending: true, note: '（内容后续补充）' },
  { id: 't7', title: '实操七：用飞象老师实现数据回收', pending: true, note: '（内容后续补充）' },
  { id: 't8', title: '实操八：评课反馈（用 WorkBuddy 中张伟春教授给的评课 skill）', pending: true, note: '（内容后续补充）' },
];

// 3) 调查问卷（任务单·第一、三部分）
//    type: single=单选 / multi=多选 / text=填空（问答）
//    section: 用于在前端分组展示的标题
//    max: 多选最多可选数量（可选）
const questionnaire = [
  // —— 第一部分：使用情况调查 ——
  { id: 'q_intent',  type: 'single', section: '一、调查问卷（使用情况）', question: '是否有意向参加国家智慧教育平台全面深化应用教师数字素养提升实践活动？', options: ['是', '否'] },
  { id: 'q_intent_topic', type: 'text', section: '一、调查问卷（使用情况）', question: '若选"是"，您是否已构思案例主题？' },
  { id: 'q_freq', type: 'single', section: '一、调查问卷（使用情况）', question: '您目前使用国家中小学智慧教育平台的频率？', options: ['每天多次', '每周3-5次', '每周1-2次', '每月1-2次', '从未使用'] },
  { id: 'q_func', type: 'multi', section: '一、调查问卷（使用情况）', question: '您目前主要使用平台的哪些功能？（可多选）', options: ['课程教学(备课资源、课件、教案、微课)', '教师研修(培训课程、讲座、教研活动)', '自主学习(布置任务、学生自主观看)', '跨校教研(跨校跨区域教研、集体备课、听评课)', '课后服务(科普、文体、艺术活动)', '家校交流(家校沟通、通知发布、学情反馈)', '作业活动(布置、批改、分析作业、在线测验)', '学情分析(学习数据、参与度、作业完成报告)', '协同管理(班级管理、课表安排、资源库共建)', '未使用具体功能(仅登录浏览)'] },
  { id: 'q_satisfy', type: 'single', section: '一、调查问卷（使用情况）', question: '您对平台资源的满意程度？', options: ['非常满意', '比较满意', '一般', '不太满意', '很不满意'] },
  { id: 'q_ai_knowledge', type: 'single', section: '一、调查问卷（使用情况）', question: '您对生成式人工智能的了解程度？', options: ['非常熟悉，经常使用', '比较熟悉，偶尔使用', '听说过，但很少使用', '仅听说名字，未用过', '完全不知道'] },
  { id: 'q_ai_tools', type: 'multi', section: '一、调查问卷（使用情况）', question: '您使用过哪些 AI 教学工具？（可多选）', options: ['智能备课助手(自动生成教案/课件)', '课堂互动工具', '学情诊断与个性化学习推荐工具', '教学视频分析/课堂行为分析工具', '智能批改/作业分析系统', '从未使用过任何AI教学工具'] },
  { id: 'q_ai_purpose', type: 'multi', section: '一、调查问卷（使用情况）', question: '您使用 AI 工具的主要目的是？（可多选）', options: ['提高备课效率', '丰富课堂互动形式', '获取教学资源推荐', '精准分析学情、调整教学策略', '用于个人专业学习', '减轻作业批改负担'] },
  { id: 'q_ai_difficulty', type: 'multi', section: '一、调查问卷（使用情况）', question: '目前您运用 AI 辅助教学的最大困难是？（可多选）', options: ['缺乏结合学科教学的案例参考', '学校硬件或网络条件不支持', '认为AI生成的内容不准确/不可靠', '对AI工具不了解,不会操作', '担心数据隐私或伦理问题', '其他'] },

  // —— 第三部分：培训反馈 ——
  { id: 'q_help', type: 'multi', section: '三、培训反馈', question: '本次培训对您最有帮助的内容是？（最多选3项）', max: 3, options: ['平台功能与资源应用', 'AI工具操作技能', '学科融合课例示范', '基于数据的学情分析与精准教学', '伦理规范与内容可靠性核验', '协同教研与课例打磨', '其他'] },
  { id: 'q_help_degree', type: 'single', section: '三、培训反馈', question: '本次培训对您数字素养提升的帮助程度？', options: ['帮助很大', '有一定帮助', '帮助一般', '帮助不大', '没有帮助'] },
  { id: 'q_support', type: 'multi', section: '三、培训反馈', question: '您目前最希望继续获得的支持是？（可多选）', options: ['"平台+AI"融合教学的优秀课例与设计方法', '平台与AI工具的操作技能培训', '基于数据的学情分析与精准教学策略', '个性化、按需推送的学习资源与路径', '专家引领的理论学习与课题研究指导', '跨校/跨区域的协同教研与同伴互助'] },
  { id: 'q_harvest', type: 'text', section: '三、培训反馈', question: '参加本次培训后，您最大的收获是什么？目前还存在哪些困惑或需要支持的地方？' },
];

// 4) 成果文档上传（实操任务环节可提交 Word / PDF）
const taskDoc = {
  accept: '.doc,.docx,.pdf',
  maxFiles: 10,
  maxSizeMB: 20,
};

module.exports = { basicInfoFields, tasks, questionnaire, taskDoc };
