document.getElementById("Enter").onclick=function addbidder() {
  var tn = document.getElementById('tablenumber').value
  var sl = document.getElementById("seatletter").value
  var fn = document.getElementById('firstname').value
  var ln = document.getElementById('lastname').value
  
  var x=0
  var test = { tableNum: tn, seatLetter: sl, firstName: fn, lastName: ln }
  var seatTable = document.getElementById('seattable')
  
  var template = "<tr><td>{tableNum}</td>"
      + "<td>{seatLetter}</td>"
      + "<td>{firstName}</td>"
      + "<td>{lastName}</td></tr>"
  var row = template.replace(/\{([^}]+)\}/g, function (full, name) {
    return test[name]
  })
  seattable.innerHTML = (seatTable.innerHTML + row)
}
