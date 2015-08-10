function test(o){
    var i = 0;                             //i在整個函數體內都是有定義的
    if (typeof o == "object"){
        var j = 0;                          //j在整個函數體內都是有定義的，不僅僅是在這個循環內
        for (var k=0; k < 10; k++){         //k在整個函數體內都是有定義的，不僅僅是在這個循環內
            console.log(k);
        }
        console.log(k);                     //k已經定義了
    }
    console.log(j);                         //j已經定義了，但可能沒有初始化
}
