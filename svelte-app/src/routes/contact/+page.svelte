<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { fade } from 'svelte/transition';
    
    let visible = false;
    
    onMount(() => {
        console.log("Contact Page Loaded");
        // Set visible to true after a short delay to ensure DOM is ready
        setTimeout(() => {
            visible = true;
        }, 100);
    });
</script>

<div class="contact-container" style="background-image: url({base}/brand_img/VitMotionPictures_SpiralStraightOnBlurred.jpg)">
    {#if visible}
    <div class="contact-content" transition:fade={{ duration: 800 }}>
        <h1 transition:fade={{ delay: 300, duration: 800 }}>Contact</h1>
        <p class="email" transition:fade={{ delay: 500, duration: 800 }}>contact.suryqata@gmail.com</p>
        <a href="mailto:contact.suryqata@gmail.com" class="email-button" transition:fade={{ delay: 700, duration: 800 }}>Send an email</a>
        
        <h1 class="socials-heading" transition:fade={{ delay: 900, duration: 800 }}>Socials</h1>
        <ul class="social-list" transition:fade={{ delay: 1100, duration: 800 }}>
            <li><a href="https://www.instagram.com/suryqata/" target="_blank">Instagram</a></li>
            <li><a href="https://www.behance.net/suryqata" target="_blank">Behance</a></li>
            <li><a href="https://dribbble.com/Suryqata" target="_blank">Dribbble</a></li>
            <li><a href="https://www.artstation.com/suryqata" target="_blank">ArtStation</a></li>
            <li><a href="https://www.youtube.com/@suryqata" target="_blank">YouTube</a></li>
        </ul>
    </div>
    {/if}
</div>

<style>
    /* Fade-in animation for elements that don't use Svelte transitions */
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .contact-container {
        margin: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        padding: 2rem;
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
    }
    
    .contact-content {
        max-width: 1400px;
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    h1 {
        color: var(--secondary-color);
        font-size: 7rem;
        text-align: center;
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
        margin-bottom: 1.5rem;
        margin-top: -70px;
    }
    
    .socials-heading {
        margin-top: 3rem;
    }
    
    p {
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        color: white;
        line-height: 1.5;
    }
    
    .email-button {
        display: inline-block;
        width: 250px;
        height: 50px;
        font-family: var(--font-family);
        font-size: 1.5rem;
        border: 5px solid white;
        border-radius: 10px;
        background-color: black;
        color: white;
        transition: all 0.25s ease;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        transform: translateY(0);
        box-shadow: 0 0 0 transparent;
        margin-bottom: 3rem;
    }
    
    .email-button:hover {
        text-decoration: none;
        transform: translateY(-5px);
        box-shadow: 5px 10px rgba(255, 255, 255, 0.3);
    }

    .email {
        color: var(--primary-color);
    }
    
    .social-list {
        list-style-type: none;
        padding: 0;
        margin-top: -25px;
    }
    .social-list li {
        margin-bottom: 1.5rem;
        transition: all 0.25s ease;
        text-align: center;
        transform: translateY(0);
    }
    
    .social-list li:hover {
        transform: translateY(-5px);
    }
    
    .social-list a {
        font-size: 1.2rem;
        color: var(--primary-color);
        text-decoration: none;
        transition: all 0.3s ease;
        padding: 0.2rem 0;
        display: inline-block;
        filter: drop-shadow(0px 0px 0px transparent);
    }
    
    .social-list a:hover {
        color: var(--secondary-color);
        filter: drop-shadow(0px 0px 5px rgba(255, 153, 153, 0.7));
    }
    
    /* Mobile responsiveness */
    @media (max-width: 768px) {
        h1 {
            font-size: 5rem;
        }
        
        .social-list li:hover {
            transform: translateY(-3px);
        }
        
        .social-list li {
            margin-bottom: 1.2rem;
        }
        
        .email-button {
            display: block;
            margin: 0 auto;
        }
    }
</style>
