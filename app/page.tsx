"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function FoodBite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)

    const handleScroll = () => {
      setMenuOpen(false)
      setScrollTop(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader-spinner"></div>
        </div>
      )}

      {/* Header */}
      <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>food bite
        </a>
        <div
          id="menu-bar"
          className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home">home</a>
          <a href="#speciality">speciality</a>
          <a href="#popular">popular</a>
          <a href="#gallery">gallery</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>food made with love</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet
            laudantium animi optio voluptatum.
          </p>
          <a href="#order" className="btn">
            order now
          </a>
        </div>
        <div className="image">
          <Image src="/burger.png" alt="Burger" width={500} height={500} className="floating-burger" />
        </div>
      </section>

      {/* Speciality Section */}
      <section className="speciality" id="speciality">
        <h1 className="heading">
          our <span>speciality</span>
        </h1>
        <div className="box-container">
          {[
            {
              img: "/tastyburger.jpg",
              title: "tasty burger",
              desc: "A modern fast food neighborhood burger restaurant, Tasty Burger quickly became known as the city's favorite spot.",
            },
            {
              img: "/pizza.jpg",
              title: "tasty pizza",
              desc: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough.",
            },
            {
              img: "/icecream2.jpg",
              title: "cold ice-cream",
              desc: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream.",
            },
            {
              img: "/colddrink1.jpg",
              title: "cold drinks",
              desc: "Types of soft drinks include lemon-lime drinks, orange soda, cola, grape soda, ginger ale, and root beer.",
            },
            {
              img: "/tasty2.jpg",
              title: "tasty sweets",
              desc: "We are the regular customers to the sweetmagic and believe me the sweets are of high quality and tasty.",
            },
            {
              img: "/tea.jpg",
              title: "healthy breakfast",
              desc: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves.",
            },
          ].map((item, i) => (
            <div className="box" key={i}>
              <Image
                className="image-overlay"
                src={item.img || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
              />
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="popular" id="popular">
        <h1 className="heading">
          most <span>popular</span> foods
        </h1>
        <div className="box-container">
          {[
            { img: "/burger2.jpg", title: "tasty burger" },
            { img: "/tastycake.jpg", title: "tasty cakes" },
            { img: "/tastysweets.jpg", title: "tasty sweets" },
            { img: "/cupcake1.jpg", title: "tasty cupcakes" },
            { img: "/colddcrinks.jpg", title: "cold drinks" },
            { img: "/colddicecream.jpg", title: "cold ice-cream" },
          ].map((item, i) => (
            <div className="box" key={i}>
              <span className="price">$5 - $20</span>
              <Image src={item.img || "/placeholder.svg"} alt={item.title} width={400} height={250} />
              <h3>{item.title}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <a href="#order" className="btn">
                order now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <div className="step-container">
        <h1 className="heading">
          how it <span>works</span>
        </h1>
        <section className="steps">
          {[
            { img: "/cartoonfood image.jpg", title: "choose your favorite food" },
            { img: "/cartoonfooddeliver.jpg", title: "free and fast delivery" },
            { img: "/payment.jpg", title: "easy payments methods" },
            { img: "/enjoyfood.jpg", title: "and finally, enjoy your food" },
          ].map((item, i) => (
            <div className="box" key={i}>
              <Image
                src={item.img || "/placeholder.svg"}
                alt={item.title}
                width={200}
                height={200}
                className="step-img"
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </section>
      </div>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <h1 className="heading">
          our food <span>gallery</span>
        </h1>
        <div className="box-container">
          {[
            "/chikenbri.jpg",
            "/grill.jpg",
            "/chikenfried.jpg",
            "/jollrice.jpg",
            "/vegburger.jpg",
            "/rice.jpg",
            "/vegnoodles.jpg",
            "/paps.jpg",
            "/familyeat.jpg",
          ].map((img, i) => (
            <div className="box" key={i}>
              <Image src={img || "/placeholder.svg"} alt="tasty food" width={400} height={250} />
              <div className="content">
                <h3>tasty food</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
                <a href="#order" className="btn">
                  order now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="review" id="review">
        <h1 className="heading">
          our customers <span>reviews</span>
        </h1>
        <div className="box-container">
          {[
            { img: "/pugaz.jpg", name: "PUGALZ" },
            { img: "/megaali.jpg", name: "MANI MEGALAI" },
            { img: "/mutu.jpg", name: "G.P.MUTHU" },
          ].map((item, i) => (
            <div className="box" key={i}>
              <Image src={item.img || "/placeholder.svg"} alt={item.name} width={120} height={120} />
              <h3>{item.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod ratione
                vel laboriosam?
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Section */}
      <section className="order" id="order">
        <h1 className="heading">
          <span>order</span> now
        </h1>
        <div className="row">
          <div className="image">
            <Image src="/chief1.jpg" alt="Chef" width={400} height={500} />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="food name" />
            </div>
            <textarea placeholder="address" cols={30} rows={10}></textarea>
            <input type="submit" value="order now" className="btn" />
          </form>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <div className="share">
          <a href="#" className="btn">
            facebook
          </a>
          <a href="#" className="btn">
            twitter
          </a>
          <a href="#" className="btn">
            instagram
          </a>
          <a href="#" className="btn">
            pinterest
          </a>
          <a href="#" className="btn">
            linkedin
          </a>
        </div>
        <h1 className="credit">
          created by <span>Anbuselvan Rajavel</span> | all rights reserved!
        </h1>
      </section>

      {/* Scroll Top Button */}
      <a href="#home" className={`scroll-top fas fa-angle-up ${scrollTop ? "active" : ""}`}></a>
    </>
  )
}
