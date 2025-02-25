import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Partners",
      src: "https://lotlitetechnology.com/static/images/partners/partner1.png",
    },
    {
      title: "Partners",
      src: "https://lotlitetechnology.com/static/images/partners/partner2.png",
    },
    {
      title: "Partners",
      src: "https://lotlitetechnology.com/static/images/partners/partner3.png",
    },
    {
      title: "Partners",
      src: "https://lotlitetechnology.com/static/images/partners/partner4.png",
    },
    {
      title: "Partners",
      src: "https://lotlitetechnology.com/static/images/partners/partner5.png",
    }
  ];

  return <FocusCards cards={cards} />;
}
