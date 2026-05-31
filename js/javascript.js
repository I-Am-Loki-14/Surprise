// function checkPassword() {
//     if (currentInput === correctPassword) {
//         // ၁။ စကားဝှက်မျက်နှာပြင်ကို ပိတ်ပြီး Wish Screen ကို ဖွင့်ခြင်း
//         document.getElementById("password-screen").style.display = "none";
//         document.getElementById("wish-screen").style.display = "block";
//         document.body.style.alignItems = "flex-start";
        
//         // --------------------------------------------------
//         // ⭐ ဒီနေရာမှာ သီချင်းကို ဖမ်းယူပြီး အော်တို Play ခိုင်းတဲ့ Function ထည့်လိုက်တာပါ
//         const music = document.getElementById("bgMusic");
//         if (music) {
//             music.play().catch(function(error) {
//                 console.log("သီချင်းဖွင့်ရန် အခက်အခဲရှိပါက - ", error);
//             });
//         }
//         // --------------------------------------------------
        
//         // ၃။ မီးပုံးပျံများနှင့် Slide များကို စတင်ခြင်း
//         startBalloons();
//         if (typeof startCarousel === "function") {
//             startCarousel(); 
//         }
//     } else {
//         errorMsg.innerText = "စကားဝှက် မှားနေပါတယ်၊ ပြန်ကြိုးစားကြည့်ပါ ကလေး။";
//         currentInput = "";
//         updateDisplay();
//     }
// }

function checkPassword() {
    if (currentInput === correctPassword) {
        // ၁။ Screen ချိန်းခြင်း
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("wish-screen").style.display = "block";
        document.body.style.alignItems = "flex-start";
        
        // ၂။ သီချင်းဖွင့်ခြင်း
        const music = document.getElementById("bgMusic");
        if (music) {
            music.play().catch(error => console.log(error));
        }
        
        // --------------------------------------------------
        // ⭐ ဒီကုတ်လေး ထည့်လိုက်ရင် Surprise Box ကြီး ဝုန်းကနဲ ပွင့်လာပါလိမ့်မယ်
        document.getElementById("surprise-popup").style.display = "flex";
        // --------------------------------------------------
        
        // ၃။ မီးပုံးပျံများ စတင်ခြင်း
        startBalloons();
        if (typeof startCarousel === "function") { startCarousel(); }
        
    } else {
        errorMsg.innerText = "စကားဝှက် မှားနေပါတယ်၊ ပြန်ကြိုးစားကြည့်ပါ မီးငယ်။";
        currentInput = "";
        updateDisplay();
    }
}

// ⭐ ကောင်မလေးက Pop-up ထဲက "ကြည့်မည်" ခလုတ်နှိပ်ရင် ပိတ်သွားမယ့် Function
function closeSurprise() {
    // ၁။ Pop-up Box ကို ပိတ်လိုက်ခြင်း
    document.getElementById("surprise-popup").style.display = "none";
    
    // ဖဲကြိုးစလေးတွေ ဘယ်ညာ ပစ်ဖောက်မယ့် Function အသေးလေးတစ်ခု ဆောက်လိုက်တာပါ
    function fireConfetti() {
        confetti({ particleCount: 100, spread: 80, origin: { x: 0.1, y: 0.6 } });
        confetti({ particleCount: 100, spread: 80, origin: { x: 0.9, y: 0.6 } });
    }

    // ဒလစပ် ပစ်ဖောက်ခြင်း (စုစုပေါင်း ၄ ကြိမ်)
    fireConfetti(); // ၁ ကြိမ်မြောက် (ချက်ချင်းဖောက်မယ်)
    
    setTimeout(fireConfetti, 1000);  // ၂ ကြိမ်မြောက် (သုညသမားငါးစက္ကန့် အကြာမှာ ဖောက်မယ်)
    setTimeout(fireConfetti, 2000); // ၃ ကြိမ်မြောက် (၁ စက္ကန့် အကြာမှာ ဖောက်မယ်)
    setTimeout(fireConfetti, 3000); // ၄ ကြိမ်မြောက် (၁ သမား ငါးစက္ကန့် အကြာမှာ ဖောက်မယ်)
}