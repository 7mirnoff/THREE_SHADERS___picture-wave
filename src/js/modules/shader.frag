varying vec2 vUv;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D texture;
uniform sampler2D map;
uniform float u_animation;

void main() {
  // ===== градиент начало =====
  // vec2 st = gl_FragCoord.xy / u_resolution.xy;
  // gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
  // ===== градиент конец ====

  // ===== мигалка начало =====
  // gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
  // ===== мигалка конец =====

  // ===== складывание векторов начало =====
  // gl_FragColor = vec4( vec3(1.0, 0.0, 1.0), 1.0);
  // ===== складывание векторов конец =====

  vec4 texture = texture2D(texture, vUv);

  // gl_FragColor = vec4( vec3(1.0, 0.0, 1.0), 1.0);
  gl_FragColor = texture;
}
