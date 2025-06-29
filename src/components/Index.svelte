<script>
  import { onMount } from 'svelte';
  
  let scrollY = $state(0);
  let innerHeight = $state(0);
  
  const steps = [
    { text: "Thomas Young had a problem.", visual: "setup" },
    { text: "In 1801, he was trying to prove that light was a wave.", visual: "experiment" },
    { text: "When he wasn't looking directly at which slit the light went through...", visual: "no-observer" },
    { text: "But the moment he tried to peek...", visual: "observer" },
    { text: "The light knew it was being watched.", visual: "cheeky-photons" }
  ];
  
  const currentStep = $derived(Math.min(Math.floor(scrollY / (innerHeight * 0.6)), steps.length - 1));
</script>

<svelte:window bind:scrollY bind:innerHeight />

<main>
  <section class="intro">
    <h1>The Photons That Know They're Being Watched</h1>
    <p>A story about the strangest experiment in physics</p>
  </section>
  
  <section class="story">
    <!-- Fixed visual background -->
    <div class="visual-container">
      {#if currentStep === 0}
        <div class="visual setup">
          <div class="character">🧑‍🔬</div>
          <h2>Thomas Young</h2>
          <p>Had a curious problem...</p>
        </div>
      {:else if currentStep === 1}
        <div class="visual experiment">
          <div class="setup-diagram">
            💡 → <span class="slits">‖</span> → 📱
          </div>
          <p>Light through two slits</p>
        </div>
      {:else if currentStep === 2}
        <div class="visual no-observer">
          <div class="pattern stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
          </div>
          <p>🌊 Beautiful interference pattern</p>
        </div>
      {:else if currentStep === 3}
        <div class="visual observer">
          <div class="pattern bands">
            <div class="band left"></div>
            <div class="band right"></div>
          </div>
          <p>👀 Just two simple bands</p>
        </div>
      {:else if currentStep === 4}
        <div class="visual cheeky">
          <div class="photons">
            <span class="photon">😉</span>
            <span class="photon">😏</span>
            <span class="photon">🤫</span>
          </div>
          <p>The photons were watching back!</p>
        </div>
      
      {/if}
    </div>
    
    <!-- Scrolling text -->
    <div class="text-container">
      {#each steps as step, i}
        <div class="step" class:active={currentStep === i}>
          <p>{step.text}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="static-story">
    <div class="content">
      <h1>Young's Double Slit: The Experiment That Launched Quantum Weirdness</h1>
      
      <p>So the big question came up: is it wave or particles?</p>
      
      <p>Here's what Young actually discovered in 1801: When light passes through two slits simultaneously, it creates an interference pattern—proof that light behaves like waves. But waves of what, exactly?</p>

      <p>The double slit experiment works like this: Fire photons one at a time through two parallel openings. Logic says each photon picks one slit or the other. But the results say otherwise.</p>

      <div class="simulation-placeholder">
        <p><em>— some ml simulation —</em></p>
      </div>

      <p>Individual photons, it turns out, somehow "interfere with themselves." A single particle of light appears to go through both slits at once, creating the striped pattern we see. This is called quantum superposition.</p>

      <div class="simulation-placeholder">
        <p><em>— plot buildup run through (5,25,50 photons and so on till 2500) —</em></p>
      </div>

      <p>Surprise! The stripes vanish completely. It's like the photons suddenly got stage fright. Now we just get two boring blobs of light—exactly what you'd expect if each photon picked one slit or the other like a normal, well-behaved particle.</p>

      <p>And here, gentle reader, we arrive at the crux of our cosmic tragedy—nay, our comedy—for who can say which it truly is?</p>
      
      <p>Behold! The very fabric of reality doth bend and bow to the mere act of observation. What manner of universe have we inherited, where the fundamental particles of creation themselves perform elaborate masquerades, donning the costume of wave when unobserved, yet assuming the garb of particle when witnessed?</p>
      
      <p>Young sought but to solve a simple riddle—wave or particle?—and instead rent asunder the very veil that separates the possible from the impossible. He opened Pandora's box, and from it flew not evils, but questions far more vexing: Does reality exist independent of our gaze? Are we mere spectators in this cosmic theater, or are we unwitting directors, shaping the very performance by our presence?</p>
      
      <p>Thus do we stand, like Hamlet contemplating his skull, forced to confront the most unsettling truth of all: that the universe, in its infinite jest, has made consciousness itself a player in the grand equation. We are not merely IN the universe—we are OF it, woven into its very quantum fabric.</p>
      
      <p>And so the photons dance their eternal dance—now wave, now particle, now mystery incarnate—whilst we, poor players strutting upon this stage, can only marvel at the cosmic joke of which we are both audience and author.</p>
      
      <p><em>Exit, pursued by a quantum bear.</em></p>
    </div>
  </section>
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  .intro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .intro h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .story {
    position: relative;
    height: 300vh; /* Short story, 5 steps only */
  }
  
  .visual-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    z-index: 1;
  }
  
  .visual {
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    padding: 40px;
    text-align: center;
    max-width: 600px;
  }
  
  .character {
    font-size: 4rem;
    margin-bottom: 20px;
  }
  
  .setup-diagram {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .slits {
    color: #333;
    font-weight: bold;
  }
  
  .pattern {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  
  .stripes {
    gap: 10px;
  }
  
  .stripe {
    width: 30px;
    height: 180px;
    background: linear-gradient(to bottom, transparent, #4299e1, transparent);
    border-radius: 15px;
  }
  
  .bands {
    gap: 100px;
  }
  
  .band {
    width: 80px;
    height: 180px;
    background: linear-gradient(to bottom, transparent, #e53e3e, transparent);
    border-radius: 40px;
  }
  
  .photons {
    font-size: 3rem;
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 20px 0;
  }
  
  .photon {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  .text-container {
    position: relative;
    z-index: 10;
    width: 50%;
    margin-left: 5%;
    pointer-events: none;
  }
  
  .step {
    height: 100vh;
    display: flex;
    align-items: center;
    opacity: 0.3;
    transition: opacity 0.5s;
  }
  
  .step.active {
    opacity: 1;
  }
  
  .step p {
    font-size: 1.8rem;
    line-height: 1.6;
    background: rgba(255,255,255,0.95);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 25px rgba(0,0,0,0.1);
    pointer-events: auto;
  }

  /* New visual styles */
  .superposition-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .particle-path {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 2rem;
  }

  .photon.ghostly {
    opacity: 0.5;
    animation: flicker 2s infinite;
  }

  .plus, .equals {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4299e1;
  }

  .stripes.mini {
    scale: 0.5;
  }

  @keyframes flicker {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.9; }
  }

  .stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .spotlight {
    width: 100px;
    height: 20px;
    background: radial-gradient(ellipse, #ffd700, transparent);
    border-radius: 50%;
  }

  .photons.nervous {
    display: flex;
    gap: 20px;
    font-size: 2.5rem;
  }

  .photon.scared, .photon.hiding, .photon.fleeing {
    animation: shake 0.5s infinite;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
  }

  .tragedy-masks {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 3rem;
  }

  .universe-fabric {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .fabric-line {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #4299e1, #805ad5);
  }

  .tear {
    width: 60px;
    height: 8px;
    background: #e53e3e;
    transform: rotate(-10deg);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .costume-change {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 3rem;
  }

  .transform {
    font-size: 2rem;
    animation: glow 2s infinite;
  }

  .masks {
    display: flex;
    gap: 10px;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { color: #4299e1; }
    50% { color: #805ad5; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .pandora-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .box, .opening {
    font-size: 4rem;
  }

  .questions {
    display: flex;
    gap: 15px;
    font-size: 2rem;
    animation: spiral 4s infinite;
  }

  @keyframes spiral {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .theater {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .stage-lights {
    font-size: 1.5rem;
    animation: twinkle 2s infinite;
  }

  .audience {
    font-size: 2rem;
  }

  .performance {
    display: flex;
    gap: 30px;
    font-size: 2.5rem;
  }

  .actor {
    animation: bow 3s infinite;
  }

  .curtain {
    font-size: 3rem;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  @keyframes bow {
    0%, 80%, 100% { transform: rotateX(0); }
    40% { transform: rotateX(15deg); }
  }

  .hamlet-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .skull, .consciousness {
    font-size: 4rem;
    animation: contemplate 4s infinite;
  }

  .equation {
    display: flex;
    gap: 10px;
    font-size: 2rem;
    align-items: center;
  }

  @keyframes contemplate {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .eternal-dance {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .dancer {
    font-size: 3rem;
    animation: waltz 3s infinite;
  }

  .transform-symbol {
    font-size: 2rem;
    animation: spin 2s linear infinite;
  }

  .music-notes {
    font-size: 1.5rem;
    animation: sway 2s ease-in-out infinite;
  }

  .mystery {
    font-size: 2rem;
    animation: sparkle 1.5s infinite;
  }

  @keyframes waltz {
    0%, 100% { transform: translateX(0) rotate(0deg); }
    33% { transform: translateX(15px) rotate(10deg); }
    66% { transform: translateX(-15px) rotate(-10deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes sway {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  .bear-chase {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 3rem;
  }

  .bear {
    animation: chase 2s infinite;
  }

  .quantum {
    animation: quantum-fluctuation 1s infinite;
  }

  .exit-sign {
    font-size: 2rem;
    animation: blink 1s infinite;
  }

  .shakespeare {
    font-size: 2.5rem;
    animation: unfurl 3s infinite;
  }

  @keyframes chase {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(10px); }
  }

  @keyframes quantum-fluctuation {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(0.8) rotate(90deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    75% { transform: scale(0.9) rotate(270deg); }
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
  }

  @keyframes unfurl {
    0%, 90% { transform: rotate(0deg); }
    95% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
  }

  /* Static story section */
  .static-story {
    background: #ffffff;
    padding: 60px 0 120px;
    position: relative;
    z-index: 100;
  }

  .static-story .content {
    max-width: 680px;
    margin: 0 auto;
    padding: 0 40px;
    line-height: 1.6;
  }

  .static-story h1 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 40px;
    text-align: center;
    font-weight: 700;
    line-height: 1.2;
  }

  .static-story p {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 24px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .simulation-placeholder {
    text-align: center;
    margin: 40px 0;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px dashed #dee2e6;
  }

  .simulation-placeholder p {
    color: #6c757d;
    font-size: 0.95rem;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
</style>