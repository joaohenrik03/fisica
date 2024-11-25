function calculateTension(mass, angle1, angle2, gravity = 9.81) {
  angle1 = angle1 * (Math.PI / 180);
  angle2 = angle2 * (Math.PI / 180);

  const T2 = (mass * gravity) / (Math.cos(angle2) * Math.tan(angle1) + Math.sin(angle2));

  const T1 = T2 * (Math.cos(angle2) / Math.cos(angle1));

  return { T1, T2 };
}

function calculate() {
  const mass = parseFloat(document.getElementById('mass').value);
  const angle1 = parseFloat(document.getElementById('angle1').value);
  const angle2 = parseFloat(document.getElementById('angle2').value);
  const gravity = parseFloat(document.getElementById('gravity').value) || 9.81;

  const { T1, T2 } = calculateTension(mass, angle1, angle2, gravity);

  document.getElementById('res').innerHTML = `
    M = ${mass} Kg
    <br>
    1 = ${angle1}
    <br>
    2 = ${angle2}
    <br>
    T1 = ${T1.toFixed(2)} N
    <br>
    T2 = ${T2.toFixed(2)} N
  `;
}