$("flipbook").turn({
    width: 600,
    height: 400,
    autoCenter: true
});

const canvas = document.getElementById('hearts-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.emoji = Math.random() > 0.5 ? '💗' : '💘';
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        hearts.push(new Heart());
    }
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "24px Arial";
    hearts.forEach(h => {
        ctx.fillText(h.emoji, h.x, h.y);
        h.y += h.speed;
        if (h.y > canvas.height) {
            h.y = Math.random() * -canvas.height;
            h.x = Math.random() * canvas.width;
        }
    });
}

createHearts();
setInterval(drawHearts, 50);