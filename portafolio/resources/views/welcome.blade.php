<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Isabelle de Souza</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div class="container">
            <span class="absolute block text-blue-600 font-bold text-4xl" style="left:14%; top:10%;">¿</span>
            <span class="absolute block font-bold text-4xl" style="left:15%; top:10%;">Te</span>
            <span class="absolute block font-bold text-4xl" style="left:18%; top:13%;">quieres</span>
            <span class="absolute block font-bold text-4xl" style="left:24%; top:18%;">casar</span>
            <span class="absolute block font-bold text-4xl" style="left:30%; top:18%;">conmigo</span>
            <span class="absolute block text-blue-600 font-bold text-4xl" style="left:39%; top:17%;">?</span>
            <span id='corazon' class="absolute block text-red-600 font-bold text-4xl" style="left:28.8%; top:17%;">♥</span>
            <span id='text' class="absolute block font-bold text-4xl" style="display: none">Te Amo</span>
        </div>
        <button id="btnSi" class="absolute w-60 text-white rounded-full bg-green-500" style="left:50%; top:17%;">Sí</button>
        <button id="btnNo" class="absolute w-60 text-white bg-gray-500" style="left:70%; top:17%;">No</button>
        <script>
            let btnSi = document.getElementById('btnSi')
            let btnNo = document.getElementById('btnNo')

            btnNo.addEventListener('mouseenter', e => {
                e.target.style = 'left:' + (Math. random() * 100) + '%; top:' + (Math. random() * 100) + '%;'
            })

            btnSi.addEventListener('click', e => {
                document.querySelectorAll('span, button').forEach(element => {
                    element.style = 'display:none'
                });
                document.getElementById('corazon').style = "left:50%; top:50%;";
                document.getElementById('text').style = "left:48%; top:55%;";

            })
        </script>
    </body>
</html>
