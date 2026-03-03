import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "@/components/content/markdown-article";
import { CtaStrip } from "@/components/ui/cta-strip";
import { PillarImageCarousel } from "@/components/ui/pillar-image-carousel";
import { WeightLossMedicationPanels } from "@/components/ui/weight-loss-medication-panels";
import { YouTubeVideoCarousel } from "@/components/ui/youtube-video-carousel";
import { getCollectionEntry, getCollectionSlugs } from "@/lib/content";
import { stressVideoRecommendations } from "@/lib/stress-video-recommendations";

type PillarPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const tcrSlides = [
  {
    imageSrc: "/tcr-slides/low-carb-breakfast.jpg",
    imageAlt: "Low-carbohydrate breakfast with eggs, bacon, and steak",
  },
  {
    imageSrc: "/tcr-slides/avocado-chicken-salad.jpg",
    imageAlt: "Avocado chicken salad bowl with low-carbohydrate ingredients",
  },
  {
    imageSrc: "/tcr-slides/keto-spaghetti-squash-meatballs.jpg",
    imageAlt: "Spaghetti squash with meatballs as a low-carbohydrate meal option",
  },
  {
    imageSrc: "/tcr-slides/meal-avocado-pecan-salad.jpg",
    imageAlt: "Avocado pecan salad plate with non-starchy vegetables",
  },
  {
    imageSrc: "/tcr-slides/meal-steak-roasted-veg.jpg",
    imageAlt: "Steak with roasted vegetables on a low-carbohydrate plate",
  },
  {
    imageSrc: "/tcr-slides/meal-steak-veggies-algorithm.jpg",
    imageAlt: "Low-carbohydrate steak and vegetables plate",
  },
  {
    imageSrc: "/tcr-slides/low-carb-meal-plan-board.avif",
    imageAlt: "Low-carbohydrate charcuterie-style meal board with nuts, cheese, olives, and vegetables",
  },
  {
    imageSrc: "/tcr-slides/low-carb-fried-wings.jpg",
    imageAlt: "Bowl of low-carbohydrate fried chicken wings garnished with scallions",
  },
];

const exerciseSlides = [
  {
    imageSrc: "/exercise-slides/jogging-couple.jpg",
    imageAlt: "Adult couple jogging outdoors on a city trail",
  },
  {
    imageSrc: "/exercise-slides/home-yoga-workout.jpg",
    imageAlt: "At-home yoga workout in a living room setting",
  },
  {
    imageSrc: "/exercise-slides/senior-fitness-class.jpg",
    imageAlt: "Older adults participating in a guided group fitness class",
  },
  {
    imageSrc: "/exercise-slides/treadmill-gym-workout.jpg",
    imageAlt: "Gym treadmill workout during a cardio training session",
  },
  {
    imageSrc: "/exercise-slides/kids-cycling-coach.jpg",
    imageAlt: "Children cycling with a coach in a public park",
  },
];

export async function generateStaticParams() {
  const slugs = await getCollectionSlugs("pillars");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pillar = await getCollectionEntry("pillars", slug);

  if (!pillar) {
    return {
      title: "Pillar not found",
    };
  }

  return {
    title: pillar.title,
    description: pillar.description,
  };
}

export default async function PillarDetailPage({ params }: PillarPageProps) {
  const { slug } = await params;
  const pillar = await getCollectionEntry("pillars", slug);

  if (!pillar) {
    notFound();
  }

  return (
    <main>
      <MarkdownArticle
        title={pillar.title}
        description={pillar.description}
        bodyHtml={pillar.bodyHtml}
        references={pillar.references}
        eyebrow="Pillar"
        leadMedia={
          slug === "carb-restriction" ? (
            <PillarImageCarousel
              slides={tcrSlides}
              ariaLabel="Therapeutic carbohydrate restriction image carousel"
            />
          ) : slug === "weight-loss-drugs" ? (
            <WeightLossMedicationPanels />
          ) : slug === "stress" ? (
            <YouTubeVideoCarousel
              videos={stressVideoRecommendations}
              kicker="Guided stress practice"
              title="Stress management"
              viewAllHref="/resources/videos#stress-management-videos"
              viewAllLabel="View stress video list"
              featuredLabel="Featured stress management video"
              containerClassName="w-full"
            />
          ) : slug === "exercise" ? (
            <PillarImageCarousel
              slides={exerciseSlides}
              ariaLabel="Exercise image carousel"
            />
          ) : undefined
        }
      />

      <section className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <CtaStrip
          title="Make this pillar practical"
          description="Review this pillar with your clinician and convert it into a weekly plan that fits your context."
          primaryLabel="Book In-Person Consult"
          primaryHref="/book"
          secondaryLabel="Back to start"
          secondaryHref="/start"
        />
      </section>
    </main>
  );
}
