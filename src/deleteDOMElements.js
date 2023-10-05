const removeAside = () => {
  document.querySelectorAll('aside > *').forEach((e) => e.remove());
};

export default removeAside;
