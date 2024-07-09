var json = [{
    "id" : "vj1",
    "task" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "batch" : "FSD60",
    "mail": "henreyvijay13@gmail.com"
    },
    {
    "id" : "hb2",
    "task" : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "batch" : "FSD60wet",
    "mail": "henrey1302@gmail.com"
    }];
    //for loop
    for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    
    console.log(obj.id);
    console.log(obj.batch);
    console.log(obj.task);
    console.log(obj.mail);
    
    }
    //for Each
    json.forEach(function(obj) { console.log(obj.batch); });
    
    //for In
    for (var key in json) {
    if (json.hasOwnProperty(key)) {
    console.log(json[key].id);
    //console.log(json[key].batch);
    
    }
    }
    //for Of
    let text = "";
    for (let x of json[key].id) {
    text += x;
    }
    console.log(text);