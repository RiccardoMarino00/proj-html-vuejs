import {reactive} from 'vue'
const store = reactive ({
    headerMenu: [
        {
            text: 'Home',
            url: '#'
        },
        {
            text: 'Recipes',
            url: '#'
        },
        {
            text: 'Places',
            url: '#'
        },
        {
            text: 'Blog',
            url: '#'
        },
        {
            text: 'About',
            url: '#'
        },
        {
            text: 'Contact',
            url: '#'
        },
        {
            text: 'Cerca',
            url: '#'
        },

    ],

    footerMenu: [
        {
            text: 'Recipes',
            url: '#'
        },
        {
            text: 'Places',
            url: '#'
        },
        {
            text: 'Blog',
            url: '#'
        },
        {
            text: 'About',
            url: '#'
        },
        {
            text: 'Contact',
            url: '#'
        },
    ]
})

export default store