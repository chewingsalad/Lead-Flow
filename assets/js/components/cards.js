function renderMetricCards(items) {
  return items.map(function (item) {
    return [
      '<article class="metric-card">',
      '<div class="metric-label">' + item.label + '</div>',
      '<div class="metric-value">' + item.value + '</div>',
      '<div class="delta">' + item.delta + '</div>',
      '</article>'
    ].join("");
  }).join("");
}

function renderBarList(items) {
  return [
    '<div class="bar-list">',
    items.map(function (item) {
      return [
        '<div class="bar-row">',
        '<span>' + item.label + '</span>',
        '<div class="bar-track"><div class="bar-fill" style="width: ' + item.value + '%"></div></div>',
        '<span>' + item.value + '%</span>',
        '</div>'
      ].join("");
    }).join(""),
    '</div>'
  ].join("");
}

function renderModuleCards(items) {
  return items.map(function (module) {
    return [
      '<article class="module-card">',
      '<h3>' + module.title + '</h3>',
      '<ul>',
      module.items.map(function (item) {
        return '<li>' + item + '</li>';
      }).join(""),
      '</ul>',
      '</article>'
    ].join("");
  }).join("");
}
