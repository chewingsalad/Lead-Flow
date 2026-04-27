function renderSidebar(target, items) {
  target.innerHTML = items.map(function (item) {
    var activeClass = item.active ? " is-active" : "";
    return [
      '<button class="nav-item' + activeClass + '" type="button" data-page="' + item.id + '">',
      '<span class="nav-dot"></span>',
      '<span>' + item.label + '</span>',
      '</button>'
    ].join("");
  }).join("");
}
