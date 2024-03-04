import anime from "animejs";
// Declare a general timeline to use in all the animation functions.



// Preloader Animation
export const preLoaderAnim = () => {
  const textAnimation = anime.timeline({
    loop: true,
  });

  textAnimation
    .add({
      targets: ".text",
      opacity: [0, 1],
      duration: 2000,
      easing: "easeInOutQuad",
    })
    .add({
      targets: ".text",
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2000,
      easing: "easeInOutQuad",
      delay: 500,
    })
    .add({
      targets: ".text",
      strokeDashoffset: [0, anime.setDashoffset],
      duration: 2000,
      easing: "easeInOutQuad",
      delay: 500,
    });
};