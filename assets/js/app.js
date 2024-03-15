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
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: 'Mar 10, 2024',
                            hour: '15:50',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: 'Mar 10, 2024',
                            hour: '16:15',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    access: '... sta scrivendo',
                    messages: [
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:30',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:30',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: 'Feb 20, 2024',
                            hour: '16:35',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
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
                            text: 'Ciao zio, vai in campagna',
                            status: 'received'
                        },
                        {
                            date: 'Feb 18, 2024',
                            hour: '10:20',
                            text: 'Sicuro di non aver sbagliato chat? ',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 18, 2024',
                            hour: '16:15',
                            text: 'Ah scusa! Pensavo di aver scritto a mio Zio, che ha il tuo stesso nome.',
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
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: 'Feb 15, 2024',
                            hour: '15:50',
                            text: 'Si, ma preferirei andare al cinema',
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
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 23, 2024',
                            hour: '15:50',
                            text: 'Va bene, stasera la sento',
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
                            text: 'Ciao Ale, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 19, 2024',
                            hour: '15:50',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: 'Gen 19, 2024',
                            hour: '15:51',
                            text: 'Nessuna nuova, buona nuova',
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
                            text: 'Fai gli auguri a Federica che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 15, 2024',
                            hour: '15:50',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
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
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: 'Gen 0, 2024',
                            hour: '15:50',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 10, 2024',
                            hour: '15:51',
                            text: 'OK!!',
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
                            text: 'Buon Compleanno!',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 09, 2024',
                            hour: '15:50',
                            text: 'Grazie mille, a presto!',
                            status: 'received'
                        },
                        {
                            date: 'Gen 09, 2024',
                            hour: '15:51',
                            text: '<3',
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
                            text: 'Domani vai a fare la spesa?',
                            status: 'received'
                        },
                        {
                            date: 'Gen 08, 2024',
                            hour: '15:50',
                            text: 'Penso di sì, ti faccio sapere',
                            status: 'sent'
                        },
                        {
                            date: 'Gen 08, 2024',
                            hour: '15:51',
                            text: 'Ok!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContact: {}
        }
    },

    methods: {
        //Function to select the last message in each list
        lastMessage(contact) {
            const textLast = contact.messages[contact.messages.length - 1];
            let maxTextLast = textLast.text;

            //Condition to show max 60 characters in the preview
            if (maxTextLast.length > 60) {
                maxTextLast = maxTextLast.substring(0, 57) + '...';
            }

            //Format the date to show it without the year
            const dateLast = textLast.date.substring(0, 6);
            return { ...textLast, text: maxTextLast, date: dateLast }
        },

        //Function to select the contact
        selectContact(contact) {
            this.activeContact = contact;
        },

        //Function to send message from input
        sendMessage() {
            const inputText = document.getElementById('input-message').value;

            //Check if the text is not an empty string
            if (inputText.trim() !== '') {
                const nowTime = luxon.DateTime.now();
                const formattedDate = nowTime.toLocaleString(luxon.DateTime.DATE_MED);
                const formattedHour = nowTime.toLocaleString(luxon.DateTime.TIME_24_SIMPLE);

                //Add the sent message to array
                this.activeContact.messages.push({
                    date: formattedDate,
                    hour: formattedHour,
                    text: inputText,
                    status: 'sent'
                });

                //Clear the input
                document.getElementById('input-message').value = '';

                //Add the received message to the array
                setTimeout(() => {
                    this.activeContact.messages.push({
                        date: formattedDate,
                        hour: formattedHour,
                        text: 'Ok!',
                        status: 'received'
                    })
                }, 2000)
            }
        }

    },

    mounted() {
        //Set the default contact to show on refresh
        this.activeContact = this.contacts.length > 0 ? this.contacts[0] : {};

    }
}).mount('#app')