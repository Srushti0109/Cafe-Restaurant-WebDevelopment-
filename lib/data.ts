/**
 * VELVET BREW — Menu Data
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all content.
 * Types are imported from @/types to avoid duplication.
 * Images are imported from ./images.
 */

import { menuImages, specialDishImages, testimonialAvatars } from './images'
import type { MenuCategory, Testimonial } from '../types'

// ─── Re-export types that consumers need ──────────────────────────────────────
export type { MenuItem, MenuCategory } from '../types'

// ─── Menu Categories ──────────────────────────────────────────────────────────
export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    icon: '◎',
    items: [
      {
        id: 1,
        name: 'Signature Espresso',
        description: 'Double ristretto, single-origin Ethiopia Yirgacheffe. Notes of dark berry, bittersweet chocolate, and a syrupy mouthfeel.',
        price: '₹380',
        image: menuImages.espresso,
        badge: 'Bestseller',
        tags: ['Hot', 'Strong'],
      },
      {
        id: 2,
        name: 'Velvet Latte',
        description: 'Two espresso shots, silky microfoam, Coorg single-origin milk. Finished with a rose-petal latte art pour.',
        price: '₹480',
        image: menuImages.latte,
        badge: "Chef's Pick",
        tags: ['Hot', 'Milk-based'],
      },
      {
        id: 3,
        name: '24-Hour Cold Brew',
        description: 'Slow-steeped Chikmagalur beans, nitrogen-infused, vanilla cold foam, light cacao dusting on top.',
        price: '₹520',
        image: menuImages.coldBrew,
        badge: 'New',
        tags: ['Cold', 'Strong'],
      },
      {
        id: 4,
        name: 'Australian Flat White',
        description: 'Twin ristretto shots, velvety microfoam stretched to 65°C. Precision in every 160ml cup.',
        price: '₹420',
        image: menuImages.flatWhite,
        tags: ['Hot', 'Milk-based'],
      },
    ],
  },
  {
    id: 'food',
    label: 'Fast Food',
    icon: '◈',
    items: [
      {
        id: 5,
        name: 'Truffle Wagyu Burger',
        description: 'A5 Wagyu beef patty, black truffle aioli, aged white cheddar, caramelised onion, brioche bun from our bakery.',
        price: '₹1,850',
        image: menuImages.burger,
        badge: "Chef's Pick",
        tags: ['Non-Veg', 'Premium'],
      },
      {
        id: 6,
        name: 'Duck Confit Sandwich',
        description: '72-hour slow-cooked duck leg, fig & tamarind jam, wild rocket, house-made sourdough.',
        price: '₹1,400',
        image: menuImages.sandwich,
        tags: ['Non-Veg'],
      },
      {
        id: 7,
        name: 'Smashed Taco Trio',
        description: 'Ancho-braised brisket or paneer, pickled red onion, salsa verde, cotija, fresh cilantro. Three tacos.',
        price: '₹980',
        image: menuImages.tacos,
        badge: 'Bestseller',
        tags: ['Choice of Meat/Veg'],
      },
      {
        id: 8,
        name: 'Heritage Grain Bowl',
        description: 'Farro, roasted heirloom vegetables, house-pickled beets, toasted pepitas, tahini-lemon dressing.',
        price: '₹820',
        image: menuImages.salad,
        badge: 'Vegan',
        tags: ['Vegan', 'Healthy'],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '◇',
    items: [
      {
        id: 9,
        name: 'Valrhona Lava Cake',
        description: '70% Valrhona dark chocolate, molten salted caramel core, Tahitian vanilla bean ice cream, edible gold dust.',
        price: '₹680',
        image: menuImages.chocolateCake,
        badge: "Chef's Pick",
        tags: ['Contains Gluten', 'Egg'],
      },
      {
        id: 10,
        name: 'Croissant au Beurre',
        description: 'Hand-laminated, 127 layers, cultured French butter, proofed 48 hours. Baked in-house each morning.',
        price: '₹320',
        image: menuImages.croissant,
        badge: 'Bestseller',
        tags: ['Contains Gluten', 'Egg'],
      },
      {
        id: 11,
        name: 'Tiramisu Verrine',
        description: 'House-made savoiardi, Kahlúa-espresso soak, 24-hour mascarpone crema, aged cacao shavings.',
        price: '₹580',
        image: menuImages.tiramisu,
        tags: ['Contains Egg', 'Contains Gluten'],
      },
      {
        id: 12,
        name: 'French Macarons',
        description: 'Classic Pierre Hermé-inspired shells: salted caramel, raspberry lychee, dark chocolate, pistachio.',
        price: '₹480',
        image: menuImages.macarons,
        badge: 'Seasonal',
        tags: ['Gluten-Free option'],
      },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    icon: '◌',
    items: [
      {
        id: 13,
        name: 'Ceremonial Matcha',
        description: 'Stone-ground Uji matcha, oat milk microfoam, wildflower honey drizzle, bamboo-whisked to order.',
        price: '₹520',
        image: menuImages.matchaLatte,
        tags: ['Vegan option', 'Caffeine'],
      },
      {
        id: 14,
        name: 'Cold-Pressed Citrus',
        description: 'Valencia oranges, pink grapefruit, fresh ginger, Himalayan salt rim. Pressed to order.',
        price: '₹380',
        image: menuImages.freshJuice,
        badge: 'Vegan',
        tags: ['No Sugar Added', 'Vegan'],
      },
      {
        id: 15,
        name: 'Wild Berry Smoothie',
        description: 'Acai, blueberry, raspberry, banana, coconut milk, raw honey, flaxseed. Antioxidant-rich.',
        price: '₹480',
        image: menuImages.smoothie,
        badge: 'Vegan',
        tags: ['Vegan', 'Healthy'],
      },
      {
        id: 16,
        name: 'Sparkling Hibiscus',
        description: 'Cold-brew hibiscus, rose water, cardamom, fresh lime, topped with premium sparkling water.',
        price: '₹420',
        image: menuImages.sparkling,
        tags: ['Vegan', 'No Caffeine'],
      },
    ],
  },
  {
    id: 'specials',
    label: 'Special Dishes',
    icon: '◆',
    items: [
      {
        id: 17,
        name: 'Handmade Truffle Pasta',
        description: 'Fresh egg pasta, wild mushroom ragù, black truffle paste, aged Parmigiano Reggiano 36-month.',
        price: '₹1,680',
        image: menuImages.pasta,
        badge: "Chef's Pick",
        tags: ['Vegetarian', 'Contains Gluten'],
      },
      {
        id: 18,
        name: 'Prime Beef Ribeye',
        description: '220g dry-aged ribeye, compound café de Paris butter, pomme purée, watercress, pink peppercorn jus.',
        price: '₹2,800',
        image: menuImages.steak,
        badge: 'Bestseller',
        tags: ['Non-Veg', 'Premium'],
      },
      {
        id: 19,
        name: 'Mushroom Risotto',
        description: 'Carnaroli rice, mixed forest mushrooms, bone marrow butter, Parmigiano cream, micro herbs.',
        price: '₹1,280',
        image: menuImages.risotto,
        tags: ['Vegetarian'],
      },
      {
        id: 20,
        name: 'Pan-Seared Salmon',
        description: 'Wild Atlantic salmon, brown butter, capers, fennel pollen, pea & mint purée, crispy skin.',
        price: '₹1,580',
        image: menuImages.salmon,
        tags: ['Non-Veg', 'Gluten-Free'],
      },
    ],
  },
]

// ─── Featured Specials ────────────────────────────────────────────────────────
export const featuredSpecials = [
  {
    name:        'Black Truffle Risotto',
    subtitle:    "Chef Arjun's Signature",
    description: 'Carnaroli rice cooked in our 12-hour mushroom stock, finished with black summer truffle paste, 36-month Parmigiano Reggiano, and a truffle oil drizzle. Served tableside.',
    price:       '₹2,200',
    badge:       "Chef's Signature",
    image:       specialDishImages[0],
  },
  {
    name:        'A5 Wagyu Tartare',
    subtitle:    'Limited Availability',
    description: 'Premium A5 Japanese Wagyu, hand-cut tableside, quail egg yolk, fermented grain mustard, cornichons, shallots, lavash crisps. 60g or 120g portion.',
    price:       '₹3,400',
    badge:       'Chef Recommended',
    image:       specialDishImages[1],
  },
  {
    name:        'Lobster Bisque',
    subtitle:    'Seasonal Showcase',
    description: 'Maine lobster slow-cooked in cognac, tarragon cream, a generous claw in every bowl, finished with chive oil and a puff pastry dome.',
    price:       '₹1,800',
    badge:       'Seasonal',
    image:       specialDishImages[2],
  },
  {
    name:        'Chocolate Journey',
    subtitle:    'Award-Winning Dessert',
    description: 'Five textures of Valrhona 70% Guanaja: cremeux, soufflé, ice cream, tuile, mousse. Paired with 30-year Pedro Ximénez sherry.',
    price:       '₹1,200',
    badge:       'Award Winning',
    image:       specialDishImages[3],
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    name:   'Isabella Fontaine',
    role:   'Senior Food Critic, The Culinary Times',
    text:   "Velvet Brew is not merely a restaurant — it is a precisely orchestrated sensory experience. The espresso programme rivals anything I have encountered in Melbourne or Tokyo. Chef Arjun's tasting menu is among the finest I've reviewed in the subcontinent.",
    stars:  5,
    avatar: testimonialAvatars[0],
    source: 'The Culinary Times',
  },
  {
    name:   'Marcus Chen',
    role:   'Michelin Guide Inspector (ret.)',
    text:   "The farm-to-cup sourcing philosophy here is genuinely rare in India. They have built direct relationships with micro-lot farmers in Coorg whose names appear on the menu. The kitchen's respect for every ingredient shows in every plate.",
    stars:  5,
    avatar: testimonialAvatars[1],
    source: 'Michelin Guide',
  },
  {
    name:   'Sophia Laurent',
    role:   'Lifestyle & Travel Editor, Condé Nast',
    text:   'I have dined at three-Michelin-starred establishments across Paris, Kyoto, and New York. Velvet Brew holds its own with effortless grace. The truffle risotto alone justified the flight to Mumbai. Return visit already planned.',
    stars:  5,
    avatar: testimonialAvatars[2],
    source: 'Condé Nast Traveller',
  },
  {
    name:   'James Whitfield',
    role:   'Founder, The Luxury Travel Journal',
    text:   'The physical space is stunning — every corner of Velvet Brew has been considered with the eye of an architect. But it is the hospitality that sets it apart. Warmth without pretension. Impossible to achieve; they make it feel natural.',
    stars:  5,
    avatar: testimonialAvatars[3],
    source: 'Luxury Travel Journal',
  },
]
