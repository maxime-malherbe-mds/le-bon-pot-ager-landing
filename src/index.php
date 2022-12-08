<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles/output.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
  <link rel="icon" type="image/x-icon" href="./img/favicon.png">
  <title>Le bon pot'ager</title>
  <!-- Google Tag Manager -->
  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PN8M3T3');
  </script>
  <!-- End Google Tag Manager -->
  
</head>

<body class="overflow-x-hidden">

  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PN8M3T3" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <?php include 'templates/main-section.php' ?>

  <?php include 'templates/advantages.php' ?>

  <?php include 'templates/reviews.php' ?>

  <?php include 'templates/video-section.php' ?>

  <?php include 'templates/bottom-section.php' ?>

  <?php include 'templates/footer.php' ?>

</body>

</html>

<script src="lib/gsap/gsap.min.js"></script>
<script src="lib/gsap/ScrollTrigger.min.js"></script>
<script src="scripts/main.js"></script>
<script src="scripts/swiper.js" type="module"></script>
<!-- Hotjar Tracking Code for my site -->
<script>
  (function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {
      hjid: 3281120,
      hjsv: 6
    };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
</script>