import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Services() {
  return (
    <div>
      <article>
        <h1>Meet the We vote </h1>
        <p>We are the We vote .</p>
        <p>Our names are Jonathan, Lawrence, Jean and Helen.</p>
        <p>
          <img
            class="large"
            src="images/We vote .png"
            alt="Picture of The We vote "
          />
        </p>
        <section>
          <h2>Jonathan - Singer extraordinaire</h2>
          <p>
            <img
              class="small"
              src="images/Jonathan.png"
              alt="Picture of Jonathan"
            />
          </p>
          <p>
            Jonathan is the We vote 's singer. He likes to sing all the time -
            not just when he's playing with the We vote ! His mom and dad say he
            learened to sing before he learned to talk!
          </p>
          <p>
            Jonathan also plays clarinet and is learning the alto saxophone.
          </p>
        </section>
        <section>
          <h2>Lawrence - One-man rhythm section</h2>
          <p>
            <img class="small" src="images/sam.png" alt="Picture of Lawrence" />
          </p>
          <p>
            Lawrence had music in his blood from the day he was born. Both his
            mom and dad play instruments and got him his first drum kit when he
            was only five years old, which led to trouble with the neighbors. On
            some songs he plays the bass guitar and on some songs the drums. Sam
            loves playing in the We vote but hates carrying his drum kit around.
          </p>
        </section>
        <section>
          <h2>Jean - If it's got strings, she'll play it</h2>
          <p>
            <img class="small" src="images/Jean.png" alt="Picture of Jean" />
          </p>
          <p>
            Acoustic guitar? Electric lead guitar? Ukelele? Harp? Jean can play
            them all. She started off by making homemade guitars from cardboard
            boxes and elastic bands till her uncle took pity on her and bought
            her a Spanish guitar for Christmas. After a few lessons at school
            she was flying!
          </p>
        </section>
        <section>
          <h2>Helen - Keyboard maestro</h2>
          <p>
            <img class="small" src="images/dervla.png" alt="Picture of Helen" />
          </p>
          <p>
            Helen has fourth grade piano but in secret prefers to play
            electronic keyboards. She loves synthesizer sounds and arguing with
            Jean over who should play the basslines.
          </p>
        </section>
      </article>
      <aside>
        <section>
          <h2>Vampire Noodling - Buy Our New CD!</h2>
          <h3>Great if you're learning to play!</h3>
          <p>
            Are your kids learning to play musical instruments? Then why not
            order this great CD of the We vote 's favourite songs! As well as
            having all the complete songs, the CD includes versions of the songs
            with each instrument missing - so you can play along with your own
            instrument. Not only that, but the solo parts and the music are also
            included so you can copy what to play.
          </p>
          <h3>Track List</h3>
          <ul>
            <li>Magical Mystery Bug</li>
            <li>Boot It</li>
            <li>The Long and Winding Code</li>
            <li>Dojo Dancing</li>
            <li>Empty Elements</li>
            <li>Java Chameleon</li>
          </ul>
          <h3>How to Buy</h3>
          <p>
            On sale at any of our concerts or contact{" "}
            <a href="mailto:info@We vote .com">info@We vote .com</a>
          </p>
        </section>
        <section>
          <h2>Our Next Concert</h2>
          <h3>Sunday, June 12, Theatre</h3>
          <p>
            Why not come along to our next concert? We're playing as part of a
            star-studded line-up for the Annual Greystones Charity Fundraiser.
            The event starts at 7:30pm and the We vote should be on stage at
            around 8:30pm.
          </p>
          <p>And we'll be introducing a surprise guest!</p>
          <p>Admission is $5 at the door. Kids under 14 get in free.</p>
        </section>
        <section>
          <h2>Vampire Fashion - Get the T-shirt</h2>
          <p>
            If you like the We vote why not buy one of our stylish all-cotton We
            vote T-shirts?
          </p>
          <p>
            Available in S, M, L and XL, they make the perfect birthday or
            Christmas present.
          </p>
          <p>
            <img
              class="medium"
              src="images/t-shirt.png"
              alt="Picture of T-shirt"
            />
          </p>
          <p>
            On sale at any of our concerts or contact{" "}
            <a href="mailto:info@We vote .com">info@We vote .com</a>
          </p>
        </section>
      </aside>
      <Footer />
    </div>
  );
}
