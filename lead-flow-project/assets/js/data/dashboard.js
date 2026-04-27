window.LeadFlowDashboard = {
  kpis: [
    { label: "Total Clicks", value: "24.8K", delta: "+18% vs previous" },
    { label: "Conversions", value: "3,214", delta: "+9% vs previous" },
    { label: "Conversion Rate", value: "12.9%", delta: "+1.4 pts" },
    { label: "Avg Session", value: "01:42", delta: "+12%" },
    { label: "Avg Scroll Depth", value: "57%", delta: "+5 pts" }
  ],
  sessionDuration: [
    { label: "0-10s", value: 38 },
    { label: "10-30s", value: 27 },
    { label: "30-60s", value: 18 },
    { label: "1-3m", value: 12 },
    { label: "3m+", value: 5 }
  ],
  scrollDepth: [
    { label: "25%", value: 91 },
    { label: "50%", value: 48 },
    { label: "75%", value: 22 },
    { label: "100%", value: 9 }
  ],
  insights: [
    {
      title: "72% users drop before 50% scroll",
      body: "Campaign Ramadan WA Ads kehilangan engagement sebelum CTA utama.",
      status: "Critical",
      tone: "danger"
    },
    {
      title: "Session duration increased by 12%",
      body: "Landing page baru menunjukkan kualitas traffic yang lebih baik.",
      status: "Positive",
      tone: "success"
    },
    {
      title: "Traffic spike detected",
      body: "Lonjakan dari Facebook Ads pukul 14:00 perlu dicek terhadap conversion.",
      status: "Watch",
      tone: "warning"
    }
  ],
  campaignRows: [
    ["Ramadan WA Ads", "8,920", "9.8%", "01:18", "48%"],
    ["Meta Retargeting", "5,410", "15.6%", "02:04", "64%"],
    ["Google Search", "4,870", "13.1%", "01:51", "59%"]
  ],
  csRows: [
    ["Rina", "842", "148", "17.6%", "Online"],
    ["Ardi", "733", "91", "12.4%", "Online"],
    ["Maya", "612", "64", "10.5%", "Busy"]
  ],
  modules: [
    {
      title: "Campaigns",
      items: ["Campaign list", "Create / edit campaign", "Random, sequential, weighted", "Advanced routing rules"]
    },
    {
      title: "Destinations",
      items: ["WhatsApp numbers", "Landing pages / URLs", "Tags and groups", "Destination performance"]
    },
    {
      title: "CS / Team",
      items: ["Admin and CS users", "Campaign assignments", "Role permissions", "CS performance tracking"]
    },
    {
      title: "Reports",
      items: ["Custom report builder", "Date, campaign, CS filters", "CSV / PDF export", "Saved and scheduled reports"]
    },
    {
      title: "Integrations",
      items: ["Facebook Pixel", "Google Analytics", "Webhooks", "API keys and logs"]
    },
    {
      title: "Settings",
      items: ["Workspace profile", "Branding and domain", "Team permissions", "Billing and usage"]
    },
    {
      title: "UX Flow",
      items: ["Create campaign", "Assign destinations", "Track behavior", "Act from insights"]
    },
    {
      title: "Decision Layer",
      items: ["KPI visible instantly", "Progressive disclosure", "Drilldown from alerts", "Exportable analysis"]
    }
  ]
};
