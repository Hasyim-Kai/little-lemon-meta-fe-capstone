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
    <main className="">
      {/* HERO */}
      <section className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='relative w-1/2 aspect-square'>
          <img className='w-full' src={hero} alt="Picture of Art" />
        </div>
        <div className=' w-1/2 p-5'>
          <h1 className='mb-7 mt-0 text-7xl font-medium'>Little Lemon<br /> Special Gourmet</h1>
          <p className='mb-4 mt-0 text-4xl'><i>Enjoy the rich flavors<br /> of our seasonal ingredients</i></p>
          <a className="text-2xl border-b-2 border-black" href="#reservation">Make A Reservation</a>
        </div>
      </section>

      {/* INTRO */}
      <section className='relative my-44'>
        <img className='w-full lg:w-1/2 mx-auto' src={wine1} alt="Picture of Art" />
        <div className='absolute bottom-0 left-5 lg:left-1/3'>
          <h1 className='text-white text-7xl lg:text-8xl'>One-Stop <br />Imagination<br />For <br /><u>Dream Cathcer</u></h1>
        </div>
      </section>

      {/* Middle */}
      <section className='flex flex-col items-center gap-44 mt-96 relative'>
        <img className='w-full lg:w-1/2 mx-auto' src={wine2} alt="Picture of Art" />
        <div className='absolute lg:left-12'>
          <h1 className='text-7xl lg:text-8xl text-white lg:text-black'>Masterpieces <br />of<br />The <br />Moment</h1>
        </div>
      </section>

      {/* Projects */}
      <h1 className='text-5xl lg:text-8xl pt-96 mb-12' id='projects'>Our Menus</h1>
      <section className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative'>
        {menus.map((menu, index) => <div key={index}>
          <img className='w-full aspect-square' src={menu.image} alt="Picture of Art" />
          <div className='text-center mt-3'>
            <h1 className='text-2xl'>{menu.name}</h1>
            <p><i>Lorem ipsum</i></p>
          </div>
        </div>)}
      </section>

      {/* Contact */}
      <section className='py-44' id='reservation'>
        <h1 className='text-3xl lg:text-5xl text-center mb-10'>Make a Reservation</h1>
        <form className='flex flex-col gap-5 w-11/12 lg:w-2/3 mx-auto' onSubmit={model.handleSubmit(model.onSubmit)}>
          <input  {...model.register("name", { required: `Name is required` })}
            className='bg-transparent border-b-2 border-gray-700' type="text" placeholder='Enter Your Name' />
          <span className="text-red-500"><i>{model.errors.name?.message}</i></span>

          <input  {...model.register("email", { required: `Email is required` })}
            className='bg-transparent border-b-2 border-gray-700' type="email" placeholder='Enter Your Email' />
          <span className="text-red-500"><i>{model.errors.email?.message}</i></span>

          <input  {...model.register("datetime", { required: `Date & Time is required` })}
            className='bg-transparent border-b-2 border-gray-700' type="datetime-local" placeholder='Enter Date & Time' />
          <span className="text-red-500"><i>{model.errors.datetime?.message}</i></span>

          <select  {...model.register("table", { required: `Table is required` })}
            className='bg-transparent border-b-2 border-gray-700' placeholder="Enter Your Table">
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
            <option value="table4">Table 4</option>
            <option value="table5">Table 5</option>
            <option value="table6">Table 6</option>
            <option value="table7">Table 7</option>
          </select>
          <span className="text-red-500"><i>{model.errors.table?.message}</i></span>

          <button className='w-fit px-3 py-1.5 border-2 border-black' type='submit'>Send</button>
        </form>
      </section>

      {/* ABOUT */}
      <section className='flex flex-col lg:flex-row items-center gap-5 bg-black text-white'>
        <img className='w-1/2 aspect-square' src={art2} alt="Picture of Art" />
        <div className=''>
          <h1 className=''>Built by me</h1>
          <a className="text-2xl" href="https://www.linkedin.com/in/muhammad-hasyim-chaidir-ali-7ba63a151/" target="_blank" rel="noopener noreferrer">Reach me out on Linkedin</a>
        </div>
      </section>
    </main>
    <Toaster />
  </>
}
