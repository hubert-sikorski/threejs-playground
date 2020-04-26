let scene, camera, renderer;

const init = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 750;
  camera.position.y = 150;
  camera.position.z = 900;

  light = new THREE.PointLight(0xc4c4c4, 10);
  light.position.set(0, 300, 500);
  scene.add(light);

  light2 = new THREE.PointLight(0xc4c4c4, 10);
  light2.position.set(200, 100, 0);
  scene.add(light2);

  light3 = new THREE.PointLight(0xc4c4c4, 10);
  light3.position.set(0, 100, -500);
  scene.add(light3);

  renderer =  new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('update', renderer);

  let loader = new THREE.GLTFLoader();
  loader.load('scene.gltf', gltf => {
    car = gltf.scene.children[0];
    car.scale.set(1.5, 1.5, 1.5);
    car.position.y = -100;
    scene.add(gltf.scene);
    animate();
  });
}
const animate = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();