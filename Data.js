
 $("#loadbutton").click(function()
   {
  $.ajax
  ({
      url:'http://aimtell.com/files/sites.json',
      type:'GET',
      async: false,
      success:function(data)
      {
        var table = document.getElementById("myTable");
        var i;
      for (i = 0; i < data.sites.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.style.fontWeight = 'bold';
        cell1.innerHTML += data.sites[i].id;
        cell2.innerHTML += data.sites[i].name;
        cell3.innerHTML += data.sites[i].url;
        console.log(data);
      }
    

      }
  });
  $("#loadbutton").attr("disabled", true);
   });

