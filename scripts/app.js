let toggle_menu_icon = document.querySelector('.header-nav-menu-toggle')

var toggle_menu_width = '-15px'
toggle_menu_icon.addEventListener('click', () => {
    document.querySelector('.nav-items').style.left = toggle_menu_width
    if(toggle_menu_width == '-205px'){
        toggle_menu_width = '-15px'
        document.querySelector('.header-nav-menu-toggle span').className = 'fa fa-bars'
    }else{
        toggle_menu_width = '-205px'
        document.querySelector('.header-nav-menu-toggle span').className = 'fa fa-times'
    }
})