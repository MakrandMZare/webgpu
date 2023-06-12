export const CheckWebGPU = () => {
    let result = 'Great, your current browser supports WebGPU';
        if (!navigator) {
            result = 'Your current browser does not suposrt WebGPU! Make sure you are on a system with WebGPU enabled. Currently, SPIR-WebGPU is only supported in <a href="https://www.google.com/chrome/canary">Chrome canary</a> with the flag "enable-unsafe-webgpu" enabled. See the <a href="https://github.com/gpuweb/wiki/Implementation-Status"> Implementation Status</a> page for more details.';
        }
    return result;
}