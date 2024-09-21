<script>
let myArr = [
    {
     studenName: "jack",
     studenClass: 4,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 5,
     studenSection: "b"
    },
    {
     studenName: "Vick",
     studenClass: 6,
     studenSection: "A"
    },
    {
     studenName: "Brick",
     studenClass: 7,
     studenSection: "B"
    },
    {
     studenName: "sri",
     studenClass: 8,
     studenSection: "c"
    },
    {
     studenName: "tom",
     studenClass: 9,
     studenSection: "D"
    }
];
/* This is
a comment */
<!--
*prepare table rows
*@returns table rows
-->
function trs(){
    myArr.forEach(function (obj)){
        const{studenName,
        studenClass,
        studenSection} =obj
        trs = trs + `<tr><td>${studenName}</td><td>${ studenClass}</td><td>${studenSection}</td></tr>`
    }
}
</script>