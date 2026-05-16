/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Recipe {
  id: string;
  name: string;
  category: 'Main Dishes' | 'Sweets & Popsicles' | 'Snacks' | 'Rice Dishes' | 'Breads' | 'Drinks' | 'Healthy Dishes' | 'Chutneys & Pickles' | 'Spice Blends' | 'Soya Dishes' | 'Homemade Bases';
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  // --- Main Dishes ---
  {
    id: 'chole',
    name: 'Chole (Spiced Chickpeas)',
    category: 'Main Dishes',
    ingredients: ['Chickpeas (soaked)', 'tea bag', 'bay leaf', 'cinnamon', 'black cardamom', 'cloves', 'mustard oil', 'cumin', 'onion', 'ginger', 'garlic', 'green chili', 'tomato', 'turmeric', 'red chili powder', 'coriander seeds', 'fennel seeds', 'amchur', 'anardana', 'black salt'],
    steps: [
      'Soak chickpeas for 8 hours; pressure cook with tea bag and whole spices until soft.',
      'Dry roast coriander, fennel, and anardana; grind into a fresh powder.',
      'Heat mustard oil until it smokes; cool slightly and add cumin.',
      'Sauté chopped onions until they are a deep, dark caramelized brown.',
      'Add ginger-garlic paste and slit green chilies; sauté for 3 minutes.',
      'Add pureed tomatoes and cook until the oil separates from the masala.',
      'Stir in turmeric, red chili powder, and your freshly ground spice mix.',
      'Discard the tea bag and add the chickpeas along with their cooking water.',
      'Mash a few chickpeas with your ladle to thicken the gravy naturally.',
      'Simmer for 20 minutes on low heat and finish with black salt.'
    ]
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    category: 'Main Dishes',
    ingredients: ['Paneer', 'cashews', 'tomatoes', 'onions', 'ginger', 'garlic', 'cardamom', 'cloves', 'cinnamon', 'butter', 'turmeric', 'Kashmiri chili powder', 'kasuri methi', 'honey', 'fresh cream', 'salt'],
    steps: [
      'Boil onions, tomatoes, and cashews together; blend into a silky smooth paste.',
      'Heat butter and a little oil; add cardamom, cloves, and cinnamon.',
      'Sauté ginger-garlic paste for one minute until fragrant.',
      'Pour the blended paste through a strainer into the pan for smoothness.',
      'Add turmeric and red chili powder; cook until the sauce thickens.',
      'Add water to reach your desired gravy consistency and boil.',
      'Add salt and honey to balance the tanginess of the tomatoes.',
      'Gently stir in paneer cubes and simmer for 5 minutes.',
      'Rub kasuri methi between your hands and sprinkle over the top.',
      'Finish with a swirl of fresh cream and remove from heat.'
    ]
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    category: 'Main Dishes',
    ingredients: ['Potatoes', 'paneer', 'cornflour', 'raisins', 'cashews', 'onion', 'tomato', 'ginger', 'garlic', 'melon seeds', 'cardamom', 'cinnamon', 'turmeric', 'chili powder', 'cream', 'honey'],
    steps: [
      'Mash potatoes and paneer; mix with cornflour and salt to form a dough.',
      'Stuff dough balls with raisins and cashews, then deep fry until golden.',
      'Boil onion, tomato, and melon seeds; blend and strain for the gravy.',
      'Heat oil with cardamom and cinnamon; sauté ginger-garlic paste.',
      'Add the strained paste and cook until oil separates.',
      'Stir in turmeric, chili powder, and a dash of honey.',
      'Add water to adjust the gravy and bring to a boil.',
      'Stir in fresh cream and turn off the heat.',
      'Place the fried koftas in a serving dish.',
      'Pour the hot gravy over the koftas just before eating.'
    ]
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    category: 'Main Dishes',
    ingredients: ['Black urad dal', 'rajma', 'butter', 'cream', 'tomato puree', 'ginger-garlic paste', 'cumin', 'chili powder', 'cloves', 'cinnamon', 'cardamom', 'salt', 'kasuri methi'],
    steps: [
      'Soak urad dal and rajma overnight; pressure cook until very soft.',
      'Mash the lentils slightly with a wooden masher for creaminess.',
      'Heat butter; add cumin and the whole spices.',
      'Sauté ginger-garlic paste until the raw smell is completely gone.',
      'Add tomato puree and chili powder; cook until thick and dark.',
      'Mix in the cooked lentils along with their liquid.',
      'Simmer on the lowest heat for 1 hour, stirring frequently to prevent sticking.',
      'Add more butter and salt as it cooks.',
      'Stir in heavy cream and crushed kasuri methi at the end.',
      'Serve with a final dollop of butter.'
    ]
  },
  {
    id: 'aloo-gobi',
    name: 'Aloo Gobi',
    category: 'Main Dishes',
    ingredients: ['Cauliflower', 'potatoes', 'onions', 'tomatoes', 'ginger', 'green chilies', 'cumin', 'turmeric', 'red chili powder', 'coriander powder', 'black pepper', 'ground cloves', 'ground cardamom', 'oil', 'salt'],
    steps: [
      'Fry potato wedges and cauliflower florets in oil until golden; drain and set aside.',
      'In the same pan, add cumin seeds to the remaining oil.',
      'Sauté chopped onions until they turn translucent.',
      'Add ginger and green chilies; cook for 2 minutes.',
      'Add chopped tomatoes and cook until they are soft and mushy.',
      'Stir in turmeric, chili powder, and coriander powder.',
      'Toss the fried vegetables back into the masala mixture.',
      'Add salt and two spoons of water; cover and cook for 5 minutes.',
      'Sprinkle ground pepper, cloves, and cardamom; garnish with coriander and serve.'
    ]
  },
  // --- Sweets & Popsicles ---
  {
    id: 'gajar-halwa',
    name: 'Gajar Halwa',
    category: 'Sweets & Popsicles',
    ingredients: ['Red carrots (grated)', 'full-fat milk', 'ghee', 'sugar', 'green cardamom powder', 'raisins', 'cashews', 'almonds'],
    steps: [
      'Wash, peel, and grate the carrots using the fine side of a grater.',
      'Heat ghee in a large heavy pot and add the grated carrots.',
      'Sauté the carrots on medium heat for 10 minutes until they lose their raw smell.',
      'Pour in the milk and bring the mixture to a boil.',
      'Simmer on low-medium heat until the milk is completely evaporated.',
      'Add sugar to the carrot mixture; cook until it thickens.',
      'Add the cardamom powder and remaining ghee for a glossy finish.',
      'Fry the nuts and raisins in ghee until golden; mix into the halwa.'
    ]
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    category: 'Sweets & Popsicles',
    ingredients: ['Khoya (mawa)', 'chenna', 'maida', 'baking soda', 'cardamom powder', 'sugar', 'water', 'rose water', 'ghee'],
    steps: [
      'Mash khoya and chenna together until smooth.',
      'Add maida and baking soda; knead into a soft, smooth dough.',
      'Divide into small, equal-sized balls without cracks.',
      'Prepare sugar syrup by boiling sugar and water to half-string consistency.',
      'Add cardamom and rose water to the syrup; keep it warm.',
      'Fry balls on very low heat until deep golden-brown, rotating constantly.',
      'Immediately drop fried balls into warm syrup and soak for 2 hours.'
    ]
  },
  {
    id: 'coconut-ladoo',
    name: 'Coconut Ladoo',
    category: 'Sweets & Popsicles',
    ingredients: ['Fresh grated coconut', 'condensed milk', 'cardamom powder', 'ghee', 'pistachios'],
    steps: [
      'Heat ghee and add fresh grated coconut; sauté for 3-4 minutes.',
      'Add condensed milk to the coconut and mix well.',
      'Cook on a low flame and add cardamom powder.',
      'Continue stirring until the mixture becomes thick and starts gathering.',
      'Let cool slightly, then roll into smooth round balls.',
      'Roll in dry desiccated coconut and top with a pistachio.'
    ]
  },
  {
    id: 'rasgulla',
    name: 'Rasgulla',
    category: 'Sweets & Popsicles',
    ingredients: ['Full-fat milk', 'lemon juice', 'sugar', 'water', 'cardamom pods', 'rose water'],
    steps: [
      'Boil milk and add lemon juice until it curdles; strain through muslin.',
      'Rinse chenna under cold water and squeeze out all moisture.',
      'Knead chenna for 10 minutes until smooth and greasy.',
      'Shape into small, smooth balls without any cracks.',
      'Boil sugar and water to create a thin, clear syrup with cardamom.',
      'Drop balls into boiling syrup, cover, and cook for 15 minutes.',
      'Cool completely in the syrup before serving chilled.'
    ]
  },
  // --- Snacks ---
  {
    id: 'aloo-tikki',
    name: 'Aloo Tikki',
    category: 'Snacks',
    ingredients: ['Potatoes (boiled)', 'green peas', 'ginger', 'green chilies', 'coriander leaves', 'cornflour', 'cumin seeds', 'red chili powder', 'amchur', 'oil'],
    steps: [
      'Peel and mash boiled potatoes until smooth.',
      'Steam green peas and coarsely mash; add to potatoes.',
      'Add chopped ginger, green chilies, and fresh coriander.',
      'Add cumin seeds, red chili powder, amchur, and salt.',
      'Add cornflour for binding and form into round patties.',
      'Fry on medium heat until both sides are deep golden brown and crunchy.'
    ]
  },
  {
    id: 'samosa',
    name: 'Samosa',
    category: 'Snacks',
    ingredients: ['Maida', 'carom seeds', 'ghee', 'potatoes (boiled)', 'green peas', 'ginger', 'green chilies', 'cumin', 'coriander seeds', 'turmeric', 'chili powder', 'amchur', 'oil'],
    steps: [
      'Mix maida, carom seeds, salt, and ghee; knead into a very stiff dough.',
      'Let dough rest for 30 minutes under a damp cloth.',
      'Sauté cumin, coriander seeds, ginger, and chilies for the filling.',
      'Add peas, potatoes, and dry spices; sauté for 5 minutes then cool.',
      'Form dough into cones, stuff with filling, and seal edges with water.',
      'Fry on low-medium heat for 15-20 minutes until crust is golden and flaky.'
    ]
  },
  {
    id: 'onion-bhaji',
    name: 'Onion Bhaji',
    category: 'Snacks',
    ingredients: ['Onions (sliced)', 'besan', 'rice flour', 'ginger-garlic paste', 'turmeric', 'red chili powder', 'carom seeds', 'coriander', 'oil', 'salt'],
    steps: [
      'Slice onions thinly and let them sit with salt for 10 minutes.',
      'Add ginger-garlic paste, coriander, and all dry spices.',
      'Sprinkle besan and rice flour over the onions.',
      'Mix with your hands, squeezing the onions to form a thick paste.',
      'Heat oil and drop loose clumps of the mixture.',
      'Fry until the onions turn a dark, reddish-golden brown.'
    ]
  },
  // --- Rice Dishes ---
  {
    id: 'jeera-rice',
    name: 'Jeera Rice',
    category: 'Rice Dishes',
    ingredients: ['Basmati rice', 'cumin seeds', 'ghee', 'cardamom', 'cloves', 'cinnamon', 'bay leaf', 'water', 'salt'],
    steps: [
      'Wash basmati rice until water runs clear; soak for 30 minutes.',
      'Heat ghee and add cumin seeds until they sizzle.',
      'Add whole spices and sauté for 30 seconds.',
      'Add drained rice and sauté for 2 minutes to coat in ghee.',
      'Pour in double the water, add salt, and bring to a rapid boil.',
      'Cover tightly and cook on minimum heat for 12 minutes.'
    ]
  },
  {
    id: 'vegetable-pulao',
    name: 'Vegetable Pulao',
    category: 'Rice Dishes',
    ingredients: ['Basmati rice', 'carrots', 'green peas', 'French beans', 'potatoes', 'onions', 'ginger', 'garlic', 'green chilies', 'cumin seeds', 'mint leaves', 'oil', 'salt'],
    steps: [
      'Chop veggies into small cubes; slice onions thinly.',
      'Soak and drain basmati rice.',
      'Heat oil and crackle cumin seeds; sauté onions until golden brown.',
      'Add ginger-garlic paste and chilies; toss in the vegetables.',
      'Add the rice and fresh mint leaves to the pot.',
      'Pour in water and salt; bring to a boil.',
      'Simmer on low for 15 minutes until water is absorbed.'
    ]
  },
  {
    id: 'lemon-rice',
    name: 'Lemon Rice',
    category: 'Rice Dishes',
    ingredients: ['Pre-cooked rice', 'lemon juice', 'mustard seeds', 'urad dal', 'chana dal', 'peanuts', 'cashews', 'curry leaves', 'green chilies', 'turmeric', 'hing', 'oil', 'salt'],
    steps: [
      'Spread pre-cooked rice on a plate to cool completely.',
      'Heat oil and add mustard seeds until they pop.',
      'Add dals and fry until golden; add peanuts and cashews until crunchy.',
      'Add chilies, curry leaves, and hing; stir in turmeric on low heat.',
      'Remove from heat and add lemon juice and salt.',
      'Pour the tempering over the rice and mix gently.'
    ]
  },
  // --- Breads ---
  {
    id: 'chapati',
    name: 'Chapati',
    category: 'Breads',
    ingredients: ['Whole wheat flour (atta)', 'water', 'oil', 'salt'],
    steps: [
      'Mix flour and salt; add water gradually to form a dough.',
      'Knead for 8 minutes until smooth and pliable; rest for 20 minutes.',
      'Divide into balls and roll out into thin circles.',
      'Cook on a hot tawa until bubbles appear; flip.',
      'Apply ghee and press gently until it puffs up.'
    ]
  },
  {
    id: 'aloo-paratha',
    name: 'Aloo Paratha',
    category: 'Breads',
    ingredients: ['Whole wheat flour', 'potatoes (boiled)', 'onions', 'green chilies', 'coriander', 'ginger', 'red chili powder', 'amchur', 'oil', 'salt'],
    steps: [
      'Mash boiled potatoes with chopped onions, ginger, and spices.',
      'Knead a soft dough with wheat flour and water; rest for 15 minutes.',
      'Stuff a ball of dough with the potato mixture and seal.',
      'Roll out gently and cook on a hot griddle.',
      'Apply ghee on both sides and toast until crispy and golden-spotted.'
    ]
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    category: 'Breads',
    ingredients: ['All-purpose flour (maida)', 'garlic (minced)', 'coriander', 'yogurt', 'baking powder', 'sugar', 'butter', 'water', 'salt'],
    steps: [
      'Knead flour, baking powder, salt, sugar, and yogurt into a soft dough.',
      'Let dough rest for 1 hour; divide into oval portions.',
      'Press minced garlic and coriander onto one side of the dough.',
      'Roll out and brush the plain side with water.',
      'Place wet side on a hot tawa; char the garlic side over open flame.'
    ]
  },
  // --- Drinks ---
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    category: 'Drinks',
    ingredients: ['Fresh yogurt (thick curd)', 'chilled milk', 'sugar', 'green cardamom powder', 'ice cubes', 'saffron strands'],
    steps: [
      'Soak saffron strands in a teaspoon of warm milk for 10 minutes.',
      'Pour the fresh yogurt into a deep mixing jug or blender.',
      'Add sugar and a pinch of fresh green cardamom powder.',
      'Pour in chilled milk to adjust the consistency.',
      'Add a handful of ice cubes.',
      'Churn with a traditional mathani or pulse in a blender for 2 minutes until frothy.',
      'Pour the saffron extract over the froth for design.',
      'Serve in tall clay glasses immediately.'
    ]
  },
  {
    id: 'masala-chaas',
    name: 'Masala Chaas',
    category: 'Drinks',
    ingredients: ['Fresh yogurt', 'chilled water', 'green chili', 'fresh ginger', 'coriander leaves', 'mint leaves', 'roasted cumin seeds', 'black salt'],
    steps: [
      'Dry roast whole cumin seeds and grind into a fresh powder.',
      'Finely chop a bit of ginger, half a green chili, mint, and coriander.',
      'Combine yogurt and chilled water in a deep jug.',
      'Add the chopped aromatics and the fresh cumin powder.',
      'Add a pinch of black salt for tanginess.',
      'Whisk or churn for 1 minute until a thin, bubbly froth forms.',
      'Strain if you prefer no leafy bits, or serve as is.',
      'Enjoy cold as a refreshing digestive.'
    ]
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    category: 'Drinks',
    ingredients: ['Ripe mango pulp', 'fresh yogurt', 'milk', 'sugar', 'green cardamom powder', 'ice cubes'],
    steps: [
      'Peel and chop ripe mangoes into cubes.',
      'Blend mangoes and sugar until completely smooth.',
      'Add fresh thick yogurt into the mango puree.',
      'Pour in a splash of milk and add cardamom powder.',
      'Add ice cubes directly into the blender jar.',
      'Pulse for 1 minute until uniform and creamy.',
      'Garnish with extra mango chunks and serve cold.'
    ]
  },
  {
    id: 'nimbu-pani',
    name: 'Nimbu Pani',
    category: 'Drinks',
    ingredients: ['Fresh lemons', 'chilled water', 'sugar', 'roasted cumin powder', 'black salt', 'mint leaves'],
    steps: [
      'Squeeze fresh lemon juice into a wide pitcher.',
      'Add sugar and a small splash of water; stir until dissolved.',
      'Pour in the remaining chilled water.',
      'Stir in black salt and a pinch of roasted cumin powder.',
      'Slap mint leaves between your palms to release oils and add them.',
      'Stir thoroughly and serve in ice-filled glasses.'
    ]
  },
  {
    id: 'jal-jeera',
    name: 'Jal Jeera',
    category: 'Drinks',
    ingredients: ['Fresh mint leaves', 'coriander leaves', 'lemons', 'tamarind pulp', 'roasted cumin seeds', 'black pepper', 'black salt', 'dry mango powder', 'ginger', 'water'],
    steps: [
      'Grind mint, coriander, and ginger into a smooth green paste.',
      'Mix chilled water with tamarind pulp in a large jug.',
      'Strain the green paste into the tamarind water.',
      'Add fresh cumin-pepper powder, black salt, and amchur.',
      'Squeeze in fresh lemon juice and mix well.',
      'Adjust salt and sourness to your liking.',
      'Serve cold, topped with crispy boondi pearls.'
    ]
  },
  {
    id: 'aam-panna',
    name: 'Aam Panna',
    category: 'Drinks',
    ingredients: ['Raw green mangoes', 'sugar or jaggery', 'roasted cumin powder', 'black salt', 'fresh mint leaves', 'water'],
    steps: [
      'Pressure cook raw mangoes until soft; cool completely.',
      'Peel and scrape out the soft pulp into a bowl.',
      'Add sugar or jaggery, mint, black salt, and cumin powder.',
      'Blend into a smooth concentrate.',
      'Mix 3 tablespoons of concentrate with ice-cold water per glass.',
      'Store leftover concentrate in a jar.'
    ]
  },
  {
    id: 'badam-milk',
    name: 'Badam Milk',
    category: 'Drinks',
    ingredients: ['Raw almonds', 'full-fat milk', 'sugar', 'green cardamom powder', 'saffron strands', 'pistachios'],
    steps: [
      'Soak almonds in hot water, peel, and grind into a smooth paste.',
      'Bring milk to a boil and add saffron strands.',
      'Add almond paste and simmer for 10 minutes while stirring.',
      'Add sugar and cardamom powder; cook until dissolved.',
      'Mix in thinly sliced pistachios.',
      'Serve hot or chilled depending on the season.'
    ]
  },
  {
    id: 'thandai',
    name: 'Thandai',
    category: 'Drinks',
    ingredients: ['Almonds', 'cashews', 'pistachios', 'melon seeds', 'poppy seeds', 'fennel seeds', 'black peppercorns', 'green cardamom', 'milk', 'sugar', 'saffron'],
    steps: [
      'Soak nuts and seeds for 4 hours; peel almonds.',
      'Blend everything into a rich, smooth paste.',
      'Boil milk with sugar and saffron; add the nut paste.',
      'Simmer for 5 minutes, then cool to room temperature.',
      'Chill in the fridge for at least 3 hours.',
      'Strain through muslin and garnish with rose petals.'
    ]
  },
  {
    id: 'sol-kadhi',
    name: 'Sol Kadhi',
    category: 'Drinks',
    ingredients: ['Dried kokum', 'freshly grated coconut', 'warm water', 'green chili', 'garlic', 'cumin seeds', 'salt'],
    steps: [
      'Soak kokum in warm water for 30 minutes until deep pink.',
      'Blend coconut, garlic, chili, and cumin with warm water.',
      'Strain to extract both thick and thin coconut milk.',
      'Combine coconut milk extractions in a large bowl.',
      'Strain kokum liquid into the coconut milk to create a pink hue.',
      'Add salt to taste and refrigerate for 1 hour.'
    ]
  },
  {
    id: 'kokum-sharbat',
    name: 'Kokum Sharbat',
    category: 'Drinks',
    ingredients: ['Dried kokum', 'sugar', 'roasted cumin powder', 'black salt', 'chilled water', 'ice cubes'],
    steps: [
      'Soak and mash kokum in hot water; strain into a saucepan.',
      'Add sugar and cook until it turns into a thick syrup.',
      'Stir in black salt and cumin powder; cool completely.',
      'Mix 3 tablespoons of syrup with ice-cold water and ice.',
      'Store leftover syrup in a bottle.'
    ]
  },
  {
    id: 'ginger-lemon-tea',
    name: 'Ginger Lemon Tea',
    category: 'Drinks',
    ingredients: ['Fresh ginger root', 'tea leaves', 'fresh lemon', 'sugar or honey', 'water'],
    steps: [
      'Crush fresh ginger and add to boiling water.',
      'Simmer for 4 minutes until water turns yellow.',
      'Add tea leaves and simmer for just 1 minute.',
      'Stir in sugar or honey and turn off the heat.',
      'Squeeze in lemon juice, strain, and serve hot.'
    ]
  },
  {
    id: 'sattu-drink',
    name: 'Sattu Drink',
    category: 'Drinks',
    ingredients: ['Sattu powder', 'chilled water', 'lemon juice', 'roasted cumin powder', 'black salt', 'mint leaves'],
    steps: [
      'Whisk sattu flour with a little water to form a smooth paste.',
      'Add the rest of the chilled water and whisk until uniform.',
      'Add lemon juice, black salt, and roasted cumin powder.',
      'Toss in finely chopped mint leaves and stir well.',
      'Serve immediately as a high-protein energy drink.'
    ]
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai',
    category: 'Drinks',
    ingredients: ['Tea leaves', 'milk', 'water', 'ginger', 'green cardamom pods', 'cloves', 'cinnamon', 'black peppercorns', 'sugar'],
    steps: [
      'Crush whole spices and ginger; add to boiling water.',
      'Simmer for 3 minutes, then add tea leaves and sugar.',
      'Pour in milk and bring to a rolling boil.',
      'Simmer for another 2 minutes and let it sit covered.',
      'Strain into cups and serve piping hot.'
    ]
  },
  {
    id: 'rose-milk',
    name: 'Rose Milk',
    category: 'Drinks',
    ingredients: ['Chilled milk', 'beetroot (for color)', 'sugar', 'rose water', 'ice cubes'],
    steps: [
      'Extract a drop of bright red juice from grated beetroot.',
      'Whisk chilled milk with sugar and rose water.',
      'Add a drop of beetroot juice for a soft pink color.',
      'Add ice cubes and froth by pouring between two jugs.',
      'Serve cold in tall glasses.'
    ]
  },
  {
    id: 'pudina-sharbat',
    name: 'Pudina Sharbat',
    category: 'Drinks',
    ingredients: ['Fresh mint leaves', 'lemons', 'sugar', 'black salt', 'roasted cumin powder', 'ice cubes', 'water'],
    steps: [
      'Blend mint leaves into a paste and strain the liquid.',
      'Mix mint juice with sugar, lemon juice, and spices.',
      'Add chilled water and stir until sugar dissolves.',
      'Pour over crushed ice and serve cold.'
    ]
  },
  // --- Healthy Dishes ---
  {
    id: 'moong-dal-chilla',
    name: 'Moong Dal Chilla',
    category: 'Healthy Dishes',
    ingredients: ['Yellow moong dal', 'ginger', 'green chilies', 'turmeric', 'cumin seeds', 'spinach leaves', 'onions', 'oil or ghee', 'salt'],
    steps: [
      'Grind soaked moong dal with ginger and green chilies into a smooth batter.',
      'Stir in turmeric, cumin seeds, and salt into the batter.',
      'Mix in finely chopped onions and spinach leaves.',
      'Heat a non-stick tawa and grease with a little oil.',
      'Spread a ladleful of batter in a circular motion to make a thin crepe.',
      'Drizzle oil around the edges and cook on medium heat.',
      'Flip once the bottom is golden brown.',
      'Cook the other side for 1 minute until crispy and serve hot.'
    ]
  },
  {
    id: 'oats-upma',
    name: 'Oats Upma',
    category: 'Healthy Dishes',
    ingredients: ['Rolled oats', 'carrots', 'green peas', 'French beans', 'onions', 'mustard seeds', 'green chilies', 'curry leaves', 'turmeric powder', 'oil', 'water', 'salt'],
    steps: [
      'Dry roast oats for 4 minutes until nutty; set aside.',
      'Heat oil and crackle mustard seeds with onions, chilies, and curry leaves.',
      'Add chopped carrots, beans, and peas; sauté for 3 minutes.',
      'Add turmeric, salt, and a splash of water; cover and cook until soft.',
      'Pour in a cup of water and bring to a boil.',
      'Slowly add roasted oats while stirring to avoid clumps.',
      'Simmer for 2 minutes until water is fully absorbed.'
    ]
  },
  {
    id: 'sprouts-salad',
    name: 'Sprouts Salad',
    category: 'Healthy Dishes',
    ingredients: ['Sprouted moong beans', 'onions', 'tomatoes', 'cucumber', 'green chili', 'coriander leaves', 'lemon juice', 'roasted cumin powder', 'black salt'],
    steps: [
      'Steam sprouted moong beans for 5 minutes until soft but crunchy.',
      'Let the sprouts cool completely in a wide bowl.',
      'Dice fresh onions, tomatoes, and cucumber.',
      'Add chopped coriander and green chili.',
      'Season with black salt and roasted cumin powder.',
      'Squeeze fresh lemon juice over the salad.',
      'Toss thoroughly to combine and serve fresh.'
    ]
  },
  {
    id: 'vegetable-dalia',
    name: 'Vegetable Dalia',
    category: 'Healthy Dishes',
    ingredients: ['Dalia (broken wheat)', 'carrots', 'green peas', 'potatoes', 'onions', 'tomatoes', 'ginger', 'green chili', 'cumin seeds', 'turmeric powder', 'ghee', 'water', 'salt'],
    steps: [
      'Dry roast broken wheat until aromatic and golden.',
      'Heat ghee in a pressure cooker and crackle cumin seeds.',
      'Sauté onions and minced ginger; add tomatoes and cook until soft.',
      'Toss in chopped vegetables, turmeric, and salt.',
      'Add roasted dalia and three times the amount of water.',
      'Pressure cook for 3 whistles on medium flame.',
      'Let steam release before fluffing and serving.'
    ]
  },
  {
    id: 'ragi-malt',
    name: 'Ragi Malt',
    category: 'Healthy Dishes',
    ingredients: ['Ragi flour', 'water or buttermilk', 'roasted cumin powder', 'black salt', 'chopped coriander'],
    steps: [
      'Whisk ragi flour with a half cup of water to form a smooth slurry.',
      'Bring one and a half cups of water to a boil in a saucepan.',
      'Slowly pour in the slurry while whisking continuously.',
      'Cook on low heat for 5-6 minutes until glossy.',
      'Let the porridge cool to room temperature.',
      'Whisk in buttermilk or water to reach desired consistency.',
      'Season with black salt, cumin powder, and coriander.'
    ]
  },
  {
    id: 'paneer-bhurji',
    name: 'Paneer Bhurji',
    category: 'Healthy Dishes',
    ingredients: ['Fresh paneer', 'onions', 'tomatoes', 'green bell pepper', 'ginger', 'green chilies', 'turmeric powder', 'red chili powder', 'oil', 'coriander leaves', 'salt'],
    steps: [
      'Crumble fresh paneer gently with your fingers.',
      'Heat oil and sauté chopped onions and ginger.',
      'Add capsicum and green chilies; stir-fry for 2 minutes.',
      'Toss in tomatoes and cook until they soften.',
      'Stir in spices and salt on low heat.',
      'Add the crumbled paneer and toss gently for 3 minutes.',
      'Garnish with coriander leaves and serve warm.'
    ]
  },
  {
    id: 'palak-soup',
    name: 'Palak Soup',
    category: 'Healthy Dishes',
    ingredients: ['Fresh spinach leaves', 'onions', 'garlic cloves', 'ginger', 'black peppercorns', 'cumin seeds', 'milk', 'butter', 'water', 'salt'],
    steps: [
      'Heat butter and crackle cumin seeds and peppercorns.',
      'Sauté chopped onions, ginger, and garlic until soft.',
      'Add fresh spinach and cook for 2 minutes until wilted.',
      'Cool the mixture and blend into a smooth puree.',
      'Pour back into the pot, add water and salt.',
      'Simmer on medium-low heat and stir in a splash of milk.',
      'Serve hot with a touch of cream if desired.'
    ]
  },
  {
    id: 'lauki-raita',
    name: 'Lauki Raita',
    category: 'Healthy Dishes',
    ingredients: ['Bottle gourd', 'fresh yogurt', 'roasted cumin powder', 'black salt', 'mint leaves', 'mustard seeds', 'oil'],
    steps: [
      'Peel and grate bottle gourd; cook with a pinch of salt until soft.',
      'Drain excess water and cool completely.',
      'Whisk yogurt until smooth and add the cooled gourd.',
      'Season with black salt, cumin powder, and chopped mint.',
      'Add a tempering of mustard seeds crackled in oil.',
      'Chill in the fridge before serving.'
    ]
  },
  {
    id: 'brown-rice-khichdi',
    name: 'Brown Rice Khichdi',
    category: 'Healthy Dishes',
    ingredients: ['Brown rice', 'yellow moong dal', 'onions', 'tomatoes', 'ginger', 'green chili', 'cumin seeds', 'turmeric powder', 'hing', 'ghee', 'water', 'salt'],
    steps: [
      'Soak brown rice and dal for 1 hour; drain.',
      'Heat ghee and crackle cumin seeds with a pinch of hing.',
      'Sauté onions and ginger; add tomatoes and spices.',
      'Add rice, dal, and four cups of water.',
      'Pressure cook for 5 whistles on medium-low heat.',
      'Wait for steam to release before opening and mixing.'
    ]
  },
  {
    id: 'masoor-dal-soup',
    name: 'Masoor Dal Soup',
    category: 'Healthy Dishes',
    ingredients: ['Red lentils', 'carrots', 'onions', 'garlic cloves', 'cumin seeds', 'turmeric powder', 'black pepper', 'lemon juice', 'olive oil', 'water', 'salt'],
    steps: [
      'Heat olive oil and crackle cumin seeds; sauté onions and garlic.',
      'Add chopped carrots and washed lentils.',
      'Pour in four cups of water, add spices, and bring to a boil.',
      'Simmer covered for 20 minutes until lentils are soft.',
      'Blend soup until creamy; add lemon juice and black pepper.',
      'Serve hot as a healthy meal.'
    ]
  },
  {
    id: 'baked-methi-puri',
    name: 'Baked Methi Puri',
    category: 'Healthy Dishes',
    ingredients: ['Whole wheat flour', 'fresh fenugreek leaves', 'turmeric', 'red chili powder', 'carom seeds', 'oil', 'water', 'salt'],
    steps: [
      'Knead flour, chopped methi, oil, and spices into a stiff dough.',
      'Rest dough for 15 minutes, then roll into small thin circles.',
      'Prick circles with a fork to prevent puffing.',
      'Bake at 180°C for 15-18 minutes, flipping halfway.',
      'Cool completely until crunchy and serve.'
    ]
  },
  {
    id: 'beetroot-tikki',
    name: 'Beetroot Tikki',
    category: 'Healthy Dishes',
    ingredients: ['Beetroot', 'potatoes', 'ginger', 'green chilies', 'roasted cumin powder', 'chaat masala', 'breadcrumbs or oats flour', 'oil', 'salt'],
    steps: [
      'Grate beetroot and squeeze out excess juice.',
      'Mix with mashed potatoes, ginger, chilies, and spices.',
      'Add oats flour or breadcrumbs for binding.',
      'Shape into flat patties and shallow fry on medium-low heat.',
      'Flip after 4 minutes until both sides are firm and browned.'
    ]
  },
  {
    id: 'curd-oats',
    name: 'Curd Oats',
    category: 'Healthy Dishes',
    ingredients: ['Rolled oats', 'fresh yogurt', 'cucumber', 'pomegranate pearls', 'mustard seeds', 'curry leaves', 'green chili', 'oil', 'water', 'salt'],
    steps: [
      'Cook oats with water until soft; cool completely.',
      'Mix oats with thick yogurt, salt, and a splash of water.',
      'Stir in grated cucumber and pomegranate pearls.',
      'Add tempering of mustard seeds, curry leaves, and green chili.',
      'Serve chilled as a probiotic-rich dish.'
    ]
  },
  {
    id: 'stuffed-tomatoes',
    name: 'Stuffed Tomatoes',
    category: 'Healthy Dishes',
    ingredients: ['Firm tomatoes', 'paneer', 'carrots', 'green peas', 'onions', 'turmeric powder', 'cumin powder', 'oil', 'coriander leaves', 'salt'],
    steps: [
      'Scoop out tomato pulp to create empty cups.',
      'Sauté onions, carrots, and peas; add crumbled paneer and spices.',
      'Stuff the mixture tightly into the tomato cups.',
      'Place tomatoes in a greased dish and cook covered for 8 minutes.',
      'Serve as a healthy appetizer or side.'
    ]
  },
  {
    id: 'grilled-tofu-tikka',
    name: 'Grilled Tofu Tikka',
    category: 'Healthy Dishes',
    ingredients: ['Firm tofu', 'thick yogurt', 'ginger-garlic paste', 'red chili powder', 'turmeric powder', 'roasted besan', 'lemon juice', 'oil', 'salt'],
    steps: [
      'Press tofu to remove moisture and cut into cubes.',
      'Whisk yogurt with aromatics, spices, besan, and lemon juice.',
      'Marinate tofu cubes for at least 30 minutes.',
      'Thread onto skewers and grill on a hot pan.',
      'Rotate until charred grill marks appear on all sides.'
    ]
  },
  // --- Chutneys & Pickles ---
  {
    id: 'hari-chutney',
    name: 'Hari Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Fresh coriander leaves', 'fresh mint leaves', 'green chilies', 'ginger', 'garlic cloves', 'roasted chana dal', 'lemon juice', 'black salt', 'cumin seeds', 'water'],
    steps: [
      'Wash coriander and mint leaves thoroughly in cold water.',
      'Keep the tender coriander stalks for extra flavor.',
      'Place leaves, green chilies, ginger, and garlic into a grinder.',
      'Toss in roasted chana dal for a thick structure.',
      'Sprinkle cumin seeds and black salt over the ingredients.',
      'Pour in fresh lemon juice to keep the color bright green.',
      'Add a very small splash of ice-cold water.',
      'Blend on high speed until completely smooth.',
      'Transfer to a clean glass jar and refrigerate.'
    ]
  },
  {
    id: 'imli-chutney',
    name: 'Imli Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Seedless tamarind', 'jaggery', 'seedless dates', 'roasted cumin powder', 'ginger powder', 'red chili powder', 'black salt', 'water'],
    steps: [
      'Soak tamarind and dates in warm water for 30 minutes.',
      'Mash correctly and strain the pulp into a saucepan.',
      'Bring the pulp to a simmer and add crushed jaggery.',
      'Stir until jaggery melts completely.',
      'Mix in ginger powder, red chili powder, and black salt.',
      'Add roasted cumin powder for a smoky undertone.',
      'Simmer on low heat for 10 minutes until thick.',
      'Cool to room temperature; it will thicken further.'
    ]
  },
  {
    id: 'coconut-chutney',
    name: 'Coconut Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Freshly grated coconut', 'roasted chana dal', 'green chilies', 'ginger', 'yogurt', 'water', 'mustard seeds', 'curry leaves', 'dry red chili', 'oil', 'salt'],
    steps: [
      'Place coconut, roasted chana dal, chilies, and ginger into a blender.',
      'Add a spoonful of yogurt and salt to balance the flavor.',
      'Pour in a half-cup of water and blend until a grainly paste forms.',
      'Heat oil in a tempering pan and add mustard seeds.',
      'Toss in torn dry red chili and fresh curry leaves.',
      'Fry until crisp and turn off the flame.',
      'Pour the hot tempering over the coconut paste and stir.'
    ]
  },
  {
    id: 'tomato-onion-chutney',
    name: 'Tomato Onion Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Tomatoes', 'onions', 'chana dal', 'urad dal', 'dry red chilies', 'garlic', 'tamarind', 'oil', 'mustard seeds', 'curry leaves', 'salt'],
    steps: [
      'Heat oil and fry chana dal and urad dal until nutty.',
      'Add dry red chilies and garlic; sauté for 1 minute.',
      'Toss in chopped onions and cook until translucent.',
      'Add chopped tomatoes and a tiny piece of tamarind.',
      'Cook until tomatoes are mushy, then cool completely.',
      'Grind into a smooth paste without adding water.',
      'Temper with mustard seeds and curry leaves in hot oil.'
    ]
  },
  {
    id: 'garlic-chutney',
    name: 'Garlic Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Garlic cloves (unpeeled)', 'dry grated coconut', 'roasted peanuts', 'Kashmiri red chili powder', 'oil', 'salt'],
    steps: [
      'Roast unpeeled garlic cloves until dark spots appear.',
      'Roast peanuts until crunchy and skins split.',
      'Toast dry coconut until lightly golden; cool all ingredients.',
      'Place garlic, peanuts, coconut, and salt into a blender.',
      'Add Kashmiri red chili powder for a vibrant red color.',
      'Pulse for 2 seconds at a time to form a coarse sandy powder.'
    ]
  },
  {
    id: 'peanut-chutney',
    name: 'Peanut Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Raw peanuts', 'green chilies', 'garlic cloves', 'tamarind pulp', 'oil', 'mustard seeds', 'curry leaves', 'salt', 'water'],
    steps: [
      'Roast peanuts and remove loose skins.',
      'Sauté garlic and green chilies for 1 minute.',
      'Blend peanuts, garlic, and chilies with tamarind pulp and salt.',
      'Pour in water and process until smooth and creamy.',
      'Transfer to a bowl and add tempering of mustard seeds and curry leaves.'
    ]
  },
  {
    id: 'mint-chutney',
    name: 'Mint Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Fresh mint leaves', 'coriander leaves', 'onions', 'green chilies', 'amchur', 'black salt', 'water'],
    steps: [
      'Place fresh mint, coriander, onions, and green chilies into a grinder.',
      'Sprinkle amchur and black salt over the ingredients.',
      'Add one tablespoon of water to start the grinding.',
      'Blend using short bursts until a uniform spread is formed.',
      'Serve alongside fried snacks or appetizers.'
    ]
  },
  {
    id: 'instant-mango-pickle',
    name: 'Instant Mango Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Raw green mango', 'mustard oil', 'mustard seeds (split)', 'fennel seeds', 'fenugreek seeds', 'turmeric powder', 'red chili powder', 'hing', 'salt'],
    steps: [
      'Dice raw green mango into tiny cubes and season with salt and turmeric.',
      'Coarsely crush fennel and fenugreek seeds.',
      'Heat mustard oil to smoking point, then let it cool until just warm.',
      'Stir in crushed seeds, split mustard seeds, and a pinch of hing.',
      'Add red chili powder to the spiced oil mixture.',
      'Pour the warm oil directly over the seasoned mango cubes.',
      'Mix thoroughly and let it rest for 2 hours before eating.'
    ]
  },
  {
    id: 'lemon-pickle',
    name: 'Lemon Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Fresh lemons', 'salt', 'sugar', 'red chili powder', 'carom seeds', 'roasted cumin powder'],
    steps: [
      'Cut fresh lemons into 8 equal wedges; catch all juices.',
      'Transfer lemons and juices to a clean glass bowl.',
      'Add a generous amount of salt and all the spices.',
      'Toss vigorously to coat every piece of lemon.',
      'Transfer to a sterilized glass jar and close tightly.',
      'Keep the jar in a sunny spot for 10 days.',
      'Shake the jar once daily to redistribute juices.',
      'The skin will soften, and the pickle will cure naturally without oil.'
    ]
  },
  {
    id: 'ginger-pickle',
    name: 'Ginger Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Fresh ginger root', 'tamarind', 'jaggery', 'dry red chilies', 'mustard seeds', 'fenugreek seeds', 'oil', 'salt', 'water'],
    steps: [
      'Sauté chopped ginger in oil until aromatic.',
      'Roast fenugreek seeds and dry red chilies; cool all ingredients.',
      'Extract thick tamarind pulp from soaked tamarind.',
      'Blend roasted spices, ginger, tamarind pulp, and jaggery.',
      'Process until a smooth, thick paste forms without extra water.',
      'Temper with popped mustard seeds and simmer the paste for 5 minutes.'
    ]
  },
  {
    id: 'onion-pickle',
    name: 'Onion Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Button onions (shallots)', 'white vinegar', 'water', 'beetroot', 'salt', 'sugar'],
    steps: [
      'Make a deep cross cut on the top of peeled button onions.',
      'Combine equal measures of vinegar and water with salt and sugar.',
      'Pack onions and beetroot strips into a clean glass jar.',
      'Pour the cooled pickling liquid over the onions.',
      'Seal tightly and leave on the counter for 24 hours.',
      'The onions will turn bright pink and be ready to serve.'
    ]
  },
  {
    id: 'coriander-chutney',
    name: 'Coriander Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['Fresh coriander leaves', 'green chilies', 'roasted cumin seeds', 'sugar', 'salt', 'water'],
    steps: [
      'Place coriander, green chilies, and roasted cumin seeds into a grinder.',
      'Add a pinch of sugar and salt.',
      'Pour in two tablespoons of cold water.',
      'Grind on high speed until a smooth green emulsion forms.',
      'Store covered in the refrigerator and serve fresh.'
    ]
  },
  {
    id: 'sesame-chutney',
    name: 'Sesame Chutney',
    category: 'Chutneys & Pickles',
    ingredients: ['White sesame seeds', 'dry red chilies', 'garlic cloves', 'tamarind pulp', 'oil', 'salt', 'water'],
    steps: [
      'Toast sesame seeds until they pop and turn light tan.',
      'Fry dry red chilies and garlic cloves in a drop of oil.',
      'Cool and place everything into a blender with tamarind pulp.',
      'Pour in a quarter-cup of water and blend until smooth.',
      'Serve as a nutty accompaniment to breakfast.'
    ]
  },
  {
    id: 'carrot-green-chili-pickle',
    name: 'Carrot Green Chili Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Carrots', 'thick green chilies', 'mustard oil', 'yellow mustard seeds (crushed)', 'turmeric powder', 'amchur', 'salt'],
    steps: [
      'Slice carrots into matchsticks and green chilies lengthwise.',
      'Add crushed yellow mustard seeds, turmeric, amchur, and salt.',
      'Heat mustard oil to smoking point, then cool to lukewarm.',
      'Pour the oil directly over the spiced vegetables.',
      'Mix thoroughly and let reach full flavor after 24 hours.'
    ]
  },
  {
    id: 'sweet-chili-pickle',
    name: 'Sweet Chili Pickle',
    category: 'Chutneys & Pickles',
    ingredients: ['Mild green chilies', 'jaggery', 'tamarind pulp', 'mustard seeds', 'fenugreek seeds', 'oil', 'turmeric powder', 'salt'],
    steps: [
      'Sauté chopped green chili wheels in oil with mustard seeds.',
      'Sprinkle turmeric, salt, and ground fenugreek powder.',
      'Pour in thick tamarind pulp and add crushed jaggery.',
      'Simmer as the jaggery melts and thickens into a glossy glaze.',
      'Store in an airtight container once cooled.'
    ]
  },
  // --- Spice Blends ---
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'black peppercorns', 'cloves', 'green cardamom', 'black cardamom', 'cinnamon sticks', 'mace', 'bay leaves', 'star anise'],
    steps: [
      'Toast black cardamom, cinnamon, and star anise for 2 minutes.',
      'Add coriander, cumin, and bay leaves; toast until fragrant.',
      'Toss in green cardamom, cloves, mace, and peppercorns.',
      'Roast on low heat until spices deepen in color.',
      'Transfer to a wide plate and cool completely to become brittle.',
      'Grind in a dedicated spice grinder to a fine powder.',
      'Store in an airtight glass jar to maintain freshness.'
    ]
  },
  {
    id: 'sambar-podi',
    name: 'Sambar Podi',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'dry red chilies', 'chana dal', 'urad dal', 'fenugreek seeds', 'black peppercorns', 'cumin seeds', 'curry leaves', 'hing', 'turmeric powder'],
    steps: [
      'Dry roast lentils until golden; roast red chilies until puffed.',
      'Toast seeds and peppercorns; add fenugreek at the very end.',
      'Roast fresh curry leaves until brittle and dry.',
      'Combine all roasted ingredients and sprinkle with hing and turmeric.',
      'Cool completely and transfer to a high-speed blender.',
      'Grind into a smooth, intensely fragrant aromatic red powder.'
    ]
  },
  {
    id: 'biryani-masala',
    name: 'Biryani Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'shahi jeera', 'cloves', 'green cardamom', 'black cardamom', 'cinnamon', 'mace', 'nutmeg', 'bay leaves', 'black pepper'],
    steps: [
      'Grate a tiny piece of fresh nutmeg; tear bay leaves into shards.',
      'Roast seeds on low heat until oils are released.',
      'Add whole spices and stir fry for 3 minutes on low flame.',
      'Turn off heat and stir in grated nutmeg while cooling.',
      'Grind the cooled mixture until it turns into a fine powder.',
      'Sieve to remove any tough fiber bits from the cardamom shells.'
    ]
  },
  {
    id: 'chana-masala-powder',
    name: 'Chana Masala Powder',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'anardana', 'amchur', 'black salt', 'dry ginger', 'cloves', 'cinnamon', 'black pepper', 'nutmeg'],
    steps: [
      'Roast coriander, cumin, cloves, and cinnamon until darkened.',
      'Add anardana for the final 30 seconds of roasting.',
      'Move to a plate to cool; add dry ginger, amchur, and black salt.',
      'Grate a tiny hint of nutmeg directly into the bowl.',
      'Grind intensely until it forms a uniform, dark brown powder.',
      'Store in a cool, dark cupboard to preserve aromatics.'
    ]
  },
  {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'black peppercorns', 'cumin seeds', 'toor dal', 'dry red chilies', 'turmeric powder', 'curry leaves'],
    steps: [
      'Roast toor dal until golden; add pepper and red chilies.',
      'Sauté until chilies are crisp, then add seeds.',
      'Toss in fresh curry leaves and roast until brittle.',
      'Cool completely and add a half-teaspoon of turmeric powder.',
      'Grind in a spice mill to a slightly coarse powder texture.',
      'Store in a tight jar for sharp, peppery freshness.'
    ]
  },
  {
    id: 'chaat-masala',
    name: 'Chaat Masala',
    category: 'Spice Blends',
    ingredients: ['Cumin seeds', 'coriander seeds', 'black peppercorns', 'amchur', 'black salt', 'mint powder', 'citric acid crystals', 'regular salt'],
    steps: [
      'Roast cumin until very dark brown; toast coriander and pepper.',
      'Cool seeds and combine with amchur powder.',
      'Add black salt, citric acid crystals, and mint powder.',
      'Grind everything together into an ultra-fine powder.',
      'Sieve once to ensure a perfectly smooth dust consistency.'
    ]
  },
  {
    id: 'curry-powder',
    name: 'Curry Powder',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'turmeric powder', 'fenugreek seeds', 'dry ginger', 'black pepper', 'yellow mustard seeds', 'green cardamom', 'red chili powder'],
    steps: [
      'Dry roast seeds and cardamom pods on medium-low for 3 minutes.',
      'Remove from heat once mustard seeds begin to crackle; cool.',
      'Blend roasted seeds into a smooth powder.',
      'Add red chili, turmeric, and ginger powders.',
      'Pulse to blend uniformly and store in an airtight container.'
    ]
  },
  {
    id: 'pav-bhaji-masala',
    name: 'Pav Bhaji Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'black cardamoms', 'cloves', 'cinnamon', 'fennel seeds', 'black peppercorns', 'amchur', 'Kashmiri red chili powder', 'salt'],
    steps: [
      'Roast seeds and whole spices on low heat until fennel smells sweet.',
      'Toss in black peppercorns and ensure even roasting.',
      'Cool and stir in Kashmiri red chili powder for vibrant color.',
      'Add amchur powder and a pinch of regular salt.',
      'Grind into a smooth, aromatic brick-red powder.'
    ]
  },
  {
    id: 'panch-phoron',
    name: 'Panch Phoron',
    category: 'Spice Blends',
    ingredients: ['Cumin seeds', 'fennel seeds', 'fenugreek seeds', 'nigella seeds', 'mustard seeds'],
    steps: [
      'Measure out exactly equal portions of all five distinct whole seeds.',
      'Check cumin and fennel for any small stones or debris.',
      'Ensure nigella and fenugreek seeds are entirely moisture-free.',
      'Combine all five whole spices into a single dry mixing bowl.',
      'Do not roast or grind; keep this blend entirely whole.',
      'Mix thoroughly and store in a clean jar.'
    ]
  },
  {
    id: 'tandoori-masala',
    name: 'Tandoori Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'mace', 'cloves', 'garlic powder', 'ginger powder', 'Kashmiri red chili powder', 'kasuri methi', 'turmeric powder', 'oil'],
    steps: [
      'Roast seeds, cloves, and mace; cool and grind into a fine powder.',
      'Add garlic and ginger powders directly to the mixture.',
      'Mix in Kashmiri chili powder for the classic red hue.',
      'Rub kasuri methi between your palms and add to the bowl.',
      'Drizzle a half-teaspoon of oil and rub into the spices with fingertips.',
      'Ensure the powder looks uniform and rich red.'
    ]
  },
  {
    id: 'goda-masala',
    name: 'Goda Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander seeds', 'cumin seeds', 'sesame seeds', 'dagad phool', 'cinnamon', 'cloves', 'black cardamom', 'dry grated coconut', 'oil'],
    steps: [
      'Fry stone flower, cardamom, cloves, and cinnamon in a drop of oil.',
      'Roast coriander and cumin seeds until they turn dark brown.',
      'Toast sesame seeds and dry coconut until deep golden-brown.',
      'Cool all components completely to room temperature.',
      'Grind in a blender until it forms a fine, dark, oily aromatic powder.',
      'Store in the refrigerator due to the high oil content.'
    ]
  },
  {
    id: 'kitchen-king-masala',
    name: 'Kitchen King Masala',
    category: 'Spice Blends',
    ingredients: ['Coriander', 'cumin', 'turmeric', 'black pepper', 'ginger', 'garlic powder', 'green cardamom', 'nutmeg', 'poppy seeds', 'red chili powder'],
    steps: [
      'Roast seeds and peppercorns; add green cardamom at the end.',
      'Cool and grind into a smooth powder foundation.',
      'Add aromatics, turmeric, and red chili powders.',
      'Grate fresh nutmeg directly into the assembly bowl.',
      'Pass the entire blend through a fine mesh sieve to remove grains.',
      'Bottle up as a general savory flavor enhancer.'
    ]
  },
  {
    id: 'chai-masala',
    name: 'Chai Masala',
    category: 'Spice Blends',
    ingredients: ['Green cardamom pods', 'dry ginger pieces', 'black peppercorns', 'cloves', 'cinnamon sticks', 'nutmeg'],
    steps: [
      'Break dry ginger and cinnamon sticks into small shards.',
      'Warm seeds, pods, and cloves on low heat to drive out moisture.',
      'Cool and transfer to a grinder jar with ginger pieces.',
      'Grate fresh nutmeg directly over the contents.',
      'Grind into a fine, highly aromatic powder.',
      'Use a tiny pinch per cup of tea and store securely.'
    ]
  },
  {
    id: 'shahi-jeera-powder',
    name: 'Shahi Jeera Powder',
    category: 'Spice Blends',
    ingredients: ['Shahi jeera'],
    steps: [
      'Dry roast clean shahi jeera seeds on low flame for 2 minutes.',
      'Stir non-stop until seeds darken and release an earthy aroma.',
      'Cool until seeds are cold and crisp to the touch.',
      'Transfer to a dry spice grinder and process on high speed.',
      'Store in a small glass jar to retain sweet spice oils.'
    ]
  },
  {
    id: 'kasuri-methi-powder',
    name: 'Kasuri Methi Powder',
    category: 'Spice Blends',
    ingredients: ['Dry fenugreek leaves'],
    steps: [
      'Spread dry fenugreek leaves in a warm pan for 2 minutes.',
      'Remove when crisp and rub aggressively between clean hands.',
      'Watch them crumble into a fine aromatic herbal powder.',
      'Pass through a colander to catch and discard any stems.',
      'Store the fragrant green powder in a sealed jar.'
    ]
  },
  // --- Soya Dishes ---
  {
    id: 'soya-chunk-masala-dry',
    name: 'Soya Chunk Masala Dry',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'onions', 'tomatoes', 'ginger', 'garlic', 'green chilies', 'cumin seeds', 'turmeric powder', 'Kashmiri red chili powder', 'coriander powder', 'oil', 'fresh coriander leaves', 'salt'],
    steps: [
      'Finely chop the onions and tomatoes; mince the ginger, garlic, and green chilies.',
      'Heat oil in a flat pan and crackle the cumin seeds on medium heat.',
      'Sauté the chopped onions until they turn a deep golden brown color.',
      'Add the minced ginger, garlic, and green chilies, frying for 1 minute until fragrant.',
      'Toss in the chopped tomatoes and salt, cooking until they turn soft and mushy.',
      'Stir in the turmeric, red chili powder, and coriander powder on a low flame.',
      'Add the boiled and tightly squeezed soya chunks to the pan.',
      'Toss the chunks vigorously for 3 minutes to coat them entirely in the dry masala spice.',
      'Cover with a lid and let it steam on low heat for 5 minutes so the chunks absorb flavors.',
      'Remove the lid, stir-fry on high heat for 2 minutes to crisp the edges, and garnish with coriander.'
    ]
  },
  {
    id: 'soya-chunk-curry',
    name: 'Soya Chunk Curry',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'onions', 'tomatoes', 'cashews', 'ginger-garlic paste', 'green cardamom', 'cloves', 'cinnamon', 'turmeric', 'red chili powder', 'coriander powder', 'oil', 'salt'],
    steps: [
      'Slice onions and boil them with cashews and tomatoes for 8 minutes; blend into a smooth paste.',
      'Heat oil in a deep pot and add the whole cardamom, cloves, and cinnamon stick.',
      'Pour the blended onion-tomato-cashew paste into the aromatic hot oil.',
      'Add the ginger-garlic paste and cook the mixture until the raw smell completely disappears.',
      'Stir in the turmeric powder, red chili powder, coriander powder, and salt.',
      'Keep sautéing on medium heat until the masala paste shrinks and begins releasing oil.',
      'Add the prepped soya chunks to the pot, mixing them gently into the gravy base.',
      'Pour in a cup of warm water to adjust the curry consistency to your liking.',
      'Cover the pot and simmer on low heat for 10 minutes to make the chunks juicy.',
      'Turn off the heat, let it rest for 2 minutes, and serve hot with rotis or rice.'
    ]
  },
  {
    id: 'soya-chunk-biryani',
    name: 'Soya Chunk Biryani',
    category: 'Soya Dishes',
    ingredients: ['Basmati rice', 'soya chunks (prep-boiled)', 'onions', 'yogurt', 'mint leaves', 'coriander leaves', 'ginger', 'garlic', 'green chilies', 'cloves', 'cardamom', 'bay leaf', 'ghee', 'salt'],
    steps: [
      'Wash the Basmati rice thoroughly and soak it in water for exactly 30 minutes.',
      'Marinate the squeezed soya chunks in yogurt, ginger-garlic paste, mint, coriander, chili, and salt.',
      'Boil water with cloves, cardamom, and a bay leaf; cook the rice until 70% done, then drain.',
      'Slice onions thinly and deep-fry them in ghee until crispy and brown (birista); set aside.',
      'In a heavy-bottomed pot, heat ghee and sauté the marinated soya chunks for 5 minutes.',
      'Spread the cooked soya chunks evenly along the bottom of the pot.',
      'Layer the par-boiled Basmati rice directly on top of the soya chunks.',
      'Garnish the rice layer with the fried onions, fresh mint leaves, and a drizzle of ghee.',
      'Seal the pot tightly with a lid (or aluminum foil) to trap the steam inside.',
      'Cook on lowest heat for 15 minutes (Dum cooking), fluff gently with a fork, and serve.'
    ]
  },
  {
    id: 'soya-chunk-bhurji',
    name: 'Soya Chunk Bhurji',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'onions', 'tomatoes', 'green bell pepper (capsicum)', 'ginger', 'green chilies', 'turmeric powder', 'red chili powder', 'cumin powder', 'oil', 'salt'],
    steps: [
      'Take the boiled, squeezed soya chunks and pulse them in a blender for 2 seconds to mince them coarsely.',
      'Finely chop the onions, tomatoes, capsicum, green chilies, and fresh ginger.',
      'Heat oil in a frying pan and sauté the chopped onions and ginger until translucent.',
      'Add the chopped green chilies and capsicum squares, stir-frying on medium heat for 2 minutes.',
      'Toss in the tomatoes and cook until they soften slightly, keeping some of their texture.',
      'Stir in the turmeric powder, red chili powder, cumin powder, and salt.',
      'Add the coarsely minced soya chunks directly into the spiced vegetable mixture.',
      'Toss everything together gently on medium heat for exactly 4 minutes.',
      'Do not overcook, or the minced soya will lose its moisture and turn dry.',
      'Turn off the flame, garnish with fresh coriander leaves, and serve warm with bread or parathas.'
    ]
  },
  {
    id: 'soya-chunk-tikka-kebab',
    name: 'Soya Chunk Tikka Kebab',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'thick yogurt (hung curd)', 'ginger-garlic paste', 'Kashmiri red chili powder', 'turmeric powder', 'roasted gram flour (besan)', 'lemon juice', 'chaat masala', 'oil', 'salt'],
    steps: [
      'Ensure the boiled soya chunks are squeezed extra hard so no residual water remains.',
      'In a large bowl, whisk the thick yogurt until completely smooth.',
      'Add ginger-garlic paste, red chili powder, turmeric powder, lemon juice, and salt to the yogurt.',
      'Stir in the roasted besan flour, which acts as a glue to help the marinade stick.',
      'Toss the soya chunks into this thick marinade, coating each chunk completely.',
      'Let the chunks marinate in the refrigerator for 30 minutes to lock in the flavors.',
      'Thread the marinated soya chunks tightly onto wooden skewers.',
      'Heat a grill pan or flat tawa and brush it lightly with oil.',
      'Place the skewers down and cook on medium-high heat, turning them regularly.',
      'Remove once all sides develop charred grill spots, sprinkle with chaat masala, and serve.'
    ]
  },
  {
    id: 'aloo-soya-curry',
    name: 'Aloo Soya Curry',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'potatoes', 'onions', 'tomatoes', 'ginger', 'garlic', 'green chili', 'cumin seeds', 'turmeric', 'red chili powder', 'coriander powder', 'oil', 'salt'],
    steps: [
      'Peel the potatoes and cut them into medium-sized cubes; finely chop onions and tomatoes.',
      'Heat oil in a pressure cooker pot and crackle the cumin seeds.',
      'Sauté the chopped onions, minced ginger, and garlic until light brown.',
      'Add the tomato pieces and cook until they soften and blend into the onions.',
      'Stir in the turmeric powder, red chili powder, coriander powder, and salt.',
      'Add the potato cubes and squeezed soya chunks, stirring to mix with the spices.',
      'Sauté the vegetables and soya chunks together for 3 minutes on medium heat.',
      'Pour in one and a half cups of water to create a comforting gravy.',
      'Close the pressure cooker lid tightly and cook for exactly 2 whistles.',
      'Let the steam release naturally, open the lid, and mash one potato cube to thicken the stew.'
    ]
  },
  {
    id: 'soya-chunk-kadai-spicy',
    name: 'Soya Chunk Kadai Spicy',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'bell peppers', 'onions', 'tomatoes', 'coriander seeds', 'dry red chilies', 'black peppercorns', 'ginger-garlic paste', 'oil', 'salt'],
    steps: [
      'Dry roast coriander seeds, dry red chilies, and peppercorns; grind into a coarse spice blend.',
      'Cut the bell peppers and onions into large square petals; finely chop the tomatoes.',
      'Heat oil in a wok (kadai) and fry the pepper and onion petals for 2 minutes; remove while crunchy.',
      'Add more oil to the wok and sauté chopped onions and ginger-garlic paste until brown.',
      'Add the chopped tomatoes and cook until they turn into a thick, glossy paste.',
      'Stir in half of your freshly ground coarse Kadai spice blend and salt.',
      'Add the squeezed soya chunks along with the fried peppers and onion petals.',
      'Sprinkle the remaining half of the spice blend evenly over the ingredients.',
      'Toss everything together dynamically on high heat for 3 minutes to combine.',
      'Add a tiny splash of water to keep it from burning, simmer for 1 minute, and serve.'
    ]
  },
  {
    id: 'chana-moong-soya-salad',
    name: 'Chana Moong Soya Salad',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (boiled/tiny size)', 'boiled chickpeas (chana)', 'sprouted moong beans', 'onions', 'tomatoes', 'cucumber', 'coriander', 'lemon juice', 'black salt', 'roasted cumin powder'],
    steps: [
      'Take the boiled and squeezed soya chunks and chop them into tiny, bite-sized bits.',
      'Steam the sprouted moong beans for 3 minutes so they stay crunchy but clean.',
      'Finely dice the fresh onions, juicy tomatoes, and crunchy cucumber.',
      'In a large salad bowl, combine the tiny soya bits, chickpeas, and sprouted moong.',
      'Toss the diced onions, tomatoes, and cucumber into the legume mixture.',
      'Fine-chop fresh green coriander leaves and scatter them over the bowl.',
      'Sprinkle black salt evenly over the salad ingredients for a savory bite.',
      'Add a pinch of earthy roasted cumin powder for depth of flavor.',
      'Squeeze the fresh juice of a whole sour lemon across the salad.',
      'Use two large spoons to toss the salad thoroughly and serve cold immediately.'
    ]
  },
  {
    id: 'soya-chunk-kurma',
    name: 'Soya Chunk Kurma',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'onions', 'tomatoes', 'grated coconut', 'cashews', 'poppy seeds', 'fennel seeds', 'ginger', 'garlic', 'green chilies', 'oil', 'curry leaves', 'salt'],
    steps: [
      'Blend the grated coconut, cashews, poppy seeds, fennel seeds, and green chilies into a smooth white paste.',
      'Finely chop the onions and tomatoes; mince the ginger and garlic.',
      'Heat oil in a deep pan, add fresh curry leaves, and sauté the chopped onions until soft.',
      'Add the ginger, garlic, and chopped tomatoes, cooking until the tomatoes melt down.',
      'Add the squeezed soya chunks to the pan, stirring to mix with the onion-tomato base.',
      'Pour the prepared rich coconut-cashew paste directly over the chunks.',
      'Add a cup of water to adjust the gravy, lowering the heat immediately.',
      'Add salt to taste and stir everything together thoroughly.',
      'Simmer gently on low heat for 8 minutes so the coconut milk infuses the soya without splitting.',
      'Turn off the flame once the gravy looks thick and creamy, then serve warm.'
    ]
  },
  {
    id: 'palak-soya',
    name: 'Palak Soya',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'spinach leaves (palak)', 'onions', 'tomatoes', 'garlic', 'ginger', 'green chilies', 'cumin seeds', 'oil', 'salt'],
    steps: [
      'Blanch fresh spinach leaves in boiling water for 2 minutes, then plunge into ice water.',
      'Blend the cooled green spinach leaves with green chilies into a smooth, vibrant puree.',
      'Finely chop the onions and tomatoes; mince the ginger and garlic.',
      'Heat oil in a pan, crackle cumin seeds, and sauté the onions until translucent.',
      'Add the minced ginger and garlic, frying for 1 minute until fragrant.',
      'Add the chopped tomatoes and cook until they turn completely soft.',
      'Pour the green spinach puree into the pan and stir well, adding salt.',
      'Simmer on medium-low heat for 3 minutes keeping the pan uncovered to save the color.',
      'Add the prepped soya chunks into the bubbling green spinach sauce.',
      'Cook on low heat for 5 more minutes so the chunks drink up the green gravy; serve hot.'
    ]
  },
  {
    id: 'soya-chunk-pepper-fry',
    name: 'Soya Chunk Pepper Fry',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'onions', 'ginger', 'garlic', 'curry leaves', 'whole black peppercorns', 'fennel seeds', 'turmeric powder', 'coconut oil', 'salt'],
    steps: [
      'Coarsely crush whole black peppercorns and fennel seeds together in a mortar and pestle.',
      'Slice the onions thinly; mince the fresh ginger and garlic.',
      'Heat coconut oil in a shallow pan and add a generous handful of fresh curry leaves.',
      'Toss in the sliced onions and sauté until they turn a deep brown color.',
      'Add the minced ginger and garlic, frying until the raw aroma disappears.',
      'Stir in the turmeric powder and half of your freshly crushed pepper-fennel mix.',
      'Add the squeezed soya chunks and salt, tossing them dynamically into the onions.',
      'Lower the heat, cover, and let it cook in its own moisture for 5 minutes.',
      'Remove the lid and sprinkle the remaining pepper-fennel mix over the chunks.',
      'Stir-fry on high heat for 3 minutes until the chunks turn dark and aromatic.'
    ]
  },
  {
    id: 'soya-manchurian',
    name: 'Soya Manchurian',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'cornstarch', 'all-purpose flour (maida)', 'ginger', 'garlic', 'green chilies', 'capsicum', 'onions', 'soy sauce', 'vinegar', 'tomato paste', 'oil', 'salt'],
    steps: [
      'Make a thick batter of cornstarch, maida, red chili powder, salt, and water.',
      'Coat the squeezed soya chunks in this batter and shallow-fry until crispy; set aside.',
      'Cube the onions and capsicum into squares; finely chop the ginger, garlic, and chilies.',
      'Heat oil in a wide wok on high heat and sauté the chopped ginger and garlic for 30 seconds.',
      'Add the green chilies, cubed onions, and capsicum, stir-frying for 1 minute while keeping them crunchy.',
      'Pour in the soy sauce, vinegar, and a spoonful of raw tomato paste.',
      'Mix a teaspoon of cornstarch with a half-cup of water and pour it into the wok to thicken.',
      'Bring the sauce to a quick bubble until it turns glossy and clear.',
      'Toss the crispy fried soya chunks directly into the bubbling sauce.',
      'Mix rapidly on high heat for 1 minute until the sauce coats the chunks, and serve hot.'
    ]
  },
  {
    id: 'methi-soya-sabzi',
    name: 'Methi Soya Sabzi',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'fresh fenugreek leaves (methi)', 'onions', 'tomatoes', 'ginger', 'green chilies', 'cumin seeds', 'turmeric', 'red chili powder', 'oil', 'salt'],
    steps: [
      'Wash the fresh methi leaves thoroughly, chop them finely, and dry them with a towel.',
      'Chop onions and tomatoes; slice the green chilies and ginger.',
      'Heat oil in a pan and let the cumin seeds crackle.',
      'Sauté the chopped onions until they turn soft and translucent.',
      'Add the ginger, green chilies, and chopped tomatoes, cooking until mushy.',
      'Stir in the turmeric powder, red chili powder, and salt.',
      'Add the chopped fresh methi leaves to the pan and cook for 3 minutes until they wilt.',
      'Add the prepped soya chunks, tossing them well with the wilted greens and spices.',
      'Cover the pan and let it cook on low heat for 5 minutes without adding water.',
      'Remove the lid and stir-fry on medium heat for 2 minutes to blend the flavors.'
    ]
  },
  {
    id: 'soya-chunk-pulao',
    name: 'Soya Chunk Pulao',
    category: 'Soya Dishes',
    ingredients: ['Basmati rice', 'soya chunks (prep-boiled)', 'onions', 'carrots', 'green peas', 'cumin seeds', 'cloves', 'cinnamon', 'bay leaf', 'turmeric powder', 'oil', 'water', 'salt'],
    steps: [
      'Wash the Basmati rice and let it soak in water for 20 minutes before draining.',
      'Slice the onions thinly; chop the carrots into small cubes.',
      'Heat oil or ghee in a deep pot and add cumin seeds, cloves, cinnamon, and the bay leaf.',
      'Sauté the sliced onions in the aromatic oil until golden brown.',
      'Toss in the carrot cubes, green peas, and squeezed soya chunks, frying for 2 minutes.',
      'Stir in the turmeric powder and salt to season the vegetables and soya.',
      'Add the soaked and drained Basmati rice to the pot, tossing gently so the grains don\'t break.',
      'Pour in exactly double the amount of water compared to the rice measure.',
      'Bring the water to a rolling boil, then turn the heat down to low.',
      'Cover tightly with a lid and cook for 10 minutes until the water is gone, then fluff.'
    ]
  },
  {
    id: 'tomato-soya-thokku',
    name: 'Tomato Soya Thokku',
    category: 'Soya Dishes',
    ingredients: ['Soya chunks (prep-boiled)', 'tomatoes', 'onions', 'mustard seeds', 'fenugreek seeds (methi dana)', 'turmeric', 'red chili powder', 'sesame oil', 'curry leaves', 'salt'],
    steps: [
      'Finely chop a large portion of juicy tomatoes; slice the onions.',
      'Dry roast a few fenugreek seeds and grind them into a fine powder.',
      'Heat a generous pool of sesame oil in a pan; pop mustard seeds and curry leaves.',
      'Sauté the sliced onions until soft and translucent.',
      'Add the chopped tomatoes and salt, mashing them down with your spatula.',
      'Cook the tomatoes on medium heat for 8 minutes until they reduce into a thick, oily jam-like paste.',
      'Stir in the turmeric powder, red chili powder, and the ground fenugreek powder.',
      'Add the squeezed soya chunks to the tangy, concentrated tomato base.',
      'Simmer on low heat for 6 minutes, allowing the chunks to absorb the intense sour flavor.',
      'Turn off the flame once the oil starts separating from the edges of the thick curry.'
    ]
  },
  // --- Homemade Bases ---
  {
    id: 'homemade-paneer',
    name: 'Homemade Paneer',
    category: 'Homemade Bases',
    ingredients: ['Full-fat milk', 'Fresh lemon juice or white vinegar', 'Ice-cold water'],
    steps: [
      'Bring full-fat milk to a rolling boil over medium-high heat, stirring frequently.',
      'Turn off heat and let it sit for 2 minutes to cool slightly.',
      'Add lemon juice or vinegar one tablespoon at a time, stirring gently.',
      'Stop when the yellowish-green whey clears completely; add ice-cold water to keep it soft.',
      'Line a colander with muslin cloth and pour the curdled milk through it.',
      'Rinse the paneer under cold running water to remove any sour taste.',
      'Gather the corners of the cloth, squeeze out excess liquid, and tie a tight knot.',
      'Place a flat plate on top and weigh it down with a heavy object for 40 minutes.',
      'Slice the set block into cubes and use fresh.'
    ]
  },
  {
    id: 'homemade-tofu',
    name: 'Homemade Tofu',
    category: 'Homemade Bases',
    ingredients: ['Raw yellow soybeans', 'Water', 'Lemon juice or white vinegar'],
    steps: [
      'Soak soybeans for 12 hours until they triple in size; drain and rinse.',
      'Blend beans with fresh water for 3 minutes until perfectly smooth.',
      'Strain through muslin cloth, squeezing tightly to extract pure soy milk.',
      'Bring soy milk to a boil, skimming off any foam that rises.',
      'Simmer for 10 minutes to cook out the raw bean flavor; turn off heat.',
      'Mix lemon juice with warm water and slowly pour into the slightly cooled milk.',
      'Cover and let sit for 15 minutes to separate into curds and whey.',
      'Pour into a cheesecloth-lined mold and press with a heavy weight for 30 minutes.',
      'Drop the finished tofu into cold water to chill.'
    ]
  },
  {
    id: 'fresh-malai',
    name: 'Homemade Fresh Malai',
    category: 'Homemade Bases',
    ingredients: ['Full-fat raw milk'],
    steps: [
      'Pour fresh full-fat milk into a wide, shallow heavy pot.',
      'Bring to a slow boil over medium-low heat; do not rush.',
      'Lower heat to minimum and simmer for 10-12 minutes once rising.',
      'Turn off the flame and let the pot cool undisturbed on the counter.',
      'Refrigerate the pot overnight (8-12 hours) without moving it.',
      'A thick, wrinkled cream layer will form on the surface.',
      'Run a knife around the inner edges of the pot to detach the cream.',
      'Use a wide slotted spoon to lift the heavy cream layer carefully.',
      'Transfer to an airtight container and keep refrigerated.'
    ]
  },
  {
    id: 'white-butter',
    name: 'Homemade White Butter',
    category: 'Homemade Bases',
    ingredients: ['Accumulated fresh malai', 'Cold ice water'],
    steps: [
      'Thaw stored malai completely until it reaches room temperature.',
      'Spoon cream into a blender jar or mixing bowl with a little water.',
      'Churn vigorously using a hand-churner or blender on low pulse.',
      'Watch for the fat to separate into solid clumps and thin buttermilk.',
      'Pour ice-cold water into the bowl to help the clumps stick together.',
      'Gather all butter bits and press them firmly into a tight ball.',
      'Squeeze tightly between your palms to extract residual buttermilk.',
      'Rinse the ball in clean cold water and store in the fridge.'
    ]
  },
  {
    id: 'paneer-cheese-spread',
    name: 'Paneer Cheese Spread',
    category: 'Homemade Bases',
    ingredients: ['Freshly made paneer', 'Fresh malai', 'Salt', 'Lemon juice'],
    steps: [
      'Ensure fresh paneer is moist and slightly warm; crumble into a blender.',
      'Add a tablespoon of fresh malai and a pinch of salt.',
      'Add a tiny drop of lemon juice for tanginess.',
      'Blend for 30 seconds, then scrape down the sides.',
      'Add more malai if the texture looks dry or grainy.',
      'Blend on high for another 45 seconds until silky and glossy.',
      'Adjust salt to your preference after tasting.',
      'Chill in the fridge for 1 hour to reach spreadable consistency.'
    ]
  },
  {
    id: 'homemade-ghee',
    name: 'Homemade Ghee',
    category: 'Homemade Bases',
    ingredients: ['Unsalted white butter'],
    steps: [
      'Place white butter clumps into a deep, heavy-bottomed pan.',
      'Melt completely on medium heat until it starts boiling and foaming.',
      'Lower heat to medium-low and stir occasionally.',
      'Wait for the foam to dissipate and the liquid to turn translucent.',
      'Milk solids will sink and slowly turn golden brown.',
      'The liquid will become clear amber and release a nutty aroma.',
      'Turn off the flame once the solids look medium brown.',
      'Cool for 15 minutes, then strain through cheesecloth into a glass jar.'
    ]
  },
  {
    id: 'hung-curd',
    name: 'Homemade Hung Curd',
    category: 'Homemade Bases',
    ingredients: ['Fresh plain whole-milk yogurt'],
    steps: [
      'Line a fine-mesh strainer with a clean muslin cloth over a bowl.',
      'Pour fresh yogurt into the center of the cloth.',
      'Gather the corners and squeeze lightly to drain the initial whey.',
      'Tie a tight knot and place the bundle back into the strainer.',
      'Refrigerate the entire setup for 6 to 8 hours or overnight.',
      'Ensure the yogurt stays cold so it does not turn sour.',
      'Untie to reveal a thick, solid block of creamy hung curd.'
    ]
  },
  {
    id: 'khoya-mawa',
    name: 'Homemade Khoya',
    category: 'Homemade Bases',
    ingredients: ['Full-fat whole milk'],
    steps: [
      'Pour milk into a wide, heavy pan and bring to a rolling boil.',
      'Stir constantly and simmer on medium heat.',
      'Scrape down the sides frequently and mix solids back in.',
      'Stir the bottom continuously to prevent catching.',
      'After 40-50 minutes, the milk will reduce to a thick, grainy paste.',
      'Lower flame to minimum as it thickens into a dough-like mass.',
      'Continue stirring until it pulls away cleanly from the pan.',
      'Transfer to a plate and let it cool until it firms up.'
    ]
  },
  {
    id: 'almond-milk',
    name: 'Homemade Almond Milk',
    category: 'Homemade Bases',
    ingredients: ['Raw whole almonds', 'Water for soaking', 'Chilled water for blending'],
    steps: [
      'Soak almonds for 8 to 12 hours; drain and rinse.',
      'Place almonds in a blender with three cups of ice-cold water.',
      'Blend on highest speed for 2 to 3 minutes until pulverized.',
      'Check for an opaque, smooth, milky-white consistency.',
      'Drape muslin cloth over a pitcher and pour the liquid through.',
      'Squeeze the cloth aggressively to extract every drop of milk.',
      'Store in the fridge and discard or save the dry pulp.'
    ]
  },
  {
    id: 'coconut-milk-base',
    name: 'Homemade Coconut Milk',
    category: 'Homemade Bases',
    ingredients: ['Freshly grated coconut', 'Warm water'],
    steps: [
      'Grate fresh white coconut meat and place one cup into a blender.',
      'Add one and a half cups of warm water.',
      'Blend on high speed for 2 minutes until uniform and pulpy.',
      'Pour through a cheesecloth-lined bowl and squeeze hard.',
      'Save the first batch as "Thick Milk" in a glass jar.',
      'Return pulp to blender with another cup of warm water and blend.',
      'Squeeze again to collect "Thin Milk" in a separate jar.'
    ]
  },
  {
    id: 'rice-flour-base',
    name: 'Homemade Rice Flour',
    category: 'Homemade Bases',
    ingredients: ['Raw white rice'],
    steps: [
      'Wash rice thoroughly and soak for 1 to 2 hours.',
      'Drain completely and spread in a thin layer on a clean towel.',
      'Air-dry for 45-60 minutes until dry outside but moist inside.',
      'Grind the air-dried grains on high speed for 2 minutes.',
      'Sieve through a fine mesh to separate any gritty bits.',
      'Cool completely on a plate before storing in an airtight jar.'
    ]
  },
  {
    id: 'roasted-chana-flour',
    name: 'Homemade Sattu Flour',
    category: 'Homemade Bases',
    ingredients: ['Whole roasted brown chickpeas'],
    steps: [
      'Clean crispy dry-roasted chickpeas; rub to loosen skins if desired.',
      'Ensure the grinder jar is bone-dry before starting.',
      'Pour chickpeas into the jar (halfway full).',
      'Grind on high for 1 to 2 minutes into an aromatic powder.',
      'Let the dust settle for 10 seconds before opening the lid.',
      'Sieve through a fine mesh; re-grind any coarse fragments.',
      'Store in an airtight container.'
    ]
  },
  {
    id: 'cashew-cream-base',
    name: 'Homemade Cashew Cream',
    category: 'Homemade Bases',
    ingredients: ['Raw unsalted cashews', 'Hot water', 'Lukewarm water'],
    steps: [
      'Soak cashews in boiling hot water for 30 minutes.',
      'Drain and rinse with cold water.',
      'Transfer to a blender with two tablespoons of lukewarm water.',
      'Blend for 45 seconds, then scrape down the sides.',
      'Add more water if needed and blend on highest speed for 1 minute.',
      'Stop when it turns into a glossy, rich ivory-white cream.'
    ]
  },
  {
    id: 'oats-flour-base',
    name: 'Homemade Oats Flour',
    category: 'Homemade Bases',
    ingredients: ['Whole rolled oats'],
    steps: [
      'Dry toast oats in a pan for 3 minutes until lightly golden.',
      'Let toast oats cool completely until cold to the touch.',
      'Process in a high-speed blender for 1 minute until fine dust.',
      'Sift through a fine sieve to remove any remaining flakes.',
      'Store in an airtight container as a healthy binding agent.'
    ]
  },
  {
    id: 'tamarind-concentrate',
    name: 'Homemade Tamarind Paste',
    category: 'Homemade Bases',
    ingredients: ['Seedless dried tamarind', 'Hot water'],
    steps: [
      'Soak tamarind pieces in boiling water for 45 minutes.',
      'Mash thoroughly to separate pulp from fibers.',
      'Strain through a coarse-mesh steel sieve into a pan.',
      'Scrape the smooth cream off the bottom of the strainer.',
      'Simmer the liquid for 8-10 minutes over medium heat.',
      'Cook until water evaporates, leaving a dark, thick concentrate.',
      'Cool and store in a glass jar.'
    ]
  }
];

export const CATEGORIES = ['Main Dishes', 'Sweets & Popsicles', 'Snacks', 'Rice Dishes', 'Breads', 'Drinks', 'Healthy Dishes', 'Chutneys & Pickles', 'Spice Blends', 'Soya Dishes', 'Homemade Bases'] as const;
export type Category = typeof CATEGORIES[number];
