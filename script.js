/* ==========================================
   FLORES AMARILLAS 🌼
   JAVASCRIPT — EXPERIENCIA INTERACTIVA
========================================== */


/* ==========================================
   1. NOMBRE DE LA PERSONA
========================================== */

/* ==========================================
   👩 PERSONALIZACIÓN DESDE EL ENLACE
========================================== */

const parametros =
    new URLSearchParams(
        window.location.search
    );


/* ==========================================
   👩 NOMBRE
========================================== */

const nombreRecibido =
    parametros.get("nombre");


let nombreOriginal =
    nombreRecibido
        ? nombreRecibido.trim()
        : "Nayeli";


const nombre =
    nombreOriginal.charAt(0).toUpperCase() +
    nombreOriginal.slice(1).toLowerCase();


/* ==========================================
   💌 TIPO DE EXPERIENCIA
========================================== */

const tipoRecibido =
    parametros.get("tipo");


const tipo =
    tipoRecibido
        ? tipoRecibido.trim().toLowerCase()
        : "normal";


/* ==========================================
   💬 FRASE PERSONALIZADA
========================================== */

const fraseRecibida =
    parametros.get("frase");


const frase =
    fraseRecibida
        ? fraseRecibida.trim()
        : "Mi persona especial";


/* ==========================================
   ✍️ FIRMA PERSONALIZADA
========================================== */

const firmaRecibida =
    parametros.get("firma");


const firma =
    firmaRecibida
        ? firmaRecibida.trim()
        : "R.A";


/* ==========================================
   🎯 ELEMENTOS DE LA PÁGINA
========================================== */

const nombrePersona =
    document.getElementById(
        "nombrePersona"
    );


const nombreBanner =
    document.getElementById(
        "nombreBanner"
    );


const tituloPersonalizado =
    document.getElementById(
        "tituloPersonalizado"
    );


const tituloEspera =
    document.getElementById(
        "tituloEspera"
    );


/* ==========================================
   🌼 NOMBRE EN EL MENSAJE
========================================== */

if (nombrePersona) {

    nombrePersona.textContent =
        nombre;

}


/* ==========================================
   ✈️ NOMBRE EN EL CARTEL DEL AVIÓN
========================================== */

if (nombreBanner) {

    nombreBanner.textContent =
        nombre;

}


/* ==========================================
   💛 TÍTULO PRINCIPAL
========================================== */

if (tituloPersonalizado) {

    if (tipo === "especial") {

        tituloPersonalizado.textContent =
            "❤️ Mi Hermosa " +
            nombre +
            " 🌻";

    } else {

        tituloPersonalizado.textContent =
            "🌼 Para ti, " +
            nombre;

    }

}


/* ==========================================
   ⏳ TEXTO DE ESPERA
========================================== */

if (tituloEspera) {

    tituloEspera.textContent =
        "Espera un momento...";

}

/* ==========================================
   💌 FRASE DE LA CARTA
========================================== */

const fraseCarta =
    document.getElementById(
        "fraseCarta"
    );


if (fraseCarta) {

    fraseCarta.textContent =
        frase;

}


/* ==========================================
   ✍️ FIRMA
========================================== */

const firmaPersonalizada =
    document.getElementById(
        "firmaPersonalizada"
    );


if (firmaPersonalizada) {

    firmaPersonalizada.textContent =
        firma;

}


/* ==========================================
   2. ELEMENTOS PRINCIPALES
========================================== */

const btnComenzar = document.getElementById("btnComenzar");
const jardin = document.getElementById("jardin");
const mensaje = document.getElementById("mensaje");
const btnCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");

const musica = document.getElementById("musica");

const contenedorParticulas =
    document.querySelector(".particulas");


/* ==========================================
   3. COMENZAR — VUELO CINEMATOGRÁFICO ✈️
========================================== */

if (btnComenzar) {

    btnComenzar.addEventListener("click", function () {

        /* Evitamos múltiples clics */
        btnComenzar.disabled = true;

        /* 🎵 Música */
        iniciarMusica();

        /* 🌑 Iniciamos la experiencia */
        document.body.classList.add(
            "experiencia-iniciada"
        );

        /* 🌅 Ocultar introducción */
        const introduccion =
            document.querySelector(".introduccion");

        if (introduccion) {

            introduccion.style.transition =
                "opacity 1.5s ease, transform 1.5s ease";

            introduccion.style.opacity = "0";

            introduccion.style.transform =
                "translateY(-35px)";
        }


        /* ==========================================
           🌼 ETAPA 1
           MOSTRAR EL JARDÍN
        ========================================== */

        setTimeout(function () {

            if (jardin) {

                jardin.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 1200);


        /* ==========================================
           🌱 ETAPA 2
           HACER CRECER LAS FLORES
        ========================================== */

        setTimeout(function () {

            activarFlores();

        }, 1800);


/* ==========================================
   ✈️ ETAPA 3
   INICIAR EL VUELO + VIENTO
========================================== */

setTimeout(function () {

    const avion =
        document.querySelector(
            ".avion-conjunto"
        );

    if (avion) {

        /* Reiniciamos la animación */
        avion.style.animation = "none";

        void avion.offsetWidth;


        /* ✈️ Iniciamos el vuelo */
        avion.style.animation =
            "avionVolando 18s linear 1 forwards";


        console.log(
            "✈️ ¡El avión inició su vuelo!"
        );


        /* ==================================
           🌬️ ACTIVAR VIENTO
           unos segundos después del despegue
        ================================== */

        setTimeout(function () {

            activarViento();

            console.log(
                "🌬️ ¡El avión provocó viento!"
            );

        }, 9000);

    }

}, 3500);


/* ==========================================
   💛 ETAPA 4
   REVELACIÓN CINEMATOGRÁFICA
========================================== */

setTimeout(function () {

    console.log(
        "✈️ El avión salió completamente de escena."
    );


    /* ==========================================
       🌬️ CALMAR EL VIENTO
    ========================================== */

    const floresCampo =
        document.querySelectorAll(
            ".flor-campo"
        );

    floresCampo.forEach(function (flor) {

        flor.classList.remove("viento");

    });


    /* ==========================================
       ✨ PEQUEÑA PAUSA CINEMATOGRÁFICA
    ========================================== */

    setTimeout(function () {

if (mensaje) {

    mensaje.classList.add(
        "mensaje-visible"
    );

    mensaje.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

        console.log(
            "💛 Revelando el mensaje..."
        );

    }, 1800);


}, 22500);

    });

}

/* ==========================================
   4. FLORES
========================================== */

function activarFlores() {

    const flores =
        document.querySelectorAll(".flor");

    flores.forEach(function (flor, indice) {

        setTimeout(function () {

            flor.classList.add("flor-activa");

        }, indice * 700);

    });

}


/* ==========================================
   5. ABRIR LA CARTA 💌
========================================== */

if (btnCarta) {

    btnCarta.addEventListener("click", function () {

        if (!carta) return;

        const estaAbierta =
            carta.classList.contains("abierta");


        /* ==================================
           💌 ABRIR CARTA
        ================================== */

        if (!estaAbierta) {

            carta.classList.add("abierta");

            btnCarta.textContent =
                "Cerrar carta 🌼";


            /* ✨ Aparece el contenido después
               de que se abra el sobre */

            setTimeout(function () {

                const contenidoCarta =
                    document.querySelector(
                        ".contenido-carta"
                    );

                if (contenidoCarta) {

                    contenidoCarta.classList.add(
                        "contenido-visible"
                    );

                }

            }, 700);


            /* 📜 Llevar suavemente hacia la carta */

            setTimeout(function () {

                carta.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 1100);


            console.log(
                "💌 La carta se está abriendo..."
            );


        } else {

            /* ==================================
               💌 CERRAR CARTA
            ================================== */

            const contenidoCarta =
                document.querySelector(
                    ".contenido-carta"
                );

            if (contenidoCarta) {

                contenidoCarta.classList.remove(
                    "contenido-visible"
                );

            }


            setTimeout(function () {

                carta.classList.remove(
                    "abierta"
                );

            }, 250);


            btnCarta.textContent =
                "Tengo algo más que decirte 💌";


            console.log(
                "💌 La carta se cerró."
            );

        }

    });

}


/* ==========================================
   6. MÚSICA
========================================== */

function iniciarMusica() {

    if (!musica) return;


    /*
        Volumen suave.
    */

    musica.volume = 0.50;


    /*
        El navegador permite reproducir
        porque viene después de un clic.
    */

    musica.play()
        .then(function () {

            console.log(
                "🎵 La música comenzó correctamente."
            );

        })
        .catch(function (error) {

            console.log(
                "El navegador bloqueó la reproducción.",
                error
            );

        });

}


/* ==========================================
   7. CREAR PARTÍCULAS
========================================== */

const simbolos = [
    "✦",
    "✧",
    "♡",
    "✿",
    "❀",
    "✨"
];


function crearParticula() {

    if (!contenedorParticulas) return;


    /*
        Creamos un elemento nuevo.
    */

    const particula =
        document.createElement("span");


    particula.classList.add("particula");


    /*
        Elegimos un símbolo al azar.
    */

    const simbolo =
        simbolos[
            Math.floor(
                Math.random() * simbolos.length
            )
        ];


    particula.textContent = simbolo;


    /*
        Posición horizontal aleatoria.
    */

    particula.style.left =
        Math.random() * 100 + "%";


    /*
        Tamaño aleatorio.
    */

    particula.style.fontSize =
        12 + Math.random() * 18 + "px";


    /*
        Duración aleatoria.
    */

    particula.style.animationDuration =
        7 + Math.random() * 8 + "s";


    /*
        Retraso aleatorio.
    */

    particula.style.animationDelay =
        Math.random() * 2 + "s";


    /*
        La agregamos al jardín.
    */

    contenedorParticulas.appendChild(
        particula
    );


    /*
        Después de cierto tiempo,
        eliminamos la partícula.
    */

    setTimeout(function () {

        particula.remove();

    }, 18000);

}


/*
    Creamos una nueva partícula
    aproximadamente cada segundo.
*/

setInterval(crearParticula, 1000);


/* ==========================================
   8. EFECTO AL HACER CLIC
========================================== */

const simbolosClick = [
    "✦",
    "✧",
    "♡",
    "✨"
];


document.addEventListener(
    "click",
    function (evento) {

        const efecto =
            document.createElement("span");


        efecto.classList.add(
            "efecto-click"
        );


        efecto.textContent =
            simbolosClick[
                Math.floor(
                    Math.random() *
                    simbolosClick.length
                )
            ];


        efecto.style.left =
            evento.clientX + "px";


        efecto.style.top =
            evento.clientY + "px";


        document.body.appendChild(
            efecto
        );


        setTimeout(function () {

            efecto.remove();

        }, 900);

    }
);


/* ==========================================
   9. ANIMACIÓN DE ENTRADA
========================================== */

window.addEventListener(
    "load",
    function () {

        console.log(
            "🌼 Experiencia Flores Amarillas cargada."
        );

        console.log(
            "💛 Preparada para:",
            nombre
        );

    }
);


/* ==========================================
   10. EFECTO DE MOVIMIENTO DEL RATÓN
========================================== */

document.addEventListener(
    "mousemove",
    function (evento) {

        const flores =
            document.querySelectorAll(".flor");


        /*
            Calculamos la posición
            del mouse en la pantalla.
        */

        const movimientoX =
            (evento.clientX / window.innerWidth - 0.5);


        flores.forEach(function (flor, indice) {

            /*
                Cada flor se mueve un poquito
                diferente.
            */

            const intensidad =
                (indice + 1) * 3;


            const movimiento =
                movimientoX * intensidad;


            /*
                Solo aplicamos el efecto
                cuando todavía no está activa.
            */

            if (!flor.classList.contains("flor-activa")) {

                flor.style.marginLeft =
                    movimiento + "px";

            }

        });

    }
);


/* ==========================================
   FIN DEL SCRIPT 🌼
========================================== */

/* ==========================================
   🌼 CREAR CAMPO DE FLORES
========================================== */

const campoFlores =
    document.getElementById("campoFlores");


function crearFlorCampo() {

    if (!campoFlores) return;


    const flor =
        document.createElement("div");


    flor.classList.add("flor-campo");


    /*
        Posición horizontal aleatoria
    */

    flor.style.left =
        Math.random() * 100 + "%";


    /*
        Tamaño aleatorio
    */

    const tamano =
        16 + Math.random() * 18;

    flor.style.setProperty(
        "--tamano",
        tamano + "px"
    );


    /*
        Velocidad diferente
    */

    flor.style.setProperty(
        "--duracion",
        (3 + Math.random() * 3) + "s"
    );


    /*
        Retraso diferente
    */

    flor.style.setProperty(
        "--retraso",
        Math.random() * 3 + "s"
    );


    /*
        Algunas flores estarán
        adelante y otras atrás.
    */

    if (Math.random() > 0.5) {

        flor.classList.add("frente");

    } else {

        flor.classList.add("fondo");

    }


    campoFlores.appendChild(flor);

}


/*
   Creamos muchas flores al cargar.
*/

for (let i = 0; i < 90; i++) {

    crearFlorCampo();

}

/* ==========================================
   🌬️ VIENTO DEL AVIÓN
========================================== */

function activarViento() {

    const campo =
        document.getElementById("campoFlores");

    if (!campo) return;


    /* 🌼 Hacemos reaccionar las flores */

    const flores =
        document.querySelectorAll(".flor-campo");

    flores.forEach(function (flor) {

        flor.classList.remove("viento");

        void flor.offsetWidth;

        flor.classList.add("viento");

    });


    /* 💨 Creamos pequeñas corrientes */

    for (let i = 0; i < 7; i++) {

        const viento =
            document.createElement("span");

        viento.classList.add("viento-avion");

        viento.style.left =
            (25 + Math.random() * 50) + "%";

        viento.style.top =
            (20 + Math.random() * 45) + "%";

        campo.appendChild(viento);


        setTimeout(function () {

            viento.classList.add("activo");

        }, i * 120);


        setTimeout(function () {

            viento.remove();

        }, 1800 + i * 120);

    }


    /* ✨ Partículas doradas */

    for (let i = 0; i < 18; i++) {

        const particula =
            document.createElement("span");

        particula.classList.add(
            "particula-dorada"
        );

        particula.style.left =
            (35 + Math.random() * 35) + "%";

        particula.style.top =
            (20 + Math.random() * 55) + "%";

        particula.style.animationDelay =
            (Math.random() * 0.8) + "s";

        campo.appendChild(particula);


        setTimeout(function () {

            particula.remove();

        }, 2500);

    }
}

/* =========================================================
   🌼🌻 LLUVIA CONTINUA DE FLORES
   VERSIÓN FINAL
========================================================= */

(function () {

    const botonComenzar =
        document.getElementById(
            "btnComenzar"
        );


    if (!botonComenzar) {
        return;
    }


    let lluviaIniciada =
        false;


    let intervaloFlores =
        null;


    /* =====================================================
       🌼 TIPOS DE FLORES
    ===================================================== */

    const flores = [

        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "🌼"

    ];


    /* =====================================================
       🌼 CREAR UNA FLOR
    ===================================================== */

    function crearFlor(
        lluvia,
        inicial = false
    ) {

        const flor =
            document.createElement(
                "div"
            );


        const contenido =
            document.createElement(
                "span"
            );


        /* ===============================================
           🌼 ELEGIR FLOR
        =============================================== */

        contenido.textContent =
            flores[
                Math.floor(
                    Math.random() *
                    flores.length
                )
            ];


        flor.appendChild(
            contenido
        );


        flor.className =
            "flor-caida";


        /* ===============================================
           📍 POSICIÓN HORIZONTAL
        =============================================== */

        flor.style.left =
            (
                Math.random() *
                100
            ) + "%";


        /* ===============================================
           🌼 TAMAÑO
        =============================================== */

        const tamano =
            Math.floor(
                Math.random() *
                25
            ) + 22;


        flor.style.fontSize =
            tamano + "px";


        flor.style.setProperty(
            "--tamano",
            tamano + "px"
        );


        /* ===============================================
           ⏱️ VELOCIDAD
        =============================================== */

        const duracion =
            (
                Math.random() *
                3
            ) + 5;


        flor.style.setProperty(
            "--duracion",
            duracion + "s"
        );


        /* ===============================================
           ⏳ RETRASO
        =============================================== */

        const retraso =
            inicial
                ? (
                    Math.random() *
                    -5
                )
                : 0;


        flor.style.setProperty(
            "--retraso",
            retraso + "s"
        );


        /* ===============================================
           🍃 MOVIMIENTO LATERAL
        =============================================== */

        const movimiento1 =
            (
                Math.random() *
                220
            ) - 110;


        const movimiento2 =
            (
                Math.random() *
                320
            ) - 160;


        const movimiento3 =
            (
                Math.random() *
                420
            ) - 210;


        const movimiento4 =
            (
                Math.random() *
                500
            ) - 250;


        flor.style.setProperty(
            "--movimiento1",
            movimiento1 + "px"
        );


        flor.style.setProperty(
            "--movimiento2",
            movimiento2 + "px"
        );


        flor.style.setProperty(
            "--movimiento3",
            movimiento3 + "px"
        );


        flor.style.setProperty(
            "--movimiento4",
            movimiento4 + "px"
        );


        /* ===============================================
           🔄 ROTACIÓN
        =============================================== */

        flor.style.setProperty(
            "--rotacion1",
            (
                Math.random() *
                360 -
                180
            ) + "deg"
        );


        flor.style.setProperty(
            "--rotacion2",
            (
                Math.random() *
                720 -
                360
            ) + "deg"
        );


        flor.style.setProperty(
            "--rotacion3",
            (
                Math.random() *
                900 -
                450
            ) + "deg"
        );


        flor.style.setProperty(
            "--rotacion4",
            (
                Math.random() *
                1200 -
                600
            ) + "deg"
        );


        /* ===============================================
           🌪️ GIRO
        =============================================== */

        flor.style.setProperty(
            "--giro",
            (
                Math.random() *
                2
            ) + 1.4 + "s"
        );


        /* ===============================================
           ✨ ALGUNAS FLORES BRILLAN
        =============================================== */

        if (
            Math.random() <
            0.28
        ) {

            flor.classList.add(
                "brillante"
            );

        }


        lluvia.appendChild(
            flor
        );


        /* ===============================================
           🧹 ELIMINAR CUANDO TERMINE
        =============================================== */

        setTimeout(
            function () {

                if (
                    flor &&
                    flor.parentNode
                ) {

                    flor.remove();

                }

            },
            (
                duracion +
                2
            ) * 1000
        );

    }


    /* =====================================================
       🌼 INICIAR LLUVIA
    ===================================================== */

    function iniciarLluviaFlores() {

        if (lluviaIniciada) {
            return;
        }


        lluviaIniciada =
            true;


        /* ===============================================
           🌼 CONTENEDOR
        =============================================== */

        const lluvia =
            document.createElement(
                "div"
            );


        lluvia.className =
            "lluvia-flores";


        document.body.appendChild(
            lluvia
        );


        /* ===============================================
           🌼 PRIMERA LLUVIA
           MUCHAS FLORES DESDE EL PRINCIPIO
        =============================================== */

        for (
            let i = 0;
            i < 55;
            i++
        ) {

            crearFlor(
                lluvia,
                true
            );

        }


        /* ===============================================
           ✨ HACER VISIBLE
        =============================================== */

        requestAnimationFrame(
            function () {

                lluvia.classList.add(
                    "activa"
                );

            }
        );


        /* ===============================================
           🌻 LLUVIA CONTINUA
        =============================================== */

        intervaloFlores =
            setInterval(
                function () {

                    crearFlor(
                        lluvia
                    );

                },
                260
            );


        /* =====================================================
   🌼 DURACIÓN TOTAL
   VERSIÓN LARGA
===================================================== */

setTimeout(
    function () {

        clearInterval(
            intervaloFlores
        );


        intervaloFlores =
            null;


        /* =======================================
           🌼 DEJAR QUE LAS ÚLTIMAS FLORES
           TERMINEN SU RECORRIDO
        ======================================= */

        setTimeout(
            function () {

                lluvia.style.opacity =
                    "0";


                setTimeout(
                    function () {

                        lluvia.remove();

                    },
                    1800
                );

            },
            9000
        );


    },
    30000
);

    /* =====================================================
       🖱️ COMENZAR
    ===================================================== */

    botonComenzar.addEventListener(
        "click",
        function () {

            iniciarLluviaFlores();

        }
    );


})();
