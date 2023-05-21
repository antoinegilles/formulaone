<template>
  <div>
    <div class="canvasContainer" ref="canvasContainer"></div>
  </div>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  name: "RedbullCar",
  setup() {
    const canvasContainer = ref(null);
    let scene, camera, renderer, model;

    const distance = ref(5); // Distance initiale entre la caméra et l'objet

    onMounted(() => {
      // Créer une scène
      scene = new THREE.Scene();

      // Créer une caméra
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = distance.value;

      // Créer un rendu
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      canvasContainer.value.appendChild(renderer.domElement);

      // Chargement du modèle glTF
      const loader = new GLTFLoader();
      loader.load("driver/scene.gltf", (gltf) => {
        // Obtenir le modèle
        model = gltf.scene;

        // Ajouter le modèle à la scène
        scene.add(model);
        model.position.y += -2;
        // model.position.x += -1;
        model.position.z += 3;
        // model.rotation.y += 1;
        // model.rotation.z += 0;
        // model.rotation.x += 0.3;

        // Animation de la scène
        const animate = function () {
          requestAnimationFrame(animate);

          // Mise à jour de la position de la caméra en fonction de la distance
          camera.position.z = distance.value;

          // Rotation du modèle
          //   model.rotation.x += 0.01;
            model.rotation.y += 0.01;

          // Rendu de la scène
          renderer.render(scene, camera);
        };

        // Définir la couleur de fond de la scène sur transparent
        scene.background = null;

        // // Activer l'alpha du rendu pour permettre la transparence
        renderer.setClearColor(0x000000, 0); // Remplacez la couleur de fond (0x000000) par la couleur de votre choix
        renderer.setClearAlpha(0);

        // Création de la lumière ambiante
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Couleur de la lumière et intensité
        scene.add(ambientLight);

        // Création de la lumière directionnelle
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Couleur de la lumière et intensité
        directionalLight.position.set(0, 2, 0); // Position de la lumière
        scene.add(directionalLight);

        // Création de la lumière ponctuelle
        const pointLight = new THREE.PointLight(0xff0000, 1, 10); // Couleur de la lumière, intensité et distance d'atteinte
        pointLight.position.set(0, 5, 0); // Position de la lumière
        scene.add(pointLight);


        // Lancer l'animation
        animate();
        // Rendu de la scène
        renderer.render(scene, camera);
      });
    });

    return {
      canvasContainer,
    };
  },
};
</script>
<style>
.canvasContainer > canvas {
  width: 26em !important;
  height: 20em !important;
}
</style>
  