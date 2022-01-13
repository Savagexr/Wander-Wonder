const post = [{
        id: 1,
        title: "Universal Studios Singapore",
        description: "Singapore's only movie-theme park features 24 rides and attractions, including a pair of dueling coasters that brush past one another in several near misses in their aerial combat. Thrill-seekers can choose between a coaster where they are seated or the other where riders are suspended.",
        author: "TheSingaporeTraveller",
        image_url: require(`../images/singapore/USS.png`),
        countryEmoji: "🇸🇬",
        category: "Singapore",
        liked: true,
        duration: "8 Hours",
        weather: 30,
        website: "https://www.rwsentosa.com/en/attractions/universal-studios-singapore/tickets",
        latitude: 1.2546178494585092,
        longitude: 103.82389221707048,
        comment: [{
                id: 1,
                name: "Xuanrong",
                username: "wif_cuteXR",
                profile_pic: require(`../images/profilepic/user1.jpg`),
                guide_title: "Nice attraction",
                guide_tag: "Couples",
                tag_color: "#5159A6",
                guide_description: "I think that Universal Studios Singapore is a very nice place! The rides there are super awesome! Especially the transformers ride. I rode it for 7 times in a span of 1 hour!",
                date_created: "3 Months Ago",
                created_at: "July 5,2021 12:32 PM"
            },
            {
                id: 2,
                name: "XiaoZhan",
                username: "xiaozhan_daytoy",
                profile_pic: require(`../images/profilepic/user2.jpg`),
                guide_title: "Very fun",
                guide_tag: "Solo",
                tag_color: '#C16ABE',
                guide_description: "Pretty fun rides, great walking weather, minimal crowds and wait times, this was probably the most seamless USS experience I’ve had so far.",
                date_created: "16 Hours Ago",
                created_at: "December 20,2021 01:32 PM"
            }
        ],

        nearbyPlaces: [{
                id: 1,
                title: "Adventure Cove",
                description: "Adventure Cove is a theme park located in Singapore. It is a part of Universal Studios Singapore.",
                latitude: 1.2591310349222455,
                longitude: 103.81859351901238,
                image_url: require(`../images/singapore/3.png`),
            },

            {
                id: 2,
                title: "Resorts World Sentosa Casino",
                description: "Resorts World Sentosa Casino is a theme park located in Singapore. It is a part of Universal Studios Singapore.",

                latitude: 1.256574736864421,
                longitude: 103.82035089212134,
                image_url: require(`../images/singapore/resortsworldsentosacasino.jpg`),
            },
        ]
    },
    {
        id: 2,
        title: "The Adventure Cove experience.",
        description: "Aquatic amusement park with an aquarium, water slides, a wave pool, tubing, snorkeling & more.",
        author: "TheSingaporeTraveller",
        image_url: require(`../images/singapore/3.png`),
        countryEmoji: "🇸🇬",
        category: "Singapore",
        liked: false,
        duration: "8 Hours",
        weather: 32,
        website: "https://www.rwsentosa.com/en/attractions/adventure-cove-waterpark/tickets",
        latitude: 1.259037809615239,
        longitude: 103.81864611851513,
    },
    {
        id: 3,
        title: "Best hotel rooms in Marina Bay Sands",
        description: "Marina Bay Sands is an integrated resort fronting Marina Bay in Singapore, owned by the Las Vegas Sands Corporation.",
        author: "LuxurySGTraveller",
        image_url: require(`../images/singapore/2.png`),
        countryEmoji: "🇸🇬",
        category: "Singapore",
        liked: false,
        duration: "2 Days",
        weather: 31,
        website: "https://www.booking.com/hotel/sg/marina-bay-sands.html",
        latitude: 1.2848584956942635,
        longitude: 103.8609507823147,
    },
    {
        id: 4,
        title: "Things you should look out for in S.E.A Aquarium",
        description: "Large aquarium & resort featuring 800 species of marine life in a variety of habitats.",
        author: "LimChooK",
        image_url: require(`../images/singapore/4.png`),
        countryEmoji: "🇸🇬",
        category: "Singapore",
        liked: false,
        duration: "2 Days",
        weather: 33,
        website: "https://www.rwsentosa.com/en/attractions/sea-aquarium/tickets",
        latitude: 1.2584817765425365,
        longitude: 103.82049327067077,
    },
    {
        id: 5,
        title: "Places to look out for in New Zealand",
        description: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands, covering a total area of 268,021 square kilometres.",
        author: "NewZealanderTraveller",
        image_url: require(`../images/oceania/1.png`),
        countryEmoji: "🇳🇿",
        category: "Oceania",
        liked: false,
        duration: "2 Days",
        weather: 24,
        website: "https://www.singaporeair.com/en-sg/flights-to-new-zealand",
        latitude: -42.09124307931751,
        longitude: 172.61251584948408,
    },
    {
        id: 6,
        title: "Sydney Opera House - Picture spots",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney.",
        author: "PhotoHolicGuy23",
        image_url: require(`../images/oceania/2.png`),
        countryEmoji: "🇦🇺",
        category: "Oceania",
        liked: false,
        duration: "2 Days",
        weather: 26,
        website: "https://www.singaporeair.com/en_UK/us/plan-travel/destinations/flights-to-Sydney/",
        latitude: -33.8566329176306,
        longitude: 151.21532888454564,
    },
    {
        id: 7,
        title: "Beijing's Forbidden City is 600 years old",
        description: "The Forbidden City is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing.",
        author: "ChinaTraveller 中国",
        image_url: require(`../images/china/1.png`),
        countryEmoji: "🇨🇳",
        category: "Asia",
        liked: true,
        duration: "1 Week",
        weather: 2,
        website: "https://www.singaporeair.com/en_UK/gb/plan-travel/destinations/flights-to-Beijing/",
        latitude: 39.91708726798381,
        longitude: 116.39105286325044,
    }
]

export default post;