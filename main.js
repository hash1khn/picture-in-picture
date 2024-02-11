const videoElement=document.getElementById('video');
const button=document.getElementById('button');

//prompt to select media stream ,pass to video element
async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadeddata=()=>{
            videoElement.play();
        }
    }
    catch(error){
        //catch error
        console.log('error here',error);

    }
}
button.addEventListener('click',async ()=>{
    //disable the button
    button.disabled=true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled=false;
});
selectMediaStream();
 