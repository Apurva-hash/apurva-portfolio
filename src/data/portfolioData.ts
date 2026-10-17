export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "Enterprise UX Concept" | "BI Dashboard & UX" | "Data Storytelling & UX";
  badge: string;
  badgeType: "concept" | "bi-project" | "data-project";
  summary: string;
  heroImage: string;
  tools: string[];
  role: string;
  timeline: string;
  audience: string;
  deliverables: string[];
  isConcept: boolean;
  conceptDisclaimer?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  overview: {
    problem: string;
    objective: string;
    keyMetrics?: { label: string; value: string; desc: string }[];
  };
  uxBreakdown: {
    title: string;
    description: string;
    points: { heading: string; detail: string }[];
  }[];
  designArtifacts?: {
    type: "wireframe" | "flow" | "architecture" | "specs";
    title: string;
    description: string;
  }[];
  reflection: {
    learned: string;
    nextSteps: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Practiced" | "Familiar" | "Applied in Projects";
    details: string;
  }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverables: string[];
  uxPhilosophy: string;
}

export const PERSONAL_INFO = {
  name: "Apurva Hippargi",
  namePlaceholder: "[YOUR NAME]",
  title: "Aspiring UI/UX Designer",
  subtitle: "BCA Student • User Experience & Interface Design Enthusiast",
  targetCompany: "AssetCues Solutions Pvt. Ltd.",
  targetRole: "UI/UX Designer",
  location: "India",
  bio: "Final-year Bachelor of Computer Applications (BCA) student focused on creating intuitive, accessible, and user-centered enterprise digital experiences. Bridging technical frontend foundations with human-centered design thinking, information hierarchy, and clean systems thinking.",
  shortIntro:
    "I craft intuitive, accessible, and user-centered enterprise digital experiences. Combining my computer applications foundation with design systems, wireframing, and usability heuristics.",
  email: "apurva.designer@example.com",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/in/apurva-hippargi",
  github: "https://github.com/moncydev",
  resumePath: "/resume.pdf",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UX Design & Research",
    description: "Understanding user mental models, mapping task flows, and eliminating cognitive friction.",
    skills: [
      {
        name: "User Research & Empathy",
        level: "Applied in Projects",
        details: "Synthesizing user requirements, stakeholder goals, and defining contextual user personas.",
      },
      {
        name: "Information Architecture",
        level: "Applied in Projects",
        details: "Card sorting concepts, sitemaps, data tree structuring, and enterprise navigation hierarchies.",
      },
      {
        name: "User Flows & Journey Mapping",
        level: "Applied in Projects",
        details: "End-to-end task mapping, edge-case identification, and reducing friction in multi-step workflows.",
      },
      {
        name: "Usability Principles & Heuristics",
        level: "Practiced",
        details: "Nielsen's 10 usability heuristics, cognitive load reduction, and error prevention patterns.",
      },
      {
        name: "Low-Fidelity Wireframing",
        level: "Applied in Projects",
        details: "Rapid paper sketching and grayscale digital wireframes to validate layout and density before styling.",
      },
    ],
  },
  {
    title: "UI & Interaction Design",
    description: "Translating wireframes into polished, accessible, and cohesive design systems.",
    skills: [
      {
        name: "Design Systems & Tokenization",
        level: "Applied in Projects",
        details: "Atomic component hierarchies, color tokens, typography scales, and 8pt spatial grids.",
      },
      {
        name: "Typography & Hierarchy",
        level: "Practiced",
        details: "Selection of legible font pairings, line height rhythm, modular type scales, and optical sizing.",
      },
      {
        name: "Color Theory & Contrast",
        level: "Applied in Projects",
        details: "Semantic palettes, status indicators (success, warning, critical), and WCAG AA contrast compliance.",
      },
      {
        name: "Responsive & Adaptive Layouts",
        level: "Applied in Projects",
        details: "Fluid flexbox/grid containers, mobile-first considerations, and multi-resolution density controls.",
      },
      {
        name: "Micro-Interactions & States",
        level: "Practiced",
        details: "Designing hover, focus, active, loading, empty, and disabled states for intuitive feedback.",
      },
    ],
  },
  {
    title: "Design Tools",
    description: "Industry-standard software utilized for wireframing, prototyping, and asset production.",
    skills: [
      {
        name: "Figma",
        level: "Applied in Projects",
        details: "Auto-layout v5, component variants, interactive prototyping, variable modes, and developer inspection.",
      },
      {
        name: "Canva",
        level: "Applied in Projects",
        details: "Rapid marketing collateral, presentation decks, data graphic summaries, and visual branding.",
      },
      {
        name: "Whimsical / FigJam",
        level: "Practiced",
        details: "Collaborative mind-mapping, sticky-note grouping, and architectural diagrams.",
      },
    ],
  },
  {
    title: "Supporting Technical Skills",
    description: "Computer application foundations that enable seamless developer handoff and technical feasibility.",
    skills: [
      {
        name: "HTML5 & Semantic Markup",
        level: "Applied in Projects",
        details: "Native semantic tags (main, nav, article), accessible ARIA roles, and form structures.",
      },
      {
        name: "CSS3 & Modern Layouts",
        level: "Applied in Projects",
        details: "Flexbox, CSS Grid, media queries, CSS variables, and fluid typography calculations.",
      },
      {
        name: "JavaScript / TypeScript Basics",
        level: "Applied in Projects",
        details: "Understanding component state, props, DOM event handling, and dynamic data rendering.",
      },
      {
        name: "Git & Version Control",
        level: "Familiar",
        details: "Branching, committing, pull requests, and collaborative repository workflows.",
      },
      {
        name: "Cross-Functional Collaboration",
        level: "Practiced",
        details: "Clear developer handoff specs, design annotations, and constructive feedback loops.",
      },
    ],
  },
];

export const DESIGN_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    tagline: "Uncovering user pain points and operational realities",
    description:
      "Every thoughtful interface starts with understanding who will use it, in what environment, and with what constraints. For enterprise tools, discovery focuses on workflow bottlenecks, cognitive friction, and daily user goals.",
    activities: [
      "Target user role identification & persona scoping",
      "Analyzing existing manual vs digital workflows",
      "Competitive benchmarking & heuristic observation",
      "Stakeholder requirement documentation",
    ],
    deliverables: [
      "User Persona Cards",
      "Problem Definition Statement",
      "Workflow Pain Point Map",
    ],
    uxPhilosophy: "Design without research is decoration. Grounding decisions in user context guarantees functional utility.",
  },
  {
    step: "02",
    title: "Define",
    tagline: "Translating observations into clear information architecture",
    description:
      "Synthesizing gathered insights into actionable product requirements. Establishing the information architecture, user journeys, and priority matrix so the interface solves the right problems first.",
    activities: [
      "Defining core user task flows and happy paths",
      "Structuring Information Architecture & navigation hierarchy",
      "Establishing accessibility constraints (WCAG AA)",
      "Formulating design principles & density guidelines",
    ],
    deliverables: [
      "User Task Flowcharts",
      "Sitemap & Navigation Schemas",
      "Feature Prioritization Matrix",
    ],
    uxPhilosophy: "Clear structure precedes visual polish. If users cannot find what they need, visual aesthetics cannot save it.",
  },
  {
    step: "03",
    title: "Ideate",
    tagline: "Exploring layout concepts, data density, and navigation models",
    description:
      "Iterating through multiple layout variations and component arrangements. Testing high-density table views against card-based summaries to find the optimal balance between scannability and deep inspection.",
    activities: [
      "Rapid paper sketching and divergent layout brainstorming",
      "Evaluating sidebar vs top-tier enterprise navigation",
      "Designing responsive layout strategies (mobile audit vs desktop monitor)",
      "Exploring data filtering, sorting, and batch actions",
    ],
    deliverables: [
      "Conceptual Sketches",
      "Layout Option Matrix",
      "Component Exploration Boards",
    ],
    uxPhilosophy: "Generating multiple divergent ideas prevents premature convergence on suboptimal interface patterns.",
  },
  {
    step: "04",
    title: "Wireframe",
    tagline: "Building grayscale architectural blueprints to validate layout",
    description:
      "Creating intentional grayscale wireframes to strip away color distractions and focus purely on visual hierarchy, button affordances, grid alignment, and information prioritization.",
    activities: [
      "Developing 8pt grid digital wireframes in Figma",
      "Testing typographical hierarchy with placeholder content",
      "Standardizing modal, drawer, and table component states",
      "Validating keyboard navigation and logical tab indexing",
    ],
    deliverables: [
      "Low-to-Mid Fidelity Digital Wireframes",
      "Grayscale Component Library",
      "Navigation State Wireflows",
    ],
    uxPhilosophy: "Wireframes validate spatial relationships and cognitive flow without the subjective bias of colors.",
  },
  {
    step: "05",
    title: "Prototype",
    tagline: "Crafting high-fidelity, interactive, accessible interfaces",
    description:
      "Applying systematic design tokens, accessible color palettes, crisp micro-interactions, and connected Figma prototypes. Preparing design systems ready for developer inspection.",
    activities: [
      "Establishing semantic color tokens, typography scales, and iconography",
      "Building Figma Auto-Layout v5 components with variants and boolean props",
      "Connecting micro-interactions (hover, active, focus, validation errors)",
      "Creating clickable, interactive walkthroughs for stakeholder review",
    ],
    deliverables: [
      "High-Fidelity Interactive Prototype",
      "Design System & Token Library",
      "Developer Handoff Specs & Annotations",
    ],
    uxPhilosophy: "A prototype is worth a thousand meetings. Interactive states uncover nuances static mockups hide.",
  },
  {
    step: "06",
    title: "Evaluate",
    tagline: "Heuristic auditing, accessibility validation, and usability testing",
    description:
      "Testing the prototype against usability heuristics, verifying contrast ratios, measuring task completion clarity, and collecting feedback to refine the final interface.",
    activities: [
      "Heuristic evaluation against Nielsen Norman Group standards",
      "Color contrast ratio audits (WCAG 2.1 AA/AAA compliance)",
      "Task-based usability walkthrough simulations",
      "Iterative adjustments based on feedback before handoff",
    ],
    deliverables: [
      "Heuristic Evaluation Audit Report",
      "Accessibility Verification Checklist",
      "Recommended Enhancement Roadmap",
    ],
    uxPhilosophy: "Design is never finished—it evolves through honest evaluation, user testing, and continuous refinement.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "asset-management-concept",
    title: "AssetPulse — Enterprise Asset Management Dashboard",
    subtitle: "End-to-End Enterprise UI/UX Conceptual Case Study",
    tagline: "Transforming complex fixed asset tracking, audit compliance, and lifecycle management into an intuitive, high-efficiency interface.",
    category: "Enterprise UX Concept",
    badge: "Self-Initiated Concept Case Study",
    badgeType: "concept",
    isConcept: true,
    conceptDisclaimer:
      "Disclaimer: This is an independent, self-initiated conceptual case study created specifically to demonstrate UI/UX design thinking, information architecture, and enterprise software design skills for my job application. It is NOT an official project, commercial work, or affiliated product of AssetCues Solutions Pvt. Ltd.",
    summary:
      "An original enterprise UX case study designing a modern Asset Management Dashboard. Focused on solving common pain points in physical asset tracking, multi-location audit verification, depreciation forecasting, and high-density inventory data tables.",
    heroImage: "/images/asset-dashboard-hero.svg",
    tools: ["Figma", "Auto-Layout v5", "Design System", "Whimsical", "HTML/CSS Specs"],
    role: "Solo UI/UX Designer & Researcher (Self-Initiated)",
    timeline: "3 Weeks Concept Sprint",
    audience: "Enterprise Asset Managers, IT Inventory Supervisors, Compliance & Audit Officers",
    deliverables: [
      "Problem Statement & Persona Models",
      "Information Architecture & User Flow Diagram",
      "Grayscale Low-Fidelity Wireframes",
      "Interactive High-Fidelity Dashboard",
      "Accessible Design System & Tokens",
      "Usability Testing Recommendations",
    ],
    overview: {
      problem:
        "Large enterprises manage tens of thousands of fixed assets (IT hardware, lab machinery, facility fixtures) spread across multiple branches. Traditional legacy software suffers from cluttered data tables, obscure status codes, difficult multi-parameter filtering, and disconnected audit reconciliation workflows, leading to lost assets, failed audits, and employee frustration.",
      objective:
        "Design a modern, intuitive, and high-density enterprise dashboard that empowers asset managers to locate any asset in under 3 clicks, monitor live audit compliance, track depreciation schedules, and perform batch status updates without cognitive overload.",
      keyMetrics: [
        { label: "Target Audit Time Reduction", value: "40%", desc: "Streamlined batch verification workflow" },
        { label: "Search & Filter Efficiency", value: "< 3 clicks", desc: "Global fuzzy search with smart facets" },
        { label: "WCAG Accessibility", value: "AA Level", desc: "All colors & typography exceed 4.5:1 ratio" },
      ],
    },
    uxBreakdown: [
      {
        title: "1. Problem Framing & User Personas",
        description:
          "To design an enterprise interface that works in real-world conditions, I identified two primary archetypes based on industry research:",
        points: [
          {
            heading: "Persona A: Vikram (Lead Asset Manager)",
            detail:
              "Needs high-level visibility over asset health, total valuation ($4.8M), upcoming maintenance, and depreciation across 4 corporate facilities. Frustrated by legacy portals that lack summary KPI cards and require CSV exports for simple metrics.",
          },
          {
            heading: "Persona B: Priya (IT Field Inventory Auditor)",
            detail:
              "Conducts physical floor audits with handheld barcode/RFID scanners. Needs clear status tags ('Active', 'Under Maintenance', 'Audit Due', 'Missing'), instant barcode search, and single-click audit verification without endless scrolling.",
          },
        ],
      },
      {
        title: "2. Information Architecture & Navigation Strategy",
        description:
          "Balancing high information density with visual scannability required a modular 3-tier hierarchy:",
        points: [
          {
            heading: "Tier 1: Global Sticky Command Bar",
            detail:
              "Combines facility switcher, global quick-search (supports Asset ID, Serial #, Assignee), rapid barcode scan trigger, and notification drawer for critical audit alerts.",
          },
          {
            heading: "Tier 2: Executive KPI Summary Cards",
            detail:
              "Provides immediate situational awareness with 4 core cards: Total Fixed Assets (12,480), Active in Use (91.4%), Audit Compliance Score (98.2%), and Assets Pending Maintenance (47).",
          },
          {
            heading: "Tier 3: Dynamic Data Table with Adaptive Density",
            detail:
              "Features multi-select batch actions (Change Location, Mark Audited, Assign User), customizable column visibility, compact vs comfortable row height toggle, and drawer slide-out for asset details.",
          },
        ],
      },
      {
        title: "3. Design System & Accessibility Decisions",
        description:
          "Enterprise users spend 6–8 hours daily staring at management portals. Visual ergonomics were prioritized:",
        points: [
          {
            heading: "Ergonomic Color Palette",
            detail:
              "Chose a deep slate neutral foundation (#0F172A and #1E293B) paired with crisp indigo accent (#6366F1) to reduce eye fatigue compared to harsh pure-white backgrounds.",
          },
          {
            heading: "Dual-Coded Status Badges",
            detail:
              "Every status badge (Active, Under Audit, In Repair, Retired) couples a distinct color with an explicit semantic icon and text label, ensuring 100% usability for colorblind operators.",
          },
          {
            heading: "8-Point Spatial Grid",
            detail:
              "All component margins, paddings, and card layouts adhere strictly to an 8pt spatial grid, ensuring predictable alignment and frictionless developer implementation.",
          },
        ],
      },
      {
        title: "4. Responsive & Mobile Floor Considerations",
        description:
          "Auditors frequently walk warehouse floors and server rooms where large desktop monitors are unavailable:",
        points: [
          {
            heading: "Card Transformation on Tablet/Mobile",
            detail:
              "Rather than horizontally squishing 8-column tables, rows gracefully transform into touch-friendly summary cards with prominent barcode scan buttons and status chips.",
          },
          {
            heading: "Thumb-Zone Action Bar",
            detail:
              "Critical actions ('Verify Tag', 'Flag Discrepancy') are positioned in the bottom 30% of the mobile viewport for comfortable single-handed operation.",
          },
        ],
      },
      {
        title: "5. Usability Testing & Validation Roadmap",
        description:
          "As a self-initiated concept, usability testing was formulated as an actionable test protocol ready for implementation:",
        points: [
          {
            heading: "Task-Based Usability Protocol",
            detail:
              "Proposed 5 core scenario tasks: 1) Locate Macbook Pro by Serial #; 2) Filter all assets due for audit in Q3; 3) Reassign 5 selected monitors to HR Dept; 4) Export audit reconciliation report; 5) Scan new RFID tag.",
          },
          {
            heading: "Success Metrics to Track",
            detail:
              "System Usability Scale (SUS Target: > 82), Time on Task (Target: < 45s for batch updates), and Error Rate on status assignment.",
          },
        ],
      },
    ],
    reflection: {
      learned:
        "Designing enterprise software taught me that UI beauty without data hierarchy is useless. The real craft lies in balancing tabular density, micro-interactions, and instant system feedback so professionals can do their job faster and with zero errors.",
      nextSteps:
        "Expand the concept into dedicated RFID gateway telemetry views, offline-first mobile sync modes, and automated asset lifecycle depreciation graph generators.",
    },
  },
  {
    id: "hotel-rev-ai",
    title: "HotelRevAI — Revenue Analysis Dashboard for Hospitality",
    subtitle: "Business Intelligence Dashboard with UX Information Hierarchy",
    tagline: "Translating hotel revenue performance metrics, occupancy patterns, and booking channels into an accessible, executive-ready BI interface.",
    category: "BI Dashboard & UX",
    badge: "Actual BI Project • UX Case Analysis",
    badgeType: "bi-project",
    isConcept: false,
    summary:
      "A completed data visualization and business intelligence dashboard engineered with Power BI, SQL, Excel, and DAX. Analyzed for this portfolio through a UI/UX lens—focusing on visual hierarchy, cognitive load reduction, chart selection, and executive decision-making.",
    heroImage: "/images/hotel-dashboard-hero.svg",
    tools: ["Power BI", "SQL", "Excel", "DAX", "Figma (Layout Planning)"],
    role: "Data Analyst & UI Information Designer",
    timeline: "Completed Academic Project",
    audience: "Hotel General Managers, Revenue Directors, Front Office Operations Leads",
    deliverables: [
      "Power BI Interactive Dashboard",
      "Information Hierarchy Architecture",
      "Executive KPI Summary Cards",
      "Chart Selection & Data Density Rationale",
      "Color Semantics & Threshold Guidelines",
    ],
    overview: {
      problem:
        "Hotel revenue managers must analyze volatile occupancy rates, fluctuating Average Daily Rates (ADR), seasonal cancellations, and multi-channel booking commissions across hundreds of rooms. Standard tabular spreadsheets fail to communicate trends quickly, delaying pricing decisions and revenue recovery.",
      objective:
        "Build an interactive BI dashboard that clearly communicates RevPAR (Revenue Per Available Room), ADR, cancellation trends, and channel efficiency through intuitive visual hierarchy and accessible chart design.",
      keyMetrics: [
        { label: "Core KPIs Monitored", value: "6 Vital Metrics", desc: "RevPAR, ADR, Occupancy %, Cancellations, Revenue" },
        { label: "Data Integration", value: "SQL + DAX", desc: "Automated aggregation & dynamic time-series filters" },
        { label: "Executive Scan Time", value: "< 10 seconds", desc: "Structured F-pattern visual reading flow" },
      ],
    },
    uxBreakdown: [
      {
        title: "1. Information Hierarchy & Reading Flow (F-Pattern)",
        description:
          "In high-pressure hospitality management, executives need answers in seconds. The screen layout was engineered following natural gaze patterns:",
        points: [
          {
            heading: "Top Horizon: High-Level Pulse",
            detail:
              "Prominent KPI cards display RevPAR, Total Gross Revenue, Average Daily Rate (ADR), and Overall Occupancy % with trend indicators (+/- vs previous period).",
          },
          {
            heading: "Middle Canvas: Temporal Trends & Correlations",
            detail:
              "Line charts showing seasonal booking lead-time vs cancellation rates, allowing revenue managers to spot pricing vulnerabilities weeks in advance.",
          },
          {
            heading: "Bottom Sector: Granular Channel & Room Breakdown",
            detail:
              "Clean horizontal bar charts comparing direct bookings against OTAs (Online Travel Agencies like Booking.com, Expedia), exposing commission costs at a glance.",
          },
        ],
      },
      {
        title: "2. Chart Selection Rationale: Form Follows Function",
        description:
          "Avoiding decorative 'chart junk' to maintain high data-ink ratio and prevent cognitive fatigue:",
        points: [
          {
            heading: "Avoided Cluttered Pie Charts",
            detail:
              "Replaced circular charts with sorted horizontal bar charts for room categories, making comparisons between Deluxe, Suite, and Standard rooms instant and accurate.",
          },
          {
            heading: "Sparklines & Dual-Axis Line Graphs",
            detail:
              "Used clean dual-axis line charts for ADR and Occupancy over time to reveal the exact price point where occupancy begins to decline.",
          },
          {
            heading: "Heatmap for Day-of-Week Occupancy",
            detail:
              "Utilized a color-intensity matrix to pinpoint weekend vs weekday revenue spikes, informing dynamic rate adjustments.",
          },
        ],
      },
      {
        title: "3. Usability & Cognitive Ergonomics",
        description:
          "Ensuring the dashboard remains usable during fast-paced morning briefing meetings:",
        points: [
          {
            heading: "Semantic Color Thresholds",
            detail:
              "Applied deliberate color coding: Neutral slate for baseline bars, positive emerald green for revenue growth, and restrained coral amber for cancellation alerts. Avoided high-saturation neon colors.",
          },
          {
            heading: "Consistent Filter Placement",
            detail:
              "Standardized all slicing controls (Date Range, Hotel Branch, Room Type) into a predictable top-right toolbar with clear 'Reset All' affordance.",
          },
        ],
      },
    ],
    reflection: {
      learned:
        "Building HotelRevAI proved that data visualization is fundamentally a branch of UI/UX design. Choosing the right visual container for information is just as important as the underlying SQL queries.",
      nextSteps:
        "Translate the Power BI layout into a custom web-based React/D3 design component with micro-animations and contextual tooltip summaries.",
    },
  },
  {
    id: "bank-marketing-eda",
    title: "Bank Marketing Exploratory Data Analysis & Information Design",
    subtitle: "Transforming Complex Campaign Datasets into Visual Stories",
    tagline: "Applying information architecture, user-centric data synthesis, and visual hierarchy to bank customer conversion data.",
    category: "Data Storytelling & UX",
    badge: "Actual Data Project • Info Architecture",
    badgeType: "data-project",
    isConcept: false,
    summary:
      "An analytical exploratory data analysis (EDA) project inspecting Portuguese bank telemarketing campaigns. Presented with an emphasis on cognitive load reduction, user mental models, and translating raw statistical distributions into actionable interface patterns for marketing decision-makers.",
    heroImage: "/images/bank-dashboard-hero.svg",
    tools: ["Python", "Pandas", "Matplotlib/Seaborn", "Excel", "Information Architecture"],
    role: "Data Analyst & UX Information Architect",
    timeline: "Completed Academic Project",
    audience: "Bank Marketing Campaign Strategists, Branch Managers, CRM Product Designers",
    deliverables: [
      "Data Cleaning & Feature Engineering Pipeline",
      "Customer Segmentation Matrix",
      "Conversion Funnel Visualization",
      "Information Design Guidelines for CRM UIs",
      "Cognitive Load Reduction Findings",
    ],
    overview: {
      problem:
        "Bank marketing managers must sift through thousands of historical campaign records (age, job, housing loan, call duration, campaign outcome). Raw tables and scattered charts create high cognitive friction, making it difficult to understand which customer segments convert for term deposits and why campaigns fail.",
      objective:
        "Clean, analyze, and structure the data into an intuitive narrative hierarchy that empowers non-technical marketing strategists to immediately recognize conversion drivers without statistical confusion.",
      keyMetrics: [
        { label: "Records Processed", value: "45,000+ Rows", desc: "Rigorous cleaning, outlier removal & normalization" },
        { label: "Key Conversion Driver", value: "Call Duration", desc: "Clear inflection point identified at > 180 seconds" },
        { label: "Cognitive Load", value: "Minimized", desc: "Synthesized into 3 clear decision-oriented visual themes" },
      ],
    },
    uxBreakdown: [
      {
        title: "1. Information Synthesis & Cognitive Chunking",
        description:
          "Rather than presenting 16 disparate variables at once, information was categorized into 3 digestible mental model buckets:",
        points: [
          {
            heading: "Bucket A: Demographic Profile",
            detail:
              "Age brackets, employment categories (management, blue-collar, retired), and marital status grouped to construct clear customer archetypes.",
          },
          {
            heading: "Bucket B: Financial Health & Affordability",
            detail:
              "Existing housing loans, personal credit defaults, and average annual balance aggregated to gauge customer liquidity.",
          },
          {
            heading: "Bucket C: Campaign Engagement Dynamics",
            detail:
              "Contact method (cellular vs telephone), call duration, previous campaign outcomes, and seasonal month.",
          },
        ],
      },
      {
        title: "2. Visual Storytelling: The Conversion Funnel",
        description:
          "Transforming abstract statistical correlation into an intuitive visual story:",
        points: [
          {
            heading: "Funnel Progression",
            detail:
              "Designed a linear conversion funnel illustrating drop-off stages from Total Contacts Reached (100%) → Engaged Calls (>3 min: 38%) → Term Deposit Subscriptions (11.7%).",
          },
          {
            heading: "Affordance of the 'Duration' Driver",
            detail:
              "Demonstrated that call duration was the single biggest conversion indicator. In an interface context, this suggests adding live call-guidance prompts to tele-caller CRM screens.",
          },
        ],
      },
      {
        title: "3. Direct Takeaways for CRM Interface Designers",
        description:
          "How this analytical foundation translates into real product design recommendations:",
        points: [
          {
            heading: "Progressive Disclosure in Customer Lists",
            detail:
              "Instead of displaying all 16 attributes in one giant table, CRM tables should show key identifiers and expand into a detailed side-panel upon row selection.",
          },
          {
            heading: "Smart Lead Scoring Badges",
            detail:
              "Using the predictive factors (students & retired professionals having highest conversion rates) to generate clear visual badges ('High Propensity') next to lead names.",
          },
        ],
      },
    ],
    reflection: {
      learned:
        "Data without user-centered storytelling is noise. As an aspiring UI/UX designer, this project cemented my belief that great enterprise UX starts with truly understanding what the data represents to the person using it.",
      nextSteps:
        "Prototype a modern CRM lead management interface in Figma incorporating these lead-scoring heuristics and progressive disclosure patterns.",
    },
  },
];
