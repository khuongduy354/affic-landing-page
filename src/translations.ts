export type Language = "en" | "vi";

export const translations = {
  // Navigation
  nav: {
    product: { en: "Product", vi: "Sản phẩm" },
    useCases: { en: "Use Cases", vi: "Ứng dụng" },
    pricing: { en: "Pricing", vi: "Bảng giá" },
    faq: { en: "FAQ", vi: "Hỏi đáp" },
    bookDemo: { en: "Book a Free Demo", vi: "Đặt lịch Demo miễn phí" },
  },

  // Hero
  hero: {
    headlinePre: { en: "AI automation that actually", vi: "Tự động hóa AI thực sự" },
    words: {
      en: ["works.", "scales.", "delivers."],
      vi: ["hiệu quả.", "mở rộng.", "tối ưu."],
    },
    longestWord: { en: "delivers.", vi: "hiệu quả." },
    subtitle: {
      en: "Build collaborative AI teams that think, talk, and work together. Deploy your own AI departments in minutes — no code required.",
      vi: "Xây dựng đội ngũ AI cộng tác — suy nghĩ, giao tiếp và phối hợp cùng nhau. Triển khai phòng ban AI riêng trong vài phút — không cần lập trình.",
    },
    bookDemo: { en: "Book a Free Demo", vi: "Đặt lịch Demo miễn phí" },
    seeUseCases: { en: "See Use Cases", vi: "Xem ứng dụng" },
    tabs: [
      {
        name: { en: "Growth Engine", vi: "Tăng trưởng" },
        description: {
          en: "Automate lead generation, qualification, and nurturing to scale your business effortlessly.",
          vi: "Tự động hóa tạo lead, đánh giá và chăm sóc khách hàng để mở rộng kinh doanh dễ dàng.",
        },
      },
      {
        name: { en: "Content Factory", vi: "Nhà máy nội dung" },
        description: {
          en: "Generate, optimize, and distribute content across all channels with AI-powered workflows.",
          vi: "Tạo, tối ưu và phân phối nội dung trên mọi kênh với quy trình AI tự động.",
        },
      },
      {
        name: { en: "Sales Autopilot", vi: "Bán hàng tự động" },
        description: {
          en: "Close deals faster with intelligent prospecting and follow-up automation.",
          vi: "Chốt deal nhanh hơn với hệ thống tìm kiếm và theo dõi khách hàng thông minh.",
        },
      },
      {
        name: { en: "Operations Hub", vi: "Trung tâm vận hành" },
        description: {
          en: "Streamline internal processes, scheduling, and team coordination automatically.",
          vi: "Tối ưu quy trình nội bộ, lịch trình và phối hợp nhóm tự động.",
        },
      },
      {
        name: { en: "Media Manager", vi: "Quản lý truyền thông" },
        description: {
          en: "Coordinate multi-channel campaigns with AI agents working in perfect harmony.",
          vi: "Phối hợp chiến dịch đa kênh với các AI agent hoạt động đồng bộ hoàn hảo.",
        },
      },
    ],
    dashboard: { en: "Dashboard", vi: "Bảng điều khiển" },
    trigger: { en: "TRIGGER", vi: "KÍCH HOẠT" },
    newEvent: { en: "New Event", vi: "Sự kiện mới" },
    process: { en: "PROCESS", vi: "XỬ LÝ" },
    aiAgent: { en: "AI Agent", vi: "AI Agent" },
    action: { en: "ACTION", vi: "HÀNH ĐỘNG" },
    execute: { en: "Execute", vi: "Thực thi" },
    agentsActive: { en: "3 agents active", vi: "3 agent đang hoạt động" },
    allRunning: { en: "All systems running", vi: "Tất cả hệ thống đang chạy" },
  },

  // Stats
  stats: {
    labels: [
      { en: "Average email open rate", vi: "Tỷ lệ mở email trung bình" },
      { en: "Flights processed daily", vi: "Chuyến bay xử lý mỗi ngày" },
      { en: "Autonomous operation", vi: "Vận hành tự động" },
      { en: "Cost reduction", vi: "Giảm chi phí" },
    ],
  },

  // Problem Section
  problem: {
    title: { en: "Why Most AI Automation Fails", vi: "Tại sao hầu hết AI Automation thất bại" },
    cards: [
      {
        title: { en: "Disconnected Tools", vi: "Công cụ rời rạc" },
        description: {
          en: "You're juggling multiple AI tools that don't talk to each other. One API change breaks the entire chain, and you're stuck debugging instead of growing.",
          vi: "Bạn đang sử dụng nhiều công cụ AI không kết nối với nhau. Một thay đổi API phá vỡ toàn bộ chuỗi, và bạn phải sửa lỗi thay vì phát triển.",
        },
      },
      {
        title: { en: "No Real Visibility", vi: "Không có khả năng giám sát" },
        description: {
          en: "Your automations 'silently fail' and you only find out when a client complains. There's no dashboard, no alerts — just hope that things are still running.",
          vi: "Automation của bạn 'âm thầm lỗi' và bạn chỉ biết khi khách hàng phàn nàn. Không dashboard, không cảnh báo — chỉ hy vọng mọi thứ vẫn chạy.",
        },
      },
      {
        title: { en: "Requires Technical Expertise", vi: "Đòi hỏi kỹ thuật chuyên sâu" },
        description: {
          en: "Building reliable automation still means dealing with node errors, API limits, and complex integrations. It shouldn't take a developer to automate a workflow.",
          vi: "Xây dựng automation đáng tin cậy vẫn phải đối mặt với lỗi node, giới hạn API và tích hợp phức tạp. Không cần developer để tự động hóa quy trình.",
        },
      },
    ],
  },

  // Solution Section
  solution: {
    title: { en: "How Affic AI Solves This", vi: "Affic AI giải quyết vấn đề này như thế nào" },
    subtitle: {
      en: "Our Agent-to-Agent (A2A) technology lets your AI agents communicate, share context, and collaborate — like a real team.",
      vi: "Công nghệ Agent-to-Agent (A2A) cho phép các AI agent giao tiếp, chia sẻ ngữ cảnh và cộng tác — như một đội ngũ thật.",
    },
    features: [
      {
        title: { en: "One Connected System", vi: "Một hệ thống liên kết" },
        description: {
          en: "All your AI agents work in one ecosystem. They share data, pass tasks, and coordinate automatically — no manual glue code needed.",
          vi: "Tất cả AI agent hoạt động trong một hệ sinh thái. Chia sẻ dữ liệu, chuyển giao tác vụ và phối hợp tự động — không cần code kết nối thủ công.",
        },
      },
      {
        title: { en: "Self-Healing Workflows", vi: "Quy trình tự phục hồi" },
        description: {
          en: "Built-in monitoring catches errors before you do. Agents auto-retry, self-correct, and alert you only when human input is truly needed.",
          vi: "Giám sát tích hợp phát hiện lỗi trước bạn. Agent tự retry, tự sửa, và chỉ thông báo khi thực sự cần con người.",
        },
      },
      {
        title: { en: "No-Code Deployment", vi: "Triển khai không cần code" },
        description: {
          en: "Pick a department, customize your settings, and deploy. Your AI team is live in minutes — zero technical skills required.",
          vi: "Chọn phòng ban, tùy chỉnh cài đặt và triển khai. Đội AI của bạn sẵn sàng trong vài phút — không cần kỹ năng kỹ thuật.",
        },
      },
    ],
    visuals: {
      ready: { en: "Ready", vi: "Sẵn sàng" },
      running: { en: "Running", vi: "Đang chạy" },
      stable: { en: "Stable", vi: "Ổn định" },
      healthy: { en: "85% Healthy", vi: "85% Khỏe mạnh" },
      select: { en: "Select", vi: "Chọn" },
      configure: { en: "Configure", vi: "Cấu hình" },
      deploy: { en: "Deploy", vi: "Triển khai" },
    },
  },

  // Portfolio Section
  portfolio: {
    title1: { en: "Real Results.", vi: "Kết quả thật." },
    title2: { en: "Real Clients.", vi: "Khách hàng thật." },
    subtitle: {
      en: "From aviation giants to global e-commerce leaders — here's how our Agentic AI systems are already transforming businesses.",
      vi: "Từ các tập đoàn hàng không đến những nhà lãnh đạo thương mại điện tử toàn cầu — đây là cách hệ thống Agentic AI của chúng tôi đang chuyển đổi doanh nghiệp.",
    },
    theChallenge: { en: "The Challenge", vi: "Thách thức" },
    ourSolution: { en: "Our Solution", vi: "Giải pháp" },
    keyResults: { en: "Key Results", vi: "Kết quả chính" },
    items: [
      {
        category: { en: "Operations", vi: "Vận hành" },
        title: { en: "Flight Data Processing & Strategic Reporting", vi: "Xử lý dữ liệu chuyến bay & Báo cáo chiến lược" },
        client: { en: "ACV — Vietnam Airports Corporation", vi: "ACV — Tổng công ty Cảng hàng không Việt Nam" },
        description: {
          en: "Agentic AI system that fully automates flight data processing, Excel reporting, and self-QA — replacing manual work from 3 full-time analysts.",
          vi: "Hệ thống Agentic AI tự động hóa hoàn toàn xử lý dữ liệu chuyến bay, báo cáo Excel và tự kiểm tra — thay thế công việc thủ công của 3 nhân viên phân tích.",
        },
        challenge: {
          en: "ACV processes 100-200 flights daily across international and domestic routes. Three full-time data analysts spent days manually compiling Excel reports for leadership — with zero tolerance for errors in strategic decisions.",
          vi: "ACV xử lý 100-200 chuyến bay mỗi ngày trên các tuyến quốc tế và nội địa. Ba nhân viên phân tích toàn thời gian mất nhiều ngày để tổng hợp báo cáo Excel cho ban lãnh đạo — không chấp nhận sai sót trong các quyết định chiến lược.",
        },
        solution: {
          en: "Built a Multi-Agentic AI system with a Supervisory Agent that orchestrates data extraction, report generation, and automated QA. A self-healing mechanism cross-checks outputs against source data and auto-corrects until 100% accuracy. Controlled entirely via Telegram chat.",
          vi: "Xây dựng hệ thống Multi-Agentic AI với Agent giám sát điều phối trích xuất dữ liệu, tạo báo cáo và QA tự động. Cơ chế tự phục hồi kiểm tra chéo kết quả với dữ liệu nguồn và tự sửa cho đến khi đạt 100% chính xác. Điều khiển hoàn toàn qua Telegram.",
        },
        metrics: [
          { value: "100%", label: { en: "Automation", vi: "Tự động hóa" } },
          { value: "200", label: { en: "Flights/Day", vi: "Chuyến/Ngày" } },
          { value: "3", label: { en: "Analysts Replaced", vi: "Nhân sự thay thế" } },
        ],
      },
      {
        category: { en: "Operations", vi: "Vận hành" },
        title: { en: "Google Review Management & Insights", vi: "Quản lý đánh giá Google & Phân tích" },
        client: { en: "Auberge du Dragon Rouge & Skyethgroup", vi: "Auberge du Dragon Rouge & Skyethgroup" },
        description: {
          en: "AI-powered system that auto-responds to Google reviews with brand-consistent replies and generates weekly staff performance reports.",
          vi: "Hệ thống AI tự động phản hồi đánh giá Google theo giọng thương hiệu và tạo báo cáo hiệu suất nhân viên hàng tuần.",
        },
        challenge: {
          en: "Multi-location F&B chains struggled to maintain brand voice across hundreds of Google reviews while extracting actionable operational insights for staff coaching and service improvements.",
          vi: "Chuỗi F&B đa chi nhánh gặp khó khăn trong việc duy trì giọng thương hiệu trên hàng trăm đánh giá Google, đồng thời trích xuất insight vận hành để đào tạo nhân viên và cải thiện dịch vụ.",
        },
        solution: {
          en: "Deployed an AI review responder trained on each brand's tone and guidelines, generating contextual replies in real-time. A parallel analytics engine produces weekly performance reports with staff-level insights and trend analysis.",
          vi: "Triển khai AI phản hồi đánh giá được huấn luyện theo giọng điệu và quy chuẩn từng thương hiệu, tạo phản hồi theo ngữ cảnh real-time. Engine phân tích song song tạo báo cáo hiệu suất hàng tuần với insight cấp nhân viên và phân tích xu hướng.",
        },
        metrics: [
          { value: "Real-time", label: { en: "Responses", vi: "Phản hồi" } },
          { value: "Multi", label: { en: "Locations", vi: "Chi nhánh" } },
          { value: "Weekly", label: { en: "AI Insights", vi: "Phân tích AI" } },
        ],
      },
      {
        category: { en: "Sales / CRM", vi: "Bán hàng / CRM" },
        title: { en: "WhatsApp AI Agent + Bitrix24 CRM", vi: "AI Agent WhatsApp + Bitrix24 CRM" },
        client: { en: "MarketBloom & Globe Life Insurance", vi: "MarketBloom & Globe Life Insurance" },
        description: {
          en: "Pre-sales AI agent that handles outbound WhatsApp conversations, qualifies leads, and syncs everything to Bitrix24 CRM automatically.",
          vi: "AI agent tiền bán hàng xử lý hội thoại WhatsApp outbound, đánh giá lead và đồng bộ mọi thứ lên Bitrix24 CRM tự động.",
        },
        challenge: {
          en: "Sales teams were manually copy-pasting messages to hundreds of WhatsApp leads daily. Lead qualification was inconsistent, and CRM updates lagged behind actual conversations — causing lost deals.",
          vi: "Đội sales phải copy-paste tin nhắn thủ công cho hàng trăm lead WhatsApp mỗi ngày. Đánh giá lead không nhất quán, cập nhật CRM chậm trễ so với hội thoại thực — gây mất deal.",
        },
        solution: {
          en: "Built a conversational AI agent integrated with WhatsApp API that handles natural dialogue, scores leads by intent signals, and auto-syncs summaries, tags, and follow-up tasks directly into Bitrix24 CRM in real-time.",
          vi: "Xây dựng AI agent hội thoại tích hợp WhatsApp API, xử lý đối thoại tự nhiên, chấm điểm lead theo tín hiệu ý định, và tự động đồng bộ tóm tắt, tag và tác vụ follow-up trực tiếp vào Bitrix24 CRM real-time.",
        },
        metrics: [
          { value: "500+", label: { en: "Chats/Day", vi: "Tin nhắn/Ngày" } },
          { value: "2-3%", label: { en: "Conversion Lift", vi: "Tăng chuyển đổi" } },
          { value: "24/7", label: { en: "Active", vi: "Hoạt động" } },
        ],
      },
      {
        category: { en: "Sales B2B", vi: "Bán hàng B2B" },
        title: { en: "Cold Email Outreach with Hyper-Personalization", vi: "Email tiếp cận lạnh siêu cá nhân hóa" },
        client: { en: "Salman Baig — Head of SEO @ Alibaba Group", vi: "Salman Baig — Trưởng phòng SEO @ Alibaba Group" },
        description: {
          en: "Agentic system that scrapes prospect websites, identifies pain points, writes personalized emails, and self-optimizes campaigns via A/B testing.",
          vi: "Hệ thống Agentic thu thập dữ liệu website khách hàng tiềm năng, xác định pain point, viết email cá nhân hóa và tự tối ưu chiến dịch qua A/B testing.",
        },
        challenge: {
          en: "Selling high-ticket Technical SEO services via cold email meant competing against generic templates that B2B buyers immediately ignore. Email verification tools and copywriting added massive ongoing costs.",
          vi: "Bán dịch vụ Technical SEO cao cấp qua cold email nghĩa là phải cạnh tranh với các template chung chung mà người mua B2B bỏ qua ngay. Công cụ xác minh email và viết nội dung tạo chi phí lớn liên tục.",
        },
        solution: {
          en: "Created an agentic pipeline that scrapes prospect websites for real pain points, generates hyper-personalized email sequences, and self-optimizes via A/B testing. A zero-cost verification engine monitors Gmail bounces to keep lists clean without third-party API fees.",
          vi: "Tạo pipeline agentic thu thập pain point thực từ website khách hàng tiềm năng, tạo chuỗi email siêu cá nhân hóa, và tự tối ưu qua A/B testing. Engine xác minh zero-cost theo dõi Gmail bounce để giữ danh sách sạch mà không cần API bên thứ ba.",
        },
        metrics: [
          { value: "70%", label: { en: "Open Rate", vi: "Tỷ lệ mở" } },
          { value: "4%", label: { en: "Reply Rate", vi: "Tỷ lệ phản hồi" } },
          { value: "80%", label: { en: "Cost Reduction", vi: "Giảm chi phí" } },
        ],
      },
      {
        category: { en: "Content", vi: "Nội dung" },
        title: { en: "AI Video Production & Distribution", vi: "Sản xuất & Phân phối video AI" },
        client: { en: "Globe Life Insurance", vi: "Globe Life Insurance" },
        description: {
          en: "End-to-end automated pipeline that generates sales videos and distributes them across Instagram — from script to publish, zero manual effort.",
          vi: "Pipeline tự động từ đầu đến cuối tạo video bán hàng và phân phối trên Instagram — từ kịch bản đến xuất bản, không cần thao tác thủ công.",
        },
        challenge: {
          en: "Creating daily sales video content required coordinating scriptwriters, editors, and social media managers — an expensive, slow process that couldn't scale for consistent daily publishing.",
          vi: "Tạo video bán hàng hàng ngày đòi hỏi phối hợp biên kịch, editor và quản lý mạng xã hội — quy trình tốn kém, chậm chạp và không thể mở rộng cho xuất bản hàng ngày.",
        },
        solution: {
          en: "Engineered a fully automated pipeline: AI generates scripts from product data, produces video assets, and publishes directly to Instagram on schedule. The entire workflow from concept to live post runs with zero human intervention.",
          vi: "Xây dựng pipeline tự động hoàn toàn: AI tạo kịch bản từ dữ liệu sản phẩm, sản xuất video và xuất bản trực tiếp lên Instagram theo lịch. Toàn bộ quy trình từ ý tưởng đến bài đăng hoạt động không cần con người.",
        },
        metrics: [
          { value: "Fully", label: { en: "Automated", vi: "Tự động" } },
          { value: "Script→Post", label: { en: "Pipeline", vi: "Quy trình" } },
          { value: "Daily", label: { en: "Output", vi: "Sản lượng" } },
        ],
      },
      {
        category: { en: "Content", vi: "Nội dung" },
        title: { en: "LinkedIn Content Automation", vi: "Tự động hóa nội dung LinkedIn" },
        client: { en: "Railsafe Balustrading — CEO Steven Poole", vi: "Railsafe Balustrading — CEO Steven Poole" },
        description: {
          en: "AI system that researches industry trends, writes authority-building LinkedIn posts, and publishes on schedule to grow the CEO's personal brand.",
          vi: "Hệ thống AI nghiên cứu xu hướng ngành, viết bài LinkedIn xây dựng uy tín và xuất bản theo lịch để phát triển thương hiệu cá nhân CEO.",
        },
        challenge: {
          en: "The CEO wanted to build thought leadership on LinkedIn but couldn't dedicate hours weekly to research trends, craft posts, and maintain a consistent publishing schedule alongside running the business.",
          vi: "CEO muốn xây dựng thought leadership trên LinkedIn nhưng không thể dành hàng giờ mỗi tuần để nghiên cứu xu hướng, viết bài và duy trì lịch xuất bản đều đặn bên cạnh việc điều hành doanh nghiệp.",
        },
        solution: {
          en: "Built an AI content engine that researches B2B industry trends, generates authority-building posts matching the CEO's voice, and publishes on a managed schedule. Engagement increased 20-50% with zero manual effort.",
          vi: "Xây dựng engine nội dung AI nghiên cứu xu hướng B2B, tạo bài viết xây dựng uy tín phù hợp giọng CEO, và xuất bản theo lịch quản lý. Tương tác tăng 20-50% mà không cần thao tác thủ công.",
        },
        metrics: [
          { value: "20-50%", label: { en: "Engagement Lift", vi: "Tăng tương tác" } },
          { value: "Auto", label: { en: "Research", vi: "Nghiên cứu" } },
          { value: "Scheduled", label: { en: "Publishing", vi: "Xuất bản" } },
        ],
      },
      {
        category: { en: "Content", vi: "Nội dung" },
        title: { en: "AI Blog SEO & Dynamic Layout Management", vi: "SEO Blog AI & Quản lý bố cục động" },
        client: { en: "Multikraft Australia — Biotech / Agriculture", vi: "Multikraft Australia — Công nghệ sinh học / Nông nghiệp" },
        description: {
          en: "Automated SEO blog pipeline that researches keywords, writes optimized articles, and manages dynamic page layouts for organic growth.",
          vi: "Pipeline blog SEO tự động nghiên cứu từ khóa, viết bài tối ưu và quản lý bố cục trang động cho tăng trưởng organic.",
        },
        challenge: {
          en: "A biotech company needed consistent, high-quality SEO content but lacked in-house copywriters, SEO specialists, or designers. Manual blog production was too slow to compete for organic search rankings.",
          vi: "Công ty biotech cần nội dung SEO chất lượng cao đều đặn nhưng thiếu copywriter, chuyên gia SEO và designer nội bộ. Sản xuất blog thủ công quá chậm để cạnh tranh thứ hạng tìm kiếm organic.",
        },
        solution: {
          en: "Deployed a full AI content pipeline: keyword research, SEO-optimized article generation, intelligent image selection, and dynamic page layout management. Each post looks hand-crafted by a professional editor — published automatically 24/7.",
          vi: "Triển khai pipeline nội dung AI toàn diện: nghiên cứu từ khóa, tạo bài viết tối ưu SEO, chọn hình ảnh thông minh và quản lý bố cục trang động. Mỗi bài viết trông như được biên tập chuyên nghiệp — xuất bản tự động 24/7.",
        },
        metrics: [
          { value: "SEO", label: { en: "Optimized", vi: "Tối ưu" } },
          { value: "Auto", label: { en: "Published", vi: "Xuất bản" } },
          { value: "80%", label: { en: "Cost Savings", vi: "Tiết kiệm" } },
        ],
      },
      {
        category: { en: "Marketing", vi: "Marketing" },
        title: { en: "Omni-Channel Social Media Intelligence", vi: "Phân tích truyền thông đa kênh" },
        client: { en: "Affic AI — Internal R&D Tool", vi: "Affic AI — Công cụ R&D nội bộ" },
        description: {
          en: "Deep research tool that mines Facebook Ads, YouTube transcripts, and Reddit threads to extract structured competitive intelligence as JSON.",
          vi: "Công cụ nghiên cứu sâu khai thác Facebook Ads, phụ đề YouTube và bài viết Reddit để trích xuất thông tin cạnh tranh có cấu trúc dạng JSON.",
        },
        challenge: {
          en: "Competitive research across multiple social platforms was fragmented and manual — analysts spent hours jumping between Facebook Ads Library, YouTube, and Reddit to piece together market intelligence.",
          vi: "Nghiên cứu cạnh tranh trên nhiều nền tảng xã hội bị phân mảnh và thủ công — nhân viên phân tích mất hàng giờ chuyển đổi giữa Facebook Ads Library, YouTube và Reddit để tổng hợp thông tin thị trường.",
        },
        solution: {
          en: "Built an omni-channel deep research tool that automatically mines Facebook Ads, extracts YouTube transcript insights, and scrapes Reddit threads — outputting perfectly structured JSON that feeds directly into other AI agents for content, strategy, and analysis.",
          vi: "Xây dựng công cụ nghiên cứu sâu đa kênh tự động khai thác Facebook Ads, trích xuất insight từ phụ đề YouTube và thu thập Reddit — xuất JSON có cấu trúc hoàn chỉnh cung cấp trực tiếp cho các AI agent khác phục vụ nội dung, chiến lược và phân tích.",
        },
        metrics: [
          { value: "Multi", label: { en: "Platform", vi: "Nền tảng" } },
          { value: "JSON", label: { en: "Structured Output", vi: "Đầu ra có cấu trúc" } },
          { value: "Real-time", label: { en: "Intelligence", vi: "Phân tích" } },
        ],
      },
    ],
  },

  // CTA Section
  cta: {
    title: { en: "Get in", vi: "Tham gia" },
    titleHighlight: { en: "Early", vi: "Sớm" },
    paragraph1: {
      en: "We're building collaborative AI squads",
      vi: "Chúng tôi đang xây dựng đội ngũ AI cộng tác",
    },
    paragraph1Bold: {
      en: "that think, talk, and work together.",
      vi: "biết suy nghĩ, giao tiếp và phối hợp cùng nhau.",
    },
    paragraph2Pre: {
      en: "This early access program is designed for leaders who want to",
      vi: "Chương trình truy cập sớm dành cho những nhà lãnh đạo muốn",
    },
    paragraph2Bold: {
      en: "move fast, test early, and shape the next generation",
      vi: "hành động nhanh, thử nghiệm sớm và định hình thế hệ tiếp theo",
    },
    paragraph2Post: {
      en: "of intelligent automation.",
      vi: "của tự động hóa thông minh.",
    },
    benefitsTitle: {
      en: "When you pre-order, you'll get:",
      vi: "Khi đặt trước, bạn sẽ nhận được:",
    },
    benefits: [
      {
        en: { pre: "A ", bold: "1-on-1 strategy session", post: " with a Top 10% AI Automation Expert." },
        vi: { pre: "", bold: "Tư vấn chiến lược 1-1", post: " với chuyên gia AI Automation Top 10%." },
      },
      {
        en: { pre: "", bold: "Early access", post: " before public launch." },
        vi: { pre: "", bold: "Quyền truy cập sớm", post: " trước khi ra mắt công khai." },
      },
      {
        en: { pre: "", bold: "Full access", post: " to all available A2A Departments at launch." },
        vi: { pre: "", bold: "Truy cập toàn bộ", post: " các phòng ban A2A khi ra mắt." },
      },
      {
        en: { pre: "A ", bold: "done-for-you setup", post: " so your AI Departments run smoothly." },
        vi: { pre: "", bold: "Thiết lập trọn gói", post: " để phòng ban AI của bạn chạy mượt mà." },
      },
      {
        en: { pre: "", bold: "Dedicated support", post: " from our experts." },
        vi: { pre: "", bold: "Hỗ trợ chuyên biệt", post: " từ đội ngũ chuyên gia." },
      },
    ],
    preOrderFull: { en: "PRE-ORDER NOW - Get 10% OFF at Launch", vi: "ĐẶT TRƯỚC NGAY - Giảm 10% khi ra mắt" },
    preOrderShort: { en: "PRE-ORDER - 10% OFF", vi: "ĐẶT TRƯỚC - GIẢM 10%" },
    orBook: { en: "...or", vi: "...hoặc" },
    bookDemo: { en: "book a 30-minute demo", vi: "đặt lịch demo 30 phút" },
    toSee: { en: "to see how it works first.", vi: "để xem cách hoạt động trước." },
    modalTitle: { en: "Claim Your Pre-Order Discount", vi: "Nhận ưu đãi đặt trước" },
    modalDesc: {
      en: "Enter your email to secure your 10% off founder price. We'll notify you on launch day.",
      vi: "Nhập email để nhận giá ưu đãi founder giảm 10%. Chúng tôi sẽ thông báo khi ra mắt.",
    },
    submitBtn: { en: "Submit & Claim Discount", vi: "Gửi & Nhận ưu đãi" },
    emailError: { en: "Please enter a valid email address.", vi: "Vui lòng nhập email hợp lệ." },
    thankYou: { en: "Thank You!", vi: "Cảm ơn bạn!" },
    successMsg: {
      en: "Your pre-order is confirmed! We've sent the 10% discount code to your inbox. Welcome to the future of A2A.",
      vi: "Đặt trước thành công! Chúng tôi đã gửi mã giảm giá 10% vào inbox của bạn. Chào mừng đến với tương lai của A2A.",
    },
    close: { en: "Close", vi: "Đóng" },
  },

  // FAQ Section
  faq: {
    title: { en: "Frequently Asked Questions", vi: "Câu hỏi thường gặp" },
    items: [
      {
        question: { en: "What is A2A?", vi: "A2A là gì?" },
        answer: {
          en: "A2A stands for Agent-to-Agent. Our breakthrough system that lets AI agents talk, share data, and work together automatically. You don't need to code or connect anything yourself. Just plug in your department, and they start working in sync.",
          vi: "A2A là viết tắt của Agent-to-Agent. Hệ thống đột phá cho phép các AI agent giao tiếp, chia sẻ dữ liệu và phối hợp tự động. Bạn không cần lập trình hay kết nối gì cả. Chỉ cần cắm phòng ban vào, và chúng bắt đầu làm việc đồng bộ.",
        },
      },
      {
        question: {
          en: "My business is unique. Will your templates work for me?",
          vi: "Doanh nghiệp tôi có đặc thù riêng. Template của bạn có phù hợp không?",
        },
        answer: {
          en: "Absolutely. We don't do cookie-cutter automation. We give you a proven, no-code framework that handles 80% of the heavy lifting. Then we customize the final 20% so it fits your exact workflows without you touching a single line of code. No more \"edge case\" disasters or broken automations.",
          vi: "Chắc chắn. Chúng tôi không làm automation rập khuôn. Chúng tôi cung cấp framework no-code đã được chứng minh, xử lý 80% công việc nặng. Sau đó tùy chỉnh 20% còn lại cho phù hợp chính xác quy trình của bạn — không cần viết một dòng code nào.",
        },
      },
      {
        question: {
          en: "Will I lose control of my AI business?",
          vi: "Tôi có mất quyền kiểm soát không?",
        },
        answer: {
          en: "Not at all. You get a simple, no-code dashboard where you can see everything — every step, every result. You stay in control. Your AI team just takes care of the boring, repetitive work while you focus on strategy.",
          vi: "Hoàn toàn không. Bạn có dashboard no-code đơn giản để xem mọi thứ — từng bước, từng kết quả. Bạn luôn kiểm soát. Đội AI chỉ lo phần công việc nhàm chán, lặp đi lặp lại để bạn tập trung vào chiến lược.",
        },
      },
      {
        question: {
          en: "Why pay you instead of building it myself?",
          vi: "Tại sao trả tiền cho các bạn thay vì tự xây?",
        },
        answer: {
          en: "Because time is your most expensive resource. DIY automation sounds cheaper until you waste weeks fixing errors or \"connecting\" tools that never talk. We give you back 20–30 hours a week and peace of mind. You're not buying a tool; you're buying a ready-to-run AI department that delivers real ROI, instantly.",
          vi: "Vì thời gian là tài nguyên đắt giá nhất của bạn. Tự làm automation nghe rẻ hơn cho đến khi bạn lãng phí hàng tuần sửa lỗi hoặc \"kết nối\" các công cụ không bao giờ tương thích. Chúng tôi giúp bạn tiết kiệm 20-30 giờ mỗi tuần và sự an tâm. Bạn không mua công cụ — bạn mua một phòng ban AI sẵn sàng hoạt động, mang lại ROI thực, ngay lập tức.",
        },
      },
    ],
  },

  // Footer
  footer: {
    description: {
      en: "Affic AI is the no-code platform that empowers you to build and deploy an entire AI workforce. Our mission is to automate your business processes, freeing your team to focus on what matters most: innovation and growth.",
      vi: "Affic AI là nền tảng no-code giúp bạn xây dựng và triển khai toàn bộ đội ngũ AI. Sứ mệnh của chúng tôi là tự động hóa quy trình kinh doanh, giải phóng đội ngũ để tập trung vào điều quan trọng nhất: đổi mới và tăng trưởng.",
    },
    company: { en: "Company", vi: "Công ty" },
    aboutUs: { en: "About Us", vi: "Về chúng tôi" },
    blog: { en: "Blog", vi: "Blog" },
    resources: { en: "Resources", vi: "Tài nguyên" },
    documentation: { en: "Documentation", vi: "Tài liệu" },
    apiReference: { en: "API Reference", vi: "Tham chiếu API" },
    integrationGuide: { en: "Integration Guide", vi: "Hướng dẫn tích hợp" },
    caseStudies: { en: "Case Studies", vi: "Nghiên cứu điển hình" },
    contact: { en: "Contact", vi: "Liên hệ" },
    allRights: { en: "All Rights Reserved.", vi: "Bảo lưu mọi quyền." },
    privacyPolicy: { en: "Privacy Policy", vi: "Chính sách bảo mật" },
    termsOfService: { en: "Terms of Service", vi: "Điều khoản dịch vụ" },
    cookiePolicy: { en: "Cookie Policy", vi: "Chính sách Cookie" },
  },
} as const;

// Helper type
export type TranslationKey = keyof typeof translations;
