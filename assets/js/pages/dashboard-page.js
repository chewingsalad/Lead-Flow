function renderDashboardPage(target, data) {
  target.innerHTML = [
    '<section class="page-header">',
    '<div>',
    '<h1>Dashboard Overview</h1>',
    '<p>Snapshot performa traffic, conversion, distribusi lead, dan behavior visitor.</p>',
    '</div>',
    '<button class="primary-button" type="button">Create Campaign</button>',
    '</section>',

    '<section class="section">',
    '<div class="section-header">',
    '<div><h2>KPI Summary</h2><p>Data utama harus terbaca dalam kurang dari 5 detik.</p></div>',
    '<div class="filters"><button class="chip">Source</button><button class="chip">Device</button><button class="chip">CS</button></div>',
    '</div>',
    '<div class="grid-5">' + renderMetricCards(data.kpis) + '</div>',
    '</section>',

    '<section class="grid-2">',
    '<div class="section">',
    '<div class="section-header"><div><h2>Traffic vs Conversion</h2><p>Time-series chart untuk clicks, conversion, dan CVR.</p></div><div class="filters"><button class="chip">Hourly</button><button class="chip">Compare</button></div></div>',
    '<div class="chart-placeholder"><div class="chart-label">Blue: Clicks / Green: Conversions</div></div>',
    '</div>',
    '<div class="section">',
    '<div class="section-header"><div><h2>Smart Insights</h2><p>Insight otomatis untuk aksi cepat.</p></div><span class="status warning">3 New</span></div>',
    renderInsights(data.insights),
    '</div>',
    '</section>',

    '<section class="section">',
    '<div class="section-header">',
    '<div><h2>Analytics: Behavior Layer</h2><p>Core focus untuk memahami kualitas visitor, bukan hanya volume traffic.</p></div>',
    '<div class="filters"><button class="chip">Campaign A</button><button class="chip">Mobile</button><button class="chip">Landing Page 1</button></div>',
    '</div>',
    '<div class="grid-2">',
    '<div class="panel"><h3>Session Duration Distribution</h3>' + renderBarList(data.sessionDuration) + '</div>',
    '<div class="panel"><h3>Scroll Depth Summary</h3>' + renderBarList(data.scrollDepth) + '</div>',
    '</div>',
    '<div class="grid-2">',
    renderScrollMap(),
    '<div class="section" style="padding:0;border:0;background:transparent;">',
    '<div class="panel"><h3>Drop-off Analysis</h3><p>Drop terbesar terjadi sebelum section CTA. Rekomendasi: pindahkan CTA utama ke area sebelum 50% scroll.</p><div class="grid-3">' + renderMetricCards([
      { label: "Before CTA", value: "52%", delta: "High risk" },
      { label: "Mobile Scroll", value: "43%", delta: "-28% vs desktop" },
      { label: "CTA Reach", value: "41%", delta: "Needs action" }
    ]) + '</div></div>',
    '<div class="panel"><h3>Per Campaign Performance</h3>' + renderTable(["Campaign", "Clicks", "CVR", "Avg Session", "Scroll"], data.campaignRows) + '</div>',
    '</div>',
    '</div>',
    '</section>',

    '<section class="section">',
    '<div class="section-header"><div><h2>Module Wireframe Map</h2><p>Ringkasan page-level structure untuk navigasi utama LEAD FLOW.</p></div></div>',
    '<div class="module-grid">' + renderModuleCards(data.modules) + '</div>',
    '</section>',

    '<section class="grid-2">',
    '<div class="section"><h2>Top CS Performance</h2>' + renderTable(["CS", "Leads", "Conversions", "CVR", "Status"], data.csRows, 4) + '</div>',
    '<div class="section"><h2>Recent Activity / Alerts</h2>' + renderInsights([
      { title: "Campaign published", body: "Meta Retargeting sekarang aktif dengan weighted routing.", status: "Done", tone: "success" },
      { title: "Webhook retry", body: "2 event gagal dikirim ke CRM dan sedang retry otomatis.", status: "Retry", tone: "warning" },
      { title: "Destination overload", body: "Nomor CS Maya menerima lead di atas batas harian.", status: "Action", tone: "danger" }
    ]) + '</div>',
    '</section>'
  ].join("");
}

function renderScrollMap() {
  return [
    '<div class="scroll-map">',
    '<div class="landing-skeleton">',
    '<div class="skeleton-block"></div>',
    '<div class="skeleton-block"></div>',
    '<div class="skeleton-block"></div>',
    '<div class="skeleton-block"></div>',
    '<div class="skeleton-block"></div>',
    '</div>',
    '<div class="scroll-marker marker-25">25%</div>',
    '<div class="scroll-marker marker-50">50%</div>',
    '<div class="scroll-marker marker-75">75%</div>',
    '<div class="scroll-marker marker-100">100%</div>',
    '</div>'
  ].join("");
}
