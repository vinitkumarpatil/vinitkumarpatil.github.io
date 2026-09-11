/**
 * Portfolio Interactive Scripts
 * Vinitkumar Jinesh Patil - CSBS @ JSSSTU
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. CERTIFICATES DATA & LIGHTBOX
     ========================================================================== */
  const certificates = [
    {
      title: "z0d1ak CTF Qualifiers — Rank #112 of 1,252",
      org: "Apex • Sponsored by DataFlow Security, hackerdna, Hackviser, hackinghub, CWL, xyz, Knight Squad Academy",
      date: "21–23 August 2026",
      desc: "Participated in the international z0d1ak CTF Qualifiers representing team Apex. Achieved notable national rank #112 out of 1,252 participating cybersecurity teams.",
      image: "assets/images/certificate-z0d1ak.png"
    },
    {
      title: "Ideathon'25 — Participation Certificate",
      org: "TESLA-SJCE • JSS Science and Technology University, Mysuru",
      date: "16 December 2025",
      desc: "Participated in Ideathon'25 organized by TESLA-SJCE on the occasion of Energy Conservation Day 2025 held at JSS Science and Technology University.",
      image: "assets/images/certificate-ideathon.png"
    },
    {
      title: "Agentic AI Starter Course with Certification",
      org: "Saumya Singh • Certified Course",
      date: "Completed 2026",
      desc: "Awarded to Vinitkumar in recognition of successful completion of our Agentic AI Starter Course with Certification, covering autonomous agent patterns and AI developer workflows.",
      image: "assets/images/certificate-agentic-ai.png"
    },
    {
      title: "Python Basic to Advance Course — Certificate of Appreciation",
      org: "Saumya Singh • Certified Course",
      date: "28 December 2025",
      desc: "Awarded to Vinitkumar in recognition of successful completion of our Python Basic To Advance Course. Hard work & dedication sincerely appreciated!",
      image: "assets/images/certificate-python-advanced.png"
    },
    {
      title: "Design Thinking for Beginners — Certificate of Completion",
      org: "Simplilearn SkillUp • CEO Krishna Kumar (Cert ID: 8565717)",
      date: "03 July 2025",
      desc: "Successfully completed the online course: Design Thinking for Beginners. Demonstrating initiative and commitment to deepening human-centered problem solving.",
      image: "assets/images/certificate-simplilearn-designthinking.png"
    },
    {
      title: "Communication Skills Course — Certificate of Completion",
      org: "Simplilearn SkillUp • CEO Krishna Kumar (Cert ID: 9613058)",
      date: "20 December 2025",
      desc: "Successfully completed the online course: Communication Skills Course. Validated competencies in professional dialogue, interpersonal teamwork, and presentation.",
      image: "assets/images/certificate-simplilearn-communication.png"
    },
    {
      title: "TCS iON — Communication Skills Certificate of Achievement",
      org: "TCS iON • Tata Consultancy Services (Cert ID: 91306-29804710-1016)",
      date: "04 August 2026",
      desc: "Awarded for successfully completing Communication Skills covering Importance of Communication, Process, Barriers, Non-Verbal Communication, and Verbal Effectiveness.",
      image: "assets/images/certificate-tcs.png"
    }
  ];

  /* Photo Showcase Data */
  const showcasePhotos = [
    {
      title: "Master Portrait — Mysuru Heritage Landmark",
      org: "Mysuru, Karnataka • Evening Illumination",
      date: "Original High-Definition Portrait",
      desc: "Second-year B.E. Computer Science and Business Systems student at JSSSTU Mysuru.",
      image: "assets/images/vinitkumar-avatar.png"
    },
    {
      title: "Campus Reflections & Outdoors",
      org: "JSSSTU Mysuru • Campus Life",
      date: "Mysuru Greenery",
      desc: "Balancing rigorous engineering academics with outdoor mindfulness and curiosity.",
      image: "assets/images/vinit-nature.jpg"
    },
    {
      title: "Engineering Mindset & Focus",
      org: "Dedication, Focus & Problem Solving",
      date: "Studio Portrait",
      desc: "Continuous learning, algorithmic persistence, and technical growth in computer science.",
      image: "assets/images/vinit-studio.jpg"
    },
    {
      title: "Monochrome Street Portrait",
      org: "Clarity, Balance & Simplicity",
      date: "Monochrome Edition",
      desc: "Simplicity, precision, and focus on clean foundations in technology and life.",
      image: "assets/images/vinit-monochrome.jpg"
    },
    {
      title: "Waterfront Promenade Reflections",
      org: "Mysuru Landmark • Night Promenade",
      date: "Evening Waterfront",
      desc: "Mindfulness and reflections along the illuminated Mysuru waterfront.",
      image: "assets/images/vinit-waterfront.jpg"
    },
    {
      title: "Emerald Musical Fountains",
      org: "Campus & City Life • Mysuru",
      date: "Vibrant Illumination",
      desc: "Enjoying the vibrant evening lights and musical fountains.",
      image: "assets/images/vinit-fountain.jpg"
    }
  ];

  let currentCertIndex = 0;
  let currentPhotoIndex = 0;
  let isViewingPhotos = false;
  let currentZoom = 1;

  const certModal = document.getElementById('certModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCertImg = document.getElementById('modalCertImg');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalCertOrg = document.getElementById('modalCertOrg');
  const modalCertDesc = document.getElementById('modalCertDesc');
  const modalCertDate = document.getElementById('modalCertDate');
  const modalIndicator = document.getElementById('modalIndicator');

  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnModalPrev = document.getElementById('btnModalPrev');
  const btnModalNext = document.getElementById('btnModalNext');
  const btnZoomIn = document.getElementById('btnZoomIn');
  const btnZoomOut = document.getElementById('btnZoomOut');
  const btnZoomReset = document.getElementById('btnZoomReset');

  function openCertificateModal(index) {
    isViewingPhotos = false;
    currentCertIndex = index;
    currentZoom = 1;
    updateModalContent();
    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnModalNext.focus();
  }

  function openPhotoModal(index) {
    isViewingPhotos = true;
    currentPhotoIndex = index;
    currentZoom = 1;
    updatePhotoModalContent();
    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnModalNext.focus();
  }

  function closeCertificateModal() {
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateModalContent() {
    const cert = certificates[currentCertIndex];
    if (!cert) return;

    modalCertImg.src = cert.image;
    modalCertImg.alt = cert.title;
    modalCertTitle.textContent = cert.title;
    modalCertOrg.textContent = cert.org;
    modalCertDesc.textContent = cert.desc;
    modalCertDate.textContent = cert.date;
    modalIndicator.textContent = `${currentCertIndex + 1} / ${certificates.length}`;

    resetZoom();
  }

  function updatePhotoModalContent() {
    const photo = showcasePhotos[currentPhotoIndex];
    if (!photo) return;

    modalCertImg.src = photo.image;
    modalCertImg.alt = photo.title;
    modalCertTitle.textContent = photo.title;
    modalCertOrg.textContent = photo.org;
    modalCertDesc.textContent = photo.desc;
    modalCertDate.textContent = photo.date;
    modalIndicator.textContent = `${currentPhotoIndex + 1} / ${showcasePhotos.length}`;

    resetZoom();
  }

  function applyZoom() {
    modalCertImg.style.transform = `scale(${currentZoom})`;
  }

  function resetZoom() {
    currentZoom = 1;
    applyZoom();
  }

  function zoomIn() {
    if (currentZoom < 3) {
      currentZoom += 0.25;
      applyZoom();
    }
  }

  function zoomOut() {
    if (currentZoom > 0.6) {
      currentZoom -= 0.25;
      applyZoom();
    }
  }

  function prevCert() {
    if (isViewingPhotos) {
      currentPhotoIndex = (currentPhotoIndex - 1 + showcasePhotos.length) % showcasePhotos.length;
      updatePhotoModalContent();
    } else {
      currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
      updateModalContent();
    }
  }

  function nextCert() {
    if (isViewingPhotos) {
      currentPhotoIndex = (currentPhotoIndex + 1) % showcasePhotos.length;
      updatePhotoModalContent();
    } else {
      currentCertIndex = (currentCertIndex + 1) % certificates.length;
      updateModalContent();
    }
  }

  // Certificate Trigger buttons
  document.querySelectorAll('.btn-open-modal, .cert-image-container').forEach(el => {
    el.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.cert-card');
      const idx = parseInt(card.getAttribute('data-cert-index'), 10) || 0;
      openCertificateModal(idx);
    });
  });

  // Photo Showcase Trigger cards & Sliding Window
  document.querySelectorAll('.showcase-card, .slide-zoom-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(el.getAttribute('data-photo-index'), 10) || 0;
      openPhotoModal(idx);
    });
  });

  /* Certificate Category Filters */
  const filterButtons = document.querySelectorAll('.cert-filter-bar .filter-btn');
  const certCards = document.querySelectorAll('.certificates-grid .cert-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      certCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeCertificateModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeCertificateModal);
  if (btnModalPrev) btnModalPrev.addEventListener('click', prevCert);
  if (btnModalNext) btnModalNext.addEventListener('click', nextCert);
  if (btnZoomIn) btnZoomIn.addEventListener('click', zoomIn);
  if (btnZoomOut) btnZoomOut.addEventListener('click', zoomOut);
  if (btnZoomReset) btnZoomReset.addEventListener('click', resetZoom);

  /* ==========================================================================
     2. RESUME MODAL & PRINT
     ========================================================================== */
  const resumeModal = document.getElementById('resumeModal');
  const resumeModalBackdrop = document.getElementById('resumeModalBackdrop');
  const btnCloseResumeModal = document.getElementById('btnCloseResumeModal');
  const btnPrintResumeBtn = document.getElementById('btnPrintResumeBtn');

  function openResumeModal() {
    resumeModal.classList.add('active');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal.classList.remove('active');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const resumeTriggers = [
    document.getElementById('btnResumeModalTrigger'),
    document.getElementById('btnHeroResume'),
    document.getElementById('btnOpenResumeModal')
  ];

  resumeTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', openResumeModal);
  });

  if (btnCloseResumeModal) btnCloseResumeModal.addEventListener('click', closeResumeModal);
  if (resumeModalBackdrop) resumeModalBackdrop.addEventListener('click', closeResumeModal);
  if (btnPrintResumeBtn) {
    btnPrintResumeBtn.addEventListener('click', () => {
      const iframe = document.getElementById('resumeIframe');
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } else {
        window.open('assets/docs/resume.html', '_blank').print();
      }
    });
  }

  /* ==========================================================================
     3. KEYBOARD NAVIGATION
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (certModal.classList.contains('active')) {
      if (e.key === 'Escape') closeCertificateModal();
      else if (e.key === 'ArrowLeft') prevCert();
      else if (e.key === 'ArrowRight') nextCert();
      else if (e.key === '+' || e.key === '=') zoomIn();
      else if (e.key === '-') zoomOut();
      else if (e.key === '0') resetZoom();
    } else if (resumeModal && resumeModal.classList.contains('active')) {
      if (e.key === 'Escape') closeResumeModal();
    }
  });

  /* ==========================================================================
     4. NAVBAR SCROLL & MOBILE MENU
     ========================================================================== */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link on scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Back to top visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 350) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  }, { passive: true });

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     5. STATS ANIMATED COUNTERS
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const statCards = document.querySelectorAll('.stat-card');
  let animated = false;

  function animateStats() {
    if (animated || prefersReducedMotion) return;
    animated = true;

    statCards.forEach(card => {
      const valueEl = card.querySelector('.stat-value');
      if (!valueEl) return;

      const target = parseFloat(valueEl.getAttribute('data-target'));
      const decimals = parseInt(valueEl.getAttribute('data-decimals'), 10) || 0;
      const suffix = valueEl.getAttribute('data-suffix') || '';

      if (isNaN(target)) return;

      const duration = 1600;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = target * ease;

        valueEl.textContent = currentVal.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          valueEl.textContent = target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const statsSection = document.getElementById('stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
  } else {
    animateStats();
  }
  /* ==========================================================================
     6. SLIDING WINDOW SHOWCASE GALLERY CONTROLLER
     ========================================================================== */
  const slidingTrack = document.getElementById('slidingTrack');
  const slidingViewport = document.getElementById('slidingViewport');
  const slides = document.querySelectorAll('.window-slide');
  const prevSlideBtn = document.getElementById('prevSlideBtn');
  const nextSlideBtn = document.getElementById('nextSlideBtn');
  const currentSlideNum = document.getElementById('currentSlideNum');
  const totalSlideNum = document.getElementById('totalSlideNum');
  const windowDots = document.querySelectorAll('.window-dot');
  const windowProgressFill = document.getElementById('windowProgressFill');

  if (slidingTrack && slides.length > 0) {
    let activeSlideIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval = null;

    if (totalSlideNum) totalSlideNum.textContent = totalSlides;

    function goToSlide(index) {
      if (index < 0) {
        activeSlideIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        activeSlideIndex = 0;
      } else {
        activeSlideIndex = index;
      }

      slidingTrack.style.transform = `translateX(-${activeSlideIndex * 100}%)`;

      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === activeSlideIndex);
      });

      windowDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeSlideIndex);
      });

      if (currentSlideNum) {
        currentSlideNum.textContent = activeSlideIndex + 1;
      }

      if (windowProgressFill) {
        const progressPercent = ((activeSlideIndex + 1) / totalSlides) * 100;
        windowProgressFill.style.width = `${progressPercent}%`;
      }
    }

    if (prevSlideBtn) {
      prevSlideBtn.addEventListener('click', () => {
        goToSlide(activeSlideIndex - 1);
        resetAutoSlide();
      });
    }

    if (nextSlideBtn) {
      nextSlideBtn.addEventListener('click', () => {
        goToSlide(activeSlideIndex + 1);
        resetAutoSlide();
      });
    }

    windowDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(targetIdx)) {
          goToSlide(targetIdx);
          resetAutoSlide();
        }
      });
    });

    // Auto Advance with pause on hover
    function startAutoSlide() {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        goToSlide(activeSlideIndex + 1);
      }, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    if (slidingViewport) {
      slidingViewport.addEventListener('mouseenter', stopAutoSlide);
      slidingViewport.addEventListener('mouseleave', startAutoSlide);

      // Touch swipe detection
      let startTouchX = 0;
      let endTouchX = 0;

      slidingViewport.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].clientX;
        stopAutoSlide();
      }, { passive: true });

      slidingViewport.addEventListener('touchend', (e) => {
        endTouchX = e.changedTouches[0].clientX;
        const diffX = startTouchX - endTouchX;
        if (Math.abs(diffX) > 40) {
          if (diffX > 0) {
            goToSlide(activeSlideIndex + 1);
          } else {
            goToSlide(activeSlideIndex - 1);
          }
        }
        startAutoSlide();
      }, { passive: true });
    }

    startAutoSlide();
  }

  /* ==========================================================================
     7. BYTESNAKE ARCADE MINI-GAME CONTROLLER
     ========================================================================== */
  const snakeCanvas = document.getElementById('bytesnakeCanvas');
  if (snakeCanvas) {
    const ctx = snakeCanvas.getContext('2d');
    const btnStartArcade = document.getElementById('btnStartArcade');
    const btnPauseArcade = document.getElementById('btnPauseArcade');
    const btnResetArcade = document.getElementById('btnResetArcade');
    const arcadeOverlay = document.getElementById('arcadeOverlay');
    const arcadeOverlayTitle = document.getElementById('arcadeOverlayTitle');
    const arcadeOverlayMsg = document.getElementById('arcadeOverlayMsg');
    const btnStartArcadeText = document.getElementById('btnStartArcadeText');
    const snakeScoreEl = document.getElementById('snakeScore');
    const snakeHighScoreEl = document.getElementById('snakeHighScore');
    const snakeCurrentTokenEl = document.getElementById('snakeCurrentToken');
    const snakeSpeedEl = document.getElementById('snakeSpeed');

    // Touch D-Pad buttons
    const dpadUp = document.getElementById('dpadUp');
    const dpadDown = document.getElementById('dpadDown');
    const dpadLeft = document.getElementById('dpadLeft');
    const dpadRight = document.getElementById('dpadRight');
    const dpadCenter = document.getElementById('dpadCenter');

    const GRID_SIZE = 20;
    const COLS = Math.floor(snakeCanvas.width / GRID_SIZE); // 32
    const ROWS = Math.floor(snakeCanvas.height / GRID_SIZE); // 19

    const CSBS_TOKENS = ['C++', 'DSA', 'AI', '9.37', 'VK', 'OOP', 'SQL', 'CSBS'];
    let tokenIndex = 0;

    let snake = [];
    let direction = { x: 1, y: 0 };
    let nextDirection = { x: 1, y: 0 };
    let food = null;
    let score = 0;
    let highScore = parseInt(localStorage.getItem('bytesnake_highscore'), 10) || 0;
    let isRunning = false;
    let isPaused = false;
    let gameLoopTimeout = null;
    let speedMs = 130;
    let particles = [];

    if (snakeHighScoreEl) snakeHighScoreEl.textContent = highScore;

    function initGame() {
      snake = [
        { x: 8, y: 9 },
        { x: 7, y: 9 },
        { x: 6, y: 9 },
        { x: 5, y: 9 }
      ];
      direction = { x: 1, y: 0 };
      nextDirection = { x: 1, y: 0 };
      score = 0;
      tokenIndex = 0;
      speedMs = 130;
      particles = [];
      updateScoreUI();
      spawnFood();
    }

    function spawnFood() {
      let valid = false;
      let newX = 0;
      let newY = 0;

      while (!valid) {
        newX = Math.floor(Math.random() * (COLS - 2)) + 1;
        newY = Math.floor(Math.random() * (ROWS - 2)) + 1;
        valid = !snake.some(segment => segment.x === newX && segment.y === newY);
      }

      const token = CSBS_TOKENS[tokenIndex % CSBS_TOKENS.length];
      tokenIndex++;
      food = { x: newX, y: newY, token: token };
      if (snakeCurrentTokenEl) snakeCurrentTokenEl.textContent = token;
    }

    function spawnParticles(x, y, color) {
      for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        particles.push({
          x: x * GRID_SIZE + GRID_SIZE / 2,
          y: y * GRID_SIZE + GRID_SIZE / 2,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.5 + 1.5,
          color: color || '#38bdf8',
          alpha: 1,
          decay: Math.random() * 0.04 + 0.02
        });
      }
    }

    function updateScoreUI() {
      if (snakeScoreEl) snakeScoreEl.textContent = score;
      if (snakeHighScoreEl) snakeHighScoreEl.textContent = highScore;
      if (snakeSpeedEl) {
        const mult = (130 / speedMs).toFixed(1);
        snakeSpeedEl.textContent = `${mult}x`;
      }
    }

    function startGame() {
      initGame();
      isRunning = true;
      isPaused = false;
      arcadeOverlay.classList.add('hidden');
      if (btnPauseArcade) btnPauseArcade.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
      gameTick();
    }

    function pauseGame() {
      if (!isRunning) return;
      isPaused = !isPaused;
      if (isPaused) {
        if (gameLoopTimeout) clearTimeout(gameLoopTimeout);
        if (btnPauseArcade) btnPauseArcade.innerHTML = '<i class="fa-solid fa-play"></i> Resume';
        draw();
        ctx.fillStyle = 'rgba(2, 6, 23, 0.75)';
        ctx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 18px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED [Press Space or Center D-Pad to Resume]', snakeCanvas.width / 2, snakeCanvas.height / 2);
      } else {
        if (btnPauseArcade) btnPauseArcade.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
        gameTick();
      }
    }

    function gameOver() {
      isRunning = false;
      if (gameLoopTimeout) clearTimeout(gameLoopTimeout);

      if (score > highScore) {
        highScore = score;
        localStorage.setItem('bytesnake_highscore', highScore);
        updateScoreUI();
      }

      if (arcadeOverlayTitle) arcadeOverlayTitle.textContent = 'Execution Terminated!';
      if (arcadeOverlayMsg) {
        arcadeOverlayMsg.innerHTML = `Algo run completed.<br>Final Score: <strong>${score}</strong> | High Score: <strong>${highScore}</strong><br>Keep building and problem solving!`;
      }
      if (btnStartArcadeText) btnStartArcadeText.textContent = 'Run Algorithm Again';
      arcadeOverlay.classList.remove('hidden');
    }

    function update() {
      direction = { ...nextDirection };
      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      // Wall collision
      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
        gameOver();
        return;
      }

      // Self collision
      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
        return;
      }

      snake.unshift(head);

      // Check food collection
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        spawnParticles(head.x, head.y, '#38bdf8');

        // Speed progression
        if (speedMs > 65 && score % 30 === 0) {
          speedMs -= 10;
        }

        updateScoreUI();
        spawnFood();
      } else {
        snake.pop();
      }
    }

    function draw() {
      // Clear background
      ctx.fillStyle = '#02050f';
      ctx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

      // Grid dots / cyber grid
      ctx.fillStyle = 'rgba(56, 189, 248, 0.05)';
      for (let x = 0; x < snakeCanvas.width; x += GRID_SIZE) {
        for (let y = 0; y < snakeCanvas.height; y += GRID_SIZE) {
          ctx.fillRect(x + 9, y + 9, 2, 2);
        }
      }

      // Border outline
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, snakeCanvas.width - 2, snakeCanvas.height - 2);

      // Draw Food (Pill with token text)
      if (food) {
        const fx = food.x * GRID_SIZE;
        const fy = food.y * GRID_SIZE;
        
        ctx.save();
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;

        const pillW = GRID_SIZE * 1.6;
        const pillH = GRID_SIZE - 2;
        const drawX = fx - (pillW - GRID_SIZE) / 2;
        const drawY = fy + 1;
        const radius = 5;

        ctx.beginPath();
        ctx.roundRect(drawX, drawY, pillW, pillH, radius);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(food.token, drawX + pillW / 2, drawY + pillH / 2);
        ctx.restore();
      }

      // Draw Snake
      snake.forEach((segment, i) => {
        const sx = segment.x * GRID_SIZE;
        const sy = segment.y * GRID_SIZE;

        ctx.save();
        if (i === 0) {
          // Snake Head
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.roundRect(sx + 1, sy + 1, GRID_SIZE - 2, GRID_SIZE - 2, 6);
          ctx.fill();

          // Head Eyes
          ctx.fillStyle = '#020617';
          ctx.shadowBlur = 0;
          let eyeX1 = sx + 5, eyeY1 = sy + 5, eyeX2 = sx + 13, eyeY2 = sy + 5;
          if (direction.x === 1) {
            eyeX1 = sx + 12; eyeY1 = sy + 4; eyeX2 = sx + 12; eyeY2 = sy + 14;
          } else if (direction.x === -1) {
            eyeX1 = sx + 5; eyeY1 = sy + 4; eyeX2 = sx + 5; eyeY2 = sy + 14;
          } else if (direction.y === 1) {
            eyeX1 = sx + 4; eyeY1 = sy + 12; eyeX2 = sx + 14; eyeY2 = sy + 12;
          } else if (direction.y === -1) {
            eyeX1 = sx + 4; eyeY1 = sy + 5; eyeX2 = sx + 14; eyeY2 = sy + 5;
          }
          ctx.beginPath();
          ctx.arc(eyeX1, eyeY1, 2, 0, Math.PI * 2);
          ctx.arc(eyeX2, eyeY2, 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Snake Body: Gradient Cyan to Indigo
          const gradientRatio = i / snake.length;
          const r = Math.round(56 * (1 - gradientRatio) + 99 * gradientRatio);
          const g = Math.round(189 * (1 - gradientRatio) + 102 * gradientRatio);
          const b = Math.round(248 * (1 - gradientRatio) + 241 * gradientRatio);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.beginPath();
          ctx.roundRect(sx + 2, sy + 2, GRID_SIZE - 4, GRID_SIZE - 4, 4);
          ctx.fill();
        }
        ctx.restore();
      });

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    function gameTick() {
      if (!isRunning || isPaused) return;
      update();
      if (isRunning && !isPaused) {
        draw();
        gameLoopTimeout = setTimeout(gameTick, speedMs);
      }
    }

    function setDirection(dx, dy) {
      if (!isRunning) return;
      if (dx !== 0 && direction.x === -dx) return;
      if (dy !== 0 && direction.y === -dy) return;
      nextDirection = { x: dx, y: dy };
    }

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      const code = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'w', 'a', 's', 'd'].includes(code)) {
        const arcadeRect = snakeCanvas.getBoundingClientRect();
        const isInView = arcadeRect.top < window.innerHeight && arcadeRect.bottom > 0;
        if (isRunning && isInView) {
          e.preventDefault();
        }
      }

      if (code === 'arrowup' || code === 'w') setDirection(0, -1);
      else if (code === 'arrowdown' || code === 's') setDirection(0, 1);
      else if (code === 'arrowleft' || code === 'a') setDirection(-1, 0);
      else if (code === 'arrowright' || code === 'd') setDirection(1, 0);
      else if (code === ' ') {
        if (isRunning) pauseGame();
        else startGame();
      }
    });

    // Touch D-Pad handlers
    if (dpadUp) dpadUp.addEventListener('click', () => setDirection(0, -1));
    if (dpadDown) dpadDown.addEventListener('click', () => setDirection(0, 1));
    if (dpadLeft) dpadLeft.addEventListener('click', () => setDirection(-1, 0));
    if (dpadRight) dpadRight.addEventListener('click', () => setDirection(1, 0));
    if (dpadCenter) dpadCenter.addEventListener('click', () => {
      if (isRunning) pauseGame();
      else startGame();
    });

    if (btnStartArcade) btnStartArcade.addEventListener('click', startGame);
    if (btnPauseArcade) btnPauseArcade.addEventListener('click', pauseGame);
    if (btnResetArcade) btnResetArcade.addEventListener('click', () => {
      if (gameLoopTimeout) clearTimeout(gameLoopTimeout);
      startGame();
    });

    initGame();
    draw();
  }

  /* ==========================================================================
     8. SCROLL PROGRESS BAR
     ========================================================================== */
  const scrollProgressBar = document.getElementById('scrollProgress');
  if (scrollProgressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      scrollProgressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* ==========================================================================
     9. TOAST NOTIFICATION & COPY EMAIL HELPER
     ========================================================================== */
  function showToast(message, iconClass) {
    iconClass = iconClass || 'fa-solid fa-circle-check';
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('toast-show');
    });

    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  window.showToast = showToast;

  const copyEmailTriggers = document.querySelectorAll('.copy-email-trigger');
  copyEmailTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'vinitkumarpatil55@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email copied to clipboard: ' + email);
        }).catch(() => {
          showToast('Email: ' + email);
        });
      } else {
        showToast('Email: ' + email);
      }
    });
  });

  /* ==========================================================================
     10. REVEAL ON SCROLL
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }

});
