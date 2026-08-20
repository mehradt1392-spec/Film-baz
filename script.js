function findMovie() {
    const input = document.getElementById("movieInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (input.includes("کمدی") && input.includes("رمانتیک")) {
        result.innerHTML = `
            <h2>🎬 پیشنهاد ما</h2>
            <h3>10 Things I Hate About You</h3>
            <p>ژانر: کمدی، رمانتیک</p>
            <p>یک فیلم سرگرم‌کننده و عاشقانه با فضای نوجوانانه.</p>
        `;
    }

    else if (input.includes("ترسناک")) {
        result.innerHTML = `
            <h2>👻 پیشنهاد ما</h2>
            <h3>The Conjuring</h3>
            <p>ژانر: ترسناک</p>
            <p>یک فیلم ترسناک و هیجان‌انگیز.</p>
        `;
    }

    else if (input.includes("اکشن")) {
        result.innerHTML = `
            <h2>💥 پیشنهاد ما</h2>
            <h3>Mad Max: Fury Road</h3>
            <p>ژانر: اکشن</p>
            <p>یک فیلم اکشن سریع و پرهیجان.</p>
        `;
    }

    else {
        result.innerHTML = `
            <h2>🎬 پیشنهاد ما</h2>
            <h3>Interstellar</h3>
            <p>ژانر: علمی‌تخیلی، درام</p>
            <p>اگر نمی‌دانی چه ببینی، این یکی انتخاب جذابی است!</p>
        `;
    }
}
