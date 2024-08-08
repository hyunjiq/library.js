// $(function(){
//    $("#faq h3").click(function(){
//         $(this).parent().addClass("open").siblings().removeClass("open")
//    })
// })

window.addEventListener('load', function(){
    // document.querySelectorAll("#faq h3").forEach(function(e, i){
    //     e.addEventListener("click", function(){
    //         this.parentElement.classList.add("open");

    //         let siblings = this.parentElement.parentElement.children;

    //         console.log(`데이터 : ${siblings}, 데이터타입 : ${typeof siblings}, 정렬인가?: ${Array.isArray(siblings)}, 키: ${Object.keys(siblings)}`)
                
    //             for (let sibling of siblings) { //for of array 아니면서 array형 데이터에서 쓴다.
    //                 if (sibling !== this.parentElement) {
    //                     sibling.classList.remove("open");
    //                 }
    //             }
    //     })
    // })  
    
    
    let _h3s = document.querySelectorAll("#faq h3")

    for(let _h3 of _h3s ){
        _h3.addEventListener("click", function(){
            this.parentElement.classList.add("open"); // li

            //             h3.li.ul.li
            let siblings = this.parentElement.parentElement.children; 

            for(let sibling of siblings){ //li
                if( sibling !== this.parentElement ){
                    console.log(sibling !== this.parentElement) // li가 그것의부모엘레멘트가 아닌게 맞으면
                    sibling.classList.remove("open"); //클래스빼라
                }
            }
        })
    }






})