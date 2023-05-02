const featuredArticle1 = 41;
const featuredArticle2 = 11;
const featuredArticle3 = 2;
const featuredArticle4 = 44;
const featuredArticle5 = 23;
const featuredArticle6 = records.length-15;
const featuredArticle7 = 10;
const featuredArticle8 = records.length-11;

const slider1 = 4;
const slider2 = records.length-5;
const slider3 = records.length-4;
const slider4 = records.length-3;
const slider5 = records.length-2;
const slider6 = records.length-1;

const old1 = 2;
const old2 = 3;
const old3 = 4;
const old4 = 8;

const tag1 = 41;
const tag2 = 18;
const tag3 = 45;
const tag4 = 7;
const tag5 = 14;
const tag6 = 33;



// featured articles
el('#b1i').src = records[featuredArticle1].img1;
el('#b1d').innerHTML = records[featuredArticle1].date;
el('#b1t').innerHTML = records[featuredArticle1].title;
el('#b1c').innerHTML = records[featuredArticle1].category;
el('#b1href').href = `https://blog.brmnow.com/index.php?id=${featuredArticle1}`;

el('#b2i').src = records[featuredArticle2].img1;
el('#b2d').innerHTML = records[featuredArticle2].date;
el('#b2t').innerHTML = records[featuredArticle2].title;
el('#b2c').innerHTML = records[featuredArticle2].category;
el('#b2href').href = `https://blog.brmnow.com/index.php?id=${featuredArticle2}`;

el('#b3i').src = records[featuredArticle3].img1;
el('#b3d').innerHTML = records[featuredArticle3].date;
el('#b3t').innerHTML = records[featuredArticle3].title;
el('#b3c').innerHTML = records[featuredArticle3].category;
el('#b3href').href = `https://blog.brmnow.com/index.php?id=${featuredArticle3}`;

// sidebar 
el('#b4i').src = records[featuredArticle4].img1;
el('#b4d').innerHTML = records[featuredArticle4].date;
el('#b4t').innerHTML = records[featuredArticle4].title;
el('#b4a').href = `https://blog.brmnow.com/index.php?id=${featuredArticle4}`;

el('#b5i').src = records[featuredArticle5].img1;
el('#b5d').innerHTML = records[featuredArticle5].date;
el('#b5t').innerHTML = records[featuredArticle5].title;
el('#b5a').href = `https://blog.brmnow.com/index.php?id=${featuredArticle5}`;

el('#b6i').src = records[featuredArticle6].img1;
el('#b6d').innerHTML = records[featuredArticle6].date;
el('#b6t').innerHTML = records[featuredArticle6].title;
el('#b6a').href = `https://blog.brmnow.com/index.php?id=${featuredArticle6}`;

el('#b7i').src = records[featuredArticle7].img1;
el('#b7d').innerHTML = records[featuredArticle7].date;
el('#b7t').innerHTML = records[featuredArticle7].title;
el('#b7a').href = `https://blog.brmnow.com/index.php?id=${featuredArticle7}`;

el('#b8i').src = records[featuredArticle8].img1;
el('#b8d').innerHTML = records[featuredArticle8].date;
el('#b8t').innerHTML = records[featuredArticle8].title;
el('#b8a').href = `https://blog.brmnow.com/index.php?id=${featuredArticle8}`;

// slider 
el('#s1i').src = records[slider1].img1;
el('#s1d').innerHTML = records[slider1].date;
el('#s1t').innerHTML = records[slider1].title;
el('#s1c').innerHTML = records[slider1].category;

el('#s2i').src = records[slider2].img1;
el('#s2d').innerHTML = records[slider2].date;
el('#s2t').innerHTML = records[slider2].title;
el('#s2c').innerHTML = records[slider2].category;

el('#s3i').src = records[slider3].img1;
el('#s3d').innerHTML = records[slider3].date;
el('#s3t').innerHTML = records[slider3].title;
el('#s3c').innerHTML = records[slider3].category;

el('#s4i').src = records[slider4].img1;
el('#s4d').innerHTML = records[slider4].date;
el('#s4t').innerHTML = records[slider4].title;
el('#s4c').innerHTML = records[slider4].category;

el('#s5i').src = records[slider5].img1;
el('#s5d').innerHTML = records[slider5].date;
el('#s5t').innerHTML = records[slider5].title;
el('#s5c').innerHTML = records[slider5].category;

el('#s6i').src = records[slider6].img1;
el('#s6d').innerHTML = records[slider6].date;
el('#s6t').innerHTML = records[slider6].title;
el('#s6c').innerHTML = records[slider6].category;

// older posts 
el('#o1i').src = records[old1].img1;
el('#o1d').innerHTML = records[old1].date;
el('#o1t').innerHTML = records[old1].title;
el('#o1c').innerHTML = records[old1].category;
el('#o1b').innerHTML = records[old1].body;
el('#o1href').href = `https://blog.brmnow.com/index.php?id=${old1}`;

el('#o2i').src = records[old2].img1;
el('#o2d').innerHTML = records[old2].date;
el('#o2t').innerHTML = records[old2].title;
el('#o2c').innerHTML = records[old2].category;
el('#o2b').innerHTML = records[old2].body;
el('#o2href').href = `https://blog.brmnow.com/index.php?id=${old2}`;

el('#o3i').src = records[old3].img1;
el('#o3d').innerHTML = records[old3].date;
el('#o3t').innerHTML = records[old3].title;
el('#o3c').innerHTML = records[old3].category;
el('#o3b').innerHTML = records[old3].body;
el('#o3href').href = `https://blog.brmnow.com/index.php?id=${old3}`;

el('#o4i').src = records[old4].img1;
el('#o4d').innerHTML = records[old4].date;
el('#o4t').innerHTML = records[old4].title;
el('#o4c').innerHTML = records[old4].category;
el('#o4b').innerHTML = records[old4].body;
el('#o4href').href = `https://blog.brmnow.com/index.php?id=${old4}`;

// tags 
el('#tag1i').src = records[tag1].img1;
el('#tag1c').innerHTML = records[tag1].category;

el('#tag2i').src = records[tag2].img1;
el('#tag2c').innerHTML = records[tag2].category;

el('#tag3i').src = records[tag3].img1;
el('#tag3c').innerHTML = records[tag3].category;

el('#tag4i').src = records[tag4].img1;
el('#tag4c').innerHTML = records[tag4].category;

el('#tag5i').src = records[tag5].img1;
el('#tag5c').innerHTML = records[tag5].category;

el('#tag6i').src = records[tag6].img1;
el('#tag6c').innerHTML = records[tag6].category;