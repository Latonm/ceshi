// 获取视频元素和按钮
const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeUpBtn = document.getElementById('volumeUpBtn');
const volumeDownBtn = document.getElementById('volumeDownBtn');

// 播放视频
playBtn.addEventListener('click', () => {
    video.play();
    console.log('视频正在播放');
});

// 暂停视频
pauseBtn.addEventListener('click', () => {
    video.pause();
    console.log('视频已暂停');
});

// 静音/取消静音
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    console.log(video.muted ? '视频已静音' : '取消静音');
});

// 增加音量
volumeUpBtn.addEventListener('click', () => {
    if (video.volume < 1) {
        video.volume = Math.min(video.volume + 0.1, 1); // 确保音量不超过1
    }
    console.log(`当前音量：${Math.round(video.volume * 100)}%`);
});

// 减少音量
volumeDownBtn.addEventListener('click', () => {
    if (video.volume > 0) {
        video.volume = Math.max(video.volume - 0.1, 0); // 确保音量不低于0
    }
    console.log(`当前音量：${Math.round(video.volume * 100)}%`);
});
