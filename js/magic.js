var head, logo, image, st, nab, yPos; 
function yScroll(){
        head = document.getElementById('st-header');
        logo = document.getElementById('logo'); 
        image = document.getElementById('shape');
        st = document.getElementById('home');
        nab = document.getElementById('myNab');
        yPos = window.pageYOffset; 
        if(yPos > 150){
                head.style.height = "70px";
                head.style.paddingTop = "5px";
                head.style.paddingBottom = "5px";
                shape.style.width = "70%";
                shape.style.height = "60px";
                nab.style.marginTop = "5px";
                nab.style.marginBottom = "0px";
                st.style.paddingTop = "70px";

        } else { 
                head.style.height = "105px";
                head.style.paddingTop = "20px";
                head.style.paddingBottom = "20px";
                shape.style.width = "70%";
                shape.style.height = "70px";
                nab.style.marginTop = "10px";
                nab.style.marginBottom = "10px";
                st.style.paddingTop = "105px";

        }
} 
window.addEventListener("scroll", yScroll);