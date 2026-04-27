function renderInsights(items) {
  return [
    '<div class="insight-list">',
    items.map(function (item) {
      return [
        '<article class="insight-card">',
        '<span class="priority-dot ' + item.tone + '"></span>',
        '<div>',
        '<h3>' + item.title + '</h3>',
        '<p>' + item.body + '</p>',
        '</div>',
        '<span class="status ' + item.tone + '">' + item.status + '</span>',
        '</article>'
      ].join("");
    }).join(""),
    '</div>'
  ].join("");
}
