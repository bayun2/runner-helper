const tDistance = document.querySelector('#tDistance')
const tSpeed = document.querySelector('#tSpeed')
const rTime = document.querySelector('#rTime')
const tDistance2 = document.querySelector('#tDistance2')
const tTime2 = document.querySelector('#tTime2')
const rSpeed2 = document.querySelector('#rSpeed2')

function secondsToHMS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);
  
  return {
      hours: hours,
      minutes: minutes,
      seconds: remainingSeconds
  };
}
  

// 根据 input 内输入的速度和距离，计算出时间
function calculateTime() {
  const distance = parseFloat(tDistance.value);
  const speed = tSpeed.value;
  const [minutes, seconds] = speed.split("'");
  const totalMinutes = parseInt(minutes, 10) + parseFloat(seconds) / 60;
  const totalSeconds = (distance * totalMinutes) * 60; // Convert to Seconds
  const {hours, minutes: remainingMinutes, seconds: remainingSeconds} = secondsToHMS(totalSeconds);
  rTime.textContent = `${hours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// 根据 input 内输入的时间和距离，计算出速度
function calculateSpeed() {
  const distance = parseFloat(tDistance2.value);
  const time = tTime2.value;
  const [hours, minutes, seconds] = time.split(":").map(parseFloat);
  const totalTimeInMinutes = hours * 60 + minutes + seconds / 60;
  const speed = totalTimeInMinutes / distance;
  const speedMinutes = Math.floor(speed);
  const speedSeconds = Math.round((speed % 1) * 60);
  rSpeed2.textContent = `${speedMinutes}'${speedSeconds < 10 ? '0' : ''}${speedSeconds}"`;
}

tDistance.addEventListener('input', calculateTime);
tSpeed.addEventListener('input', calculateTime);
tDistance2.addEventListener('input', calculateSpeed);
tTime2.addEventListener('input', calculateSpeed);