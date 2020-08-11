import iziToast from "iziToast";
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
    title: 'Information',
    theme: 'dark',
    icon: 'material-icons',
    progressBarColor: '#99FF99',
    backgroundColor: '#242024',
    position: 'topCenter',
    timeout: 5000,
    pauseOnHover: false,
    layout: 2
});

setTimeout(() => {
    iziToast.info({
        close: false,
        zindex: 999,
        pauseOnHover: true,
        // titleLineHeight: '35',
        messageLineHeight: '35',
        icon: '',
        image: "https://media.discordapp.net/attachments/603940670914297867/685302017165623352/plusrekt1.jpg?width=150&height=150",
        imageWidth: 120,
        message: 'Let me know if you have any problems or requests! (or join my project)',
        buttons: [
            ['<button style=""><b>I have something</b></button>', function (instance, toast) {
    
                location.href = "https://github.com/LostMyCode/ProjectEndymion/issues";
    
            }, true],
            ['<button>No or later</button>', function (instance, toast) {
    
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
    
            }]
        ]
    });
}, 3000);