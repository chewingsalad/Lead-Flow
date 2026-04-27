# LEAD FLOW Project Structure

```text
lead-flow-project/
+-- index.html
+-- assets/
|   +-- css/
|   |   +-- tokens.css
|   |   +-- layout.css
|   |   +-- components.css
|   |   +-- wireframe.css
|   +-- js/
|       +-- app.js
|       +-- data/
|       |   +-- navigation.js
|       |   +-- dashboard.js
|       +-- components/
|       |   +-- sidebar.js
|       |   +-- cards.js
|       |   +-- tables.js
|       |   +-- insights.js
|       +-- pages/
|           +-- dashboard-page.js
+-- docs/
    +-- project-structure.md
```

## Cara edit cepat

- Ubah menu sidebar di `assets/js/data/navigation.js`.
- Ubah angka KPI, insight, session duration, scroll depth, tabel campaign, tabel CS, dan module map di `assets/js/data/dashboard.js`.
- Ubah layout halaman dashboard di `assets/js/pages/dashboard-page.js`.
- Ubah style dasar warna, radius, spacing di `assets/css/tokens.css`.
- Ubah struktur grid, sidebar, topbar, dan responsive behavior di `assets/css/layout.css`.
- Ubah tampilan reusable seperti cards, tables, chips, dan status badges di `assets/css/components.css`.
- Ubah elemen khusus wireframe seperti chart placeholder, scroll map, bar chart, dan insight card di `assets/css/wireframe.css`.
- Responsive mobile berada terutama di bagian `@media` pada `assets/css/layout.css`, `assets/css/components.css`, dan `assets/css/wireframe.css`.

## Rekomendasi pengembangan berikutnya

- Tambahkan file page baru di `assets/js/pages/`, misalnya `campaigns-page.js`, `analytics-page.js`, dan `settings-page.js`.
- Tambahkan data dummy per halaman di `assets/js/data/`, misalnya `campaigns.js` dan `analytics.js`.
- Buat router sederhana di `assets/js/app.js` agar klik sidebar mengganti halaman.
