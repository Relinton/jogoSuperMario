* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.game-mario {
    width: 100%;
    height: 100vh;
    border-bottom: 15px solid rgb(35, 160, 35);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: linear-gradient(#87CEEB, #E0F6FF)
}

.cano {
    position: absolute;
    bottom: 0;
    width: 4%;
    animation: cano-de-animacao 1.5s infinite linear;
}

@media (max-width: 500px) {
    .cano {
        position: absolute;
        bottom: 0;
        width: 9%;
        animation: cano-de-animacao 1.5s infinite linear;
    }
}

.mario {
    width: 100px;
    position: absolute;
    bottom: 0;
}

.pulo {
    animation: pulo 500ms ease-out;
}

@keyframes cano-de-animacao {
    from {
        right: -80px;
    }

    to {
        right: 100%;
    }
}

@keyframes pulo {
    0% {
        bottom: 0;
    }

    40% {
        bottom: 280px;
    }

    50% {
        bottom: 280px;
    }

    60% {
        bottom: 280px;
    }

    70% {
        bottom: 300px;
    }


    80% {
        bottom: 300px;
    }


    90% {
        bottom: 300px;
    }

    100% {
        bottom: 0;
    }
}
