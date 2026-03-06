/*
id  up to 10 integer digits

nails  up to 6 positions in format: "ID-Number.expention"

posName  up to 100 signs

posBrand  up to 50 signs

posSum  6.2 format number

Colors are getting from the table prodColors, which contains only a list of colors used in the product table

Sizes (check if between 1 and 17) are getting from the table prodSizes, which contains only a list of sizes used in the product table

pdDesc  up to 1000 signs

brands are getting from the table prodBrands, which contains only a list of brands used in the product table

qTotal  up to 10 integer digits

types are getting from the table prodTypes.

genders are these items: ["men", "women", "unisex"]
*/

const products = [
    {
        "id":  "1",
        "nails": [ "01-1.png", "01-2.png", "01-3.png", "01-4.png", "01-5.png", "01-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien.",
        "posBrand": "Clarks",
        "posSum": 44.99,
        "posColor": "black",
        "posSizes": [ "5", "7", "16" ],
        "pdDesc": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 7,
        "type": "boots",
        "gender": "men"
    },
    {
        "id":  "2",
        "nails": [ "02-1.png", "02-2.png", "02-3.png", "02-4.png", "02-5.png", "02-6.png" ],
        "posName": "Sed leo libero, tincidunt",
        "posBrand": "Clarks",
        "posSum": 33.49,
        "posColor": "orange",
        "posSizes": [ "1", "5", "6" ],
        "pdDesc": "Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libbortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 18,
        "type": "boots",
        "gender": "unisex"
    },
    {
        "id":  "3",
        "nails": [ "03-1.png", "03-2.png", "03-3.png", "03-4.png", "03-5.png", "03-6.png" ],
        "posName": "Tincidunt non dapibus et, tristique in lorem",
        "posBrand": "Checkers",
        "posSum": 42,
        "posColor": "brown",
        "posSizes": [ "5", "8", "11" ],
        "pdDesc": "Pharetra feugiat mauris egete convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 60,
        "type": "boots",
        "gender": "men"
    },
    {
        "id":  "4",
        "nails": [ "04-1.png", "04-2.png", "04-3.png", "04-4.png", "04-5.png", "04-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor",
        "posBrand": "Checkers",
        "posSum": 23,
        "posColor": "black",
        "posSizes": [ "5", "7", "11" ],
        "pdDesc": "Feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 72,
        "type": "boots",
        "gender": "women"
    },
    {
        "id":  "5",
        "nails": [ "05-1.png", "05-2.png", "05-3.png", "05-4.png", "05-5.png", "05-6.png" ],
        "posName": "Praesent ut est non dolor tincidunt porta",
        "posBrand": "Adidas",
        "posSum": 15.25,
        "posColor": "yellow",
        "posSizes": [ "12", "17", "16" ],
        "pdDesc": "Suspendisse pharetrattis convallis.",
        "qTotal": 83,
        "type": "boots",
        "gender": "men"
    },
    {
        "id":  "6",
        "nails": [ "06-1.png", "06-2.png", "06-3.png", "06-4.png", "06-5.png", "06-6.png" ],
        "posName": "Nunc dapibus tellus varius nunc fermentum elementum",
        "posBrand": "Adidas",
        "posSum": 34.25,
        "posColor": "black",
        "posSizes": [ "2", "4", "6" ],
        "pdDesc": "Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 73,
        "type": "flats",
        "gender": "men"
    },
    {
        "id":  "7",
        "nails": [ "07-1.png", "07-2.png", "07-3.png", "07-4.png", "07-5.png", "07-6.png" ],
        "posName": "Dapibus tellus varius nunc fermentum elementum",
        "posBrand": "Nike",
        "posSum": 65.4,
        "posColor": "gray",
        "posSizes": [ "1", "5", "8" ],
        "pdDesc": "Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 56,
        "type": "flats",
        "gender": "unisex"
    },
    {
        "id":  "8",
        "nails": [ "08-1.png", "08-2.png", "08-3.png", "08-4.png", "08-5.png", "08-6.png" ],
        "posName": "Donec facilisis lacinia",
        "posBrand": "Nike",
        "posSum": 64.35,
        "posColor": "white",
        "posSizes": [ "5", "8", "12" ],
        "pdDesc": "Ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 38,
        "type": "flats",
        "gender": "women"
    },
    {
        "id":  "9",
        "nails": [ "09-1.png", "09-2.png", "09-3.png", "09-4.png", "09-5.png", "09-6.png" ],
        "posName": "Eugiat mauris eget porttitor",
        "posBrand": "Naturalizer",
        "posSum": 64.7,
        "posColor": "yellow",
        "posSizes": [ "2", "17", "16" ],
        "pdDesc": "Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 35,
        "type": "flats",
        "gender": "women"
    },
    {
        "id":  "10",
        "nails": [ "10-1.png", "10-2.png", "10-3.png", "10-4.png", "10-5.png", "10-6.png" ],
        "posName": "Naturalizer",
        "posBrand": "Vestibulum",
        "posSum": 25.05,
        "posColor": "white",
        "posSizes": [ "6", "7", "9" ],
        "pdDesc": "Suspenta, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 15,
        "type": "flats",
        "gender": "women"
    },
    {
        "id":  "11",
        "nails": [ "11-1.png", "11-2.png", "11-3.png", "11-4.png", "11-5.png", "11-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien.",
        "posBrand": "New Balance",
        "posSum": 44.99,
        "posColor": "indigo",
        "posSizes": [ "5", "7", "16" ],
        "pdDesc": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 7,
        "type": "sneakers",
        "gender": "unisex"
    },
    {
        "id":  "12",
        "nails": [ "12-1.png", "12-2.png", "12-3.png", "12-4.png", "12-5.png", "12-6.png" ],
        "posName": "Sed leo libero, tincidunt",
        "posBrand": "New Balance",
        "posSum": 33.49,
        "posColor": "blue",
        "posSizes": [ "1", "5", "6" ],
        "pdDesc": "Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante масса, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libbortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 18,
        "type": "sneakers",
        "gender": "unisex"
    },
    {
        "id":  "13",
        "nails": [ "13-1.png", "13-2.png", "13-3.png", "13-4.png", "13-5.png", "13-6.png" ],
        "posName": "Tincidunt non dapibus et, tristique in lorem",
        "posBrand": "Kors",
        "posSum": 42,
        "posColor": "gray",
        "posSizes": [ "5", "9", "11" ],
        "pdDesc": "Pharetra feugiat mauris egete convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 60,
        "type": "sneakers",
        "gender": "men"
    },
    {
        "id":  "14",
        "nails": [ "14-1.png", "14-2.png", "14-3.png", "14-4.png", "14-5.png", "14-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor",
        "posBrand": "Kors",
        "posSum": 23,
        "posColor": "green",
        "posSizes": [ "5", "7", "11" ],
        "pdDesc": "Feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 72,
        "type": "sneakers",
        "gender": "women"
    },
    {
        "id":  "15",
        "nails": [ "15-1.png", "15-2.png", "15-3.png", "15-4.png", "15-5.png", "15-6.png" ],
        "posName": "Praesent ut est non dolor tincidunt porta",
        "posBrand": "Vestibulum Turpis",
        "posSum": 15.25,
        "posColor": "white",
        "posSizes": [ "12", "17", "16" ],
        "pdDesc": "Suspendisse pharetrattis convallis.",
        "qTotal": 83,
        "type": "sneakers",
        "gender": "men"
    },
    {
        "id":  "16",
        "nails": [ "16-1.png", "16-2.png", "16-3.png", "16-4.png", "16-5.png", "16-6.png" ],
        "posName": "Nunc dapibus tellus varius nunc fermentum elementum",
        "posBrand": "Vestibulum Turpis",
        "posSum": 34.25,
        "posColor": "white",
        "posSizes": [ "2", "4", "6" ],
        "pdDesc": "Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 73,
        "type": "heels",
        "gender": "women"
    },
    {
        "id":  "17",
        "nails": [ "17-1.png", "17-2.png", "17-3.png", "17-4.png", "17-5.png", "17-6.png" ],
        "posName": "Dapibus tellus varius nunc fermentum elementum",
        "posBrand": "Donec Quis",
        "posSum": 65.4,
        "posColor": "coral",
        "posSizes": [ "1", "5", "8" ],
        "pdDesc": "Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 56,
        "type": "heels",
        "gender": "women"
    },
    {
        "id":  "18",
        "nails": [ "18-1.png", "18-2.png", "18-3.png", "18-4.png", "18-5.png", "18-6.png" ],
        "posName": "Donec facilisis lacinia",
        "posBrand": "Donec Quis",
        "posSum": 64.35,
        "posColor": "red",
        "posSizes": [ "5", "8", "12" ],
        "pdDesc": "Ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 38,
        "type": "heels",
        "gender": "women"
    },
    {
        "id":  "19",
        "nails": [ "19-1.png", "19-2.png", "19-3.png", "19-4.png", "19-5.png", "19-6.png" ],
        "posName": "Eugiat mauris eget porttitor",
        "posBrand": "Quisque",
        "posSum": 64.7,
        "posColor": "black",
        "posSizes": [ "2", "17", "16" ],
        "pdDesc": "Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 35,
        "type": "heels",
        "gender": "women"
    },
    {
        "id":  "20",
        "nails": [ "20-1.png", "20-2.png", "20-3.png", "20-4.png", "20-5.png", "20-6.png" ],
        "posName": "Quisque",
        "posBrand": "Vestibulum",
        "posSum": 25.05,
        "posColor": "pink",
        "posSizes": [ "6", "7", "9" ],
        "pdDesc": "Suspenta, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 15,
        "type": "heels",
        "gender": "women"
    },
    {
        "id":  "21",
        "nails": [ "21-1.png", "21-2.png", "21-3.png", "21-4.png", "21-5.png", "21-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien.",
        "posBrand": "Clarks",
        "posSum": 44.99,
        "posColor": "brown",
        "posSizes": [ "5", "7", "16" ],
        "pdDesc": "Suspendisse pharetra feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 7,
        "type": "sandals",
        "gender": "unisex"
    },
    {
        "id":  "22",
        "nails": [ "22-1.png", "22-2.png", "22-3.png", "22-4.png", "22-5.png", "22-6.png" ],
        "posName": "Sed leo libero, tincidunt",
        "posBrand": "Checkers",
        "posSum": 33.49,
        "posColor": "teal",
        "posSizes": [ "1", "5", "6" ],
        "pdDesc": "Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libbortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 18,
        "type": "sandals",
        "gender": "women"
    },
    {
        "id":  "23",
        "nails": [ "23-1.png", "23-2.png", "23-3.png", "23-4.png", "23-5.png", "23-6.png" ],
        "posName": "Tincidunt non dapibus et, tristique in lorem",
        "posBrand": "Adidas",
        "posSum": 42,
        "posColor": "pink",
        "posSizes": [ "4", "5", "11" ],
        "pdDesc": "Pharetra feugiat mauris egete convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 60,
        "type": "sandals",
        "gender": "women"
    },
    {
        "id":  "24",
        "nails": [ "24-1.png", "24-2.png", "24-3.png", "24-4.png", "24-5.png", "24-6.png" ],
        "posName": "Suspendisse pharetra feugiat mauris eget porttitor",
        "posBrand": "Nike",
        "posSum": 23,
        "posColor": "olive",
        "posSizes": [ "5", "7", "11" ],
        "pdDesc": "Feugiat mauris eget porttitor. Praesent ut est non dolor tincidunt porta. Etiam non lacus id purus pharetra pharetra id id sapien. Nunc dapibus tellus varius nunc fermentum elementum. Quisque ante massa, rutrum vel condimentum at, mattis at diam. Proin ut tortor est. Duis lobortis ipsum eu dolor pretium dapibus. Integer cursus pulvinar nisl, a auctor urna porttitor sed. Vestibulum a turpis felis, nec condimentum elit. In egestas, dui a tempus dignissim, nibh libero posuere augue, sed malesuada turpis eros ac neque. Suspendisse convallis mollis lectus a lobortis. Quisque est augue, ultrices eget mattis non, lacinia id tellus. Donec facilisis lacinia nulla, nec sagittis neque pellentesque id. Ut id ornare ipsum. Sed elementum lobortis elit, sed facilisis libero posuere placerat. Donec eu orci in tellus vestibulum adipiscing. Donec quis libero et orci mattis convallis.",
        "qTotal": 72,
        "type": "sandals",
        "gender": "men"
    },
    {
        "id":  "25",
        "nails": [ "25-1.png", "25-2.png", "25-3.png", "25-4.png", "25-5.png", "25-6.png" ],
        "posName": "Praesent ut est non dolor tincidunt porta",
        "posBrand": "Naturalizer",
        "posSum": 15.25,
        "posColor": "white",
        "posSizes": [ "12", "17", "16" ],
        "pdDesc": "Suspendisse pharetrattis convallis.",
        "qTotal": 83,
        "type": "sandals",
        "gender": "unisex"
    }
]
export default products