<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let visible = false;
    
    onMount(() => {
        console.log("About Page Loaded");
        // Set visible to true after a short delay to ensure DOM is ready
        setTimeout(() => {
            visible = true;
        }, 100);
    });
</script>

<!-- About Section with Two-Column Layout -->
<div class="about-container">
    {#if visible}
    <div class="about-content" transition:fade={{ duration: 800 }}>
        <div class="left-column">
            <h1 transition:fade={{ delay: 300, duration: 800 }}>About Me</h1>
            <div class="about-text" transition:fade={{ delay: 500, duration: 800 }}>
                <h2>Vit Prechtl - 16/11/2004</h2>
                <p>I am a 20 year old multi-disciplionary artist.
                    outside of art i love calisthenics and history.
                    I hope of becoming an art director, and use storytelling to express myself with poetic imagery that feels alive.
                    wanting to inspire others not only showing a great imagery, but hope toward reaching something greater together.
                    i believe that true greatness and value lies in you as a person, your mindset tells it all, and not materialistic possesions. 
                    i'm trying to value of myself using art.
                    at the moment i'm broke,     but they say slow success builds character, so i'll get back to work.</p>
                <h4>hire me, let's build your value!</h4>
            </div>
        </div>
        <div class="right-column" transition:fade={{ delay: 700, duration: 800 }}>
            <img src="photos/AboutMePhoto.jpg" alt="Young Brunette Male Portrait Photo" class="about-image">
        </div>
    </div>
    {/if}
</div>

<style>
    /* Fade-in animation for elements that don't use Svelte transitions */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .about-container {
        margin: 0; /* Remove all margins */
        background-image: url(brand_img/VitMotionPictures_SpiralStraightOnBlurred.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed; /* Fixed background for better coverage */
        padding: 2rem;
        width: 100%; /* Use 100% instead of 100vw to prevent scrollbar issues */
        min-height: 100vh; /* Minimum full viewport height */
        display: flex;
        justify-content: center; /* Center content horizontally */
        align-items: center; /* Center content vertically */
        position: relative; /* For proper positioning of child elements */
        overflow: hidden; /* Prevent any scrollbars */
        box-sizing: border-box; /* Include padding in width/height calculations */
    }
    
    .about-content {
        display: grid;
        grid-template-columns: 55% 45%; /* Left column slightly larger */
        gap: 2rem; /* Space between columns */
        max-width: 1400px; /* Match main content width */
        width: 100%;
    }

    .left-column {
        padding-right: 1rem;
    }
    
    .right-column {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .about-image {
        width: 100%;
        max-width: 450px; /* Smaller image */
        border-radius: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    h1 {
        color: var(--secondary-color);
        font-size: 7rem; /* Slightly smaller for better fit */
        text-align: left;
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
        margin-bottom: 1rem;
    }

    h2 {
        color: var(--secondary-color);
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
        margin-top: -20px;
        margin-bottom: 10px;
        font-size: 2rem;
        text-align: left;
        line-height: 120%;
    }

    .about-text {
        font-size: 1rem;
        text-align: left;
        margin-top: 1rem;
        width: 550px;
    }
    
    h4 {
        margin-top: 1rem;
        text-align: left;
        font-size: 1.5rem;
        color: var(--secondary-color);
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
    }

    /* Mobile Responsive Layout */
    @media (max-width: 768px) {
        .about-content {
            grid-template-columns: 1fr; /* Single column on mobile */
            gap: 2rem;
        }
        
        .right-column {
            order: 1; /* Image first on mobile */
        }
        
        .left-column {
            order: 2; /* Text second on mobile */
            text-align: center;
            padding-right: 0;
        }
        
        h1, h2 {
            text-align: center;
        }
        
        h1 {
            font-size: 5rem; /* Smaller on mobile */
        }
        
        .about-image {
            max-width: 300px; /* Even smaller on mobile */
        }
    }

</style>