document$.subscribe(() => {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default"
  });

  // Important: force render after page load
  mermaid.run({
    querySelector: ".mermaid"
  });
});