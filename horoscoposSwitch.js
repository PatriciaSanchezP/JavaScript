let horoscopo = prompt("Descubre qué personaje de Shrek eres ¿Qué signo eres? (escribir de ésta forma cada signo: Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario, Piscis)" );
switch(horoscopo){
    case "Aries":
       console.log("Burro: No te callas ni debajo del agua, de apariencia dura pero muy blandito en el fondo, eres la mejor compañía, no suelen tomarte en serio, un poco impulsivo, a la mínima te pones de los nervios");
       break;
    
    case "Tauro":
        console.log("Shrek: Muy terco y de ideas fijas, un poco solitario, te gusta demasiado tener tu espacio, con un gran corazón, protector y leal con tus amigos cercanos, cuando te enamoras, lo haces de verdad");
        break;

    case "Géminis":
       console.log("Fiona: Doble personalidad, puedes ser princesa y otro día ogro, siempre sorprendes, la mejor guardando secretos, no necesitas un príncipe azul, eres una persona fuerte y decidida, con principios que respetas, ante todo");
       break;

    case "Cáncer":
        console.log("Jengibre: Sensible y adorable, tienes mucha fuerza interior, te muestras débil al resto, pero después eres todo lo contrario, hablas de más y te metes a menudo en problemas, un poco miedoso en situaciones importantes");
        break;

    case "Leo":
       console.log("Príncipe encantador: Extrovertido y sociable, no te gusta nada que te manden, sabes persuadir, al final siempre consigues lo que quieres, no te conformas con poco, llamas la atención allá por donde vayas");
       break;

    case "Virgo":
        console.log("Hada madrina: Eres muy astuto y analizas todo al detalle, siempre en tu beneficio, si hace falta molestar a alguien no te tiembla el pulso, lo haces, muy protector con los tuyos, resuelves problemas ajenos, mucho potencial escondido");
        break;

    case "Libra":
       console.log("Doris: No te dejas intimidar fácilmente, la lealtad es esencial para ti, tu apariencia no tiene nada que ver contigo, te lo suelen decir, defiendes a las personas que te importan, de primeras sueles imponer un poco por tu carácter");
       break;

    case "Escorpio":
        console.log("Gato con botas: Muy astuto e ingenioso, utilizas tu lado tierno y adorable para engañar a los demás, valoras lo elegante y sofisticado, un poco manipulador en ocasiones, cuando te conviene, tienes un humor que no es para todo el mundo");
        break;

    case "Sagitario":
       console.log("Dragona: Demasiado intenso en la vida, sensible y con un gran corazón, eres lo más protector que existe en este mundo, cuando te enfadas escupes fuego por tu boca, idealizas demasiado a las personas que tienes cerca");
       break;

    case "Capricornio":
        console.log("Espejo mágico: Muy leal y valioso, te encanta contar historias y criticar de vez en cuando, convences fácil al resto, eres el mejor dando consejos, tienes mucha intuición, súper sincero, dices las cosas aunque duelan");
        break;

    case "Acuario":
       console.log("Lord Farquaad: Muy criticado y envidiado, inseguro de nacimiento, tu prioridad eres única y exclusivamente tú, pequeñito pero matón, inconformista, nunca estás satisfecho con lo que tienes, un poco gruñón y mandón");
       break;

    case "Piscis":
        console.log("Pinocho: Inocente y sincero, un poco impulsivo, actúas sin pensar en las consecuencias, vas a tu ritmo, pero siempre estás para los demás, en las buenas y en las malas, vives en tu mundo de fantasía, lloras por todo");
        break;

    default:
        console.log("Por favor asegúrate de escribir un signo presente en la lista inicial y de respetar mayúsculas y acentos")
}   