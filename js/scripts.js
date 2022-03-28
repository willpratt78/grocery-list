$(document).ready(function() {
  $("#items").submit(function(event) {
    event.preventDefault();
    let item1 =$("input#input1").val();
    let item2 =$("input#input2").val();
    let item3 =$("input#input3").val();
    let item4 =$("input#input4").val();
    let item5 =$("input#input5").val();


    let results = []
    results.push(item1, item2, item3, item4, item5);
    results.sort();

    let results2 = []

    results.forEach(function(element) {
      if (element !== "") {
        results2.push(element.toUpperCase())

      };
    });
    // results2.push(results);
    console.log(results2);

   results2.forEach(function(element) {
    $("#list").append(("<li>" + element + "</li>"));
   })

    console.log(results)

  });
});



