<script lang="ts">
  import ScrollToTop from "../../components/Custom/ScrollToTop.svelte";

  const dateOfBirth = new Date(
    new Date(new Date().setFullYear(1997)).setMonth(9)
  ).setDate(17);
  const age = Math.floor(
    (new Date().getTime() - new Date(dateOfBirth).getTime()) /
      (365 * 24 * 60 * 60 * 1000)
  );
</script>

<ScrollToTop />

<section aria-labelledby="about-title">
  <h2 id="about-title">About</h2>

  <div id="content-container">
    <div>
      <h3 id="welcome"><a href="#welcome"># Welcome</a></h3>
      <p>
        Hello, nice to meet you! I'm Panos, I'm a web developer and designer,
        currently living in Crete Greece. I'm {age ?? 25} years old, I have a 2 year
        old cat named Hercules and a 7 year old white lion bunny named Fiona.
      </p>
    </div>
    <div>
      <h3 id="the-journey"><a href="#the-journey"># The journey</a></h3>
      <p>
        I started learning Python when I was 16 years old while persuing a
        carreer in tech. In university I picked up eth1cal h4cking, trying to
        solve puzzles of Hack The Box. But what got me really into code, was the
        very first version of my chatbot Shiro. <br /> <br />
        After Shiro, I started learning HTML and CSS and kept adding new technologies
        to my stack. A few freelance projects I managed to get, pushed me to learn
        how the back-end works, databases, authorization techniques and how to deploy
        my services efficiently. <br /> <br />
        Right now, I'm a confident developer that will not back away from a challenge!
      </p>
    </div>
    <div>
      <h3 id="toolbox"><a href="#toolbox"># Toolbox</a></h3>
      <p>
        My main tech stack usually consists of SvelteKit & tailwind for the
        front-end, and fastify.js with MongoDB for the back-end. <br /><br />
        For static pages I use
        <a href="https://render.com/" target="_blank">render.com</a>, and for
        cloud servers I use <a href="https://www.hetzner.com/">hetzner</a>.
        <br /><br />
        Alternatives to the technologies mentioned above are React for SPAs, Go with
        GIN for the backend or Sveltekits's endpoints, and sqlite instead of MongoDB
        for small datasets.
      </p>
    </div>
    <div>
      <h3 id="learning"><a href="learning"># Learning</a></h3>
      <p>
        Currently I'm learning Next.js to supercharge my React development,
        <br />
        Flutter, to gain the 🎉fullstack status🎉, and I'm trying to get better at
        designing on Figma for more stunning results 😊
      </p>
    </div>
  </div>
  <p style="font-size: 14px;">
    ❗All of that was written by me without AI assistance❗
  </p>
</section>

<style>
  section {
    width: var(--section-width-desktop);
    margin: 2rem auto;
  }

  h2 {
    margin: 1rem 0 2rem 0;
  }

  h3 {
    letter-spacing: 1px;
  }

  a {
    text-decoration: underline;
    display: inline;
  }

  p {
    margin: 1rem 0;
    text-wrap: balance;
    max-width: 55ch;
  }

  h3 > a {
    text-decoration: none;
  }

  #content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
