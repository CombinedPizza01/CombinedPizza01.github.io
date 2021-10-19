(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCannon("top",200)
        createCannon("top",300)
        createCannon("top", 400)
        createCannon("top", 200, 60000)
        createCannon("top", 300, 60000)
        createCannon("top", 400, 60000)
        createCannon("top", 0, 60000)
        createCannon("top", 50, 60000)
        createCannon("top", 100, 60000)
        createCannon("top", 150, 60000)
        createCannon("top", 250, 60000)
        createCannon("top", 350, 60000)
        createCannon("top", 450, 60000)
        createCannon("top", 550, 60000)
        createCannon("top", 650, 60000)
        createCannon("top", 500, 60000)
        createCannon("top", 600, 60000)
        createCannon("top", 700, 60000)
        createCannon("top", 750, 60000)
        createCannon("top", 800, 60000)
        createCannon("top", 850, 60000)
        createCannon("top", 900, 60000)
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
