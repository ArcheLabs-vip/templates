export const site = {
  name: 'LotusW',
  title: 'LotusW — Spa & Wellness Center',
  description: 'Experience ultimate relaxation and rejuvenation at our tranquil spa. Explore massages, facials, and wellness treatments tailored to restore balance and beauty.',
  demo: true,
  demoNotice: 'Template demo — content and images are illustrative only.',
  url: 'https://lotusw.example',
  phone: '+1 (555) 000-0000',
  email: 'hello@lotusw.co',
  logo: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67eaaa88ac655afd7ff6be86_Logo.svg',
  iconLogo: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f900c68ffdef905c04715c_icon-logo.svg',
  hero: {
    title: 'Your Sanctuary of',
    highlight: 'Serenity',
    titleEnd: 'Awaits',
    subtitle: 'Leave the stress behind and immerse yourself in a world of relaxation and calm.',
    primaryCta: 'See Treatments',
    primaryHref: '/treatments',
    secondaryCta: 'Contact Us',
    secondaryHref: '#contact',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67eaab97771fefca4ce06633_Hero-Image-Logo.avif',
  },
  about: {
    title: 'Story Behind',
    highlight: 'our Center',
    subtitle: 'Our spa is a peaceful retreat from everyday chaos, focusing on relaxation and rejuvenation.',
    innerTitle: 'Regain your inner',
    innerHighlight: 'tranquility & peace',
    innerText: 'Our spa center offers a diverse range of treatments, from soothing massages to invigorating facials, each designed to enhance your well-being.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f36e03505156521fc37469_about.avif',
  },
  whyChooseUs: {
    title: 'Why Choose',
    highlight: 'Us',
    text: 'Our attention to details and satisfaction of our clients is what sets us apart from others in the Wellness industry.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38c443f2affc4bcbaa355_our-spa.avif',
    starsIcon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3e22fbf2d94baac13d8f3_stars.svg',
    ratingAvatars: [
      'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3e2659f0c39f6de218d30_testimonial-3.png',
      'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3e268cdcb4120484b6f71_testimonial-2.png',
      'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3e4f33bf4cdf639155b64_testimonial-5.png',
      'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3e26b68a66514e9ec8a75_testimonial-1.png',
    ],
  },
  discount: {
    title: 'Special deal',
    subtitle: 'Use Discount code',
    code: 'LOTUS30',
    text: 'And receive 30% discount on all treatments offered at one of our spa centers. Book today to claim your discount!',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3d434df44cdc5fee87d1b_discount.avif',
  },
  skinCare: {
    title: 'Take Care of',
    highlight: 'Your Skin',
    text: 'From deep-cleansing facials that target impurities to hydrating treatments that restore moisture, each service is tailored to meet your unique skincare needs.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f6348ddc18f4eb57124bad_skin-treatment-image-v3.avif',
  },
  blog: {
    title: 'Latest Updates from the',
    highlight: 'Wellness Industry',
    subtitle: 'Stay informed with the latest trends, expert analyses, and practical advice to enhance your well-being.',
  },
  contact: {
    title: 'Book your',
    highlight: 'Spa Moment',
    formTitle: 'Get in Touch',
    formSubtitle: 'Got questions or want to book an appointment? We\'d love to hear from you!',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8f87bb6eee9e443dc6aec_contact-image.webp',
  },
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8fc7be60a97885041d22f_fb.svg' },
    { name: 'Instagram', href: 'https://instagram.com/', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8fe001eb2acb7fe09cfd0_instagram.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8fe95a206eaacff83f57d_youtube.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8ff59a206eaacff84e45a_linkedin.svg' },
    { name: 'X', href: 'https://x.com/', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f8ffa54e2cf7a8efe6be38_x.svg' },
  ],
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Blog', href: '/blog' },
];

export const treatments = [
  {
    slug: 'glow-and-hydrate',
    title: 'Glow and Hydrate',
    description: 'A refreshing facial treatment that deeply hydrates, revives dull skin, and boosts your natural glow.',
    image: 'https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcbf7d6f6051abb7cb3222_glow-hydrate.avif',
  },
  {
    slug: 'sleep-therapy',
    title: 'Sleep Therapy',
    description: 'Soothing massage and scalp therapy designed to calm the mind and promote deep, restful sleep.',
    image: 'https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcbc6d36a7a62e4d80010d_sleep-therapy.avif',
  },
  {
    slug: 'serenity-escape',
    title: 'Serenity Escape',
    description: 'Full-body massage with aromatherapy to relax, restore, and melt away stress and tension.',
    image: 'https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67fcb9c8d7250a5d1ea4a233_serenity-escape-thumb.avif',
  },
];

export const team = [
  { name: 'Joanna Whitter', role: 'Spa Center Founder', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f37b1568591a7d2613f1a2_member-1.avif' },
  { name: 'Jeremy Prue', role: 'Office Manager', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f37f2906920d025d1a882c_member-2.avif' },
  { name: 'Rita Bolera', role: 'Event & Music Manager', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38006bb8a16fe1576d9fa_member-3.avif' },
  { name: 'Thomas Lake', role: 'Massage Therapist', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f380464a95e6ea153c410e_member-4.avif' },
  { name: 'Linda Williams', role: 'Coordinator', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f381a56056abc25bcd912d_member-6.avif' },
  { name: 'Anna Lewis', role: 'Massage Therapist', image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f380b5712796467379c627_member-5.avif' },
];

export const features = [
  { title: 'Natural Herbs', description: 'We use 100% natural herbs and products.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38e96a400a22f73963590_leaf-brown.svg' },
  { title: 'Bridal Services', description: 'Glow with confidence on your special day.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f391e86b5fd440b2173f56_bridal-services.svg' },
  { title: 'Seasonal Discounts', description: 'We offer great deals on holiday and vacation time.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f39140481c5b05145608cd_discount.svg' },
  { title: 'Child Friendly', description: 'Families with kids are always welcomed here.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3909fdfe46aef57f5a390_kid-friendly-brown.svg' },
  { title: 'Hair Salon Services', description: 'Take care of your hair with the help of our hairdressers.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f397c621bd4b5d6f280584_hair.svg' },
  { title: 'Nutritional Counseling', description: 'Expert advice for healthy eating and wellness.', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f398487e3021369b86738a_nutrition.svg' },
];

export const testimonials = [
  {
    title: 'Pure Relaxation',
    text: 'This spa is pure bliss! From the calming ambiance to the expert therapists, every visit leaves me feeling refreshed and rejuvenated. Highly recommended!',
    author: 'Sarah L.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f3ea3d7b25bed6192ebd66_testimonial-image-1.avif',
  },
  {
    title: 'Amazing Service',
    text: 'The staff is incredibly kind and professional. They truly care about your comfort and well-being. Best massage I\'ve ever had!',
    author: 'Emma R.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f4cd47034e5ab198a44c3a_testimonial-image-2.avif',
  },
  {
    title: 'Stress Relief',
    text: 'This spa is my go-to sanctuary for relaxation. The massages and facials are heavenly, and the steam room is a must-try!',
    author: 'James T.',
    image: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f4d2080b7ef62c7cfa6190_testimonial-image-3.avif',
  },
];

export const packages = [
  { name: 'Serenity Escape', duration: '90 Minutes', price: '$120', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f38e96a400a22f73963590_leaf-brown.svg' },
  { name: 'Luxury Glow', duration: '120 Minutes', price: '$180', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f391e86b5fd440b2173f56_bridal-services.svg' },
  { name: 'Couples Retreat', duration: '120 Minutes', price: '$250', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f4eae73353aa7b61d21b0e_heart.svg' },
  { name: 'Hot Stone Heaven', duration: '75 Minutes', price: '$130', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f4eb702740647802a9344a_fire.svg' },
  { name: 'Sleep Therapy', duration: '60 Minutes', price: '$100', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f50bc22cd40fe8701d3bcb_sleep.svg' },
  { name: 'Glow & Hydrate', duration: '75 Minutes', price: '$110', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f50aa0c13413e0c4eed0e4_water.svg' },
  { name: 'Bridal Radiance', duration: '150 Minutes', price: '$220', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f50c2cc365026176085f38_crown.svg' },
  { name: 'Spa Party', duration: '180 Minutes', price: '$350', icon: 'https://cdn.prod.website-files.com/67e50bd19f5ad99a1eeb8958/67f50ca9ff735f348849f25b_confetti.svg' },
];

export const faq = [
  { question: 'What should I wear to the spa?', answer: 'Come in comfortable clothing. You\'ll be provided with a robe and slippers during your visit. For body treatments, disposable undergarments are available.' },
  { question: 'Do you offer gift cards?', answer: 'Yes! Spa gift cards are available in various amounts and can be used for any service or package. They make a perfect gift!' },
  { question: 'What payment methods do you accept?', answer: 'We accept cash, credit/debit cards, and digital payments like Apple Pay and Google Pay.' },
  { question: 'Can I request a specific therapist?', answer: 'Yes, you may request a preferred therapist when booking. We\'ll do our best to accommodate your request.' },
  { question: 'Is an appointment necessary?', answer: 'Yes, we recommend booking in advance to ensure your preferred time slot. Walk-ins are welcome but subject to availability.' },
];

export const blogPosts = [
  {
    title: 'Couples Spa: The Perfect Date',
    category: 'Spa Experiences',
    date: 'April 11, 2025',
    href: '/post/couples-spa-the-perfect-date',
    image: 'https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67f77a6df1fdc22fe024e392_post-thumbnail-3.webp',
  },
  {
    title: 'Facials: Your Glow-Up Secret',
    category: 'Skincare & Beauty',
    date: 'April 11, 2025',
    href: '/post/facials-your-glow-up-secret',
    image: 'https://cdn.prod.website-files.com/67f76d950a84151276d0ab14/67f772c3a77d2a621043bb08_post-thumbnail-2.webp',
  },
];
