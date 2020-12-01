let database = firebase.database();
let value;

database.ref("People").on("value",  (data) => {
    value = data.val();
});

function Suggestion(){
    const Name = document.getElementById("nameInp").value;
    const Age = document.getElementById("ageInp").value;
    const Suggestion = document.getElementById("suggestionInp").value;

    value = value + 1;
    
    database.ref("/").update({
        People: value
    });


    var name = "Suggestion/Person " + value;

    database.ref(name).update({
        Name: Name,
        Age: Age,
        Suggestion: Suggestion
    });

    document.getElementById("nameInp").value = "";
    document.getElementById("ageInp").value = "";
    document.getElementById("suggestionInp").value = "";
}