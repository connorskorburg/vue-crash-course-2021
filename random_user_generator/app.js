const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@mail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            // console.log(results);
            const { name: { first, last }, email, gender, picture: { large: largePicture } } = results[0];

            this.firstName = first,
            this.lastName = last,
            this.email = email,
            this.gender = gender,
            this.picture = largePicture
        }
    }
});

app.mount('#app');