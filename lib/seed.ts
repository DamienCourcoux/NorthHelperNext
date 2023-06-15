export const packs = [
    {
        id: 1,
        name: 'Aide n°1 "Animaux"',
        services: [
            {
                id: 1,
                name: 'Acheter des courses pour les animaux',
                example: null,
                price: 12.50,
                priceDetails: '+ prix de nourriture/courses',
                packs_id: 1
            },
            {
                id: 2,
                name: 'Garder votre animal et le nourrir pendant vos vacances',
                example: null,
                price: 3.95,
                priceDetails: '/j (Animaux violent ou dangereux non accepter)',
                packs_id: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Aide n°2 "Encombrant"',
        services: [
            {
                id: 3,
                name: 'Retrait petit Encombrant (8 max)',
                example: 'Petit meuble, Cafetière, Robot cuiseur, ...',
                price: 20.50,
                priceDetails: null,
                packs_id: 2
            },
            {
                id: 4,
                name: 'Retrait gros Encombrant (4 max)',
                example: 'Gros meuble, Four, Lave-linge, Frigo, ...',
                price: 25.50,
                priceDetails: null,
                packs_id: 2
            }
        ]
    },
    {
        id: 3,
        name: 'Aide n°3 "Petit travaux électrique"',
        services: [
            {
                id: 5,
                name: 'Changement ampoule (1 à 3)',
                example: null,
                price: 9,
                priceDetails: '/h (non dénudée)',
                packs_id: 3
            },
            {
                id: 6,
                name: 'Changement pile détecteur de fumée',
                example: null,
                price: 9.50,
                priceDetails: '/h',
                packs_id: 3
            }
        ]
    },
    {
        id: 4,
        name: 'Service n°1 "Livraison"',
        services: [
            {
                id: 7,
                name: 'Livraison de course Drive',
                example: null,
                price: 3.50,
                priceDetails: '+ frais de déplacement en km',
                packs_id: 4
            }
        ]
    },
    {
        id: 5,
        name: 'Service n°2 "Sécurité"',
        services: [
            {
                id: 8,
                name: 'Surveillance maison simple avec passage devant la maison + 3 photos',
                example: null,
                price: 3.95,
                priceDetails: '/j',
                packs_id: 5
            },
            {
                id: 9,
                name: 'Surveillance maison approfondi avec passage dans le jardin + arrosage plantes jardin + 5 photos',
                example: null,
                price: 7.95,
                priceDetails: '/j',
                packs_id: 5
            },
            {
                id: 10,
                name: 'Surveillance maison supérieur avec passage dans le jardin + arrosage plantes jardin + ramassage courier + 5 photos',
                example: null,
                price: 11.95,
                priceDetails: '/j',
                packs_id: 5
            },
            {
                id: 11,
                name: 'Surveillance maison extrême avec passage dans le jardin + arrosage plantes jardin + ramassage courier + ouvertures des volets (matin/soir) + 5 photos',
                example: null,
                price: 15.95,
                priceDetails: '/j',
                packs_id: 5
            }
        ]
    },
    {
        id: 6,
        name: 'Service n°3 "Jardinage"',
        services: [
            {
                id: 12,
                name: 'Petite tonte (500m² max)',
                example: null,
                price: 27,
                priceDetails: '/h',
                packs_id: 6
            },
            {
                id: 13,
                name: 'Petite taille buisson/haie (2m hauteur max)',
                example: null,
                price: 33,
                priceDetails: '/h',
                packs_id: 6
            },
            {
                id: 14,
                name: 'Petite plantation',
                example: null,
                price: 23,
                priceDetails: '/h',
                packs_id: 6
            },
            {
                id: 15,
                name: 'Petit entretien jardin',
                example: null,
                price: 27,
                priceDetails: '/h',
                packs_id: 6
            }
        ]
    }
];