/* ==========================================
   San Valentín - Dioselynne & Paco
   Interactive Animations & Effects
   Safari & Mobile Compatible
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // PRELOADER
    // ========================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            initAllAnimations();
        }, 1500);
    });

    // Fallback: hide preloader after 4 seconds max
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            initAllAnimations();
        }
    }, 4000);

    function initAllAnimations() {
        createFloatingHearts();
        createSparkles();
        createRosePetals();
        createFinalHeartsRain();
        initRevealAnimations();
        initCharAnimations();
    }

    // ========================================
    // FLOATING HEARTS BACKGROUND
    // ========================================
    function createFloatingHearts() {
        const container = document.getElementById('floating-hearts');
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💘', '💝', '♥', '💜', '🩷', '🩵'];
        const colors = ['#ff6b9d', '#ff3366', '#c084fc', '#8b5cf6', '#22d3ee', '#10b981', '#e91e63'];
        
        function createHeart() {
            const heart = document.createElement('span');
            heart.className = 'floating-heart';
            
            // Randomly choose between emoji and SVG heart
            if (Math.random() > 0.4) {
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            } else {
                const color = colors[Math.floor(Math.random() * colors.length)];
                heart.innerHTML = `<svg viewBox="0 0 24 24" width="${Math.random() * 25 + 10}" height="${Math.random() * 25 + 10}">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}" opacity="${Math.random() * 0.5 + 0.3}"/>
                </svg>`;
            }
            
            heart.style.left = Math.random() * 100 + '%';
            const duration = Math.random() * 8 + 8;
            heart.style.animationDuration = duration + 's';
            heart.style.animationDelay = Math.random() * 5 + 's';
            
            container.appendChild(heart);
            
            // Remove after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, (duration + 6) * 1000);
        }
        
        // Create initial hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createHeart(), i * 600);
        }
        
        // Continuously create hearts
        setInterval(createHeart, 2500);
    }

    // ========================================
    // SPARKLE PARTICLES
    // ========================================
    function createSparkles() {
        const container = document.getElementById('sparkle-container');
        const sparkleColors = ['#ff6b9d', '#c084fc', '#22d3ee', '#10b981', '#ffb3c6', '#8b5cf6', '#f59e0b'];
        
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
            const size = Math.random() * 6 + 3;
            
            sparkle.style.width = size + 'px';
            sparkle.style.height = size + 'px';
            sparkle.style.background = color;
            sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            sparkle.style.animationDelay = Math.random() * 4 + 's';
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 8000);
        }
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createSparkle(), i * 300);
        }
        
        setInterval(createSparkle, 800);
    }

    // ========================================
    // ROSE PETALS (Hero Section)
    // ========================================
    function createRosePetals() {
        const container = document.querySelector('.rose-petals');
        if (!container) return;
        
        const petalColors = ['#ff6b9d', '#ff3366', '#e91e63', '#c084fc', '#ffb3c6'];
        
        function createPetal() {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            const color = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.background = color;
            petal.style.left = Math.random() * 100 + '%';
            petal.style.width = (Math.random() * 12 + 8) + 'px';
            petal.style.height = (Math.random() * 16 + 12) + 'px';
            petal.style.opacity = Math.random() * 0.4 + 0.2;
            
            const duration = Math.random() * 6 + 6;
            petal.style.animationDuration = duration + 's';
            petal.style.animationDelay = Math.random() * 8 + 's';
            
            container.appendChild(petal);
            
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, (duration + 10) * 1000);
        }
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createPetal(), i * 500);
        }
        
        setInterval(createPetal, 1500);
    }

    // ========================================
    // FINAL SECTION HEARTS RAIN
    // ========================================
    function createFinalHeartsRain() {
        const container = document.querySelector('.final-hearts-rain');
        if (!container) return;
        
        const hearts = ['❤️', '💗', '💖', '💕', '🩷', '💜', '🩵'];
        
        function createRainHeart() {
            const heart = document.createElement('span');
            heart.className = 'rain-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 16 + 10) + 'px';
            
            const duration = Math.random() * 4 + 4;
            heart.style.animationDuration = duration + 's';
            heart.style.animationDelay = Math.random() * 6 + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, (duration + 8) * 1000);
        }
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => createRainHeart(), i * 800);
        }
        
        setInterval(createRainHeart, 2000);
    }

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================
    function initRevealAnimations() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        
        // Use IntersectionObserver for smooth performance
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            revealElements.forEach(el => observer.observe(el));
        } else {
            // Fallback for older browsers
            revealElements.forEach(el => el.classList.add('active'));
        }
    }

    // ========================================
    // CHARACTER-BY-CHARACTER ANIMATION
    // ========================================
    function initCharAnimations() {
        const finalTitle = document.querySelector('.final-title');
        if (!finalTitle) return;
        
        const chars = finalTitle.querySelectorAll('.char-animate');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        chars.forEach((char, i) => {
                            char.style.animationDelay = (i * 0.08) + 's';
                            char.classList.add('animated');
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(finalTitle);
        } else {
            chars.forEach(char => char.classList.add('animated'));
        }
    }

    // ========================================
    // PARALLAX EFFECT (Touch-friendly)
    // ========================================
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    function updateParallax() {
        const scrollY = window.pageYOffset || window.scrollY;
        
        const hero = document.querySelector('.hero-content');
        if (hero) {
            const heroRect = document.getElementById('hero').getBoundingClientRect();
            if (heroRect.bottom > 0) {
                hero.style.transform = `translateY(${scrollY * 0.3}px)`;
                hero.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
            }
        }
    }

    // ========================================
    // MUSIC TOGGLE (Ambient background sound) — disabled
    // ========================================
    const musicBtn = document.getElementById('music-toggle');
    let audioContext = null;
    let isPlaying = false;
    let oscillators = [];

    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (!isPlaying) {
                startAmbientMusic();
                musicBtn.classList.add('playing');
            } else {
                stopAmbientMusic();
                musicBtn.classList.remove('playing');
            }
            isPlaying = !isPlaying;
        });
    }

    function startAmbientMusic() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a gentle ambient chord
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.04, audioContext.currentTime + 1);
            gainNode.connect(audioContext.destination);
            
            notes.forEach((freq) => {
                const osc = audioContext.createOscillator();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, audioContext.currentTime);
                
                const oscGain = audioContext.createGain();
                oscGain.gain.setValueAtTime(0.015, audioContext.currentTime);
                
                osc.connect(oscGain);
                oscGain.connect(gainNode);
                osc.start();
                oscillators.push({ osc, gain: oscGain });
            });
            
            // Add subtle frequency modulation for warmth
            animateAmbient();
        } catch (e) {
            console.log('Audio not supported');
        }
    }

    function animateAmbient() {
        if (!isPlaying || !audioContext) return;
        
        oscillators.forEach(({ osc }, i) => {
            const time = audioContext.currentTime;
            const baseFreq = [261.63, 329.63, 392.00, 523.25][i];
            osc.frequency.setValueAtTime(baseFreq + Math.sin(time * 0.5) * 2, time);
        });
        
        requestAnimationFrame(animateAmbient);
    }

    function stopAmbientMusic() {
        if (audioContext) {
            oscillators.forEach(({ osc }) => {
                try { osc.stop(); } catch (e) {}
            });
            oscillators = [];
            audioContext.close();
            audioContext = null;
        }
    }

    // ========================================
    // TOUCH INTERACTION - Create hearts on tap
    // ========================================
    document.addEventListener('click', (e) => {
        createTouchHeart(e.clientX, e.clientY);
    });

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            createTouchHeart(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    function createTouchHeart(x, y) {
        const hearts = ['❤️', '💗', '💖', '💕', '🩷'];
        const count = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('span');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-size: ${Math.random() * 18 + 12}px;
                pointer-events: none;
                z-index: 9999;
                opacity: 1;
                transition: none;
            `;
            
            document.body.appendChild(heart);
            
            const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5);
            const velocity = Math.random() * 80 + 40;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity - 60;
            
            // Use CSS animation for Safari compatibility
            requestAnimationFrame(() => {
                heart.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heart.style.transform = `translate(${dx}px, ${dy}px) scale(0) rotate(${Math.random() * 360}deg)`;
                heart.style.opacity = '0';
            });
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1200);
        }
    }

    // ========================================
    // SMOOTH SECTION NAVIGATION
    // ========================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const loveStory = document.getElementById('love-story');
            if (loveStory) {
                loveStory.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }

    // ========================================
    // LETTER TYPEWRITER EFFECT
    // ========================================
    const letterBody = document.querySelector('.letter-body');
    if (letterBody) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const paragraphs = letterBody.querySelectorAll('p');
                    paragraphs.forEach((p, i) => {
                        p.style.opacity = '0';
                        p.style.transform = 'translateY(20px)';
                        p.style.transition = `opacity 0.6s ease ${i * 0.4}s, transform 0.6s ease ${i * 0.4}s`;
                        
                        requestAnimationFrame(() => {
                            p.style.opacity = '1';
                            p.style.transform = 'translateY(0)';
                        });
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(letterBody);
    }

    // ========================================
    // PROMISE ITEMS STAGGER ANIMATION
    // ========================================
    const promiseItems = document.querySelectorAll('.promise-item');
    if (promiseItems.length > 0) {
        const promiseCard = document.querySelector('.promise-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    promiseItems.forEach((item, i) => {
                        item.style.opacity = '0';
                        item.style.transform = 'translateX(-30px)';
                        item.style.transition = `opacity 0.5s ease ${i * 0.2 + 0.3}s, transform 0.5s ease ${i * 0.2 + 0.3}s`;
                        
                        requestAnimationFrame(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateX(0)';
                        });
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        if (promiseCard) observer.observe(promiseCard);
    }

    // ========================================
    // PERFORMANCE: Pause animations when page is hidden
    // ========================================
    document.addEventListener('visibilitychange', () => {
        const hearts = document.querySelectorAll('.floating-heart, .sparkle, .petal, .rain-heart');
        
        if (document.hidden) {
            hearts.forEach(el => {
                el.style.animationPlayState = 'paused';
                el.style.webkitAnimationPlayState = 'paused';
            });
        } else {
            hearts.forEach(el => {
                el.style.animationPlayState = 'running';
                el.style.webkitAnimationPlayState = 'running';
            });
        }
    });

    // ========================================
    // CURSOR TRAIL EFFECT (Desktop only)
    // ========================================
    if (window.matchMedia('(hover: hover)').matches) {
        let lastTrailTime = 0;
        
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastTrailTime < 80) return;
            lastTrailTime = now;
            
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: rgba(255, 107, 157, 0.6);
                pointer-events: none;
                z-index: 9998;
                box-shadow: 0 0 8px rgba(255, 107, 157, 0.4);
                transition: all 0.8s ease;
            `;
            
            document.body.appendChild(trail);
            
            requestAnimationFrame(() => {
                trail.style.transform = 'scale(0)';
                trail.style.opacity = '0';
            });
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 900);
        });
    }

    // ========================================
    // 🥚 EASTER EGG 1: SECRET "LOVE" CODE
    // Keyboard: type L-O-V-E
    // Mobile: tap 4 times quickly anywhere OR on hint heart
    // ========================================
    const loveSequence = ['l', 'o', 'v', 'e'];
    let loveIndex = 0;
    let loveUnlocked = false;

    // Show mobile hint after delay
    const isMobile = !window.matchMedia('(hover: hover)').matches || ('ontouchstart' in window);
    if (isMobile) {
        const mobileHint = document.getElementById('mobile-love-hint');
        if (mobileHint) mobileHint.style.display = 'block';
    }

    // Keyboard listener (desktop)
    document.addEventListener('keydown', (e) => {
        if (loveUnlocked) return;
        
        if (e.key.toLowerCase() === loveSequence[loveIndex]) {
            loveIndex++;
            // Visual feedback
            createCodeFeedback(loveIndex);
            
            if (loveIndex === loveSequence.length) {
                loveUnlocked = true;
                triggerLoveEasterEgg();
            }
        } else {
            loveIndex = 0;
        }
    });

    // Mobile: 4 rapid taps ANYWHERE on page (not inside overlays)
    let mobileTaps = 0;
    let mobileTimer = null;
    
    document.addEventListener('touchstart', (e) => {
        if (loveUnlocked) return;
        // Don't count taps inside overlays or interactive elements
        if (e.target.closest('.egg-overlay, .photo-viewer, .love-lock, button, a, .scroll-indicator')) return;
        
        mobileTaps++;
        createCodeFeedback(mobileTaps);
        
        clearTimeout(mobileTimer);
        mobileTimer = setTimeout(() => { mobileTaps = 0; }, 1500);
        
        if (mobileTaps >= 4) {
            loveUnlocked = true;
            triggerLoveEasterEgg();
        }
    }, { passive: true });
    
    // Also allow tap on hint heart specifically
    const hintHeart = document.querySelector('.hint-heart');
    if (hintHeart) {
        hintHeart.addEventListener('click', (e) => {
            e.stopPropagation();
            if (loveUnlocked) return;
            
            mobileTaps++;
            createCodeFeedback(mobileTaps);
            
            clearTimeout(mobileTimer);
            mobileTimer = setTimeout(() => { mobileTaps = 0; }, 1500);
            
            if (mobileTaps >= 4) {
                loveUnlocked = true;
                triggerLoveEasterEgg();
            }
        });
    }

    function createCodeFeedback(step) {
        const chars = ['L', 'O', 'V', 'E'];
        const colors = ['#ff3366', '#c084fc', '#22d3ee', '#10b981'];
        
        if (step > chars.length) return;
        
        const el = document.createElement('div');
        el.textContent = chars[step - 1];
        el.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            font-family: 'Great Vibes', cursive;
            font-size: 4rem;
            color: ${colors[step - 1]};
            pointer-events: none;
            z-index: 19999;
            text-shadow: 0 0 30px ${colors[step - 1]};
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.5);
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        `;
        document.body.appendChild(el);
        
        requestAnimationFrame(() => {
            el.style.transform = 'translate(-50%, -50%) scale(1.5)';
            el.style.opacity = '0';
        });
        
        setTimeout(() => el.remove(), 700);
    }

    function triggerLoveEasterEgg() {
        const overlay = document.getElementById('love-overlay');
        if (!overlay) return;
        
        // Hide mobile hint
        const hint = document.getElementById('mobile-love-hint');
        if (hint) hint.style.display = 'none';
        
        overlay.classList.add('visible');
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        // Start fireworks
        startFireworks();
        
        // Animate mosaic items in with stagger
        setTimeout(() => {
            const items = overlay.querySelectorAll('.mosaic-anim');
            items.forEach((item, i) => {
                setTimeout(() => item.classList.add('mosaic-visible'), i * 120);
            });
        }, 200);
        
        // Setup photo tap-to-expand
        setupPhotoViewer();
        
        // Close button
        document.getElementById('close-love-overlay').addEventListener('click', () => {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.classList.remove('visible');
                stopFireworks();
                // Reset mosaic animations for next open
                overlay.querySelectorAll('.mosaic-anim').forEach(el => el.classList.remove('mosaic-visible'));
            }, 600);
        });
    }

    // ========================================
    // PHOTO VIEWER (tap-to-expand)
    // ========================================
    let photoViewerSetup = false;
    
    function setupPhotoViewer() {
        if (photoViewerSetup) return;
        photoViewerSetup = true;
        
        const viewer = document.getElementById('photo-viewer');
        const viewerImg = document.getElementById('photo-viewer-img');
        const viewerHearts = document.getElementById('viewer-hearts');
        const closeBtn = document.getElementById('close-photo-viewer');
        if (!viewer || !viewerImg) return;
        
        // Tap any mosaic item to open fullscreen
        document.querySelectorAll('.mosaic-item[data-photo]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const src = item.getAttribute('data-photo');
                viewerImg.src = src;
                viewer.classList.add('viewer-visible');
                requestAnimationFrame(() => viewer.classList.add('viewer-active'));
                
                // Spawn floating hearts
                spawnViewerHearts(viewerHearts);
            });
        });
        
        // Close viewer
        function closeViewer() {
            viewer.classList.remove('viewer-active');
            setTimeout(() => {
                viewer.classList.remove('viewer-visible');
                viewerHearts.innerHTML = '';
            }, 350);
        }
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeViewer();
        });
        
        // Tap background to close
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer || e.target.classList.contains('photo-viewer-bg')) {
                closeViewer();
            }
        });
        
        // Swipe down to dismiss on mobile
        let startY = 0;
        viewerImg.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        viewerImg.addEventListener('touchmove', (e) => {
            const dy = e.touches[0].clientY - startY;
            if (dy > 0) {
                viewerImg.style.transform = `translateY(${dy * 0.5}px) scale(${1 - dy * 0.001})`;
                viewerImg.style.opacity = 1 - dy * 0.003;
            }
        }, { passive: true });
        
        viewerImg.addEventListener('touchend', (e) => {
            const dy = e.changedTouches[0].clientY - startY;
            if (dy > 100) {
                closeViewer();
            }
            viewerImg.style.transform = '';
            viewerImg.style.opacity = '';
        }, { passive: true });
    }
    
    function spawnViewerHearts(container) {
        const hearts = ['💕', '💖', '💗', '🩷', '❤️', '💜', '🩵', '✨'];
        for (let i = 0; i < 12; i++) {
            setTimeout(() => {
                const el = document.createElement('span');
                el.className = 'viewer-heart-float';
                el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                el.style.left = Math.random() * 90 + 5 + '%';
                el.style.animationDuration = (2.5 + Math.random() * 2) + 's';
                el.style.animationDelay = (Math.random() * 0.5) + 's';
                container.appendChild(el);
                setTimeout(() => el.remove(), 5000);
            }, i * 200);
        }
    }

    // ========================================
    // FIREWORKS ENGINE
    // ========================================
    let fireworksRunning = false;
    let fireworksRAF = null;

    function startFireworks() {
        const canvas = document.getElementById('fireworks-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        fireworksRunning = true;
        
        const particles = [];
        const colors = ['#ff3366', '#ff6b9d', '#c084fc', '#8b5cf6', '#22d3ee', '#10b981', '#f59e0b', '#ffb3c6'];
        
        function createBurst(x, y) {
            const count = 60 + Math.floor(Math.random() * 40);
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.3);
                const speed = Math.random() * 5 + 2;
                particles.push({
                    x, y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 1,
                    decay: Math.random() * 0.015 + 0.008,
                    color,
                    size: Math.random() * 3 + 1,
                    trail: []
                });
            }
        }
        
        function animate() {
            if (!fireworksRunning) return;
            
            ctx.fillStyle = 'rgba(10, 10, 15, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.trail.push({ x: p.x, y: p.y });
                if (p.trail.length > 5) p.trail.shift();
                
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.04; // gravity
                p.life -= p.decay;
                
                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }
                
                // Draw trail
                for (let t = 0; t < p.trail.length; t++) {
                    const alpha = (t / p.trail.length) * p.life * 0.3;
                    ctx.beginPath();
                    ctx.arc(p.trail[t].x, p.trail[t].y, p.size * 0.5, 0, Math.PI * 2);
                    ctx.fillStyle = p.color.replace(')', `, ${alpha})`).replace('rgb', 'rgba').replace('#', '');
                    ctx.globalAlpha = alpha;
                    ctx.fill();
                }
                
                // Draw particle
                ctx.globalAlpha = p.life;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // Glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life * 0.15;
                ctx.fill();
            }
            
            ctx.globalAlpha = 1;
            fireworksRAF = requestAnimationFrame(animate);
        }
        
        animate();
        
        // Launch fireworks periodically
        function launchFirework() {
            if (!fireworksRunning) return;
            createBurst(
                Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
                Math.random() * canvas.height * 0.4 + canvas.height * 0.1
            );
            setTimeout(launchFirework, Math.random() * 800 + 400);
        }
        
        // Initial burst
        setTimeout(() => createBurst(canvas.width / 2, canvas.height / 3), 200);
        setTimeout(() => createBurst(canvas.width * 0.3, canvas.height * 0.25), 500);
        setTimeout(() => createBurst(canvas.width * 0.7, canvas.height * 0.3), 800);
        setTimeout(launchFirework, 1200);
    }

    function stopFireworks() {
        fireworksRunning = false;
        if (fireworksRAF) cancelAnimationFrame(fireworksRAF);
    }

    // ========================================
    // 🥚 EASTER EGG 2: LOVE LOCK
    // Click 7 times to unlock
    // ========================================
    const loveLock = document.getElementById('love-lock');
    let lockClicks = 0;
    const lockDots = document.querySelectorAll('.lock-dot');

    if (loveLock) {
        loveLock.addEventListener('click', (e) => {
            e.stopPropagation();
            lockClicks++;
            
            // Fill dots
            if (lockClicks <= 7) {
                lockDots[lockClicks - 1].classList.add('filled');
            }
            
            // Shake feedback
            loveLock.classList.remove('shaking');
            void loveLock.offsetWidth; // reflow
            loveLock.classList.add('shaking');
            
            if (lockClicks >= 7) {
                loveLock.classList.add('unlocked');
                setTimeout(() => triggerLockEasterEgg(), 600);
            }
        });
    }

    function triggerLockEasterEgg() {
        const overlay = document.getElementById('lock-overlay');
        if (!overlay) return;
        
        overlay.classList.add('visible');
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        // Golden hearts rain
        startGoldenRain();
        
        // Hide the lock
        if (loveLock) loveLock.style.display = 'none';
        
        document.getElementById('close-lock-overlay').addEventListener('click', () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.classList.remove('visible'), 600);
        });
    }

    function startGoldenRain() {
        const container = document.getElementById('golden-rain');
        if (!container) return;
        
        const goldenHearts = ['💛', '🌟', '⭐', '✨', '💫', '🔑', '🔐', '💝'];
        
        function createGoldenHeart() {
            const h = document.createElement('span');
            h.className = 'golden-heart';
            h.textContent = goldenHearts[Math.floor(Math.random() * goldenHearts.length)];
            h.style.left = Math.random() * 100 + '%';
            h.style.fontSize = (Math.random() * 16 + 12) + 'px';
            h.style.animationDuration = (Math.random() * 3 + 3) + 's';
            h.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(h);
            
            setTimeout(() => h.remove(), 8000);
        }
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createGoldenHeart(), i * 300);
        }
        
        const goldenInterval = setInterval(createGoldenHeart, 600);
        
        // Stop when overlay closes
        document.getElementById('close-lock-overlay').addEventListener('click', () => {
            clearInterval(goldenInterval);
        }, { once: true });
    }

    // ========================================
    // 🥚 EASTER EGG 3: CONSTELLATION
    // Long press on infinity symbol (3 seconds)
    // ========================================
    const infinityHeart = document.querySelector('.infinity-heart');
    let pressTimer = null;
    let pressProgress = null;
    let constellationUnlocked = false;

    if (infinityHeart) {
        // Create progress ring
        const progressRing = document.createElement('div');
        progressRing.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid transparent;
            pointer-events: none;
            z-index: 10;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        infinityHeart.style.position = 'relative';
        infinityHeart.appendChild(progressRing);
        
        function startLongPress() {
            if (constellationUnlocked) return;
            
            progressRing.style.opacity = '1';
            progressRing.style.border = '3px solid rgba(34, 211, 238, 0.5)';
            progressRing.style.boxShadow = '0 0 20px rgba(34, 211, 238, 0.3)';
            
            let elapsed = 0;
            const duration = 3000;
            
            pressProgress = setInterval(() => {
                elapsed += 50;
                const percent = Math.min(elapsed / duration, 1);
                const deg = percent * 360;
                progressRing.style.background = `conic-gradient(rgba(34, 211, 238, 0.4) ${deg}deg, transparent ${deg}deg)`;
                
                // Vibrate on mobile if supported
                if (percent >= 1) {
                    clearInterval(pressProgress);
                    constellationUnlocked = true;
                    progressRing.style.opacity = '0';
                    triggerConstellationEasterEgg();
                }
            }, 50);
            
            pressTimer = setTimeout(() => {}, duration);
        }
        
        function cancelLongPress() {
            clearTimeout(pressTimer);
            clearInterval(pressProgress);
            progressRing.style.opacity = '0';
            progressRing.style.background = 'none';
        }
        
        // Mouse events
        infinityHeart.addEventListener('mousedown', startLongPress);
        infinityHeart.addEventListener('mouseup', cancelLongPress);
        infinityHeart.addEventListener('mouseleave', cancelLongPress);
        
        // Touch events
        infinityHeart.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startLongPress();
        });
        infinityHeart.addEventListener('touchend', cancelLongPress);
        infinityHeart.addEventListener('touchcancel', cancelLongPress);
        
        infinityHeart.style.cursor = 'pointer';
        infinityHeart.style.webkitUserSelect = 'none';
        infinityHeart.style.userSelect = 'none';
    }

    function triggerConstellationEasterEgg() {
        const overlay = document.getElementById('constellation-overlay');
        if (!overlay) return;
        
        overlay.classList.add('visible');
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        drawConstellation();
        
        document.getElementById('close-constellation-overlay').addEventListener('click', () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.classList.remove('visible'), 600);
        });
    }

    // ========================================
    // CONSTELLATION CANVAS ANIMATION
    // Particles form a heart shape with P+D
    // ========================================
    function drawConstellation() {
        const canvas = document.getElementById('constellation-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const stars = [];
        const heartStars = [];
        const bgStars = [];
        const cx = canvas.width / 2;
        const cy = canvas.height / 2 - 40;
        
        // Background stars
        for (let i = 0; i < 200; i++) {
            bgStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.6 + 0.2,
                twinkle: Math.random() * 0.02 + 0.005
            });
        }
        
        // Heart shape parametric
        const heartPoints = 120;
        const scale = Math.min(canvas.width, canvas.height) * 0.18;
        
        for (let i = 0; i < heartPoints; i++) {
            const t = (i / heartPoints) * Math.PI * 2;
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
            
            heartStars.push({
                targetX: cx + x * (scale / 16),
                targetY: cy + y * (scale / 16),
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2.5 + 1.5,
                color: ['#ff6b9d', '#c084fc', '#22d3ee', '#10b981', '#ffb3c6', '#8b5cf6'][Math.floor(Math.random() * 6)],
                arrived: false,
                speed: Math.random() * 0.02 + 0.008
            });
        }
        
        // "P + D" text points
        const textPoints = getTextPoints(ctx, 'D + P', cx, cy, canvas.width);
        textPoints.forEach(p => {
            heartStars.push({
                targetX: p.x,
                targetY: p.y,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 1,
                color: '#f59e0b',
                arrived: false,
                speed: Math.random() * 0.015 + 0.005
            });
        });
        
        let lines = [];
        let frame = 0;
        
        function animate() {
            ctx.fillStyle = 'rgba(5, 5, 20, 0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw bg stars
            bgStars.forEach(s => {
                s.alpha += s.twinkle;
                if (s.alpha > 0.8 || s.alpha < 0.1) s.twinkle = -s.twinkle;
                
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
                ctx.fill();
            });
            
            // Move & draw heart stars
            let arrivedCount = 0;
            heartStars.forEach((s, i) => {
                // Lerp to target
                s.x += (s.targetX - s.x) * s.speed;
                s.y += (s.targetY - s.y) * s.speed;
                
                const dist = Math.hypot(s.targetX - s.x, s.targetY - s.y);
                if (dist < 2) {
                    s.arrived = true;
                    arrivedCount++;
                }
                
                // Draw glow
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = s.color;
                ctx.globalAlpha = 0.1;
                ctx.fill();
                
                // Draw star
                ctx.globalAlpha = s.arrived ? 0.9 : 0.6;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fillStyle = s.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            });
            
            // Draw constellation lines when stars settle
            if (arrivedCount > heartStars.length * 0.5) {
                const firstHeart = heartStars.slice(0, heartPoints);
                ctx.strokeStyle = 'rgba(192, 132, 252, 0.15)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                for (let i = 0; i < firstHeart.length; i++) {
                    const next = firstHeart[(i + 1) % firstHeart.length];
                    ctx.moveTo(firstHeart[i].x, firstHeart[i].y);
                    ctx.lineTo(next.x, next.y);
                }
                ctx.stroke();
            }
            
            frame++;
            requestAnimationFrame(animate);
        }
        
        // Clear canvas first
        ctx.fillStyle = 'rgba(5, 5, 20, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        animate();
    }

    // Get pixel positions of text to form star clusters
    function getTextPoints(ctx, text, cx, cy, canvasWidth) {
        const fontSize = Math.min(canvasWidth * 0.08, 50);
        ctx.font = `bold ${fontSize}px Montserrat, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const offscreen = document.createElement('canvas');
        offscreen.width = ctx.canvas.width;
        offscreen.height = ctx.canvas.height;
        const offCtx = offscreen.getContext('2d');
        
        offCtx.font = ctx.font;
        offCtx.textAlign = 'center';
        offCtx.textBaseline = 'middle';
        offCtx.fillStyle = 'white';
        offCtx.fillText(text, cx, cy);
        
        const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
        const points = [];
        const step = 4; // sample every N pixels
        
        for (let y = 0; y < offscreen.height; y += step) {
            for (let x = 0; x < offscreen.width; x += step) {
                const i = (y * offscreen.width + x) * 4;
                if (imageData.data[i + 3] > 128) {
                    points.push({ x, y });
                }
            }
        }
        
        return points;
    }
});


