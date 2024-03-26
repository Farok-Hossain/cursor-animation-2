import { particlesCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const root = document.querySelector("#app");

const options = {
  el: root,
  gpgpuSize: 200,
  colors: [0x00ff00, 0x0000ff],
  color: 0x6600ff,
  coordScale: 0.1,
  noiseIntensity: 0.001,
  noiseTimeCoef: 0.006,
  pointSize: 3,
  pointDecay: 0.0025,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.002,
  sleepTimeCoefY: 0.002,
};

particlesCursor(options);
