const img=document.getElementById("imgBox");
const qrimg=document.getElementById("qrimg");
const qrtxt=document.getElementById("qrtxt");


    function generateQr(){
        if(qrtxt.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtxt.value;
        imgBox.classList.add("show-img");
        }else{
            qrtxt.classList.add('error');
            setTimeout(()=>{
                qrtxt.classList.remove('error');
            },1000);
        }
}
