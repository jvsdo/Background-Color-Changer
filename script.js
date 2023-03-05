window.onload = function() {
    var colors = ['#FF5733', '#DAF7A6', '#FFC300', '#900C3F', '#00CCFF', '#F5B7B1', '#8E44AD', '#2C3E50'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = random_color;
}