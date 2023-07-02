var numbernames = 0;
var names = [];

function SortNames() {
  var thename = document.theform.newname.value;
  names[numbernames] = thename.toUpperCase();
  numbernames++;
  
  names.sort();
  var sortedNames = '';
  for (var i = 0; i < names.length; i++) {
    sortedNames += (i + 1) + '. ' + names[i] + '\n';
  }
  document.theform.sorted.value = sortedNames;
}