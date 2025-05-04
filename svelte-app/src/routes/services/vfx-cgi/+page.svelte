<script>
    import { goto } from '$app/navigation';

    function goBack() {
        goto('/services');
    }
</script>

<div class="service-page">
    <div class="hero" style="background-image: url('/images/services/vfxCgi_BackPlate.png')">
        <h1>VFX / CGI</h1>
    </div>
    <div class="content">
        <button class="back-button" on:click={goBack}>← Back to Services</button>
        <div class="service-details">
            <h2>Visual Effects & CGI Services</h2>
            <p>Elevate your visual storytelling with our cutting-edge VFX and CGI services. We blend technical expertise with creative vision to create stunning visual effects for film, television, and digital media.</p>
            
            <h3>What We Offer:</h3>
            <ul>
                <li>Compositing & Green Screen</li>
                <li>Particle & Fluid Simulations</li>
                <li>3D Environment Creation</li>
                <li>Digital Set Extensions</li>
                <li>Character & Creature Effects</li>
                <li>Matte Painting & Digital Backgrounds</li>
                <li>Motion Graphics Integration</li>
            </ul>
            
            <p>Our VFX team brings years of industry experience to every project, delivering seamless integration of computer-generated imagery with live-action footage. Whether you need subtle enhancements or complex visual sequences, we have the tools and talent to bring your creative vision to life.</p>
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
        background-color: rgba(0, 0, 0, 0.7);
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
</style>

