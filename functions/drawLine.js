function drawLine(x1, y1, x2, y2) {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
      
    // 设置线条样式
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 1
    ctx.lineJoin = 'round'

    // 定义起点和终点的坐标
    const startX = x1
    const startY = y1
    const endX = x2
    const endY = y2
    let prevX = startX
    let prevY = startY
    let nextX
    let nextY
    // 第一帧执行的时间
    let startTime;
    // 期望动画持续的时间
    const duration = 500


    const step = (currentTime) => {
        // 第一帧绘制时记录下开始的时间
        !startTime && (startTime = currentTime)
        // 已经过去的时间(ms)
        const timeElapsed = currentTime - startTime
        // 动画执行的进度 {0,1}
        const progress = Math.min(timeElapsed / duration, 1)

        // 绘制方法
        const draw = () => {
            // 创建新的路径
            ctx.beginPath()
            // 创建子路径,并将起点移动到上一帧绘制到达的坐标点
            ctx.moveTo(prevX, prevY)
            // 计算这一帧中线段应该到达的坐标点,并且将prevX/Y更新为此值给下一帧使用.
            prevX = nextX = startX + (endX - startX) * progress
            prevY = nextY = startY + (endY - startY) * progress
            // 用直线将刚刚moveTo中的点连接到(nextX,nextY)上
            ctx.lineTo(nextX, nextY)
            ctx.strokeStyle = `#727272`
            // 把这一帧的路径绘制出来
            ctx.stroke()
        }
        draw()

        if (progress < 1) {
            requestAnimationFrame(step)
        } else {
            console.log('动画执行完毕')
        }
    }

    requestAnimationFrame(step)
}

export default drawLine;