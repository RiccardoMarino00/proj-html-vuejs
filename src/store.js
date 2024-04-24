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
            text: 'lente',
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