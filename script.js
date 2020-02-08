// ==UserScript==
// @name         Jupyter Notebook Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Small, simple jupyter enhancements
// @author       Andy
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function () {

        // set width as page
        document.querySelector('#notebook-container').style.width = "100%";

        // make cells foldable
        var TARGET_HEIGHT = "50px";
        
        var text_cells = document.querySelectorAll('.text_cell');
        for (let i = 0; i < text_cells.length; i++) {
            text_cells[i].style.display = "none";
        }

        var code_cell_btns = document.querySelectorAll('.code_cell .input_prompt');
        for (let i = 0; i < code_cell_btns.length; i++) {
            code_cell_btns[i].closest(".code_cell").style.height = TARGET_HEIGHT;
            code_cell_btns[i].closest(".code_cell").style.overflow = "hidden";

            code_cell_btns[i].addEventListener("click", function() {
                //console.log("clicked");
                //console.log(this.closest(".code_cell"));
                if(this.closest(".code_cell").style.height != TARGET_HEIGHT){
                    this.closest(".code_cell").style.height = TARGET_HEIGHT;
                    this.closest(".code_cell").style.overflow = "hidden";
                } else {
                    this.closest(".code_cell").style.height = null;
                    this.closest(".code_cell").style.overflow = null;
                }
            });
        }

    })
})();
