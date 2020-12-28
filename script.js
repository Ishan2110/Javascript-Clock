setInterval(SetTime, 1000);

function SetTime() {
    const currdate = new Date();

    htime = currdate.getHours();
    minstime = currdate.getMinutes();
    secstime = currdate.getSeconds();

    let hrs = htime * 30 + minstime / 2;
    let mins = minstime * 6 + secstime / 10;
    let secs = secstime * 6;

    hour.style.transform = `rotate(${hrs}deg)`;
    minute.style.transform = `rotate(${mins}deg)`;
    second.style.transform = `rotate(${secs}deg)`;

}

function rotate11() {
    let clk = document.getElementById('clock');

    // if (clk.style.display != 'none')
    //     clk.style.display = 'none';
    // else
    //     clk.style.display = 'block';

    clk.classList.add('rotate');
}