const firebaseConfig = {
    apiKey: "AIzaSyDEbc88jnVwszVpzqixtiywXuOR9PVhE6M",
    authDomain: "togrul-45d33.firebaseapp.com",
    projectId: "togrul-45d33",
    storageBucket: "togrul-45d33.appspot.com",
    messagingSenderId: "973803681564",
    appId: "1:973803681564:web:459e139314432168e8acd9"
};
firebase.initializeApp(firebaseConfig)
let db = firebase.database()
 let users=[{ad:"togrul",sifre:"togrul123"},{ad:"ismayil",sifre:"ismayil123"},{ad:"emil",sifre:"emil123"},{ad:"eltac",sifre:"eltac123"}]
$(".btn").on("click",()=>{
   var ad= $("#ad").val()
   let sifre= $("#sifre").val()
    for (let i = 0; i < users.length; i++) {
       if(users[i].ad==ad && users[i].sifre==sifre){
        $(".login").css({display:"none"})
        $(".message").css({display:"block"})
         return  alert("Mesajlasmaya xosh gelmisen")
       }
        
    }
    alert("Sifreniz ve ya adiniz yanlisdir")
})
$(".send").on("click",()=>{

    db.ref().set({
        ad:$("#ad").val(),
        metn:$("textarea").val()

    })
})
db.ref().on("value",(snapshot)=>{
    let obj=snapshot.val()
   let p= $(`<p> ${obj.ad} : ${obj.metn} </p>`)
   $(".message-box").append(p)
   $("textarea").val("")
})
