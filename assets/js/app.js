import { contacts } from './contacts.js';

const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: contacts,

            activeContact: {},

            searchedContacts: [],
            searchModel: ''
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
        },

        //Function to search and filter contacts
        searchContacts() {
            console.log(this.searchModel);

            this.searchedContacts = this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchModel.toLowerCase())
            )

            console.log(this.searchedContacts);
        },

        //Function to delete a message on click
        deleteMessage(index) {
            this.activeContact.messages.splice(index, 1)
        }

    },

    mounted() {
        //Set the default contact-chat view on refresh
        this.activeContact = this.contacts[0];

        //Set the default contact-list view on refresh
        this.searchedContacts = this.contacts;

    }

}).mount('#app')