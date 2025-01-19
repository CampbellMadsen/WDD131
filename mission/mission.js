const themeSelector = document.querySelector('select');
const logo = document.querySelector('img')
function changeTheme() {
    if (themeSelector.value == "dark") {
        document.body.setAttribute('class','dark');
        logo.setAttribute('src', 'byui-logo_white.png')
    } else {
        document.body.removeAttribute('class');
        logo.setAttribute('src', 'byui-logo_blue.webp')
    }
}
themeSelector.addEventListener('change', changeTheme);