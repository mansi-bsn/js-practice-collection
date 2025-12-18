var boxes = document.querySelector(".boxes");

var quotes = [
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",author: "Nelson Mandela",imgurl: "https://cdn.britannica.com/67/75567-050-4EBBE84D/Nelson-Mandela.jpg",birthPlace: "Mvezo, South Africa"},
    {quote: "The way to get started is to quit talking and begin doing.",author: "Walt Disney",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-58xSdNT-KNKoLs3Ycg8Lp51KWRdi3N7ljQ&s",birthPlace: "Chicago, Illinois, USA"},
    {quote: "Your time is limited, so don't waste it living someone else's life.",author: "Steve Jobs",imgurl: "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.757xw:0.534xh;0.0799xw,0.0372xh&resize=640:*",birthPlace: "San Francisco, California, USA"},
    {quote: "If life were predictable it would cease to be life, and be without flavor.",author: "Eleanor Roosevelt",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-tavxHxMv18Lzpid4QLDPh7obILc8AMiYw&s",birthPlace: "New York City, New York, USA"},
    {quote: "If you look at what you have in life, you'll always have more.",author: "Oprah Winfrey",imgurl: "https://imageio.forbes.com/specials-images/imageserve/676068efbbd9fffe1679c9d6/0x0.jpg?format=jpg&crop=729,729,x152,y87,safe&height=416&width=416&fit=bounds",birthPlace: "Kosciusko, Mississippi, USA"},
    {quote: "Life is what happens when you're busy making other plans.",author: "John Lennon",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmkPfbX1kSqKv4BNi6pDLIWNCTPpEyg5-Nw&s",birthPlace: "Liverpool, England"},
    {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",author: "Mother Teresa",imgurl: "https://cdn.britannica.com/42/155442-050-AB85E00E/Mother-Teresa.jpg",birthPlace: "Skopje, North Macedonia"},
    {quote: "When you reach the end of your rope, tie a knot in it and hang on.",author: "Franklin D. Roosevelt",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLkZwIRobyIa2ZA8raVkZVKL39iBvIW8NHg&s",birthPlace: "Hyde Park, New York, USA"},
    {quote: "Always remember that you are absolutely unique. Just like everyone else.",author: "Margaret Mead",imgurl: "https://cdn.britannica.com/56/133556-050-3BB36ECF/Margaret-Mead.jpg",birthPlace: "Philadelphia, Pennsylvania, USA"},
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",author: "Robert Louis Stevenson",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W3ELGGk1IpmT1e2h89IaQgbGYh8JlFzkkg&s",birthPlace: "Edinburgh, Scotland"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.",author: "Eleanor Roosevelt",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-tavxHxMv18Lzpid4QLDPh7obILc8AMiYw&s",birthPlace: "New York City, New York, USA"},
    {quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Bj7sdyj8sKLwOYaTMfc1NdO8BTun_sm2dA&s",birthPlace: "Boston, Massachusetts, USA"},
    {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",author: "Helen Keller",imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3245927jpg.jpg?crop=1xw:1.0xh;center,top&resize=640:*",birthPlace: "Tuscumbia, Alabama, USA"},
    {quote: "It is during our darkest moments that we must focus to see the light.",author: "Aristotle",imgurl: "https://cdn.britannica.com/84/87984-050-7C5547FE/Detail-Roman-copy-portrait-bust-Aristotle-Greek.jpg",birthPlace: "Stagira, Greece"},
    {quote: "Whoever is happy will make others happy too.",author: "Anne Frank",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgh-AfCktF9V7c7FVSTRh8EDHESV8u8EP5w&s",birthPlace: "Frankfurt, Germany"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",author: "Ralph Waldo Emerson",imgurl: "https://cdn-test.poetryfoundation.org/cdn-cgi/image/w=2292,h=1528,q=80/content/images/d3f8060629ba9f94508888c12e5e3a87d94b0458.jpeg",birthPlace: "Boston, Massachusetts, USA"},
    {quote: "You will face many defeats in life, but never let yourself be defeated.",author: "Maya Angelou",imgurl: "https://hips.hearstapps.com/hmg-prod/images/maya_angelou_photo_by_deborah_feingold_corbis_entertainment_getty_533084708.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",birthPlace: "St. Louis, Missouri, USA"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.",author: "Abraham Lincoln",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4yOZ2EzoObsIKLzYE9GSKIdpb1pk7ypCRQ&s",birthPlace: "Hodgenville, Kentucky, USA"},
    {quote: "Never let the fear of striking out keep you from playing the game.",author: "Babe Ruth",imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-517324714.jpg",birthPlace: "Baltimore, Maryland, USA"},
    {quote: "Life is either a daring adventure or nothing at all.",author: "Helen Keller",imgurl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-3245927jpg.jpg?crop=1xw:1.0xh;center,top&resize=640:*",birthPlace: "Tuscumbia, Alabama, USA"},
    {quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",author: "Thomas A. Edison",imgurl: "https://cdn.britannica.com/47/79847-050-A78604A0/Thomas-Alva-Edison.jpg",birthPlace: "Milan, Ohio, USA"},
    {quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",author: "Brian Tracy",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRv2dAsVdj2W_nXLEd6vmJuOf488xZFYtHg&s",birthPlace: "Charlottetown, Canada"},
    {quote: "Believe you can and you're halfway there.",author: "Theodore Roosevelt",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqiUVuMFqWPmJSy8iJLDRrb39rFGYU2efoQ&s",birthPlace: "New York City, New York, USA"},
    {quote: "Act as if what you do makes a difference. It does.",author: "William James",imgurl: "https://cdn.britannica.com/10/10710-004-76C3C341/William-James.jpg",birthPlace: "New York City, New York, USA"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",author: "Winston Churchill",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVHhtQNa9NvjyNpmCDZdS2NlFbkl_nn8H5w&s",birthPlace: "Woodstock, England"},
    {quote: "You are never too old to set another goal or to dream a new dream.",author: "C.S. Lewis",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmVeZzm-usH0_7h7FaC8vbD94OZnqt6OQIQ&s",birthPlace: "Belfast, Ireland"},
    {quote: "At any given moment you have the power to say: this is not how the story is going to end.",author: "Christine Mason Miller",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQMx5jzdK4uH-JVs7GQvpilm4iQv1AaVykQ&s",birthPlace: "Unknown"},
    {quote: "You don't have to be great to start, but you have to start to be great.",author: "Zig Ziglar",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHOhbvzGqA0N1p3QhCZw2Md39B2hQ-h5q0A&s",birthPlace: "Coffee County, Alabama, USA"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.",author: "Thomas A. Edison",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEavBmbKd_5QrxjJv61uzO6Vd54P9H7Pgsg&s",birthPlace: "Milan, Ohio, USA"},
    {quote: "Don't watch the clock; do what it does. Keep going.",author: "Sam Levenson",imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc1QCQ08536ZD3lHaoxryfwDdTfEemp_itA&s",birthPlace: "New York City, New York, USA"}
]

console.log(quotes.length);
for (var i = 0; i < quotes.length; i++)
{
    // console.log(`<div class="w-4 card"><p>` + quotes[i].quote + `</p><p>` + quotes[i].author + `</p><p>` + quotes[i].imgurl + `</p><p>` + quotes[i].birthplace + `</p></div>`);
    boxes.innerHTML += '<div class="w-4 card"><p>Quote : ' + quotes[i].quote + '</p><p>Author : ' + quotes[i].author + '</p><p> Image : <img src= ' + quotes[i].imgurl +  '/></p><p> Birthplace : ' + quotes[i].birthPlace + '</p></div>';
}


