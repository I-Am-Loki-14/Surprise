function checkPassword() {
    if (currentInput === correctPassword) {
        // ၁။ စကားဝှက်မျက်နှာပြင်ကို ပိတ်ပြီး Wish Screen ကို ဖွင့်ခြင်း
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("wish-screen").style.display = "block";
        document.body.style.alignItems = "flex-start";
        
        // --------------------------------------------------
        // ⭐ ဒီနေရာမှာ သီချင်းကို ဖမ်းယူပြီး အော်တို Play ခိုင်းတဲ့ Function ထည့်လိုက်တာပါ
        const music = document.getElementById("bgMusic");
        if (music) {
            music.play().catch(function(error) {
                console.log("သီချင်းဖွင့်ရန် အခက်အခဲရှိပါက - ", error);
            });
        }
        // --------------------------------------------------
        
        // ၃။ မီးပုံးပျံများနှင့် Slide များကို စတင်ခြင်း
        startBalloons();
        if (typeof startCarousel === "function") {
            startCarousel(); 
        }
    } else {
        errorMsg.innerText = "စကားဝှက် မှားနေပါတယ်၊ ပြန်ကြိုးစားကြည့်ပါ ကလေး။";
        currentInput = "";
        updateDisplay();
    }
}