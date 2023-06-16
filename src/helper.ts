export const CheckWebGPU = () => {
    let result = 'Great, your current browser supports WebGPU';
        if (!navigator.gpu) {
            result = `Your current browser does not suposrt WebGPU! Make sure you are on a system with WebGPU enabled. Currently, SPIR-WebGPU is only supported in <a href="https://www.google.com/chrome/canary">Chrome canary</a> with the flag "enable-unsafe-webgpu" enabled. See the <a href="https://github.com/gpuweb/wiki/Implementation-Status"> Implementation Status</a> page for more details. You can also use your regular Chrome to try a pre- release verion of WebGPU via <a href="https://developer.chrome.com/origintrials/#/view_trial/11821940218475521">Origin Trial</a>.
            `;
        }

        const canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;
        if(canvas){
            const div = document.getElementsByClassName('item')[0] as HTMLDivElement;
            if(div){
                canvas.width = div.offsetWidth;
                canvas.height = div.offsetHeight;

                function windowResize() {
                    canvas.width = div.offsetWidth;
                    canvas.height = div.offsetHeight;
                }
            }
        }
        return result;
}