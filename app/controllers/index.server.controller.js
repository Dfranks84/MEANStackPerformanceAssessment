// Dennis Franks Jr.
// SDC360 - 1.5 Performance Assessment
// November 15, 2026

exports.render = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    const definitions = [
        "MongoDB: A document-based database that stores application data in flexible collections using a JSON-like format.",
        "Express: A web application framework for Node.js that simplifies routing, middleware, and handling HTTP requests.",
        "Angular: A front-end framework used to develop interactive web applications with reusable components and dynamic content.",
        "Node.js: A JavaScript runtime environment that allows developers to execute JavaScript outside the browser and build server-side applications."
    ];

    res.render('index', {
        name: 'Dennis Franks Jr.',
        title: 'The MEAN Stack',
        definitions: definitions
    });
};