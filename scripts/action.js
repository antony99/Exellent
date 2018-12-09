var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Мстители",
                "image": "../assets/mstitel.jpg",
                "url": "pages/mstitel.html",
            },
            {

                "title": "Стекло",
                "image": "../assets/glass.jpg",
                "url": "pages/glass.html",
            },
            {

                "title": "Веном",
                "image": "../assets/venom.jpg",
                "url": "pages/venom.html",
            },
            {

                "title": "Хан Соло",
                "image": "../assets/solo2.png",
                "url": "pages/solo.html",
            },

            {

                "title": "Хищник",
                "image": "../assets/hishnik.jpg",
                "url": "pages/hish.html",
            },

            {

                "title": "Респродукция",
                "image": "../assets/res.jpg",
                "url": "pages/res.html",
            },
            {

                "title": "Metro: Exodus",
                "image": "../assets/glavn/expected/Metro-Exodus.jpg",
                "url": "infGame/Metro_Exodus.html",
            },

            {

                "title": "Шазам!",
                "image": "../assets/shazam.jpg",
                "url": "pages/shazam.html",
            },

        ]

    },


    computed: {
        // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
        filteredArticles: function () {

            var articles_array = this.articles,
                searchString = this.searchString;

            if (!searchString) {

                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function (item) {

                if (item.title.toLowerCase().indexOf(searchString) !== -1)

                {
                    return item;
                }

            })

            // Возвращает массив с отфильтрованными данными.
            return articles_array;;
        }

    }

});