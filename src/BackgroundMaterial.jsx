import { shaderMaterial } from '@react-three/drei';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';
import { extend } from '@react-three/fiber';

export const BackgroundMaterial = shaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

extend({ BackgroundMaterial });
