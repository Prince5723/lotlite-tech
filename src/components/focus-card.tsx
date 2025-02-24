import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://lotlitetechnology.com/static/images/partners/partner1.png",
    },
    {
      title: "Valley of life",
      src: "https://lotlitetechnology.com/static/images/partners/partner2.png",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://lotlitetechnology.com/static/images/partners/partner3.png",
    },
    {
      title: "Camping is for pros",
      src: "https://lotlitetechnology.com/static/images/partners/partner4.png",
    },
    {
      title: "The road not taken",
      src: "https://lotlitetechnology.com/static/images/partners/partner5.png",
    }
  ];

  return <FocusCards cards={cards} />;
}
