function initLeadFlowApp() {
  renderSidebar(
    document.getElementById("sidebarNav"),
    window.LeadFlowNavigation
  );

  renderDashboardPage(
    document.getElementById("pageRoot"),
    window.LeadFlowDashboard
  );
}

initLeadFlowApp();
