import type { VideoRecommendation } from "@/lib/video-recommendations";

export type ConditionGuideGroup =
  | "Metabolic and hormonal"
  | "Heart, blood pressure, and kidney"
  | "Mental health and neurology"
  | "Whole-body, sleep, and inflammatory";

export type ConditionGuideResource = {
  title: string;
  href: string;
  description: string;
  type:
    | "Article"
    | "Pillar"
    | "Book"
    | "Book list"
    | "Video library"
    | "Website list"
    | "Community"
    | "Official guide";
  external?: boolean;
};

export type ConditionGuide = {
  slug: string;
  title: string;
  group: ConditionGuideGroup;
  cardDescription: string;
  simpleDescription: string;
  whyItMatters: string;
  focusPoints: string[];
  resources: ConditionGuideResource[];
  videos?: VideoRecommendation[];
};

export type ConditionGuideListItem = {
  slug: string;
  title: string;
  group: ConditionGuideGroup;
  cardDescription: string;
  href: string;
};

function internalResource(
  title: string,
  href: string,
  description: string,
  type: ConditionGuideResource["type"],
): ConditionGuideResource {
  return {
    title,
    href,
    description,
    type,
    external: false,
  };
}

function externalResource(
  title: string,
  href: string,
  description: string,
  type: ConditionGuideResource["type"] = "Official guide",
): ConditionGuideResource {
  return {
    title,
    href,
    description,
    type,
    external: true,
  };
}

const type1DiabetesVideos: VideoRecommendation[] = [
  {
    id: "n6LXtQqu0Ow",
    title: "Low Carb Management of Type 1 Diabetes",
    speaker: "Dr. Troy Stapleton",
    youtubeUrl: "https://www.youtube.com/watch?v=n6LXtQqu0Ow&t=2s",
  },
  {
    id: "uHaYPEDGaro",
    title: "TCR in Practice: Navigating Insulin for Protein & Fat in Type 1 Diabetes",
    speaker: "Beth McNally & Amy Rush",
    youtubeUrl: "https://www.youtube.com/watch?v=uHaYPEDGaro&t=1559s",
  },
  {
    id: "QHnSNneh7ck",
    title: "How I Manage My Type 1 Diabetes",
    speaker: "David Dikeman",
    youtubeUrl: "https://www.youtube.com/watch?v=QHnSNneh7ck",
  },
  {
    id: "lutzMT0kahU",
    title: "Back to the Future: A Low Carbohydrate Diet in Type 1 Diabetes",
    speaker: "Dr. Sheila Cook",
    youtubeUrl: "https://www.youtube.com/watch?v=lutzMT0kahU",
  },
  {
    id: "3SIdbFT8xYY",
    title: "My Type 1 Diabetes Story",
    speaker: "Jane MacDonald",
    youtubeUrl: "https://www.youtube.com/watch?v=3SIdbFT8xYY",
  },
  {
    id: "q3ct9UVfuhk",
    title: "Low-Carb Diets for Type 1 Diabetes Management",
    speaker: "Dr. Jessica Turton",
    youtubeUrl: "https://www.youtube.com/watch?v=q3ct9UVfuhk",
  },
  {
    id: "No2S65lxoSk",
    title: "Medical Nutrition Therapy for People with Type 1 Diabetes: Fact vs. Fiction",
    speaker: "Dr. Jake Kushner",
    youtubeUrl: "https://www.youtube.com/watch?v=No2S65lxoSk",
  },
  {
    id: "FInnC6IMo9g",
    title: "Low Carbohydrate Nutrition for Type 1 Diabetes: A Practical Guide",
    speaker: "Dr. Jake Kushner",
    youtubeUrl: "https://www.youtube.com/watch?v=FInnC6IMo9g",
  },
  {
    id: "mkj4UQZGC3I",
    title: "Practical Tips to Manage Type 1 Diabetes",
    speaker: "Dr. Richard K. Bernstein",
    youtubeUrl: "https://www.youtube.com/watch?v=mkj4UQZGC3I",
  },
  {
    id: "DGOMwV4EadY",
    title: "5 Steps for Type 1 Diabetics to Start a Low-Carb Diet",
    speaker: "Ken D Berry MD",
    youtubeUrl: "https://www.youtube.com/watch?v=DGOMwV4EadY",
  },
  {
    id: "iLg4vBGpLM0",
    title: "Low Carb for Type 1 Diabetes",
    speaker: "Justin Hansen and Julie Reid",
    youtubeUrl: "https://www.youtube.com/watch?v=iLg4vBGpLM0",
  },
];

export const conditionGuideGroups: Array<{
  name: ConditionGuideGroup;
  description: string;
}> = [
  {
    name: "Metabolic and hormonal",
    description:
      "Conditions often linked by insulin resistance, appetite regulation, weight, and hormone signaling.",
  },
  {
    name: "Heart, blood pressure, and kidney",
    description:
      "Conditions where circulation, blood vessels, cholesterol, and kidney function interact over time.",
  },
  {
    name: "Mental health and neurology",
    description:
      "Brain, mood, attention, and nervous-system conditions that are shaped by sleep, stress, and daily function.",
  },
  {
    name: "Whole-body, sleep, and inflammatory",
    description:
      "Conditions where recovery, inflammation, pain, digestion, immune activity, and sleep load matter.",
  },
];

export const conditionGuides: ConditionGuide[] = [
  {
    slug: "obesity",
    title: "Obesity",
    group: "Metabolic and hormonal",
    cardDescription:
      "A chronic condition shaped by appetite, hormones, environment, sleep, medications, and insulin resistance.",
    simpleDescription:
      "Obesity is not just about body size or willpower. It is a long-term medical condition where appetite signals, metabolism, sleep, stress, medications, and daily environment can all push weight upward and make it hard to keep weight off.",
    whyItMatters:
      "It can affect energy, mobility, blood pressure, blood sugar, liver health, fertility, and sleep, so treatment works best when it targets the root drivers rather than short-term restriction alone.",
    focusPoints: [
      "Review hunger patterns, emotional eating triggers, and sleep quality alongside weight history.",
      "Look for weight-promoting medications, insulin resistance, and obesity-related complications.",
      "Choose a plan you can repeat for years, not a short burst of intensity.",
    ],
    resources: [
      internalResource(
        "Weight loss medications",
        "/pillars/weight-loss-drugs",
        "Overview of evidence-based obesity medications and where they fit in a broader care plan.",
        "Pillar",
      ),
      internalResource(
        "Protein targets for weight loss",
        "/resources/protein-for-weight-loss",
        "Practical guidance on protein intake for satiety, lean mass retention, and adherence.",
        "Article",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Books on obesity, metabolism, fasting, and long-term behavior change.",
        "Book list",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "Talks on insulin resistance, obesity treatment, and lifestyle interventions.",
        "Video library",
      ),
      externalResource(
        "Obesity Canada",
        "https://obesitycanada.ca/",
        "Patient-centered Canadian guidance on obesity as a chronic disease.",
      ),
    ],
  },
  {
    slug: "type-2-diabetes",
    title: "Type 2 Diabetes",
    group: "Metabolic and hormonal",
    cardDescription:
      "High blood sugar caused by insulin resistance and a pancreas that can no longer keep up.",
    simpleDescription:
      "Type 2 diabetes happens when the body becomes resistant to insulin and blood sugar stays high because the pancreas cannot keep up forever. It often builds gradually over years and is closely linked with sleep, weight, food quality, activity, and stress.",
    whyItMatters:
      "Earlier action can improve glucose, medication needs, energy, and long-term risk to the eyes, nerves, kidneys, heart, and blood vessels.",
    focusPoints: [
      "Track A1C, fasting glucose, blood pressure, kidney function, and medication safety together.",
      "Build meals around protein, fiber, and lower-glycemic carbohydrate choices.",
      "If you use insulin or glucose-lowering medications, lifestyle changes should be matched with a clinician-guided medication review.",
    ],
    resources: [
      internalResource(
        "Insulin resistance: clinical basics",
        "/resources/insulin-resistance-basics",
        "Simple overview of why insulin resistance develops and what it affects.",
        "Article",
      ),
      internalResource(
        "Fasting safety checklist",
        "/resources/fasting-safety-checklist",
        "Important safety checks before extending fasting windows with diabetes medications.",
        "Article",
      ),
      internalResource(
        "Therapeutic carbohydrate restriction",
        "/pillars/carb-restriction",
        "How lower-glycemic eating can fit into metabolic care.",
        "Pillar",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "Lectures on diabetes reversal, insulin resistance, and low-carbohydrate care.",
        "Video library",
      ),
      externalResource(
        "Diabetes Canada",
        "https://diabetes.ca/",
        "Canadian patient education on diabetes prevention, treatment, and complications.",
      ),
    ],
  },
  {
    slug: "type-1-diabetes",
    title: "Type 1 Diabetes",
    group: "Metabolic and hormonal",
    cardDescription:
      "An autoimmune condition where the pancreas makes little or no insulin.",
    simpleDescription:
      "Type 1 diabetes is different from type 2 diabetes. It is usually caused by autoimmune damage to the cells that make insulin, so insulin replacement is essential and food or fasting changes have to be planned carefully.",
    whyItMatters:
      "Daily treatment decisions affect blood sugar highs, dangerous lows, exercise tolerance, and long-term eye, kidney, and nerve health.",
    focusPoints: [
      "Any major change in meal timing, carbohydrate intake, or exercise should be matched with insulin adjustments.",
      "Glucose monitoring patterns matter as much as single numbers.",
      "Sick-day planning and ketone awareness are essential safety skills.",
    ],
    videos: type1DiabetesVideos,
    resources: [
      externalResource(
        "TypeOneGrit Facebook group",
        "https://www.facebook.com/groups/typeonegrit",
        "Peer support community centered on Dr. Bernstein-style type 1 diabetes management.",
        "Community",
      ),
      externalResource(
        "Dr. Bernstein's Diabetes Solution",
        "https://www.amazon.com/s?k=Dr.%20Bernstein%27s%20Diabetes%20Solution%20Richard%20K.%20Bernstein",
        "Clickable book link for the Bernstein approach to type 1 diabetes management.",
        "Book",
      ),
      internalResource(
        "Fasting safety checklist",
        "/resources/fasting-safety-checklist",
        "Why medication and monitoring safety matter before changing fasting patterns.",
        "Article",
      ),
      internalResource(
        "Sleep and metabolic health",
        "/resources/sleep-and-metabolism",
        "Why sleep timing and recovery still matter in day-to-day glucose control.",
        "Article",
      ),
      internalResource(
        "Recommended websites",
        "/resources/websites",
        "A curated list of trusted educational websites, including ketogenic therapy resources.",
        "Website list",
      ),
      externalResource(
        "Breakthrough T1D Canada",
        "https://breakthrought1d.ca/",
        "Canadian education and advocacy resources for people living with type 1 diabetes.",
      ),
    ],
  },
  {
    slug: "hypertension",
    title: "Hypertension",
    group: "Heart, blood pressure, and kidney",
    cardDescription:
      "Blood pressure that stays high enough over time to strain the arteries, heart, brain, and kidneys.",
    simpleDescription:
      "Hypertension means the pressure in the blood vessels stays higher than it should. Many people feel normal for years, which is why it is often called a silent condition.",
    whyItMatters:
      "Over time, uncontrolled blood pressure can raise the risk of stroke, heart attack, heart failure, kidney disease, and vision problems.",
    focusPoints: [
      "Home blood pressure readings are often more useful than one clinic reading.",
      "Sleep, alcohol, sodium intake, body weight, stress, and movement habits all matter.",
      "Medication needs can change when lifestyle factors improve, so keep your clinician informed.",
    ],
    resources: [
      internalResource(
        "Blood pressure and weight loss",
        "/resources/blood-pressure-and-weight-loss",
        "Practical lifestyle sequence for improving blood pressure alongside metabolic health.",
        "Article",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement strategies that support vascular health and long-term adherence.",
        "Pillar",
      ),
      internalResource(
        "Sleep and metabolic health",
        "/resources/sleep-and-metabolism",
        "Why sleep quality and timing influence blood pressure and recovery.",
        "Article",
      ),
      internalResource(
        "Facebook community",
        "/resources/facebook-groups",
        "Between-visit support and accountability from the clinic community.",
        "Community",
      ),
      externalResource(
        "Hypertension Canada",
        "https://hypertension.ca/guidelines/",
        "Canadian blood pressure education and guideline summaries.",
      ),
    ],
  },
  {
    slug: "high-cholesterol",
    title: "High Cholesterol",
    group: "Heart, blood pressure, and kidney",
    cardDescription:
      "Lipid levels that may raise long-term risk of artery disease, especially when other risk factors are present.",
    simpleDescription:
      "High cholesterol usually means the blood carries more cholesterol-rich particles than the body can clear efficiently. The numbers matter, but the bigger picture also includes blood pressure, smoking, diabetes, family history, inflammation, and overall metabolic health.",
    whyItMatters:
      "When risk stays elevated over time, plaque can build in arteries and increase the chance of heart attack, stroke, and circulation problems.",
    focusPoints: [
      "Review the full risk picture, not only a single cholesterol number.",
      "Food quality, body composition, activity, and insulin resistance can influence lipid patterns.",
      "If you already have vascular disease or strong family history, medication decisions matter more urgently.",
    ],
    resources: [
      internalResource(
        "Therapeutic carbohydrate restriction",
        "/pillars/carb-restriction",
        "A practical framework for improving food quality and lowering glycemic load.",
        "Pillar",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "How regular movement supports triglycerides, insulin sensitivity, and cardiovascular fitness.",
        "Pillar",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "Lectures on metabolic disease, cardiovascular risk, and nutrition science.",
        "Video library",
      ),
      externalResource(
        "Heart and Stroke risk and prevention",
        "https://www.heartandstroke.ca/heart-disease/risk-and-prevention",
        "Plain-language Canadian guidance on cardiovascular risk, prevention, and healthy-living priorities.",
      ),
    ],
  },
  {
    slug: "depression-and-anxiety",
    title: "Depression and Anxiety",
    group: "Mental health and neurology",
    cardDescription:
      "Mood and anxiety symptoms that affect sleep, energy, motivation, concentration, and day-to-day function.",
    simpleDescription:
      "Depression can show up as low mood, numbness, loss of interest, poor energy, or hopelessness. Anxiety can show up as constant worry, tension, panic, poor sleep, and a body that feels stuck in high alert.",
    whyItMatters:
      "These conditions affect relationships, work, appetite, sleep, physical health, and the ability to follow through on any treatment plan.",
    focusPoints: [
      "Sleep quality, loneliness, substance use, medications, trauma, and stress load all shape symptoms.",
      "A care plan can include therapy, social support, movement, nutrition work, and medication when needed.",
      "Suicidal thoughts, self-harm thoughts, or rapid worsening need urgent support.",
    ],
    resources: [
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Practical recovery strategies for stress, sleep, and emotional regulation.",
        "Pillar",
      ),
      internalResource(
        "Stress management videos",
        "/resources/videos/stress",
        "Guided practices for downshifting stress and building recovery habits.",
        "Video library",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Books on compassion, behavioral skills, and mental health self-management.",
        "Book list",
      ),
      externalResource(
        "CAMH mental health information",
        "https://www.camh.ca/en/health-info/mental-illness-and-addiction-index",
        "Canadian patient information on depression, anxiety, and common treatment options.",
      ),
    ],
  },
  {
    slug: "adhd",
    title: "ADHD",
    group: "Mental health and neurology",
    cardDescription:
      "A condition of attention regulation, impulsivity, and executive-function strain, not laziness or lack of effort.",
    simpleDescription:
      "ADHD affects how the brain manages attention, task switching, planning, motivation, and impulse control. Some people mainly struggle with distractibility and disorganization, while others feel restless, impulsive, or both.",
    whyItMatters:
      "It can affect school, work, relationships, sleep, self-esteem, finances, and the ability to carry out health routines consistently.",
    focusPoints: [
      "External structure is often more effective than relying on willpower.",
      "Sleep deprivation, anxiety, depression, and substance use can make symptoms harder to untangle.",
      "Medication can help, but routines, environment design, and realistic planning still matter.",
    ],
    resources: [
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Recovery habits that reduce overwhelm and improve follow-through.",
        "Pillar",
      ),
      internalResource(
        "Sleep and metabolic health",
        "/resources/sleep-and-metabolism",
        "Why sleep quality affects attention, energy, appetite, and executive function.",
        "Article",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Long-form learning resources on behavior change, routines, and brain health.",
        "Book list",
      ),
      externalResource(
        "CADDAC ADHD resources",
        "https://caddac.ca/",
        "Canadian education and support resources for ADHD across the lifespan.",
      ),
    ],
  },
  {
    slug: "cancer",
    title: "Cancer",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "A broad group of diseases where cells grow in ways the body can no longer control normally.",
    simpleDescription:
      "Cancer is not one disease. It is a large family of conditions where cells start growing, invading, or spreading in ways that are no longer well regulated.",
    whyItMatters:
      "Treatment planning is highly individualized, and nutrition, exercise, symptom support, and mental health care often need to be coordinated with oncology teams.",
    focusPoints: [
      "Cancer care decisions should stay anchored to the oncology plan, not internet trends.",
      "Strength, protein intake, symptom control, and mental health support can still make a major difference.",
      "Weight loss is not always the goal during treatment, so context matters.",
    ],
    resources: [
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "A movement framework that can help preserve strength, function, and confidence.",
        "Pillar",
      ),
      internalResource(
        "Protein targets for weight loss",
        "/resources/protein-for-weight-loss",
        "Useful background on protein and lean-mass protection, especially when intake is low.",
        "Article",
      ),
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Tools for sleep, recovery, and emotional regulation during medically stressful periods.",
        "Pillar",
      ),
      externalResource(
        "Canadian Cancer Society",
        "https://cancer.ca/en/",
        "Cancer information, support services, and patient education for Canada.",
      ),
    ],
  },
  {
    slug: "heart-disease",
    title: "Heart Disease",
    group: "Heart, blood pressure, and kidney",
    cardDescription:
      "A group of heart and blood-vessel problems influenced by blood pressure, cholesterol, diabetes, sleep, and activity.",
    simpleDescription:
      "Heart disease includes problems such as blocked heart arteries, heart failure, rhythm issues, and damage from long-standing risk factors. It often develops over time rather than all at once.",
    whyItMatters:
      "The heart sits at the center of circulation, so prevention and recovery work best when food quality, activity, sleep, smoking, blood pressure, lipids, and diabetes are addressed together.",
    focusPoints: [
      "Exercise and recovery should match your diagnosis, symptoms, and clinician guidance.",
      "Blood pressure, lipids, glucose, and waist size often move together.",
      "Chest pressure, fainting, or new shortness of breath need timely medical review.",
    ],
    resources: [
      internalResource(
        "Blood pressure and weight loss",
        "/resources/blood-pressure-and-weight-loss",
        "How lifestyle change can improve blood pressure and cardiovascular risk together.",
        "Article",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Practical movement strategies for fitness, function, and long-term adherence.",
        "Pillar",
      ),
      internalResource(
        "Therapeutic carbohydrate restriction",
        "/pillars/carb-restriction",
        "Food-quality and glycemic-load strategies for cardiometabolic health.",
        "Pillar",
      ),
      externalResource(
        "Heart and Stroke",
        "https://www.heartandstroke.ca/heart-disease",
        "Canadian education on heart disease risk, prevention, and recovery.",
      ),
    ],
  },
  {
    slug: "chronic-kidney-disease",
    title: "Chronic Kidney Disease",
    group: "Heart, blood pressure, and kidney",
    cardDescription:
      "Long-term loss of kidney filtering function, often linked with diabetes, hypertension, and vascular disease.",
    simpleDescription:
      "Chronic kidney disease means the kidneys are not filtering blood as well as they should over time. It can develop slowly and may not cause symptoms early on.",
    whyItMatters:
      "Kidney function influences blood pressure, medication safety, fluid balance, bone health, and overall cardiovascular risk.",
    focusPoints: [
      "Blood pressure control, diabetes management, and medication review are central.",
      "Not every nutrition plan is safe at every stage of kidney disease.",
      "Lab trends over time usually matter more than one isolated value.",
    ],
    resources: [
      internalResource(
        "Fasting safety checklist",
        "/resources/fasting-safety-checklist",
        "Important cautions before changing meal timing with kidney disease or medications.",
        "Article",
      ),
      internalResource(
        "Blood pressure and weight loss",
        "/resources/blood-pressure-and-weight-loss",
        "Why blood pressure and metabolic health are tightly linked to kidney outcomes.",
        "Article",
      ),
      internalResource(
        "Sleep and metabolic health",
        "/resources/sleep-and-metabolism",
        "Recovery, blood pressure, and metabolic patterns that can affect kidney risk.",
        "Article",
      ),
      externalResource(
        "NIDDK chronic kidney disease guide",
        "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
        "Patient overview of CKD, testing, and treatment decisions.",
      ),
    ],
  },
  {
    slug: "fatty-liver",
    title: "Fatty Liver",
    group: "Metabolic and hormonal",
    cardDescription:
      "Excess fat stored in the liver, commonly linked with insulin resistance and metabolic dysfunction.",
    simpleDescription:
      "Fatty liver means more fat is building up in the liver than should be there. It is commonly tied to insulin resistance, weight gain around the abdomen, higher triglycerides, and type 2 diabetes risk.",
    whyItMatters:
      "In some people it stays quiet, but in others it can progress to liver inflammation, scarring, and higher cardiovascular risk.",
    focusPoints: [
      "Waist size, triglycerides, glucose, and liver enzymes often move together.",
      "Alcohol intake, medications, and sleep apnea can all matter.",
      "Small, sustained changes in food quality and weight can meaningfully improve liver fat.",
    ],
    resources: [
      internalResource(
        "Insulin resistance: clinical basics",
        "/resources/insulin-resistance-basics",
        "Useful background because fatty liver often travels with insulin resistance.",
        "Article",
      ),
      internalResource(
        "Therapeutic carbohydrate restriction",
        "/pillars/carb-restriction",
        "A practical starting point for lowering glycemic load and improving food quality.",
        "Pillar",
      ),
      internalResource(
        "Fasting",
        "/pillars/fasting",
        "Structured meal timing as one tool that may help when used safely and gradually.",
        "Pillar",
      ),
      externalResource(
        "NIDDK fatty liver overview",
        "https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash",
        "Plain-language guide to fatty liver, inflammation, and treatment priorities.",
      ),
    ],
  },
  {
    slug: "pcos-and-infertility",
    title: "PCOS and Infertility",
    group: "Metabolic and hormonal",
    cardDescription:
      "Hormone and ovulation problems that often intersect with insulin resistance, weight, and inflammation.",
    simpleDescription:
      "PCOS can affect periods, ovulation, acne, hair growth, and insulin sensitivity. For some people it also becomes part of the infertility picture because ovulation is less predictable or less frequent.",
    whyItMatters:
      "Treatment often works best when hormone symptoms, metabolic health, fertility goals, and mental health are addressed together rather than in separate silos.",
    focusPoints: [
      "Cycle history, insulin resistance, weight trends, and sleep all matter.",
      "Fertility goals change how aggressive or time-sensitive the plan needs to be.",
      "Even modest improvements in metabolic health can improve ovulation patterns in some people.",
    ],
    resources: [
      internalResource(
        "Insulin resistance: clinical basics",
        "/resources/insulin-resistance-basics",
        "A helpful primer because insulin resistance is common in PCOS.",
        "Article",
      ),
      internalResource(
        "Weight loss medications",
        "/pillars/weight-loss-drugs",
        "Overview of medication options that may be relevant in selected cases.",
        "Pillar",
      ),
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Support for sleep, stress load, and the emotional toll of fertility workups.",
        "Pillar",
      ),
      externalResource(
        "NICHD PCOS overview",
        "https://www.womenshealth.gov/a-z-topics/polycystic-ovary-syndrome",
        "Simple explanation of PCOS symptoms, diagnosis, and treatment considerations.",
      ),
    ],
  },
  {
    slug: "gerd",
    title: "GERD",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Acid reflux that keeps coming back often enough to irritate the esophagus or disrupt daily life.",
    simpleDescription:
      "GERD happens when stomach contents move backward into the esophagus often enough to cause burning, sour taste, cough, chest discomfort, or throat irritation. Some people notice symptoms mostly after meals or when lying down.",
    whyItMatters:
      "Persistent reflux can disrupt sleep, eating, and quality of life, and in some cases it can injure the lining of the esophagus over time.",
    focusPoints: [
      "Meal size, late eating, alcohol, body weight, and specific trigger foods can all matter.",
      "Chest pain should not be assumed to be reflux without appropriate medical assessment.",
      "Trouble swallowing, vomiting blood, or unintended weight loss need prompt review.",
    ],
    resources: [
      internalResource(
        "Protein targets for weight loss",
        "/resources/protein-for-weight-loss",
        "Helpful when weight reduction is part of the reflux-management plan.",
        "Article",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement support that can help body composition and overall digestive health.",
        "Pillar",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Longer-form education on lifestyle patterns that influence appetite and weight.",
        "Book list",
      ),
      externalResource(
        "NIDDK GERD overview",
        "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults",
        "Plain-language guide to acid reflux symptoms, testing, and treatment options.",
      ),
    ],
  },
  {
    slug: "gout",
    title: "Gout",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Sudden joint inflammation caused by uric acid crystal buildup, often in the feet or ankles.",
    simpleDescription:
      "Gout is a form of inflammatory arthritis caused by uric acid crystals collecting in a joint. Flares often come on suddenly and can be very painful, red, warm, and swollen.",
    whyItMatters:
      "Uric acid levels are influenced by kidney handling, hydration, alcohol, diet, insulin resistance, and some medications, so prevention is often broader than one food list.",
    focusPoints: [
      "Weight loss should be gradual rather than extreme.",
      "Alcohol, dehydration, kidney disease, and certain blood pressure medicines can worsen risk.",
      "Repeated flares or kidney stones are a reason to review long-term prevention.",
    ],
    resources: [
      internalResource(
        "Insulin resistance: clinical basics",
        "/resources/insulin-resistance-basics",
        "Useful background because gout often travels with metabolic dysfunction.",
        "Article",
      ),
      internalResource(
        "Protein targets for weight loss",
        "/resources/protein-for-weight-loss",
        "Helpful when body composition and satiety are part of the long-term plan.",
        "Article",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "Broader talks on metabolic disease, weight, and insulin resistance.",
        "Video library",
      ),
      externalResource(
        "Arthritis Society Canada",
        "https://arthritis.ca/about-arthritis/arthritis-types-(a-z)/types/gout",
        "Canadian patient education on gout symptoms, causes, and treatment.",
      ),
    ],
  },
  {
    slug: "psoriasis",
    title: "Psoriasis",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "A chronic inflammatory skin condition that can flare alongside stress, obesity, and broader metabolic strain.",
    simpleDescription:
      "Psoriasis is an inflammatory skin condition that can cause thick, scaly, itchy, or painful patches. It is driven by immune activity, but flare severity can also be influenced by stress, sleep, smoking, alcohol, body weight, and overall metabolic health.",
    whyItMatters:
      "It is more than a skin issue. Psoriasis can affect quality of life, mood, joint health, and may travel with obesity, insulin resistance, fatty liver, and cardiovascular risk.",
    focusPoints: [
      "Skin symptoms deserve treatment even when they are not dangerous, because they can affect sleep, mood, comfort, and confidence.",
      "Joint pain, swelling, or morning stiffness may signal psoriatic arthritis and should not be ignored.",
      "Stress, alcohol, smoking, sleep disruption, and body-weight changes can all influence flare burden in some people.",
    ],
    resources: [
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Recovery habits that may help reduce flare-triggering stress load and sleep disruption.",
        "Pillar",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement strategies to support joint function, body composition, and long-term resilience.",
        "Pillar",
      ),
      internalResource(
        "Obesity",
        "/resources/conditions/obesity",
        "Why upstream obesity and insulin resistance may matter for inflammation and cardiometabolic risk.",
        "Article",
      ),
      externalResource(
        "National Psoriasis Foundation",
        "https://www.psoriasis.org/about-psoriasis/",
        "Patient-friendly overview of psoriasis symptoms, triggers, and treatment options.",
      ),
    ],
  },
  {
    slug: "obstructive-sleep-apnea",
    title: "Obstructive Sleep Apnea",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Repeated airway blockage during sleep that fragments rest and lowers oxygen.",
    simpleDescription:
      "Obstructive sleep apnea happens when the airway narrows or closes again and again during sleep. People may snore loudly, wake up tired, or notice headaches, poor concentration, and daytime sleepiness.",
    whyItMatters:
      "Poor sleep quality can worsen blood pressure, appetite, glucose control, mood, energy, and cardiovascular risk.",
    focusPoints: [
      "Sleep apnea is common in people with hypertension, obesity, and insulin resistance.",
      "Treatment may include CPAP, oral devices, body-position changes, and weight reduction where relevant.",
      "Driving safety matters if daytime sleepiness is severe.",
    ],
    resources: [
      internalResource(
        "Sleep and metabolic health",
        "/resources/sleep-and-metabolism",
        "Why sleep quality is a metabolic lever, not just a comfort issue.",
        "Article",
      ),
      internalResource(
        "Weight loss medications",
        "/pillars/weight-loss-drugs",
        "Obesity treatment can be relevant when excess body weight is part of sleep-apnea burden.",
        "Pillar",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement and fitness support that can improve energy and recovery.",
        "Pillar",
      ),
      externalResource(
        "NHLBI sleep apnea guide",
        "https://www.nhlbi.nih.gov/health/sleep-apnea",
        "Overview of symptoms, testing, and treatment for sleep apnea.",
      ),
    ],
  },
  {
    slug: "alzheimers-disease",
    title: "Alzheimer's Disease",
    group: "Mental health and neurology",
    cardDescription:
      "A progressive brain disorder that affects memory, thinking, and daily function over time.",
    simpleDescription:
      "Alzheimer's disease is a common cause of dementia. It gradually affects memory, problem-solving, language, orientation, and the ability to manage everyday tasks.",
    whyItMatters:
      "Care usually involves the whole household because medication, safety, driving, routines, mood, and caregiver strain all matter.",
    focusPoints: [
      "Changes are usually gradual, but sudden confusion needs urgent medical assessment.",
      "Sleep, hearing, vision, medications, and depression can all affect how memory symptoms look.",
      "Support for caregivers is an important part of treatment, not an optional extra.",
    ],
    resources: [
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement habits that support function, balance, circulation, and mood.",
        "Pillar",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Includes brain-health reading for people exploring metabolism and cognition.",
        "Book list",
      ),
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Helpful for sleep, routines, and caregiver recovery.",
        "Pillar",
      ),
      externalResource(
        "Alzheimer Society of Canada",
        "https://alzheimer.ca/en/about-dementia",
        "Canadian education on symptoms, diagnosis, and living with Alzheimer's disease.",
      ),
    ],
  },
  {
    slug: "seizure-disorder-epilepsy",
    title: "Seizure Disorder / Epilepsy",
    group: "Mental health and neurology",
    cardDescription:
      "Episodes of abnormal electrical activity in the brain that can cause spells, shaking, blanking out, or other symptoms.",
    simpleDescription:
      "Seizures happen when brain activity becomes abnormal for a short period of time. Epilepsy means there is an ongoing tendency to have seizures, though the exact pattern can look very different from person to person.",
    whyItMatters:
      "Safety, medication timing, sleep, stress, and trigger tracking often matter as much as the diagnosis label itself.",
    focusPoints: [
      "Sleep deprivation is a common trigger for many people.",
      "Do not stop seizure medication suddenly unless a clinician tells you to.",
      "Ketogenic therapy can be helpful in selected situations, but it needs proper supervision.",
    ],
    resources: [
      internalResource(
        "Recommended websites",
        "/resources/websites",
        "Includes the Charlie Foundation for structured ketogenic therapy education.",
        "Website list",
      ),
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Recovery habits that may help reduce trigger load from sleep deprivation and stress.",
        "Pillar",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Longer-form reading on ketosis, brain metabolism, and behavioral support.",
        "Book list",
      ),
      externalResource(
        "Epilepsy Ontario",
        "https://epilepsyontario.org/about-epilepsy/",
        "Canadian patient information on epilepsy, seizure types, and practical support.",
      ),
    ],
  },
  {
    slug: "parkinsons-disease",
    title: "Parkinson's Disease",
    group: "Mental health and neurology",
    cardDescription:
      "A progressive neurologic condition that affects movement, balance, energy, and often mood and sleep.",
    simpleDescription:
      "Parkinson's disease can cause slowness, stiffness, tremor, balance changes, sleep problems, constipation, and mood symptoms. It affects more than movement alone.",
    whyItMatters:
      "Function often depends on combining medication timing with strength, balance work, routines, and support for non-motor symptoms.",
    focusPoints: [
      "Exercise is one of the most important non-drug supports for function.",
      "Mood, sleep, and constipation deserve attention alongside tremor or stiffness.",
      "Falls, swallowing difficulty, or rapid functional decline need closer review.",
    ],
    resources: [
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement and resistance training strategies to support function and confidence.",
        "Pillar",
      ),
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Support for sleep, recovery, and the emotional load of chronic neurologic disease.",
        "Pillar",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "Long-form learning on brain, metabolism, and lifestyle-focused care.",
        "Video library",
      ),
      externalResource(
        "Parkinson Canada",
        "https://www.parkinson.ca/",
        "Canadian support, education, and navigation resources for Parkinson's disease.",
      ),
    ],
  },
  {
    slug: "bipolar-disorder",
    title: "Bipolar Disorder",
    group: "Mental health and neurology",
    cardDescription:
      "A mood disorder with episodes of depression and periods of elevated energy, mood, or activation.",
    simpleDescription:
      "Bipolar disorder involves shifts in mood, energy, sleep, and behavior that go beyond ordinary ups and downs. Some episodes look mostly depressed, while others include racing thoughts, less need for sleep, impulsivity, or unusually high drive.",
    whyItMatters:
      "Sleep disruption, substances, stress, and medication changes can destabilize the condition quickly, so structure and follow-up matter.",
    focusPoints: [
      "Protecting regular sleep is often a core stabilizing habit.",
      "Medication changes should be deliberate and supervised.",
      "If thoughts become unsafe or behavior becomes highly risky, urgent assessment is needed.",
    ],
    resources: [
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Support for sleep protection, recovery routines, and nervous-system downshifting.",
        "Pillar",
      ),
      internalResource(
        "Stress management videos",
        "/resources/videos/stress",
        "Guided practices that can support recovery, especially between appointments.",
        "Video library",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Includes brain-health and mental-health oriented reading options.",
        "Book list",
      ),
      externalResource(
        "NIMH bipolar disorder guide",
        "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
        "Plain-language overview of symptoms, treatment, and support planning.",
      ),
    ],
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Pain that lasts beyond expected healing time and starts affecting mood, sleep, and daily function.",
    simpleDescription:
      "Chronic pain is pain that keeps going or keeps returning after the original injury should have healed. The nervous system, stress response, sleep quality, mood, movement patterns, and past experiences can all influence how pain is felt.",
    whyItMatters:
      "Pain is real even when scans do not explain the whole picture, and treatment usually works best when it combines physical, behavioral, and medical strategies.",
    focusPoints: [
      "Avoid the trap of total rest unless a clinician has told you that rest is necessary.",
      "Sleep, mood, trauma history, and deconditioning can all amplify pain.",
      "Pacing is different from giving up; it is how many people rebuild function safely.",
    ],
    resources: [
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "A sustainable movement framework for rebuilding capacity over time.",
        "Pillar",
      ),
      internalResource(
        "Stress management videos",
        "/resources/videos/stress",
        "Guided practices for tension reduction, sleep support, and nervous-system recovery.",
        "Video library",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Books that support mindset work, resilience, and long-term behavior change.",
        "Book list",
      ),
      externalResource(
        "Pain Canada",
        "https://paincanada.ca/",
        "Canadian patient advocacy and education on living with persistent pain.",
      ),
    ],
  },
  {
    slug: "osteoporosis-bone-health",
    title: "Osteoporosis / Bone Health",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Bone thinning and fracture risk that build over time, especially with aging, hormones, and low muscle mass.",
    simpleDescription:
      "Osteoporosis means bones become more fragile and easier to break. Bone health is shaped by age, hormones, medications, nutrition, activity, and fall risk.",
    whyItMatters:
      "Strength, balance, protein intake, vitamin D, and fracture prevention all matter because one fracture can change independence quickly.",
    focusPoints: [
      "Resistance training and balance work are important when medically appropriate.",
      "Bone density results need to be interpreted in the context of age, fracture history, and medications.",
      "Falls prevention is as important as bone strength itself.",
    ],
    resources: [
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Practical movement ideas for strength, balance, and functional capacity.",
        "Pillar",
      ),
      internalResource(
        "Protein targets for weight loss",
        "/resources/protein-for-weight-loss",
        "A useful background resource for preserving muscle and supporting bone health.",
        "Article",
      ),
      internalResource(
        "Reading recommendations",
        "/resources/books",
        "Long-form education on strength, nutrition, and sustainable habit building.",
        "Book list",
      ),
      externalResource(
        "Osteoporosis Canada",
        "https://osteoporosis.ca/",
        "Canadian patient information on bone density, fracture prevention, and treatment.",
      ),
    ],
  },
  {
    slug: "autoimmune-diseases",
    title: "Autoimmune Diseases",
    group: "Whole-body, sleep, and inflammatory",
    cardDescription:
      "Conditions where the immune system mistakenly attacks the body's own tissues.",
    simpleDescription:
      "Autoimmune diseases are a broad family of conditions where the immune system becomes misdirected and starts attacking part of the body. Symptoms vary widely depending on which tissues are involved.",
    whyItMatters:
      "Because these conditions are diverse, treatment needs to stay tied to the specific diagnosis, organ systems involved, and medication plan.",
    focusPoints: [
      "Fatigue, pain, stress load, sleep quality, and medication side effects often shape day-to-day symptoms.",
      "Food and lifestyle changes may help some people feel better, but they are not a substitute for diagnosis-specific care.",
      "Flares, infection risk, and immunosuppressive medication safety all need attention.",
    ],
    resources: [
      internalResource(
        "Stress management",
        "/pillars/stress",
        "Useful for recovery, sleep, and reducing the load of chronic illness.",
        "Pillar",
      ),
      internalResource(
        "Exercise",
        "/pillars/exercise",
        "Movement options that can be adapted to energy levels, pain, and function.",
        "Pillar",
      ),
      internalResource(
        "Video recommendations",
        "/resources/videos",
        "General metabolic-health and lifestyle talks for broader context.",
        "Video library",
      ),
      externalResource(
        "Global Autoimmune Institute",
        "https://www.autoimmuneinstitute.org/resources/autoimmune-disease-list/",
        "Broad patient resource listing common autoimmune conditions and support links.",
      ),
    ],
  },
];

const lowTestosteroneListItem: ConditionGuideListItem = {
  slug: "low-testosterone",
  title: "Low Testosterone",
  group: "Metabolic and hormonal",
  cardDescription:
    "Often travels with obesity, sleep disruption, and metabolic dysfunction. Opens the obesity guide.",
  href: "/resources/conditions/obesity",
};

export const conditionGuideListItems: ConditionGuideListItem[] = (() => {
  const items = conditionGuides.map((guide) => ({
    slug: guide.slug,
    title: guide.title,
    group: guide.group,
    cardDescription: guide.cardDescription,
    href: `/resources/conditions/${guide.slug}`,
  }));

  const obesityIndex = items.findIndex((item) => item.slug === "obesity");
  if (obesityIndex >= 0) {
    items.splice(obesityIndex + 1, 0, lowTestosteroneListItem);
  } else {
    items.push(lowTestosteroneListItem);
  }

  return items;
})();

export function getConditionGuide(slug: string) {
  return conditionGuides.find((guide) => guide.slug === slug) ?? null;
}

export function getConditionGuidesByGroup(group: ConditionGuideGroup) {
  return conditionGuides.filter((guide) => guide.group === group);
}
