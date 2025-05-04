// Sample gallery data for different service categories
export const galleryItems = {
    // Animation service portfolio items
    animation: [
        {
            id: 'anim1',
            title: 'Character Animation',
            description: 'Animated character for an indie game project',
            imageUrl: '/images/portfolio/animation/character-animation.jpg'
        },
        {
            id: 'anim2',
            title: 'Motion Graphics',
            description: 'Corporate motion graphics for tech company',
            imageUrl: '/images/portfolio/animation/motion-graphics.jpg'
        },
        {
            id: 'anim3',
            title: 'Logo Animation',
            description: 'Dynamic logo reveal for startup brand',
            imageUrl: '/images/portfolio/animation/logo-animation.jpg'
        },
        {
            id: 'anim4',
            title: '3D Character Rigging',
            description: 'Complex character rig for animated short film',
            imageUrl: '/images/portfolio/animation/character-rigging.jpg'
        }
    ],

    // Modeling and Texturing service portfolio items
    modelingAndTexturing: [
        {
            id: 'model1',
            title: 'Product Modeling',
            description: 'Detailed 3D model of consumer electronics product',
            imageUrl: '/images/portfolio/modeling/product-model.jpg'
        },
        {
            id: 'model2',
            title: 'Character Design',
            description: 'Fantasy character design and modeling',
            imageUrl: '/images/portfolio/modeling/character-model.jpg'
        },
        {
            id: 'model3',
            title: 'Environmental Assets',
            description: 'Modular environment assets for video game',
            imageUrl: '/images/portfolio/modeling/environment-assets.jpg'
        },
        {
            id: 'model4',
            title: 'PBR Texturing',
            description: 'Photorealistic texturing for architectural visualization',
            imageUrl: '/images/portfolio/modeling/pbr-texturing.jpg'
        }
    ],

    // Product Visualization service portfolio items
    productViz: [
        {
            id: 'viz1',
            title: 'Furniture Visualization',
            description: 'Photorealistic rendering of modern furniture',
            imageUrl: '/images/portfolio/product-viz/furniture.jpg'
        },
        {
            id: 'viz2',
            title: 'Automotive Rendering',
            description: 'High-end car visualization for marketing campaign',
            imageUrl: '/images/portfolio/product-viz/automotive.jpg'
        },
        {
            id: 'viz3',
            title: 'Packaging Design',
            description: 'Product packaging visualization for consumer goods',
            imageUrl: '/images/portfolio/product-viz/packaging.jpg'
        },
        {
            id: 'viz4',
            title: 'Electronics Showcase',
            description: 'Detailed visualization of electronics products',
            imageUrl: '/images/portfolio/product-viz/electronics.jpg'
        }
    ],

    // Rendering service portfolio items
    rendering: [
        {
            id: 'render1',
            title: 'Architectural Visualization',
            description: 'Exterior rendering of modern residential building',
            imageUrl: '/images/portfolio/rendering/architectural.jpg'
        },
        {
            id: 'render2',
            title: 'Interior Design',
            description: 'Photorealistic interior visualization for luxury apartment',
            imageUrl: '/images/portfolio/rendering/interior.jpg'
        },
        {
            id: 'render3',
            title: 'Landscape Rendering',
            description: 'Urban landscape visualization for city planning project',
            imageUrl: '/images/portfolio/rendering/landscape.jpg'
        },
        {
            id: 'render4',
            title: 'Lighting Study',
            description: 'Advanced lighting visualization for architectural project',
            imageUrl: '/images/portfolio/rendering/lighting.jpg'
        }
    ],

    // VFX and CGI service portfolio items
    vfxCgi: [
        {
            id: 'vfx1',
            title: 'Compositing',
            description: 'VFX compositing for short film project',
            imageUrl: '/images/portfolio/vfx/compositing.jpg'
        },
        {
            id: 'vfx2',
            title: 'Particle Effects',
            description: 'Fire and smoke simulation for action sequence',
            imageUrl: '/images/portfolio/vfx/particles.jpg'
        },
        {
            id: 'vfx3',
            title: 'Digital Set Extension',
            description: 'Environmental extension for sci-fi production',
            imageUrl: '/images/portfolio/vfx/set-extension.jpg'
        },
        {
            id: 'vfx4',
            title: 'Character Integration',
            description: 'CGI character integrated into live-action footage',
            imageUrl: '/images/portfolio/vfx/character-integration.jpg'
        }
    ]
};

// Fallback colors for portfolio items when images aren't available
export const fallbackColors = [
    '#3498db', // Blue
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#f39c12', // Orange
    '#9b59b6', // Purple
    '#1abc9c'  // Teal
];

// Function to get gallery items with fallback colors if needed
export function getGalleryItems(category) {
    if (galleryItems[category]) {
        return galleryItems[category].map((item, index) => ({
            ...item,
            placeholderColor: fallbackColors[index % fallbackColors.length]
        }));
    }
    
    // Return default items if category doesn't exist
    return Array(4).fill().map((_, index) => {
        const color = fallbackColors[index % fallbackColors.length];
        return {
            id: `default-${index}`,
            title: `${category || 'Portfolio'} Item ${index + 1}`,
            description: 'Sample portfolio item',
            imageUrl: '/images/placeholder.jpg', // This will trigger the error handler
            placeholderColor: color
        };
    });
}

