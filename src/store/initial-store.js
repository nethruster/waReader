// const initialStore = {
//   chat: {
//     messages: [],
//     authors: [],
//     isGroup: false
//   },
//   isChatLoaded: false,
//   activeTab: 'chat'
// };

// Dev purposes only, restore above code for the actual initial store
const initialStore = {
  chat: {
    messages: [
      {
        date: '2017-05-30T21:13:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:13',
        author: 'System',
        message:
          'Messages to this group are now secured with end-to-end encryption. Tap for more info.'
      },
      {
        date: '2017-05-30T20:59:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '22:59',
        author: 'System',
        message: 'Roger Arias created group “Toni es un piratilla 😏”'
      },
      {
        date: '2017-05-30T21:13:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:13',
        author: 'System',
        message: 'Roger Arias added you'
      },
      {
        date: '2017-05-30T21:14:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:14',
        author: 'Iris',
        message: 'Yo dispongo de coche ese día!🙋🏻'
      },
      {
        date: '2017-05-30T21:14:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:14',
        author: 'Iris',
        message: 'Caben 7 en el mío😬'
      },
      {
        date: '2017-05-30T21:15:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:15',
        author: 'Marc Cajaraville',
        message:
          'Bueno, nanit a tots, q mañana hay q levantarse pronto... Ya responderé mañana a todas las cosas y tonterias q digais 😆😉'
      },
      {
        date: '2017-05-30T21:16:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:16',
        author: 'Roger Arias',
        message: 'Yastamos'
      },
      {
        date: '2017-05-30T21:16:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:16',
        author: 'Roger Arias',
        message: 'Levantarse pronto esta sobrevalorado'
      },
      {
        date: '2017-05-30T21:16:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:16',
        author: 'Iris',
        message: 'Vale! Bona nit Marc!😴🌚'
      },
      {
        date: '2017-05-30T21:16:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:16',
        author: 'Marc Cajaraville',
        message: '😆😆'
      },
      {
        date: '2017-05-30T21:18:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:18',
        author: 'Iris',
        message: 'Shiiit! Han pillado las 5 del medio xd'
      },
      {
        date: '2017-05-30T21:19:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:19',
        author: 'Roger Arias',
        message: 'Puta bida tete'
      },
      {
        date: '2017-05-30T21:19:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:19',
        author: 'Iris',
        message: '<Media omitted>'
      },
      {
        date: '2017-05-30T21:19:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:19',
        author: 'Roger Arias',
        message: 'Los hdp de detras son los más guais del mundo o qué?!'
      },
      {
        date: '2017-05-30T21:19:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:19',
        author: 'Iris',
        message: 'XD'
      },
      {
        date: '2017-05-30T21:20:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:20',
        author: 'gariasf',
        message: 'Hola ckikiscrubs'
      },
      {
        date: '2017-05-30T21:20:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:20',
        author: 'gariasf',
        message: 'Ofc'
      },
      {
        date: '2017-05-30T21:20:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:20',
        author: 'Iris',
        message:
          'Bueno, en principio solo faltan miky y toni para confirmar!\nCuando digan algo las compro'
      },
      {
        date: '2017-05-30T21:20:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:20',
        author: 'Iris',
        message: 'Hola Guillem!'
      },
      {
        date: '2017-05-30T21:20:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:20',
        author: 'Roger Arias',
        message: 'ANTONIOOOO'
      },
      {
        date: '2017-05-30T21:21:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:21',
        author: 'Iris',
        message: 'XD'
      },
      {
        date: '2017-05-30T21:21:00.000Z',
        dateString: '30/05/2017',
        dateDay: 2,
        time: '23:21',
        author: 'Iris',
        message: 'No cuelaaaa'
      },
      {
        date: '2017-05-31T05:36:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '07:36',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Si es a la 19 no puedo 😵😞'
      },
      {
        date: '2017-05-31T05:53:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '07:53',
        author: 'Iris',
        message: '😰'
      },
      {
        date: '2017-05-31T05:53:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '07:53',
        author: 'Iris',
        message: 'Te va mejor antes o después de esa hora?'
      },
      {
        date: '2017-05-31T07:26:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '09:26',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Después'
      },
      {
        date: '2017-05-31T07:27:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '09:27',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Sobre la 8:30'
      },
      {
        date: '2017-05-31T07:38:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '09:38',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Hola a todos! 👋👋'
      },
      {
        date: '2017-05-31T07:39:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '09:39',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'A mi a las 19 me va bastante mal😟'
      },
      {
        date: '2017-05-31T08:54:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:54',
        author: 'Roger Arias',
        message:
          'Sobre las 8.30 quieres decir que estas disponible? Xq entonces quiere decir coger una session mas tarde aún...'
      },
      {
        date: '2017-05-31T08:55:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:55',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Correcto'
      },
      {
        date: '2017-05-31T08:55:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:55',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Pero si os va a mal a todos suda'
      },
      {
        date: '2017-05-31T08:55:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:55',
        author: 'Roger Arias',
        message: 'Pues después de la de las 19.50, no hay hasta las 22.00'
      },
      {
        date: '2017-05-31T08:56:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:56',
        author: 'Roger Arias',
        message: 'Bueno comentad los demás y dicidimous'
      },
      {
        date: '2017-05-31T08:57:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:57',
        author: 'Iris',
        message:
          'Yo por mi no problem, el lunes tengo fiesta, pero Marta creo que no tenia'
      },
      {
        date: '2017-05-31T08:59:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:59',
        author: 'Gonçalio',
        message: 'si se coge a las 22 sería acabar a las 23:30-12'
      },
      {
        date: '2017-05-31T08:59:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '10:59',
        author: 'Gonçalio',
        message: 'a mi me es indiferente'
      },
      {
        date: '2017-05-31T09:09:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '11:09',
        author: 'gariasf',
        message: 'Idem'
      },
      {
        date: '2017-05-31T10:05:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '12:05',
        author: 'Marc Cajaraville',
        message:
          'Bueno, yo al dia siguiente tngo q levantarme pronto, pero bueno, si a todos os va mejor esa hora, se podria mirar a las 22 h 😉'
      },
      {
        date: '2017-05-31T11:13:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:13',
        author: 'Marta',
        message: 'Yo el lunes trabajo si'
      },
      {
        date: '2017-05-31T11:13:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:13',
        author: 'Marta',
        message: 'Pero bueno'
      },
      {
        date: '2017-05-31T11:14:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:14',
        author: 'Marta',
        message: 'Que hi farem 😅'
      },
      {
        date: '2017-05-31T11:21:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:21',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Por mí perfecto a las 22h'
      },
      {
        date: '2017-05-31T11:23:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:23',
        author: 'gariasf',
        message: 'Vena va, un poco de #yolo'
      },
      {
        date: '2017-05-31T11:28:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '13:28',
        author: 'Roger Arias',
        message: 'Together we can stop this.\nhttps://youtu.be/7Zm1hPbmzPw'
      },
      {
        date: '2017-05-31T14:46:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '16:46',
        author: 'Marc Cajaraville',
        message: '😆😆😆'
      },
      {
        date: '2017-05-31T17:25:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '19:25',
        author: 'Gonçalio',
        message: 'no me acordaba del. nigga este xDDad'
      },
      {
        date: '2017-05-31T17:58:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '19:58',
        author: 'gariasf',
        message: '😂😂'
      },
      {
        date: '2017-05-31T17:58:00.000Z',
        dateString: '31/05/2017',
        dateDay: 3,
        time: '19:58',
        author: 'gariasf',
        message: 'Es el puto amo'
      },
      {
        date: '2017-06-01T11:02:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:02',
        author: '\u202a+34 690 73 27 21\u202c',
        message:
          'Os parece bien que avise al Alejandro torada que venga a ver la peli con nosotros?'
      },
      {
        date: '2017-06-01T11:02:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:02',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Hace tiempo que me dijo de ir a verla'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Iris',
        message: 'Okis! No problem'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Iris',
        message: 'Entonces que, reservo para la sesión de las 19h?'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Roger Arias',
        message: 'Pero con alejandro somos 11, no?'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Gonçalio',
        message: 'no habiamos quedao a las 22? xD'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Iris',
        message: 'Si pasamos de 10 alguien tendrá q pagar la entrada a 9,90'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Iris',
        message: 'Eso'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Iris',
        message: '22h'
      },
      {
        date: '2017-06-01T11:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:10',
        author: 'Gonçalio',
        message: 'xDD'
      },
      {
        date: '2017-06-01T11:11:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:11',
        author: 'Roger Arias',
        message: 'El tema coche qué? Como nos organizamos?'
      },
      {
        date: '2017-06-01T11:11:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:11',
        author: 'Roger Arias',
        message: 'Quién lleva?'
      },
      {
        date: '2017-06-01T11:12:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:12',
        author: 'Gonçalio',
        message: 'andsndo'
      },
      {
        date: '2017-06-01T11:12:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:12',
        author: 'gariasf',
        message: '👆🏼'
      },
      {
        date: '2017-06-01T11:13:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:13',
        author: 'Iris',
        message: 'Yo llevo uno'
      },
      {
        date: '2017-06-01T11:13:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:13',
        author: 'Iris',
        message: 'Que se ofrezca otro a llevar el otro'
      },
      {
        date: '2017-06-01T11:13:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:13',
        author: 'Iris',
        message: 'Y decidme si al final si o no a las 22h y cuantos somos'
      },
      {
        date: '2017-06-01T11:17:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:17',
        author: '\u202a+34 657 93 32 14\u202c',
        message: 'Yo 22 si'
      },
      {
        date: '2017-06-01T11:32:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:32',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Yo 22 si y pongo coche'
      },
      {
        date: '2017-06-01T11:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:36',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Yo si a las 22'
      },
      {
        date: '2017-06-01T11:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:36',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Ahora confirmo por el torada y si tiene coche o no'
      },
      {
        date: '2017-06-01T11:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:36',
        author: 'Iris',
        message: 'Con 2 coches ya vamis'
      },
      {
        date: '2017-06-01T11:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:36',
        author: 'Iris',
        message: 'Yo tengo uno de 7 plazas!'
      },
      {
        date: '2017-06-01T11:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:45',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Perfect'
      },
      {
        date: '2017-06-01T11:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:45',
        author: 'Roger Arias',
        message: 'Meted al torada al grupo'
      },
      {
        date: '2017-06-01T11:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:45',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Yo llevo a l rata del Miky'
      },
      {
        date: '2017-06-01T11:50:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:50',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Así me gusta chófer, sin yo pedirlo'
      },
      {
        date: '2017-06-01T11:54:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:54',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Imagino que ya no quedan butacas no?'
      },
      {
        date: '2017-06-01T11:55:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:55',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'El torada se apunta también'
      },
      {
        date: '2017-06-01T11:55:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:55',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Alex.vcf (file attached)'
      },
      {
        date: '2017-06-01T11:58:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '13:58',
        author: '\u202a+34 662 22 79 31\u202c',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:00:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:00',
        author: 'Roger Arias',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:01:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:01',
        author: 'Gonçalio',
        message: 'no'
      },
      {
        date: '2017-06-01T12:01:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:01',
        author: '\u202a+34 662 22 79 31\u202c',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:01:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:01',
        author: 'Roger Arias',
        message: 'Okey'
      },
      {
        date: '2017-06-01T12:01:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:01',
        author: '\u202a+34 662 22 79 31\u202c',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:03:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:03',
        author: 'Iris',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:03:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:03',
        author: '\u202a+34 690 73 27 21\u202c',
        message:
          'Bueno esperad que ahora no sabe si puede el Álex, si viene con la novia o no'
      },
      {
        date: '2017-06-01T12:03:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:03',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'El pillara las restantes'
      },
      {
        date: '2017-06-01T12:03:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:03',
        author: 'Roger Arias',
        message: 'Es lo que hemos dicho antes miky xD'
      },
      {
        date: '2017-06-01T12:04:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:04',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Sisi esas están perfect'
      },
      {
        date: '2017-06-01T12:04:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:04',
        author: '\u202a+34 690 73 27 21\u202c',
        message:
          'Yaya, pero me dice que no sabe si va a venir, osea que no os preocupéis'
      },
      {
        date: '2017-06-01T12:04:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:04',
        author: 'Roger Arias',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:04:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:04',
        author: 'Roger Arias',
        message: '@34672028931'
      },
      {
        date: '2017-06-01T12:05:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:05',
        author: 'Roger Arias',
        message: 'Estoy llamando al 012 para enviar una ambulancia a tu casa'
      },
      {
        date: '2017-06-01T12:06:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:06',
        author: 'Roger Arias',
        message: 'Probablemente estes en choc'
      },
      {
        date: '2017-06-01T12:06:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:06',
        author: '\u202a+34 690 73 27 21\u202c',
        message: '😂😂😂'
      },
      {
        date: '2017-06-01T12:07:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:07',
        author: 'Iris',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:07:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:07',
        author: 'Roger Arias',
        message: 'Gracias! Mi TOC ya está tranquilo ahora'
      },
      {
        date: '2017-06-01T12:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:10',
        author: 'Iris',
        message: '<Media omitted>'
      },
      {
        date: '2017-06-01T12:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:10',
        author: 'Iris',
        message: 'Ya he impreso el comprobante'
      },
      {
        date: '2017-06-01T12:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:10',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Bravo'
      },
      {
        date: '2017-06-01T12:11:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:11',
        author: 'Iris',
        message: '✌🏻'
      },
      {
        date: '2017-06-01T12:11:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:11',
        author: '\u202a+34 662 22 79 31\u202c',
        message:
          'Yo creía que la saldas eras la dulces i las dulces saladas... ahora todo tiene sentido gracias Ruch-san'
      },
      {
        date: '2017-06-01T12:15:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '14:15',
        author: 'Gonçalio',
        message: 'sensei'
      },
      {
        date: '2017-06-01T13:08:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '15:08',
        author: 'System',
        message: 'Roger Arias added \u202a+34 659 16 05 38\u202c'
      },
      {
        date: '2017-06-01T13:08:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '15:08',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Holi a todos'
      },
      {
        date: '2017-06-01T13:15:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '15:15',
        author: 'Gonçalio',
        message: '😎'
      },
      {
        date: '2017-06-01T13:34:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '15:34',
        author: 'gariasf',
        message: 'Nes'
      },
      {
        date: '2017-06-01T14:53:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:53',
        author: 'Marc Cajaraville',
        message: '😆😆👍🏻👍🏻👏🏻👏🏻'
      },
      {
        date: '2017-06-01T14:55:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:55',
        author: 'Marc Cajaraville',
        message: 'Eres una liante Iris, 2a vez q te pasa ya... 😆😆😜'
      },
      {
        date: '2017-06-01T14:55:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:55',
        author: 'Marc Cajaraville',
        message: 'Madre mia, al final llenamos la sala nosotros solos 😆😆'
      },
      {
        date: '2017-06-01T14:56:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:56',
        author: 'Marc Cajaraville',
        message: 'Buenisimo lo d las palomitas jajajajaja 😉'
      },
      {
        date: '2017-06-01T14:56:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:56',
        author: 'Marta',
        message:
          'Ajajajaj, es que le pasa como a mi, que en el fondo prefiere ir a las 19h 🙊'
      },
      {
        date: '2017-06-01T14:56:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:56',
        author: 'Marc Cajaraville',
        message: 'Idem jajajajaja'
      },
      {
        date: '2017-06-01T14:57:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:57',
        author: 'Marta',
        message:
          'A ver marranos, (va por Toni y Miki), en serio no teneis opcion de arreglarlo para ir antes?'
      },
      {
        date: '2017-06-01T14:57:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:57',
        author: 'Marta',
        message: 'Para los que al dia siguiente curramos es un poco muerte'
      },
      {
        date: '2017-06-01T14:58:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:58',
        author: '\u202a+34 657 93 32 14\u202c',
        message: 'Diría a ya están compradas...👩🏿\u200d🎤'
      },
      {
        date: '2017-06-01T14:58:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:58',
        author: '\u202a+34 657 93 32 14\u202c',
        message: 'Q ya*'
      },
      {
        date: '2017-06-01T14:58:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:58',
        author: 'Marta',
        message: 'Pues nada 😅💩'
      },
      {
        date: '2017-06-01T14:59:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '16:59',
        author: '\u202a+34 657 93 32 14\u202c',
        message: '(Confirmado, compradas 😟)'
      },
      {
        date: '2017-06-01T15:05:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '17:05',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Nope, sino hubiera dicho que si a las 19:00 😕'
      },
      {
        date: '2017-06-01T15:06:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '17:06',
        author: 'Marta',
        message: 'Ya... eres muy lobo tu 🐺'
      },
      {
        date: '2017-06-01T15:08:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '17:08',
        author: '\u202a+34 662 22 79 31\u202c',
        message: 'Cuanto odio...🔪'
      },
      {
        date: '2017-06-01T15:13:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '17:13',
        author: 'Marc Cajaraville',
        message: 'Jajajajajajaja'
      },
      {
        date: '2017-06-01T18:30:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '20:30',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'El lunes es segunda pascua'
      },
      {
        date: '2017-06-01T18:30:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '20:30',
        author: '\u202a+34 659 16 05 38\u202c',
        message: '😊'
      },
      {
        date: '2017-06-01T19:06:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:06',
        author: 'Marc Cajaraville',
        message:
          'Sip, por eso vamos un domingo x la noche al cine, pq varios tenemos fiesta al dia siguiente, si no... 😆😉'
      },
      {
        date: '2017-06-01T19:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:10',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Casi lloro al enterarme'
      },
      {
        date: '2017-06-01T19:10:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:10',
        author: 'Roger Arias',
        message: 'Marta trabaja igualmente'
      },
      {
        date: '2017-06-01T19:26:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:26',
        author: '\u202a+34 690 73 27 21\u202c',
        message: 'Yo también 😅'
      },
      {
        date: '2017-06-01T19:32:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:32',
        author: 'Gonçalio',
        message: 'mmm'
      },
      {
        date: '2017-06-01T19:33:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:33',
        author: 'Gonçalio',
        message: 'cuantos somos al final?'
      },
      {
        date: '2017-06-01T19:33:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:33',
        author: 'Gonçalio',
        message:
          'lo digoo por que se vendra berta tambien 🤓 y no se como esta el tema car'
      },
      {
        date: '2017-06-01T19:34:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:34',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Yo estoy en pendiente según me diga nuria'
      },
      {
        date: '2017-06-01T19:34:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:34',
        author: '\u202a+34 659 16 05 38\u202c',
        message: '😔'
      },
      {
        date: '2017-06-01T19:35:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:35',
        author: 'Marc Cajaraville',
        message: 'Reservamos la sala entera? 😆'
      },
      {
        date: '2017-06-01T19:35:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:35',
        author: 'Gonçalio',
        message: 'xd'
      },
      {
        date: '2017-06-01T19:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:36',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'JajJa'
      },
      {
        date: '2017-06-01T19:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:36',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Casi'
      },
      {
        date: '2017-06-01T19:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:36',
        author: 'Marc Cajaraville',
        message: 'Van a hacer el Agosto con nosotros al final... 😆'
      },
      {
        date: '2017-06-01T19:36:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:36',
        author: 'Gonçalio',
        message: 'no. pasa nah'
      },
      {
        date: '2017-06-01T19:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:45',
        author: 'Roger Arias',
        message: 'Estoy reservando el Splau entero, un momentito por favor'
      },
      {
        date: '2017-06-01T19:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:45',
        author: 'Gonçalio',
        message: 'privado pls'
      },
      {
        date: '2017-06-01T19:45:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:45',
        author: 'Gonçalio',
        message: 'vip'
      },
      {
        date: '2017-06-01T19:46:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:46',
        author: 'Roger Arias',
        message:
          'Calculamos que a este ritmo, para domingo, vamos a llegar a los 300 asistentes'
      },
      {
        date: '2017-06-01T19:46:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:46',
        author: 'Gonçalio',
        message: 'suerte'
      },
      {
        date: '2017-06-01T19:46:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:46',
        author: 'Roger Arias',
        message: '😂'
      },
      {
        date: '2017-06-01T19:48:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '21:48',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Yo solo conozco a leonidas'
      },
      {
        date: '2017-06-01T20:46:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '22:46',
        author: 'Marc Cajaraville',
        message: 'Jajajajajajaja 😆'
      },
      {
        date: '2017-06-01T21:31:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:31',
        author: 'Iris',
        message: 'Pues casi casi xdd'
      },
      {
        date: '2017-06-01T21:32:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:32',
        author: 'Iris',
        message:
          'Pues 7 de mi coche y 5 del de toni, así que cabemos 12 personas'
      },
      {
        date: '2017-06-01T21:32:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:32',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Yo dependiendo ire con el mio'
      },
      {
        date: '2017-06-01T21:33:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:33',
        author: 'Iris',
        message:
          'Okis, pues dinos algo cuando puedas, a ver si se puede venir verta también'
      },
      {
        date: '2017-06-01T21:33:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:33',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Shiii'
      },
      {
        date: '2017-06-01T21:33:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:33',
        author: 'Iris',
        message: 'Jope! Maldito corrector xd Berta*'
      },
      {
        date: '2017-06-01T21:34:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:34',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Por supuesto estoy a la esperda de las ordenes del comandante'
      },
      {
        date: '2017-06-01T21:34:00.000Z',
        dateString: '01/06/2017',
        dateDay: 4,
        time: '23:34',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Jjajaja'
      },
      {
        date: '2017-06-02T10:10:00.000Z',
        dateString: '02/06/2017',
        dateDay: 5,
        time: '12:10',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Yo bajare con mi coche'
      },
      {
        date: '2017-06-02T10:10:00.000Z',
        dateString: '02/06/2017',
        dateDay: 5,
        time: '12:10',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Al splau'
      },
      {
        date: '2017-06-02T10:11:00.000Z',
        dateString: '02/06/2017',
        dateDay: 5,
        time: '12:11',
        author: '\u202a+34 659 16 05 38\u202c',
        message: 'Luego tengo que pasar por terrasa\n'
      }
    ],
    authorList: [
      'Iris',
      'Marc Cajaraville',
      'Roger Arias',
      'gariasf',
      '\u202a+34 662 22 79 31\u202c',
      '\u202a+34 690 73 27 21\u202c',
      'Gonçalio',
      'Marta',
      '\u202a+34 657 93 32 14\u202c',
      '\u202a+34 659 16 05 38\u202c'
    ],
    isGroup: true
  },
  isChatLoaded: true,
  activeTab: 'chat'
};

export default initialStore;
