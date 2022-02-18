function run() {

    let firstName = document.getElementById("input_fname").value;
    let lastName = document.getElementById("input_lname").value;

        //get the mytable id
        var table = document.getElementById("myTable");

        //create an empty <tr> abd add it to the 2nd position
        // since we have inputed <tr> on our HTML
        var row = table.insertRow(1);

        // Insert new cells (<td> elements) at the 1st and 
        //2nd position of the "new" <tr> element:
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();

        //add the value inputed at FirstName and LastName
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;


}



