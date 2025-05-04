<script>
    import { Navigation } from "$lib"
</script>


<header>
    <div class="header-container">
        <!-- Logo -->
        <div class="logo">
            <a href="/"><img src="brand_img/Vit_Logo.png" alt="Website Logo"></a>
        </div>
        
        <div class="nav-container">
            <Navigation />
        </div>
    </div>
</header>


<style>
    header {
        display: flex;
        justify-content: center;
        background-color: var(--primary-color);
        padding: 1rem 0;
        color: white;
        width: 100%;
    }
    
    .header-container {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        max-width: 1400px;
        padding: 0 1rem;
    }
    
    .nav-container {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
        margin-right: auto;
        transition: 0.25s;
    }
    .logo:hover {
         filter: drop-shadow(0px 5px 10px rgb(255, 255, 255));
         filter: brightness(120%);
         transform: translateY(-5px);
    }

    .logo img {
        width: 80px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        .header-container {
            flex-direction: column;
            padding: 1rem;
        }
        
        .logo {
            margin: 0 auto 1rem auto;
            justify-content: center;
        }
        
        .nav-container {
            width: 100%;
        }
    }
</style>
