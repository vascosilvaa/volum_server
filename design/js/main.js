function loading() {
    document.getElementById("page-title").innerHTML = "Sobre";
    document.getElementById("banner-title").innerHTML = "Sobre";
    $('#loadContent').load("pages/about/about.html");
    var w = window.innerWidth;
    if (w <= 990) {
        $('#nav-mobile').remove("fixSide")
    }
}

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
}
);

$(window).scroll(function () {

    if ($(this).scrollTop() > 80) {
        $('#page-title').fadeIn(150);
    }
    else {
        $('#page-title').fadeOut(150);
    }
});

function loadContent(event, x) {
    var w = window.innerWidth;

    if (w > 990) {
        $('#nav-mobile').addClass("fixSide")
    }

    if (x == 0) {
        document.getElementById("page-title").innerHTML = "Sobre";
        document.getElementById("banner-title").innerHTML = "Sobre";
        $('#loadContent').load("pages/about/about.html");
    }
    if (x == 1) {
        document.getElementById("page-title").innerHTML = "Styles - Cor";
        document.getElementById("banner-title").innerHTML = "Styles";
        $('#loadContent').load("pages/styles/color.html");
    }
    else if (x == 2) {
        document.getElementById("page-title").innerHTML = "Styles - Icons";
        document.getElementById("banner-title").innerHTML = "Styles";
        $('#loadContent').load("pages/styles/icons.html");
    }
    else if (x == 3) {
        document.getElementById("page-title").innerHTML = "Styles - Tipografia";
        document.getElementById("banner-title").innerHTML = "Styles";
        $('#loadContent').load("pages/styles/typography.html");
    }
    else if (x == 4) {
        document.getElementById("page-title").innerHTML = "Styles - Espaçamento";
        document.getElementById("banner-title").innerHTML = "Styles";
        $('#loadContent').load("pages/styles/spacing.html");
    }
    else if (x == 5) {
        document.getElementById("page-title").innerHTML = "Componentes - Badges";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/badges.html");
    }
    else if (x == 6) {
        document.getElementById("page-title").innerHTML = "Componentes - Botões";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/buttons.html");
    }
    else if (x == 8) {
        document.getElementById("page-title").innerHTML = "Componentes - Card";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/card.html");
    }
    else if (x == 17) {
        document.getElementById("page-title").innerHTML = "Componentes - Listas";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/list.html");
    }
    else if (x == 13) {
        document.getElementById("page-title").innerHTML = "Componentes - Input";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/input.html");
    }
    else if (x == 14) {
        document.getElementById("page-title").innerHTML = "Componentes - Navegação";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/navigation.html");
    }
    else if (x == 15) {
        document.getElementById("page-title").innerHTML = "Componentes - Popover";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/popover.html");
    }
    else if (x == 18) {
        document.getElementById("page-title").innerHTML = "Componentes - Segment";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/segment.html");
    }
    else if (x == 19) {
        document.getElementById("page-title").innerHTML = "Componentes - Toggle";
        document.getElementById("banner-title").innerHTML = "Componentes";
        $('#loadContent').load("pages/components/toggle.html");
    }



}