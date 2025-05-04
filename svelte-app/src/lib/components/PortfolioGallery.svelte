<script>
    export let items = [];
    export let columns = 3;
    export let gap = '1rem';
    export let showDescription = true;
</script>

<div class="portfolio-gallery" style="--columns: {columns}; --gap: {gap};">
    {#each items as item}
        <div class="gallery-item">
            <div class="image-container">
                <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    on:error={(e) => {
                        // If image fails to load, set a placeholder color background
                        e.target.style.backgroundColor = item.placeholderColor || '#333';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        // Replace the image with a placeholder text
                        e.target.outerHTML = `<div class="placeholder-img" style="background-color: ${item.placeholderColor || '#333'}">
                            <span>${item.title}</span>
                        </div>`;
                    }}
                />
                <div class="overlay">
                    <h3>{item.title}</h3>
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
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .gallery-item:hover {
        transform: translateY(-5px);
    }

    .image-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        display: block;
    }

    .gallery-item:hover img {
        transform: scale(1.05);
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 1rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .gallery-item:hover .overlay {
        transform: translateY(0);
    }

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.2rem;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0.9;
    }

    .placeholder-img {
        width: 100%;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        text-align: center;
        padding: 1rem;
        box-sizing: border-box;
    }

    .placeholder-img span {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

