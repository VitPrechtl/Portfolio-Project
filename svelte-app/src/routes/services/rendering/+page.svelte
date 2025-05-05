<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import PortfolioGallery from '$lib/components/PortfolioGallery.svelte';
    import { getGalleryItems } from '$lib/data/galleryData.js';

    function goBack() {
        goto(`${base}/services`);
    }
    
    // Get rendering portfolio items
    const galleryItems = getGalleryItems('rendering');
</script>

<div class="service-page">
    <div class="hero" style="background-image: url({base}/images/services/Rendering_Backplate.png)">
        <h1>Rendering</h1>
    </div>
    <div class="content">
        <button class="back-button" on:click={goBack}>← Back to Services</button>
        <div class="service-details">
            <h2>Professional Rendering Services</h2>
            <p>Transform your 3D models into photorealistic imagery with our high-quality rendering services. We utilize industry-leading rendering engines and techniques to achieve stunning visual results for any project.</p>
            
            <h3>What We Offer:</h3>
            <ul>
                <li>Multiple Rendering Engine Expertise (V-Ray, Arnold, Cycles, Redshift)</li>
                <li>Architectural Visualization Rendering</li>
                <li>Product & Industrial Design Rendering</li>
                <li>Custom Environment & Scene Rendering</li>
                <li>Lighting Setup & Material Optimization</li>
                <li>High-Speed GPU/CPU Rendering Solutions</li>
                <li>Advanced Post-Processing & Compositing</li>
                <li>Ultra-High Resolution Outputs (4K/8K)</li>
            </ul>
            
            <p>Our rendering specialists combine technical knowledge with artistic sensibility to create images that convey the perfect mood and atmosphere for your project. We carefully optimize scene elements, materials, and lighting to achieve the perfect balance between visual quality and rendering efficiency.</p>
            
            <p>Whether you need a single high-quality image or hundreds of renders for a walkthrough or animation, our scalable rendering solutions can accommodate projects of any size with consistent quality and timely delivery.</p>
        </div>
        
        <div class="portfolio-section">
            <h2>Our Rendering Portfolio</h2>
            <p>Explore our recent work and see how we can help bring your vision to life.</p>
            <PortfolioGallery items={galleryItems} columns={3} gap="1.5rem" />
        </div>
    </div>
</div>

<style>
    .service-page {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    .hero {
        height: 300px;
        width: 100%;
        background-size: cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .hero::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    
    .hero h1 {
        color: var(--secondary-color);
        font-size: 4rem;
        text-align: center;
        position: relative;
        z-index: 2;
        filter: drop-shadow(0px 0px 10px rgb(255, 153, 153));
        margin: 0;
    }
    
    .content {
        padding: 40px;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
    }
    
    .back-button {
        background-color: var(--secondary-color);
        color: var(--dark-color);
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 30px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .back-button:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(255, 153, 153, 0.5);
    }
    
    .service-details {
        background-color: black;
        border-radius: 10px;
        padding: 30px;
        color: white;
    }
    
    h2 {
        color: var(--secondary-color);
        font-size: 2.5rem;
        margin-top: 0;
    }
    
    h3 {
        color: var(--secondary-color);
        font-size: 1.8rem;
        margin-top: 30px;
    }
    
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    
    ul {
        margin-left: 20px;
        margin-bottom: 30px;
        list-style-type: none;
    }
    
    li {
        margin-bottom: 10px;
        font-size: 1.1rem;
    }
    
    /* Media queries for responsiveness */
    @media (max-width: 768px) {
        .hero {
            height: 200px;
        }
        
        .hero h1 {
            font-size: 2.5rem;
        }
        
        .content {
            padding: 20px;
        }
        
        h2 {
            font-size: 2rem;
        }
        
        h3 {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .hero {
            height: 150px;
        }
        
        .hero h1 {
            font-size: 1.8rem;
        }
        
        .service-details {
            padding: 20px;
        }
        
        h2 {
            font-size: 1.5rem;
        }
        
        h3 {
            font-size: 1.2rem;
        }
        
        p, li {
            font-size: 1rem;
        }
    }
    
    /* Portfolio section styling */
    .portfolio-section {
        margin-top: 50px;
        background-color: black;
        border-radius: 10px;
        padding: 30px;
        color: white;
    }
    
    .portfolio-section h2 {
        color: var(--secondary-color);
        font-size: 2.5rem;
        margin-top: 0;
    }
    
    .portfolio-section .note {
        font-size: 0.9rem;
        font-style: italic;
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        .portfolio-section h2 {
            font-size: 2rem;
        }
    }
    
    @media (max-width: 480px) {
        .portfolio-section {
            padding: 20px;
        }
        
        .portfolio-section h2 {
            font-size: 1.5rem;
        }
    }
</style>

