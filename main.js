Vue.createApp({
    data() {
      return {
        header: {
          title: "Muhammad Rivaldo",
          description: "Kerja keras apa pun hasilnya jangan lupa untuk tetap bersyukur",
          imageProfile: "https://github.com/Muhammadrivaldo191/Tekweb2022/blob/main/img/image-1.png",
          social: {
            ig: {
              url: "https://instagram.com/muhammadrivaldo._",
              title: "Muhammad Rivaldo",
            },
            fb: {
              url: "https://web.facebook.com/Muhammad rivaldo/",
              title: "Muhammad Rivaldo",
            },
            github: {
              url: "https://github.com/Muhammadrivaldo191/",
              title: "Muhammad Rivaldo",
            },
          },

        },
        articles1: 
          {
            title: 'Kabar Futsal Indonesia',
            description: "kabar terbaru tentang futsal idnonesia.e",
            thumbnail: 'img/image-5.jpg',
          },
        
        articles2: 
          {
            title: 'Tips Menambah Stamina',
            description: "Menjaga kebugaran tubuh menjadi kunci untuk meningkatkan stamina serta performa Anda di lapangan.",
            thumbnail: 'img/image-6.jpg',
          },
        
          articles3: 
          {
            title: 'Imunitas Saat Pandemi',
            description: "Pola hidup sehat merupakan gaya hidup yang memperhatikan segala aspek kesehatan.",
            thumbnail: 'img/image-2.jpg',
          },
      };
    },
  }).mount("#app");
