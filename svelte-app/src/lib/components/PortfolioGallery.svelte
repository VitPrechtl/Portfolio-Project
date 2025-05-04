<script>
    export let items = [];
    export let columns = 3;
    export let gap = '1rem';
    export let showDescription = true;
</script>

<div class="portfolio-gallery" style="--columns: {columns}; --gap: {gap};">
    {#each items as item}
        <div class="gallery-item">
            <div class="image-container" style="background-color: black;">
                <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    on:error={(e) => {
                        // If image fails to load, simply replace with a black placeholder div
                        e.target.outerHTML = `<div class="placeholder-img"></div>`;
                    }}
                />
                <div class="overlay">
                    <h3>{item.title}</h3>
                    <p class="click-details">Click for more details</p>
                    {#if showDescription && item.description}
                        <p>{item.description}</p>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .portfolio-gallery {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: var(--gap);
        width: 100%;
        margin: 2rem 0;
    }

    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        min-height: 300px;
        aspect-ratio: 4/3;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: black;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .gallery-item:hover {
        transform: scale(1.02);
    }

    .image-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        min-height: 300px;
        aspect-ratio: 4/3;
        background-color: black;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        min-height: 300px;
        opacity: 0.9;
        transition: opacity 0.3s ease-in-out;
    }
    
    .gallery-item:hover img {
        opacity: 0.6;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        pointer-events: none;
    }
    
    .gallery-item:hover .overlay {
        opacity: 1;
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        text-align: center;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    p {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0;
        text-align: center;
        transform: translateY(20px);
        transition: transform 0.3s ease, opacity 0.3s ease;
        transition-delay: 0.05s;
    }
    
    .click-details {
        font-size: 1rem;
        margin: 0.5rem 0 1rem 0;
        font-weight: bold;
        color: #f5f5f5;
        text-decoration: underline;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        transition-delay: 0.1s;
    }
    
    .gallery-item:hover h3,
    .gallery-item:hover p,
    .gallery-item:hover .click-details {
        transform: translateY(0);
        opacity: 1;
    }

    .placeholder-img {
        width: 100%;
        height: 100%;
        min-height: 300px;
        display: block;
        box-sizing: border-box;
        background-color: black;
    }

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        .portfolio-gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .portfolio-gallery {
            grid-template-columns: 1fr;
        }
    }
</style>

