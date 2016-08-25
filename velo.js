/**
 * velo
 * simplistic Tweeeen engine with easing equations
 * velo(fn, { delay: 400 })
 * fn(step) { target = step * 100 }
 */
export default function (render, { duration = 400, delay = 0, easing = 'linear', onComplete = null }) {
    let start = Date.now();
    (function cycle() {
        let progress = (Date.now() - (start + delay)) / duration;
        if(progress >= 1) {
            render(1)
            if(typeof onComplete === 'function') onComplete();
        } else {
            requestAnimationFrame(cycle)
            if(progress > 0) render(ease[easing](progress))
        }
    })()
}
// taken from https://gist.github.com/gre/1650294
const ease = {
    // no easing, no acceleration
    linear(t) { return t },
    // accelerating from zero velocity
    easeInQuad(t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad(t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity 
    easeInCubic(t) { return t*t*t },
    // decelerating to zero velocity 
    easeOutCubic(t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic(t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity 
    easeInQuart(t) { return t*t*t*t },
    // decelerating to zero velocity 
    easeOutQuart(t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart(t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint(t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint(t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint(t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}
