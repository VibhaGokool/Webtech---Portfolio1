



document.addEventListener("DOMContentLoaded", () => {
    const square = document.getElementById("square");
    const words = document.getElementById("words");
  
    // Initial greeting on page load
    if (words) {
      words.innerHTML = "Welcome to Flatland.<br>I am Square.";
    }
  
    if (square) {
      square.addEventListener("click", () => clicked());
      square.addEventListener("mouseover", () => changeColour("gray"));
      square.addEventListener("mouseout", () => changeColour("red"));
    }
  
    function changeColour(colour) {
      square.style.background = colour;
    }
  
    function clicked() {
      if (!words) return;
      const msg = "Build a<br>" + createBuzzwordPhrase();
      words.innerHTML = msg;
    }
  
    function createBuzzwordPhrase() {
        let buzz = [
            "Next-gen", "Blockchain-based", "AI-driven", "Cloud-native", "Hyper-personalized",
            "Quantum-ready", "Human-centered", "Decentralized", "Neural-enhanced", "Sustainable"
          ];
          
          let action = [
            "gamified", "micro-optimized", "cross-platform", "real-time", "collaborative",
            "context-aware", "low-code", "zero-trust", "autonomous", "inclusive"
          ];
          
          let outcome = [
            "experience", "ecosystem", "workflow", "interface", "infrastructure",
            "platform", "pipeline", "architecture", "insight engine", "digital twin"
          ];
          
  
      let idx_buz = Math.floor(Math.random() * buzz.length);
      let idx_act = Math.floor(Math.random() * action.length);
      let idx_out = Math.floor(Math.random() * outcome.length);
  
      return `${buzz[idx_buz]} ${action[idx_act]} ${outcome[idx_out]}`;
    }
  });