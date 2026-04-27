function renderTable(headers, rows, statusColumnIndex) {
  return [
    '<div class="table-wrap">',
    '<table class="data-table">',
    '<thead><tr>',
    headers.map(function (header) {
      return '<th>' + header + '</th>';
    }).join(""),
    '</tr></thead>',
    '<tbody>',
    rows.map(function (row) {
      return [
        '<tr>',
        row.map(function (cell, index) {
          if (index === statusColumnIndex) {
            var tone = cell === "Busy" ? "warning" : "success";
            return '<td><span class="status ' + tone + '">' + cell + '</span></td>';
          }
          return '<td>' + cell + '</td>';
        }).join(""),
        '</tr>'
      ].join("");
    }).join(""),
    '</tbody>',
    '</table>',
    '</div>'
  ].join("");
}
