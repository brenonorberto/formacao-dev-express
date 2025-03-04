function externa() {

    function interna() {
        console.log('interna');
    }

    interna();
    
    console.log('externa');
}

externa();