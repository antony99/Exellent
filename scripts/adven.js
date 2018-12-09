var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [{

                "title": "Дэдпул 2",
                "image": "../assets/deadpool2.png",
                "url": "pages/deadpool2.html",
            },
            {

                "title": "Черная пантера",
                "image": "../assets/panter.jpg",
                "url": "pages/black-panter.html",
            },
            {

                "title": "Тренер",
                "image": "../assets/trener.jpg",
                "url": "pages/trener.html",
            },
            {

                "title": "Движение Вверх",
                "image": "../assets/dvizh.jpg",
                "url": "pages/dvizh_vverh.html",
            },
            {

                "title": "Две королевы",
                "image": "../assets/2queen.jpg",
                "url": "infGame/2q.html",
            },
            {

                "title": "Челове на луне",
                "image": "../assets/chelonmoon.jpg",
                "url": "pages/chelonmoon.html",
            },
            {

                "title": "Робин Гуд: начало",
                "image": "../assets/robgood.jpg",
                "url": "pages/robgood.html",
            },
            {

                "title": "Богемная распосидя",
                "image": "../assets/bog-rap.jpg",
                "url": "pages/bog-rap.html",
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
            return articles_array;
        }

    }

});