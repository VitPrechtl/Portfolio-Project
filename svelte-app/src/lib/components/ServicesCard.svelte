<script>
    import { goto } from '$app/navigation';
    
    export let title = "title";
    export let bgImage = "image";
    export let slug = ""; // URL-friendly slug for routing

    // Construct the full image URL
    $: imageUrl = `/images/${bgImage}`;
    
    // Handle navigation when card is clicked
    function handleClick() {
        goto(`/services/${slug}`);
    }
</script>

<div class="card" 
    style:background-image={`url(${imageUrl})`} 
    on:click={handleClick} 
    on:keydown={(e) => e.key === 'Enter' && handleClick()}
    tabindex="0"
    role="button"
    aria-label={`View ${title} services`}>
    <h2>{title}</h2>
</div>

<style>
    .card {
        width: 100%;
        max-width: 700px;
        height: 100px;
        border-radius: 20px;
        padding: 20px;
        margin: 10px 0;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s ease;
        cursor: pointer;
        box-sizing: border-box;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 20px rgb(255, 99, 99);
    }

    h2 {
        font-size: 36px;
        color: white;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Media queries for responsiveness */
    @media (min-width: 1921px) {
        .card {
            max-width: 800px;
            height: 120px;
        }
        
        h2 {
            font-size: 48px;
        }
    }
    
    @media (max-width: 1280px) {
        .card {
            max-width: 600px;
            height: 90px;
        }
        
        h2 {
            font-size: 32px;
        }
    }
    
    @media (max-width: 768px) {
        .card {
            height: 100px;
            padding: 15px;
            margin: 8px 0;
        }
        
        h2 {
            font-size: 32px;
        }
    }

    @media (max-width: 480px) {
        .card {
            height: 80px;
            padding: 10px;
            margin: 6px 0;
            border-radius: 15px;
        }
        
        h2 {
            font-size: 24px;
        }
    }
</style>
