function total() {
    var litres = document.getElementById("litres").value;
    var cost = document.getElementById("cost").value;
    var revenue = litres * cost;

    document.getElementById("revenue").innerHTML = revenue;
    document.getElementById("hidden").style.display = 'block';
}