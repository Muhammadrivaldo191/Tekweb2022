Vue.createApp({
  data() {
    return {
      header: {},
      articles: [],
    };
  },
  methods: {
    getHeaderData() {
      portofolio
        .get('https://raw.githubusercontent.com/Muhammadrivaldo191/Tekweb2022/main/contens/header.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticlesData() {
      portofolio
        .get('https://raw.githubusercontent.com/Muhammadrivaldo191/Tekweb2022/main/contens/articles.json')
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
    this.getArticlesData();
  },
}).mount('#app');
