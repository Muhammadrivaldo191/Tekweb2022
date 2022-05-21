Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            header: {
                title: 'Adelia Tresnani',
                desc: 'A student of Information Systems at Ahmad Dahlan University',
                imageProfile: "https://raw.githubusercontent.com/adeliat/tekweb2022/master/img/prof.jpg"
            },
            about: 'Someone who likes to organize and meet new people who add relationships and knowledge. She like new things because it makes herself challenged and want to know more. With the knowledge and abilities she currently has, she hopes to be able to help others and herself. The abilities she got so far are:',
            portofolio: [
                {
                    'title': 'Bootstrap',
                    'description': 'adalah framework HTML, CSS, dan JavaScript yang berfungsi untuk mendesain website responsive dengan cepat dan mudah',
                    'thumbnail': 'https://raw.githubusercontent.com/muhammadrivaldo191/Tekweb2022/main/img/image-4.jpg'
                {
                    title: 'CakePHP',
                    description: 'adalah framework pengembangan cepat gratis, open-source, yang digunakan untuk bahasa pemrograman PHPCSS merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam',
                    thumbnail": 'https://raw.githubusercontent.com/muhammadrivaldo191/Tekweb2022/main/img/image-4.jpg'
                },
                {
                    'title": 'Framework',
                    'description': 'adalah Istilah tersebut memiliki fungsi yang sangat besar bagi pengembangan kode program secara sistematis',
                    'thumbnail': 'https://raw.githubusercontent.com/muhammadrivaldo191/Tekweb2022/main/img/image-4.jpg'
            ],
            articles: 'Come Read More!!'
        };
    }
    }).mount("#app");
