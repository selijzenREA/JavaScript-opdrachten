const dog = {
            name:"kiniwi",
            age:10,
            breed: "Akita", 
            haircolor:"white",
            family: {
                mother: "kinawa",
                father: "kinokto"
        
            },

            sleep: function() {
                window.alert("ZzzzZzzzzzzzzZZ i am sleeping bro. Leave me alone!");
            },

            eat: function() {
                window.alert("Give me food please *-*");
            },

            bark: function() {
                window.alert("WAF!");
            },

            givePaw: function() {
                window.alert("I like to give you a paw :)");

            }





            };


dog.age = dog.age +1;

dog.houseTrained = false;

document.getElementById("dogName").innerHTML = `<p>my second dog's name is: ${dog.name} he is ${dog.age} years old. his ${dog.breed} breed is Akita. And his haircolor is ${dog.haircolor}. His mom's name is very related to his own name. The mom's name is: ${dog.family.mother}. He ofcourse (duhh) also have a father. His name is ${dog.family.father}.</p>`

dog.bark();
dog.givePaw();

console.log(dog);



