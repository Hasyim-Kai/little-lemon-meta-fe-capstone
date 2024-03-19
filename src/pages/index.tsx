import art2 from "@assets/img/art (2).jpg";
import hero from "@assets/img/hero1.jpg";
import menu1 from "@assets/img/menu1.jpg";
import menu2 from "@assets/img/menu2.jpg";
import menu3 from "@assets/img/menu3.jpg";
import menu4 from "@assets/img/menu4.jpg";
import wine1 from "@assets/img/wine1.jpg";
import wine2 from "@assets/img/wine2.jpeg";
import { Toaster } from "@components/shadcn/ui/sonner";
import IndexVm from "./_index-vm";

export default function LandingPage() {
  const model = IndexVm()
  const menus = [
    { name: `Bolognese Sea Urchin`, image: menu1 },
    { name: `Dragon Tail Noodles`, image: menu2 },
    { name: `Miso Soup`, image: menu3 },
    { name: `Crispy Calamari`, image: menu4 },
  ]

  return <>

    <Toaster />
  </>
}
