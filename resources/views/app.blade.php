<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="theme-color" content="#FFFFFF" />

  <script src="{{ mix('/js/manifest.js') }}" defer></script>
  <script src="{{ mix('/js/vendor.js') }}" defer></script>
  <script src="{{ mix('/js/app.js') }}" defer></script>
  @inertiaHead
</head>

<body class='bg-white text-black overflow-x-hidden'>
  @inertia
</body>

</html>