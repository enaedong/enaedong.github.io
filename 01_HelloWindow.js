const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    console.error('webGL 2 is not supported by your browser.');
}

canvas.width = 500;
canvas.height = 500;

gl.viewport(0, 0, canvas.width, canvas.height);

function drawColoredRects() {
    const halfWidth = canvas.width / 2;
    const halfHeight = canvas.height / 2;

    gl.enable(gl.SCISSOR_TEST); 

    // 빨강
    gl.viewport(0, halfHeight, halfWidth, halfHeight);
    gl.scissor(0, halfHeight, halfWidth, halfHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 초록
    gl.viewport(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.scissor(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 파랑
    gl.viewport(0, 0, halfWidth, halfHeight);
    gl.scissor(0, 0, halfWidth, halfHeight);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 노랑
    gl.viewport(halfWidth, 0, halfWidth, halfHeight);
    gl.scissor(halfWidth, 0, halfWidth, halfHeight);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);


    gl.disable(gl.SCISSOR_TEST);
}

function render() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.enable(gl.SCISSOR_TEST);
    drawColoredRects();
}

window.addEventListener('resize', () => {
    const size = Math.min(window.innerWidth, window.innerHeight);

    canvas.width = size;
    canvas.height = size;
    gl.viewport(0, 0, size, size);
    render();
});

render();