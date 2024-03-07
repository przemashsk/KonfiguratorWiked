<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139334872-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());



    gtag('config', 'UA-139334872-1');
    </script> -->
    <!-- <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start':

                new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],

            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =

            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);

    })(window, document, 'script', 'dataLayer', 'GTM-WBCJH8B');
    </script> -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=.5,shrink-to-fit=yes">
    <link rel="icon" href="/favicon.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.debug.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <script src="https://kit.fontawesome.com/9df234b1e9.js" crossorigin="anonymous"></script>
    <title>Konfigurator drzwi - WIKĘD</title>
    <style>
    .podsumowanie {
        padding: 15px;
        height: calc(100vh - 108px);
        overflow-y: auto;
    }

    .podsumowanie2 {
        gap: 15px;
        display: flex;
        flex-direction: column;
    }

    @media screen and (orientation:portrait) {
        .ukryj {
            display: none;
        }

        .myrow {
            grid-template-columns: repeat(4, 1fr) !important;
        }

        /* .item.active:after {
        position: absolute;
        left: 0;
        top: 0;
        padding: 5px;
        width: 100%;
        color: white;
        background: rgb(0, 0, 0, .5);
        content: 'Wybrałeś inspiracje Przejdź dalej';
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
      } */

        .item {
            position: relative;
        }

        .item img {
            /* height: unset !important; */
            /* height: calc((100vh - 190px) / 3) !important; */
        }

        #Podsumowanie {
            display: none;
        }

        .lista,
        .cena {
            max-width: 100% !important;
        }

        .last {
            display: flex;
            flex-direction: column !important;
            /* width: 100%; */
            justify-content: center;
            align-items: center;
            gap: 15px;
            padding: 15px;
            /* margin: 0 auto; */
        }

        .kol4,
        .kol5 {
            grid-template-columns: repeat(2, 1fr) !important;
        }

        #app {
            /* min-width: 566.25px; */
        }

        .topMenuEl.nonactive {
            display: none;
        }

        .hide {
            display: none;
        }
    }
    </style>
    <link href="/css/app.css?v=<?=time()?>" rel="preload" as="style">
    <link href="/js/app.js?v=<?=time()?>" rel="preload" as="script">
    <link href="/js/chunk-vendors.js?v=<?=time()?>" rel="preload" as="script">
    <link href="/css/app.css?v=<?=time()?>" rel="stylesheet">
</head>

<body style="font-size: large;"><noscript>
        <!-- <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBCJH8B"
            height="0" width="0" style="display:none;visibility:hidden"></iframe> -->
    </noscript>
    <div id="masthead"></div>
    <div><noscript><strong>We're sorry but vuekonf3 doesn't work properly without JavaScript enabled. Please enable it
                to continue.</strong></noscript>
        <script>
        $(function() {
            $(document).tooltip();
        });
        </script>
        <div id="app" style="padding:0" class="container-fluid"></div>
    </div>
    <script src="/js/chunk-vendors.js?v=<?=time()?>"></script>
    <script src="/js/app.js?v=<?=time()?>"></script>
</body>

</html>