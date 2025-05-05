<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { fade } from 'svelte/transition';
    import { ServicesCard } from '$lib';
    
    let visible = false;
    
    onMount(() => {
        console.log("Services Page Loaded");
        // Set visible to true after a short delay to ensure DOM is ready
        setTimeout(() => {
            visible = true;
        }, 100);
    });
</script>

<div class="services-container" style="background-image: url({base}/brand_img/VitMotionPictures_SpiralStraightOnBlurred.jpg)">
    {#if visible}
    <h1 transition:fade={{ delay: 300, duration: 800 }}>Services</h1>
    <div class="content-wrapper" transition:fade={{ duration: 800 }}>
        <div class="services-list">
            <div transition:fade={{ delay: 400, duration: 800 }}>
                <ServicesCard title="Product / Ad Viz" bgImage="images/services/ProductViz_Backplate.png" slug="product-viz" />
            </div>
            <div transition:fade={{ delay: 500, duration: 800 }}>
                <ServicesCard title="VFX / CGI" bgImage="images/services/vfxCgi_BackPlate.png" slug="vfx-cgi" />
            </div>
            <div transition:fade={{ delay: 600, duration: 800 }}>
                <ServicesCard title="Animation" bgImage="images/services/Animation_Backplate.png" slug="animation" />
            </div>
            <div transition:fade={{ delay: 700, duration: 800 }}>
                <ServicesCard title="Modeling and Texturing" bgImage="images/services/ModelingAndTexturing_Backplate.png" slug="modeling-and-texturing" />
            </div>
            <div transition:fade={{ delay: 800, duration: 800 }}>
                <ServicesCard title="Rendering" bgImage="images/services/Rendering_Backplate.png" slug="rendering" />
            </div>
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
    
    .services-container {
        margin: 0; /* Remove all margins */
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed; /* Fixed background for better coverage */
        padding: 0;
        width: 100%; /* Use 100% instead of 100vw to prevent scrollbar issues */
        min-height: 100vh; /* Minimum full viewport height */
        padding-top: 60px; /* Add top padding */
        padding-bottom: 30px; /* Add bottom padding */
        display: flex;
        flex-direction: column;
        justify-content: flex-start; /* Align content to the top */
        align-items: center; /* Center content horizontally */
        position: relative; /* For proper positioning of child elements */
        box-sizing: border-box; /* Include padding in width/height calculations */
    }

    .content-wrapper {
        width: 100%;
        max-width: 1000px;
        padding: 0;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
    }

    h1 {
        color: var(--secondary-color);
        font-size: 5rem;
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
        margin-top: 0;
        margin-bottom: 20px;
        text-align: center;
        width: 100%;
    }

    .services-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 100%;
        max-width: 700px;
    }
    
    .services-list > div {
        width: 100%;
    }

    /* Media queries for responsiveness */
    @media (min-width: 1921px) {
        h1 {
            font-size: 8rem;
            margin-bottom: 30px;
        }
        
        .services-list {
            max-width: 800px;
        }
        
        .content-wrapper {
            max-width: 1200px;
        }
        
        .services-container {
            padding-top: 80px;
            padding-bottom: 40px;
        }
    }
    
    @media (max-width: 1280px) {
        h1 {
            font-size: 4rem;
            margin-bottom: 15px;
        }
        
        .services-list {
            max-width: 600px;
        }
        
        .services-container {
            padding-top: 50px;
            padding-bottom: 25px;
        }
    }

    @media (max-width: 768px) {
        .services-container {
            padding-top: 50px;
            padding-bottom: 25px;
        }

        h1 {
            font-size: 3.5rem;
            margin-bottom: 15px;
        }

        .services-list {
            max-width: 550px;
        }
    }

    @media (max-width: 480px) {
        .services-container {
            padding-top: 40px;
            padding-bottom: 20px;
        }

        .content-wrapper {
            padding: 0 10px;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
    }
</style>
