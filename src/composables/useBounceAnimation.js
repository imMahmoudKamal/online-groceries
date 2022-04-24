export function useBounceAnimation(element, className) {
  element.classList.add(className);

  element.addEventListener('transitionend', () => {
    element.classList.remove(className);
  });
}
