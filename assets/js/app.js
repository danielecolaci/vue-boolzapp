const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 13:07',
                    messages: [
                        {
                            date: 'Mar 10, 2024',
                            hour: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: 'Mar 10, 2024',
                            hour: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: 'Mar 10, 2024',
                            hour: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    access: '...sta scrivendo',
                    messages: [
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    access: 'online',
                    messages: [
                        {
                            date: 'Feb 18, 2024',
                            hour: '10:10',
                            message: 'Ciao zio, vai in campagna',
                            status: 'received'
                        },
                        {
                            date: 'Feb 18, 2024',
                            hour: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 18, 2024',
                            hour: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Danilo',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 10:07',
                    messages: [
                        {
                            date: 'Feb 15, 2024',
                            hour: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 15, 2024',
                            hour: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 09:07',
                    messages: [
                        {
                            date: 'Gen 23, 2024',
                            hour: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 23, 2024',
                            hour: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandra',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 08:07',
                    messages: [
                        {
                            date: 'Gen 19, 2024',
                            hour: '15:30',
                            message: 'Ciao Ale, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 19, 2024',
                            hour: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: 'Gen 19, 2024',
                            hour: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Giovanni',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 07:07',
                    messages: [
                        {
                            date: 'Gen 15, 2024',
                            hour: '15:30',
                            message: 'Fai gli auguri a Federica che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 15, 2024',
                            hour: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Susanna',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    access: 'online',
                    messages: [
                        {
                            date: 'Gen 10, 2024',
                            hour: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: 'Gen 0, 2024',
                            hour: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 10, 2024',
                            hour: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Federica',
                    avatar: './assets/img/avatar_9.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 05:07',
                    messages: [
                        {
                            date: 'Gen 09, 2024',
                            hour: '00:30',
                            message: 'Buon Compleanno!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 09, 2024',
                            hour: '15:50',
                            message: 'Grazie mille, a presto!',
                            status: 'received'
                        },
                        {
                            date: 'Gen 09, 2024',
                            hour: '15:51',
                            message: '<3',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Tina',
                    avatar: './assets/img/avatar_10.jpg',
                    visible: true,
                    access: 'Ultimo accesso alle 04:07',
                    messages: [
                        {
                            date: 'Gen 08, 2024',
                            hour: '15:30',
                            message: 'Domani vai a fare la spesa?',
                            status: 'received'
                        },
                        {
                            date: 'Gen 08, 2024',
                            hour: '15:50',
                            message: 'Penso di sì, ti faccio sapere',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 08, 2024',
                            hour: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {
        lastMessage(contact) {
            const textLast = contact.messages[contact.messages.length - 1];
            const dateLast = textLast.date.substring(0, 6);
            return { ...textLast, date: dateLast }
        }
    }
}).mount('#app')